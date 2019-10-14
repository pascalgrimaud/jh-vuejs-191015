import { Component, Vue, Inject } from 'vue-property-decorator';

import { numeric, required, minLength, maxLength } from 'vuelidate/lib/validators';

import AlertService from '@/shared/alert/alert.service';
import { IEntityWithPagination, EntityWithPagination } from '@/shared/model/entity-with-pagination.model';
import EntityWithPaginationService from './entity-with-pagination.service';

const validations: any = {
  entityWithPagination: {
    nathan: {}
  }
};

@Component({
  validations
})
export default class EntityWithPaginationUpdate extends Vue {
  @Inject('alertService') private alertService: () => AlertService;
  @Inject('entityWithPaginationService') private entityWithPaginationService: () => EntityWithPaginationService;
  public entityWithPagination: IEntityWithPagination = new EntityWithPagination();
  public isSaving = false;

  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (to.params.entityWithPaginationId) {
        vm.retrieveEntityWithPagination(to.params.entityWithPaginationId);
      }
    });
  }

  public save(): void {
    this.isSaving = true;
    if (this.entityWithPagination.id) {
      this.entityWithPaginationService()
        .update(this.entityWithPagination)
        .then(param => {
          this.isSaving = false;
          this.$router.go(-1);
          const message = this.$t('jhipsterApp.entityWithPagination.updated', { param: param.id });
          this.alertService().showAlert(message, 'info');
        });
    } else {
      this.entityWithPaginationService()
        .create(this.entityWithPagination)
        .then(param => {
          this.isSaving = false;
          this.$router.go(-1);
          const message = this.$t('jhipsterApp.entityWithPagination.created', { param: param.id });
          this.alertService().showAlert(message, 'success');
        });
    }
  }

  public retrieveEntityWithPagination(entityWithPaginationId): void {
    this.entityWithPaginationService()
      .find(entityWithPaginationId)
      .then(res => {
        this.entityWithPagination = res;
      });
  }

  public previousState(): void {
    this.$router.go(-1);
  }

  public initRelationships(): void {}
}
