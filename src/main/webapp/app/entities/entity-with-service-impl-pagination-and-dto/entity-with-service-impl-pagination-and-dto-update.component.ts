import { Component, Vue, Inject } from 'vue-property-decorator';

import { numeric, required, minLength, maxLength } from 'vuelidate/lib/validators';

import AlertService from '@/shared/alert/alert.service';
import {
  IEntityWithServiceImplPaginationAndDTO,
  EntityWithServiceImplPaginationAndDTO
} from '@/shared/model/entity-with-service-impl-pagination-and-dto.model';
import EntityWithServiceImplPaginationAndDTOService from './entity-with-service-impl-pagination-and-dto.service';

const validations: any = {
  entityWithServiceImplPaginationAndDTO: {
    theo: {}
  }
};

@Component({
  validations
})
export default class EntityWithServiceImplPaginationAndDTOUpdate extends Vue {
  @Inject('alertService') private alertService: () => AlertService;
  @Inject('entityWithServiceImplPaginationAndDTOService')
  private entityWithServiceImplPaginationAndDTOService: () => EntityWithServiceImplPaginationAndDTOService;
  public entityWithServiceImplPaginationAndDTO: IEntityWithServiceImplPaginationAndDTO = new EntityWithServiceImplPaginationAndDTO();
  public isSaving = false;

  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (to.params.entityWithServiceImplPaginationAndDTOId) {
        vm.retrieveEntityWithServiceImplPaginationAndDTO(to.params.entityWithServiceImplPaginationAndDTOId);
      }
    });
  }

  public save(): void {
    this.isSaving = true;
    if (this.entityWithServiceImplPaginationAndDTO.id) {
      this.entityWithServiceImplPaginationAndDTOService()
        .update(this.entityWithServiceImplPaginationAndDTO)
        .then(param => {
          this.isSaving = false;
          this.$router.go(-1);
          const message = this.$t('jhipsterApp.entityWithServiceImplPaginationAndDTO.updated', { param: param.id });
          this.alertService().showAlert(message, 'info');
        });
    } else {
      this.entityWithServiceImplPaginationAndDTOService()
        .create(this.entityWithServiceImplPaginationAndDTO)
        .then(param => {
          this.isSaving = false;
          this.$router.go(-1);
          const message = this.$t('jhipsterApp.entityWithServiceImplPaginationAndDTO.created', { param: param.id });
          this.alertService().showAlert(message, 'success');
        });
    }
  }

  public retrieveEntityWithServiceImplPaginationAndDTO(entityWithServiceImplPaginationAndDTOId): void {
    this.entityWithServiceImplPaginationAndDTOService()
      .find(entityWithServiceImplPaginationAndDTOId)
      .then(res => {
        this.entityWithServiceImplPaginationAndDTO = res;
      });
  }

  public previousState(): void {
    this.$router.go(-1);
  }

  public initRelationships(): void {}
}
