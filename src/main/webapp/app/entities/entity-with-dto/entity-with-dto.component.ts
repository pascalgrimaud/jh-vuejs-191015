import { mixins } from 'vue-class-component';

import { Component, Inject } from 'vue-property-decorator';
import Vue2Filters from 'vue2-filters';
import { IEntityWithDTO } from '@/shared/model/entity-with-dto.model';
import AlertService from '@/shared/alert/alert.service';

import EntityWithDTOService from './entity-with-dto.service';

@Component
export default class EntityWithDTO extends mixins(Vue2Filters.mixin) {
  @Inject('alertService') private alertService: () => AlertService;
  @Inject('entityWithDTOService') private entityWithDTOService: () => EntityWithDTOService;
  private removeId: number = null;
  public entityWithDTOS: IEntityWithDTO[] = [];

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
    this.retrieveAllEntityWithDTOs();
  }

  public clear(): void {
    this.retrieveAllEntityWithDTOs();
  }

  public retrieveAllEntityWithDTOs(): void {
    this.isFetching = true;

    this.entityWithDTOService()
      .retrieve()
      .then(
        res => {
          this.entityWithDTOS = res.data;
          this.isFetching = false;
        },
        err => {
          this.isFetching = false;
        }
      );
  }

  public prepareRemove(instance: IEntityWithDTO): void {
    this.removeId = instance.id;
  }

  public removeEntityWithDTO(): void {
    this.entityWithDTOService()
      .delete(this.removeId)
      .then(() => {
        const message = this.$t('jhipsterApp.entityWithDTO.deleted', { param: this.removeId });
        this.alertService().showAlert(message, 'danger');
        this.getAlertFromStore();

        this.removeId = null;
        this.retrieveAllEntityWithDTOs();
        this.closeDialog();
      });
  }

  public closeDialog(): void {
    (<any>this.$refs.removeEntity).hide();
  }
}
