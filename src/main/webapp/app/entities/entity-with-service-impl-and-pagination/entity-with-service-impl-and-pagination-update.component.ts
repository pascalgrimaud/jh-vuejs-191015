import { Component, Vue, Inject } from 'vue-property-decorator';

import { numeric, required, minLength, maxLength } from 'vuelidate/lib/validators';

import AlertService from '@/shared/alert/alert.service';
import {
  IEntityWithServiceImplAndPagination,
  EntityWithServiceImplAndPagination
} from '@/shared/model/entity-with-service-impl-and-pagination.model';
import EntityWithServiceImplAndPaginationService from './entity-with-service-impl-and-pagination.service';

const validations: any = {
  entityWithServiceImplAndPagination: {
    hugo: {}
  }
};

@Component({
  validations
})
export default class EntityWithServiceImplAndPaginationUpdate extends Vue {
  @Inject('alertService') private alertService: () => AlertService;
  @Inject('entityWithServiceImplAndPaginationService')
  private entityWithServiceImplAndPaginationService: () => EntityWithServiceImplAndPaginationService;
  public entityWithServiceImplAndPagination: IEntityWithServiceImplAndPagination = new EntityWithServiceImplAndPagination();
  public isSaving = false;

  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (to.params.entityWithServiceImplAndPaginationId) {
        vm.retrieveEntityWithServiceImplAndPagination(to.params.entityWithServiceImplAndPaginationId);
      }
    });
  }

  public save(): void {
    this.isSaving = true;
    if (this.entityWithServiceImplAndPagination.id) {
      this.entityWithServiceImplAndPaginationService()
        .update(this.entityWithServiceImplAndPagination)
        .then(param => {
          this.isSaving = false;
          this.$router.go(-1);
          const message = this.$t('jhipsterApp.entityWithServiceImplAndPagination.updated', { param: param.id });
          this.alertService().showAlert(message, 'info');
        });
    } else {
      this.entityWithServiceImplAndPaginationService()
        .create(this.entityWithServiceImplAndPagination)
        .then(param => {
          this.isSaving = false;
          this.$router.go(-1);
          const message = this.$t('jhipsterApp.entityWithServiceImplAndPagination.created', { param: param.id });
          this.alertService().showAlert(message, 'success');
        });
    }
  }

  public retrieveEntityWithServiceImplAndPagination(entityWithServiceImplAndPaginationId): void {
    this.entityWithServiceImplAndPaginationService()
      .find(entityWithServiceImplAndPaginationId)
      .then(res => {
        this.entityWithServiceImplAndPagination = res;
      });
  }

  public previousState(): void {
    this.$router.go(-1);
  }

  public initRelationships(): void {}
}
