import { mixins } from 'vue-class-component';

import { Component, Inject } from 'vue-property-decorator';
import Vue2Filters from 'vue2-filters';
import { IEntityWithServiceImplAndDTO } from '@/shared/model/entity-with-service-impl-and-dto.model';
import AlertService from '@/shared/alert/alert.service';

import EntityWithServiceImplAndDTOService from './entity-with-service-impl-and-dto.service';

@Component
export default class EntityWithServiceImplAndDTO extends mixins(Vue2Filters.mixin) {
  @Inject('alertService') private alertService: () => AlertService;
  @Inject('entityWithServiceImplAndDTOService') private entityWithServiceImplAndDTOService: () => EntityWithServiceImplAndDTOService;
  private removeId: number = null;
  public entityWithServiceImplAndDTOS: IEntityWithServiceImplAndDTO[] = [];

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
    this.retrieveAllEntityWithServiceImplAndDTOs();
  }

  public clear(): void {
    this.retrieveAllEntityWithServiceImplAndDTOs();
  }

  public retrieveAllEntityWithServiceImplAndDTOs(): void {
    this.isFetching = true;

    this.entityWithServiceImplAndDTOService()
      .retrieve()
      .then(
        res => {
          this.entityWithServiceImplAndDTOS = res.data;
          this.isFetching = false;
        },
        err => {
          this.isFetching = false;
        }
      );
  }

  public prepareRemove(instance: IEntityWithServiceImplAndDTO): void {
    this.removeId = instance.id;
  }

  public removeEntityWithServiceImplAndDTO(): void {
    this.entityWithServiceImplAndDTOService()
      .delete(this.removeId)
      .then(() => {
        const message = this.$t('jhipsterApp.entityWithServiceImplAndDTO.deleted', { param: this.removeId });
        this.alertService().showAlert(message, 'danger');
        this.getAlertFromStore();

        this.removeId = null;
        this.retrieveAllEntityWithServiceImplAndDTOs();
        this.closeDialog();
      });
  }

  public closeDialog(): void {
    (<any>this.$refs.removeEntity).hide();
  }
}
