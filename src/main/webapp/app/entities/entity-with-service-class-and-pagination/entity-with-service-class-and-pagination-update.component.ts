import { Component, Vue, Inject } from 'vue-property-decorator';

import { numeric, required, minLength, maxLength } from 'vuelidate/lib/validators';

import AlertService from '@/shared/alert/alert.service';
import {
  IEntityWithServiceClassAndPagination,
  EntityWithServiceClassAndPagination
} from '@/shared/model/entity-with-service-class-and-pagination.model';
import EntityWithServiceClassAndPaginationService from './entity-with-service-class-and-pagination.service';

const validations: any = {
  entityWithServiceClassAndPagination: {
    enzo: {}
  }
};

@Component({
  validations
})
export default class EntityWithServiceClassAndPaginationUpdate extends Vue {
  @Inject('alertService') private alertService: () => AlertService;
  @Inject('entityWithServiceClassAndPaginationService')
  private entityWithServiceClassAndPaginationService: () => EntityWithServiceClassAndPaginationService;
  public entityWithServiceClassAndPagination: IEntityWithServiceClassAndPagination = new EntityWithServiceClassAndPagination();
  public isSaving = false;

  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (to.params.entityWithServiceClassAndPaginationId) {
        vm.retrieveEntityWithServiceClassAndPagination(to.params.entityWithServiceClassAndPaginationId);
      }
    });
  }

  public save(): void {
    this.isSaving = true;
    if (this.entityWithServiceClassAndPagination.id) {
      this.entityWithServiceClassAndPaginationService()
        .update(this.entityWithServiceClassAndPagination)
        .then(param => {
          this.isSaving = false;
          this.$router.go(-1);
          const message = this.$t('jhipsterApp.entityWithServiceClassAndPagination.updated', { param: param.id });
          this.alertService().showAlert(message, 'info');
        });
    } else {
      this.entityWithServiceClassAndPaginationService()
        .create(this.entityWithServiceClassAndPagination)
        .then(param => {
          this.isSaving = false;
          this.$router.go(-1);
          const message = this.$t('jhipsterApp.entityWithServiceClassAndPagination.created', { param: param.id });
          this.alertService().showAlert(message, 'success');
        });
    }
  }

  public retrieveEntityWithServiceClassAndPagination(entityWithServiceClassAndPaginationId): void {
    this.entityWithServiceClassAndPaginationService()
      .find(entityWithServiceClassAndPaginationId)
      .then(res => {
        this.entityWithServiceClassAndPagination = res;
      });
  }

  public previousState(): void {
    this.$router.go(-1);
  }

  public initRelationships(): void {}
}
