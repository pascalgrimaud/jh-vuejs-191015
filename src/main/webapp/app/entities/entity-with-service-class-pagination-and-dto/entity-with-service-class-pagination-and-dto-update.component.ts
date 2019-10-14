import { Component, Vue, Inject } from 'vue-property-decorator';

import { numeric, required, minLength, maxLength } from 'vuelidate/lib/validators';

import AlertService from '@/shared/alert/alert.service';
import {
  IEntityWithServiceClassPaginationAndDTO,
  EntityWithServiceClassPaginationAndDTO
} from '@/shared/model/entity-with-service-class-pagination-and-dto.model';
import EntityWithServiceClassPaginationAndDTOService from './entity-with-service-class-pagination-and-dto.service';

const validations: any = {
  entityWithServiceClassPaginationAndDTO: {
    lena: {}
  }
};

@Component({
  validations
})
export default class EntityWithServiceClassPaginationAndDTOUpdate extends Vue {
  @Inject('alertService') private alertService: () => AlertService;
  @Inject('entityWithServiceClassPaginationAndDTOService')
  private entityWithServiceClassPaginationAndDTOService: () => EntityWithServiceClassPaginationAndDTOService;
  public entityWithServiceClassPaginationAndDTO: IEntityWithServiceClassPaginationAndDTO = new EntityWithServiceClassPaginationAndDTO();
  public isSaving = false;

  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (to.params.entityWithServiceClassPaginationAndDTOId) {
        vm.retrieveEntityWithServiceClassPaginationAndDTO(to.params.entityWithServiceClassPaginationAndDTOId);
      }
    });
  }

  public save(): void {
    this.isSaving = true;
    if (this.entityWithServiceClassPaginationAndDTO.id) {
      this.entityWithServiceClassPaginationAndDTOService()
        .update(this.entityWithServiceClassPaginationAndDTO)
        .then(param => {
          this.isSaving = false;
          this.$router.go(-1);
          const message = this.$t('jhipsterApp.entityWithServiceClassPaginationAndDTO.updated', { param: param.id });
          this.alertService().showAlert(message, 'info');
        });
    } else {
      this.entityWithServiceClassPaginationAndDTOService()
        .create(this.entityWithServiceClassPaginationAndDTO)
        .then(param => {
          this.isSaving = false;
          this.$router.go(-1);
          const message = this.$t('jhipsterApp.entityWithServiceClassPaginationAndDTO.created', { param: param.id });
          this.alertService().showAlert(message, 'success');
        });
    }
  }

  public retrieveEntityWithServiceClassPaginationAndDTO(entityWithServiceClassPaginationAndDTOId): void {
    this.entityWithServiceClassPaginationAndDTOService()
      .find(entityWithServiceClassPaginationAndDTOId)
      .then(res => {
        this.entityWithServiceClassPaginationAndDTO = res;
      });
  }

  public previousState(): void {
    this.$router.go(-1);
  }

  public initRelationships(): void {}
}
