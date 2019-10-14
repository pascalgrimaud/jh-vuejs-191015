import { Component, Vue, Inject } from 'vue-property-decorator';

import { numeric, required, minLength, maxLength } from 'vuelidate/lib/validators';

import AlertService from '@/shared/alert/alert.service';
import { IEntityWithPaginationAndDTO, EntityWithPaginationAndDTO } from '@/shared/model/entity-with-pagination-and-dto.model';
import EntityWithPaginationAndDTOService from './entity-with-pagination-and-dto.service';

const validations: any = {
  entityWithPaginationAndDTO: {
    lea: {}
  }
};

@Component({
  validations
})
export default class EntityWithPaginationAndDTOUpdate extends Vue {
  @Inject('alertService') private alertService: () => AlertService;
  @Inject('entityWithPaginationAndDTOService') private entityWithPaginationAndDTOService: () => EntityWithPaginationAndDTOService;
  public entityWithPaginationAndDTO: IEntityWithPaginationAndDTO = new EntityWithPaginationAndDTO();
  public isSaving = false;

  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (to.params.entityWithPaginationAndDTOId) {
        vm.retrieveEntityWithPaginationAndDTO(to.params.entityWithPaginationAndDTOId);
      }
    });
  }

  public save(): void {
    this.isSaving = true;
    if (this.entityWithPaginationAndDTO.id) {
      this.entityWithPaginationAndDTOService()
        .update(this.entityWithPaginationAndDTO)
        .then(param => {
          this.isSaving = false;
          this.$router.go(-1);
          const message = this.$t('jhipsterApp.entityWithPaginationAndDTO.updated', { param: param.id });
          this.alertService().showAlert(message, 'info');
        });
    } else {
      this.entityWithPaginationAndDTOService()
        .create(this.entityWithPaginationAndDTO)
        .then(param => {
          this.isSaving = false;
          this.$router.go(-1);
          const message = this.$t('jhipsterApp.entityWithPaginationAndDTO.created', { param: param.id });
          this.alertService().showAlert(message, 'success');
        });
    }
  }

  public retrieveEntityWithPaginationAndDTO(entityWithPaginationAndDTOId): void {
    this.entityWithPaginationAndDTOService()
      .find(entityWithPaginationAndDTOId)
      .then(res => {
        this.entityWithPaginationAndDTO = res;
      });
  }

  public previousState(): void {
    this.$router.go(-1);
  }

  public initRelationships(): void {}
}
