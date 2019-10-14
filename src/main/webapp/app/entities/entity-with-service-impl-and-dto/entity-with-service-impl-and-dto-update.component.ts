import { Component, Vue, Inject } from 'vue-property-decorator';

import { numeric, required, minLength, maxLength } from 'vuelidate/lib/validators';

import AlertService from '@/shared/alert/alert.service';
import { IEntityWithServiceImplAndDTO, EntityWithServiceImplAndDTO } from '@/shared/model/entity-with-service-impl-and-dto.model';
import EntityWithServiceImplAndDTOService from './entity-with-service-impl-and-dto.service';

const validations: any = {
  entityWithServiceImplAndDTO: {
    louis: {}
  }
};

@Component({
  validations
})
export default class EntityWithServiceImplAndDTOUpdate extends Vue {
  @Inject('alertService') private alertService: () => AlertService;
  @Inject('entityWithServiceImplAndDTOService') private entityWithServiceImplAndDTOService: () => EntityWithServiceImplAndDTOService;
  public entityWithServiceImplAndDTO: IEntityWithServiceImplAndDTO = new EntityWithServiceImplAndDTO();
  public isSaving = false;

  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (to.params.entityWithServiceImplAndDTOId) {
        vm.retrieveEntityWithServiceImplAndDTO(to.params.entityWithServiceImplAndDTOId);
      }
    });
  }

  public save(): void {
    this.isSaving = true;
    if (this.entityWithServiceImplAndDTO.id) {
      this.entityWithServiceImplAndDTOService()
        .update(this.entityWithServiceImplAndDTO)
        .then(param => {
          this.isSaving = false;
          this.$router.go(-1);
          const message = this.$t('jhipsterApp.entityWithServiceImplAndDTO.updated', { param: param.id });
          this.alertService().showAlert(message, 'info');
        });
    } else {
      this.entityWithServiceImplAndDTOService()
        .create(this.entityWithServiceImplAndDTO)
        .then(param => {
          this.isSaving = false;
          this.$router.go(-1);
          const message = this.$t('jhipsterApp.entityWithServiceImplAndDTO.created', { param: param.id });
          this.alertService().showAlert(message, 'success');
        });
    }
  }

  public retrieveEntityWithServiceImplAndDTO(entityWithServiceImplAndDTOId): void {
    this.entityWithServiceImplAndDTOService()
      .find(entityWithServiceImplAndDTOId)
      .then(res => {
        this.entityWithServiceImplAndDTO = res;
      });
  }

  public previousState(): void {
    this.$router.go(-1);
  }

  public initRelationships(): void {}
}
