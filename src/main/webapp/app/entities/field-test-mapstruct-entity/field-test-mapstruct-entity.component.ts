import { mixins } from 'vue-class-component';

import { Component, Inject } from 'vue-property-decorator';
import Vue2Filters from 'vue2-filters';
import { IFieldTestMapstructEntity } from '@/shared/model/field-test-mapstruct-entity.model';
import AlertService from '@/shared/alert/alert.service';

import JhiDataUtils from '@/shared/data/data-utils.service';

import FieldTestMapstructEntityService from './field-test-mapstruct-entity.service';

@Component
export default class FieldTestMapstructEntity extends mixins(JhiDataUtils, Vue2Filters.mixin) {
  @Inject('alertService') private alertService: () => AlertService;
  @Inject('fieldTestMapstructEntityService') private fieldTestMapstructEntityService: () => FieldTestMapstructEntityService;
  private removeId: number = null;
  public fieldTestMapstructEntities: IFieldTestMapstructEntity[] = [];

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
    this.retrieveAllFieldTestMapstructEntitys();
  }

  public clear(): void {
    this.retrieveAllFieldTestMapstructEntitys();
  }

  public retrieveAllFieldTestMapstructEntitys(): void {
    this.isFetching = true;

    this.fieldTestMapstructEntityService()
      .retrieve()
      .then(
        res => {
          this.fieldTestMapstructEntities = res.data;
          this.isFetching = false;
        },
        err => {
          this.isFetching = false;
        }
      );
  }

  public prepareRemove(instance: IFieldTestMapstructEntity): void {
    this.removeId = instance.id;
  }

  public removeFieldTestMapstructEntity(): void {
    this.fieldTestMapstructEntityService()
      .delete(this.removeId)
      .then(() => {
        const message = this.$t('jhipsterApp.fieldTestMapstructEntity.deleted', { param: this.removeId });
        this.alertService().showAlert(message, 'danger');
        this.getAlertFromStore();

        this.removeId = null;
        this.retrieveAllFieldTestMapstructEntitys();
        this.closeDialog();
      });
  }

  public closeDialog(): void {
    (<any>this.$refs.removeEntity).hide();
  }
}
