import { mixins } from 'vue-class-component';

import { Component, Inject } from 'vue-property-decorator';
import Vue2Filters from 'vue2-filters';
import { IEntityWithServiceImpl } from '@/shared/model/entity-with-service-impl.model';
import AlertService from '@/shared/alert/alert.service';

import EntityWithServiceImplService from './entity-with-service-impl.service';

@Component
export default class EntityWithServiceImpl extends mixins(Vue2Filters.mixin) {
  @Inject('alertService') private alertService: () => AlertService;
  @Inject('entityWithServiceImplService') private entityWithServiceImplService: () => EntityWithServiceImplService;
  private removeId: number = null;
  public entityWithServiceImpls: IEntityWithServiceImpl[] = [];

  public isFetching = false;
  public dismissCountDown: number = this.$store.getters.dismissCountDown;
  public dismissSecs: number = this.$store.getters.dismissSecs;
  public alertType: string = this.$store.getters.alertType;
  public alertMessage: any = this.$store.getters.alertMessage;

  public getAlertFromStore() {
    this.dismissCountDown = this.$store.getters.dismissCountDown;
    this.dismissSecs = this.$store.getters.dismissSecs;
    this.alertType = this.$store.getters.alertType;
    this.alertMessage = this.$store.getters.alertMessage;
  }

  public countDownChanged(dismissCountDown: number) {
    this.alertService().countDownChanged(dismissCountDown);
    this.getAlertFromStore();
  }

  public mounted(): void {
    this.retrieveAllEntityWithServiceImpls();
  }

  public clear(): void {
    this.retrieveAllEntityWithServiceImpls();
  }

  public retrieveAllEntityWithServiceImpls(): void {
    this.isFetching = true;

    this.entityWithServiceImplService()
      .retrieve()
      .then(
        res => {
          this.entityWithServiceImpls = res.data;
          this.isFetching = false;
        },
        err => {
          this.isFetching = false;
        }
      );
  }

  public prepareRemove(instance: IEntityWithServiceImpl): void {
    this.removeId = instance.id;
  }

  public removeEntityWithServiceImpl(): void {
    this.entityWithServiceImplService()
      .delete(this.removeId)
      .then(() => {
        const message = this.$t('jhipsterApp.entityWithServiceImpl.deleted', { param: this.removeId });
        this.alertService().showAlert(message, 'danger');
        this.getAlertFromStore();

        this.removeId = null;
        this.retrieveAllEntityWithServiceImpls();
        this.closeDialog();
      });
  }

  public closeDialog(): void {
    (<any>this.$refs.removeEntity).hide();
  }
}
