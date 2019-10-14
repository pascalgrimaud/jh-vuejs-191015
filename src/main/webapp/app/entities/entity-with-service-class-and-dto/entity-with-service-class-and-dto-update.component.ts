import { Component, Vue, Inject } from 'vue-property-decorator';

import { numeric, required, minLength, maxLength } from 'vuelidate/lib/validators';

import AlertService from '@/shared/alert/alert.service';
import { IEntityWithServiceClassAndDTO, EntityWithServiceClassAndDTO } from '@/shared/model/entity-with-service-class-and-dto.model';
import EntityWithServiceClassAndDTOService from './entity-with-service-class-and-dto.service';

const validations: any = {
  entityWithServiceClassAndDTO: {
    lucas: {}
  }
};

@Component({
  validations
})
export default class EntityWithServiceClassAndDTOUpdate extends Vue {
  @Inject('alertService') private alertService: () => AlertService;
  @Inject('entityWithServiceClassAndDTOService') private entityWithServiceClassAndDTOService: () => EntityWithServiceClassAndDTOService;
  public entityWithServiceClassAndDTO: IEntityWithServiceClassAndDTO = new EntityWithServiceClassAndDTO();
  public isSaving = false;

  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (to.params.entityWithServiceClassAndDTOId) {
        vm.retrieveEntityWithServiceClassAndDTO(to.params.entityWithServiceClassAndDTOId);
      }
    });
  }

  public save(): void {
    this.isSaving = true;
    if (this.entityWithServiceClassAndDTO.id) {
      this.entityWithServiceClassAndDTOService()
        .update(this.entityWithServiceClassAndDTO)
        .then(param => {
          this.isSaving = false;
          this.$router.go(-1);
          const message = this.$t('jhipsterApp.entityWithServiceClassAndDTO.updated', { param: param.id });
          this.alertService().showAlert(message, 'info');
        });
    } else {
      this.entityWithServiceClassAndDTOService()
        .create(this.entityWithServiceClassAndDTO)
        .then(param => {
          this.isSaving = false;
          this.$router.go(-1);
          const message = this.$t('jhipsterApp.entityWithServiceClassAndDTO.created', { param: param.id });
          this.alertService().showAlert(message, 'success');
        });
    }
  }

  public retrieveEntityWithServiceClassAndDTO(entityWithServiceClassAndDTOId): void {
    this.entityWithServiceClassAndDTOService()
      .find(entityWithServiceClassAndDTOId)
      .then(res => {
        this.entityWithServiceClassAndDTO = res;
      });
  }

  public previousState(): void {
    this.$router.go(-1);
  }

  public initRelationships(): void {}
}
