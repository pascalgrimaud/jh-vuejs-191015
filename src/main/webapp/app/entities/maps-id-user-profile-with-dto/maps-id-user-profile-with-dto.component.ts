import { mixins } from 'vue-class-component';

import { Component, Inject } from 'vue-property-decorator';
import Vue2Filters from 'vue2-filters';
import { IMapsIdUserProfileWithDTO } from '@/shared/model/maps-id-user-profile-with-dto.model';
import AlertService from '@/shared/alert/alert.service';

import MapsIdUserProfileWithDTOService from './maps-id-user-profile-with-dto.service';

@Component
export default class MapsIdUserProfileWithDTO extends mixins(Vue2Filters.mixin) {
  @Inject('alertService') private alertService: () => AlertService;
  @Inject('mapsIdUserProfileWithDTOService') private mapsIdUserProfileWithDTOService: () => MapsIdUserProfileWithDTOService;
  private removeId: number = null;
  public mapsIdUserProfileWithDTOS: IMapsIdUserProfileWithDTO[] = [];

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
    this.retrieveAllMapsIdUserProfileWithDTOs();
  }

  public clear(): void {
    this.retrieveAllMapsIdUserProfileWithDTOs();
  }

  public retrieveAllMapsIdUserProfileWithDTOs(): void {
    this.isFetching = true;

    this.mapsIdUserProfileWithDTOService()
      .retrieve()
      .then(
        res => {
          this.mapsIdUserProfileWithDTOS = res.data;
          this.isFetching = false;
        },
        err => {
          this.isFetching = false;
        }
      );
  }

  public prepareRemove(instance: IMapsIdUserProfileWithDTO): void {
    this.removeId = instance.id;
  }

  public removeMapsIdUserProfileWithDTO(): void {
    this.mapsIdUserProfileWithDTOService()
      .delete(this.removeId)
      .then(() => {
        const message = this.$t('jhipsterApp.mapsIdUserProfileWithDTO.deleted', { param: this.removeId });
        this.alertService().showAlert(message, 'danger');
        this.getAlertFromStore();

        this.removeId = null;
        this.retrieveAllMapsIdUserProfileWithDTOs();
        this.closeDialog();
      });
  }

  public closeDialog(): void {
    (<any>this.$refs.removeEntity).hide();
  }
}
