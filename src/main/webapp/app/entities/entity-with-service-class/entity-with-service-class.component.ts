import { mixins } from 'vue-class-component';

import { Component, Inject } from 'vue-property-decorator';
import Vue2Filters from 'vue2-filters';
import { IEntityWithServiceClass } from '@/shared/model/entity-with-service-class.model';
import AlertService from '@/shared/alert/alert.service';

import EntityWithServiceClassService from './entity-with-service-class.service';

@Component
export default class EntityWithServiceClass extends mixins(Vue2Filters.mixin) {
  @Inject('alertService') private alertService: () => AlertService;
  @Inject('entityWithServiceClassService') private entityWithServiceClassService: () => EntityWithServiceClassService;
  private removeId: number = null;
  public entityWithServiceClasses: IEntityWithServiceClass[] = [];

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
    this.retrieveAllEntityWithServiceClasss();
  }

  public clear(): void {
    this.retrieveAllEntityWithServiceClasss();
  }

  public retrieveAllEntityWithServiceClasss(): void {
    this.isFetching = true;

    this.entityWithServiceClassService()
      .retrieve()
      .then(
        res => {
          this.entityWithServiceClasses = res.data;
          this.isFetching = false;
        },
        err => {
          this.isFetching = false;
        }
      );
  }

  public prepareRemove(instance: IEntityWithServiceClass): void {
    this.removeId = instance.id;
  }

  public removeEntityWithServiceClass(): void {
    this.entityWithServiceClassService()
      .delete(this.removeId)
      .then(() => {
        const message = this.$t('jhipsterApp.entityWithServiceClass.deleted', { param: this.removeId });
        this.alertService().showAlert(message, 'danger');
        this.getAlertFromStore();

        this.removeId = null;
        this.retrieveAllEntityWithServiceClasss();
        this.closeDialog();
      });
  }

  public closeDialog(): void {
    (<any>this.$refs.removeEntity).hide();
  }
}
