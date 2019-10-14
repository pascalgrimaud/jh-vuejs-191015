import { Component, Vue, Inject } from 'vue-property-decorator';

import { numeric, required, minLength, maxLength } from 'vuelidate/lib/validators';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import { DATE_TIME_LONG_FORMAT, INSTANT_FORMAT, ZONED_DATE_TIME_FORMAT } from '@/shared/date/filters';

import UserService from '@/admin/user-management/user-management.service';

import AlertService from '@/shared/alert/alert.service';
import { IMapsIdUserProfileWithDTO, MapsIdUserProfileWithDTO } from '@/shared/model/maps-id-user-profile-with-dto.model';
import MapsIdUserProfileWithDTOService from './maps-id-user-profile-with-dto.service';

const validations: any = {
  mapsIdUserProfileWithDTO: {
    dateOfBirth: {}
  }
};

@Component({
  validations
})
export default class MapsIdUserProfileWithDTOUpdate extends Vue {
  @Inject('alertService') private alertService: () => AlertService;
  @Inject('mapsIdUserProfileWithDTOService') private mapsIdUserProfileWithDTOService: () => MapsIdUserProfileWithDTOService;
  public mapsIdUserProfileWithDTO: IMapsIdUserProfileWithDTO = new MapsIdUserProfileWithDTO();

  @Inject('userService') private userService: () => UserService;

  public users: Array<any> = [];
  public isSaving = false;

  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (to.params.mapsIdUserProfileWithDTOId) {
        vm.retrieveMapsIdUserProfileWithDTO(to.params.mapsIdUserProfileWithDTOId);
      }
      vm.initRelationships();
    });
  }

  public save(): void {
    this.isSaving = true;
    if (this.mapsIdUserProfileWithDTO.id) {
      this.mapsIdUserProfileWithDTOService()
        .update(this.mapsIdUserProfileWithDTO)
        .then(param => {
          this.isSaving = false;
          this.$router.go(-1);
          const message = this.$t('jhipsterApp.mapsIdUserProfileWithDTO.updated', { param: param.id });
          this.alertService().showAlert(message, 'info');
        });
    } else {
      this.mapsIdUserProfileWithDTOService()
        .create(this.mapsIdUserProfileWithDTO)
        .then(param => {
          this.isSaving = false;
          this.$router.go(-1);
          const message = this.$t('jhipsterApp.mapsIdUserProfileWithDTO.created', { param: param.id });
          this.alertService().showAlert(message, 'success');
        });
    }
  }

  public convertDateTimeFromServer(date: Date): string {
    if (date) {
      return format(date, DATE_TIME_LONG_FORMAT);
    }
    return null;
  }

  public updateInstantField(field, event) {
    if (event.target.value) {
      this.mapsIdUserProfileWithDTO[field] = parse(event.target.value, DATE_TIME_LONG_FORMAT, new Date());
    } else {
      this.mapsIdUserProfileWithDTO[field] = null;
    }
  }

  public updateZonedDateTimeField(field, event) {
    if (event.target.value) {
      this.mapsIdUserProfileWithDTO[field] = parse(event.target.value, DATE_TIME_LONG_FORMAT, new Date());
    } else {
      this.mapsIdUserProfileWithDTO[field] = null;
    }
  }

  public retrieveMapsIdUserProfileWithDTO(mapsIdUserProfileWithDTOId): void {
    this.mapsIdUserProfileWithDTOService()
      .find(mapsIdUserProfileWithDTOId)
      .then(res => {
        this.mapsIdUserProfileWithDTO = res;
      });
  }

  public previousState(): void {
    this.$router.go(-1);
  }

  public initRelationships(): void {
    this.userService()
      .retrieve()
      .then(res => {
        this.users = res.data;
      });
  }
}
