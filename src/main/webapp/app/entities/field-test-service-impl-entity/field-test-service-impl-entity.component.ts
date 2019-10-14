import { mixins } from 'vue-class-component';

import { Component, Inject } from 'vue-property-decorator';
import Vue2Filters from 'vue2-filters';
import { IFieldTestServiceImplEntity } from '@/shared/model/field-test-service-impl-entity.model';
import AlertService from '@/shared/alert/alert.service';

import JhiDataUtils from '@/shared/data/data-utils.service';

import FieldTestServiceImplEntityService from './field-test-service-impl-entity.service';

@Component
export default class FieldTestServiceImplEntity extends mixins(JhiDataUtils, Vue2Filters.mixin) {
  @Inject('alertService') private alertService: () => AlertService;
  @Inject('fieldTestServiceImplEntityService') private fieldTestServiceImplEntityService: () => FieldTestServiceImplEntityService;
  private removeId: number = null;
  public fieldTestServiceImplEntities: IFieldTestServiceImplEntity[] = [];

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
    this.retrieveAllFieldTestServiceImplEntitys();
  }

  public clear(): void {
    this.retrieveAllFieldTestServiceImplEntitys();
  }

  public retrieveAllFieldTestServiceImplEntitys(): void {
    this.isFetching = true;

    this.fieldTestServiceImplEntityService()
      .retrieve()
      .then(
        res => {
          this.fieldTestServiceImplEntities = res.data;
          this.isFetching = false;
        },
        err => {
          this.isFetching = false;
        }
      );
  }

  public prepareRemove(instance: IFieldTestServiceImplEntity): void {
    this.removeId = instance.id;
  }

  public removeFieldTestServiceImplEntity(): void {
    this.fieldTestServiceImplEntityService()
      .delete(this.removeId)
      .then(() => {
        const message = this.$t('jhipsterApp.fieldTestServiceImplEntity.deleted', { param: this.removeId });
        this.alertService().showAlert(message, 'danger');
        this.getAlertFromStore();

        this.removeId = null;
        this.retrieveAllFieldTestServiceImplEntitys();
        this.closeDialog();
      });
  }

  public closeDialog(): void {
    (<any>this.$refs.removeEntity).hide();
  }
}
