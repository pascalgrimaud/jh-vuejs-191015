import { mixins } from 'vue-class-component';

import { Component, Inject } from 'vue-property-decorator';
import Vue2Filters from 'vue2-filters';
import { IEntityWithServiceClassAndDTO } from '@/shared/model/entity-with-service-class-and-dto.model';
import AlertService from '@/shared/alert/alert.service';

import EntityWithServiceClassAndDTOService from './entity-with-service-class-and-dto.service';

@Component
export default class EntityWithServiceClassAndDTO extends mixins(Vue2Filters.mixin) {
  @Inject('alertService') private alertService: () => AlertService;
  @Inject('entityWithServiceClassAndDTOService') private entityWithServiceClassAndDTOService: () => EntityWithServiceClassAndDTOService;
  private removeId: number = null;
  public entityWithServiceClassAndDTOS: IEntityWithServiceClassAndDTO[] = [];

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
    this.retrieveAllEntityWithServiceClassAndDTOs();
  }

  public clear(): void {
    this.retrieveAllEntityWithServiceClassAndDTOs();
  }

  public retrieveAllEntityWithServiceClassAndDTOs(): void {
    this.isFetching = true;

    this.entityWithServiceClassAndDTOService()
      .retrieve()
      .then(
        res => {
          this.entityWithServiceClassAndDTOS = res.data;
          this.isFetching = false;
        },
        err => {
          this.isFetching = false;
        }
      );
  }

  public prepareRemove(instance: IEntityWithServiceClassAndDTO): void {
    this.removeId = instance.id;
  }

  public removeEntityWithServiceClassAndDTO(): void {
    this.entityWithServiceClassAndDTOService()
      .delete(this.removeId)
      .then(() => {
        const message = this.$t('jhipsterApp.entityWithServiceClassAndDTO.deleted', { param: this.removeId });
        this.alertService().showAlert(message, 'danger');
        this.getAlertFromStore();

        this.removeId = null;
        this.retrieveAllEntityWithServiceClassAndDTOs();
        this.closeDialog();
      });
  }

  public closeDialog(): void {
    (<any>this.$refs.removeEntity).hide();
  }
}
