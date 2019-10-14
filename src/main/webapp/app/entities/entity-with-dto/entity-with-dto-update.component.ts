import { Component, Vue, Inject } from 'vue-property-decorator';

import { numeric, required, minLength, maxLength } from 'vuelidate/lib/validators';

import AlertService from '@/shared/alert/alert.service';
import { IEntityWithDTO, EntityWithDTO } from '@/shared/model/entity-with-dto.model';
import EntityWithDTOService from './entity-with-dto.service';

const validations: any = {
  entityWithDTO: {
    emma: {}
  }
};

@Component({
  validations
})
export default class EntityWithDTOUpdate extends Vue {
  @Inject('alertService') private alertService: () => AlertService;
  @Inject('entityWithDTOService') private entityWithDTOService: () => EntityWithDTOService;
  public entityWithDTO: IEntityWithDTO = new EntityWithDTO();
  public isSaving = false;

  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (to.params.entityWithDTOId) {
        vm.retrieveEntityWithDTO(to.params.entityWithDTOId);
      }
    });
  }

  public save(): void {
    this.isSaving = true;
    if (this.entityWithDTO.id) {
      this.entityWithDTOService()
        .update(this.entityWithDTO)
        .then(param => {
          this.isSaving = false;
          this.$router.go(-1);
          const message = this.$t('jhipsterApp.entityWithDTO.updated', { param: param.id });
          this.alertService().showAlert(message, 'info');
        });
    } else {
      this.entityWithDTOService()
        .create(this.entityWithDTO)
        .then(param => {
          this.isSaving = false;
          this.$router.go(-1);
          const message = this.$t('jhipsterApp.entityWithDTO.created', { param: param.id });
          this.alertService().showAlert(message, 'success');
        });
    }
  }

  public retrieveEntityWithDTO(entityWithDTOId): void {
    this.entityWithDTOService()
      .find(entityWithDTOId)
      .then(res => {
        this.entityWithDTO = res;
      });
  }

  public previousState(): void {
    this.$router.go(-1);
  }

  public initRelationships(): void {}
}
