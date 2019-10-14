import { mixins } from 'vue-class-component';

import { Component, Inject } from 'vue-property-decorator';
import Vue2Filters from 'vue2-filters';
import { IFieldTestServiceClassEntity } from '@/shared/model/field-test-service-class-entity.model';
import AlertService from '@/shared/alert/alert.service';

import JhiDataUtils from '@/shared/data/data-utils.service';

import FieldTestServiceClassEntityService from './field-test-service-class-entity.service';

@Component
export default class FieldTestServiceClassEntity extends mixins(JhiDataUtils, Vue2Filters.mixin) {
  @Inject('alertService') private alertService: () => AlertService;
  @Inject('fieldTestServiceClassEntityService') private fieldTestServiceClassEntityService: () => FieldTestServiceClassEntityService;
  private removeId: number = null;
  public fieldTestServiceClassEntities: IFieldTestServiceClassEntity[] = [];

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
    this.retrieveAllFieldTestServiceClassEntitys();
  }

  public clear(): void {
    this.retrieveAllFieldTestServiceClassEntitys();
  }

  public retrieveAllFieldTestServiceClassEntitys(): void {
    this.isFetching = true;

    this.fieldTestServiceClassEntityService()
      .retrieve()
      .then(
        res => {
          this.fieldTestServiceClassEntities = res.data;
          this.isFetching = false;
        },
        err => {
          this.isFetching = false;
        }
      );
  }

  public prepareRemove(instance: IFieldTestServiceClassEntity): void {
    this.removeId = instance.id;
  }

  public removeFieldTestServiceClassEntity(): void {
    this.fieldTestServiceClassEntityService()
      .delete(this.removeId)
      .then(() => {
        const message = this.$t('jhipsterApp.fieldTestServiceClassEntity.deleted', { param: this.removeId });
        this.alertService().showAlert(message, 'danger');
        this.getAlertFromStore();

        this.removeId = null;
        this.retrieveAllFieldTestServiceClassEntitys();
        this.closeDialog();
      });
  }

  public closeDialog(): void {
    (<any>this.$refs.removeEntity).hide();
  }
}
