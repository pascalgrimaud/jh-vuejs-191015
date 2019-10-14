import { mixins } from 'vue-class-component';

import { Component, Inject } from 'vue-property-decorator';
import Vue2Filters from 'vue2-filters';
import { IFieldTestEntity } from '@/shared/model/field-test-entity.model';
import AlertService from '@/shared/alert/alert.service';

import JhiDataUtils from '@/shared/data/data-utils.service';

import FieldTestEntityService from './field-test-entity.service';

@Component
export default class FieldTestEntity extends mixins(JhiDataUtils, Vue2Filters.mixin) {
  @Inject('alertService') private alertService: () => AlertService;
  @Inject('fieldTestEntityService') private fieldTestEntityService: () => FieldTestEntityService;
  private removeId: number = null;
  public fieldTestEntities: IFieldTestEntity[] = [];

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
    this.retrieveAllFieldTestEntitys();
  }

  public clear(): void {
    this.retrieveAllFieldTestEntitys();
  }

  public retrieveAllFieldTestEntitys(): void {
    this.isFetching = true;

    this.fieldTestEntityService()
      .retrieve()
      .then(
        res => {
          this.fieldTestEntities = res.data;
          this.isFetching = false;
        },
        err => {
          this.isFetching = false;
        }
      );
  }

  public prepareRemove(instance: IFieldTestEntity): void {
    this.removeId = instance.id;
  }

  public removeFieldTestEntity(): void {
    this.fieldTestEntityService()
      .delete(this.removeId)
      .then(() => {
        const message = this.$t('jhipsterApp.fieldTestEntity.deleted', { param: this.removeId });
        this.alertService().showAlert(message, 'danger');
        this.getAlertFromStore();

        this.removeId = null;
        this.retrieveAllFieldTestEntitys();
        this.closeDialog();
      });
  }

  public closeDialog(): void {
    (<any>this.$refs.removeEntity).hide();
  }
}
