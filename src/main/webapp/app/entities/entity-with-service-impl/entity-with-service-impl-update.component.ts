import { Component, Vue, Inject } from 'vue-property-decorator';

import { numeric, required, minLength, maxLength } from 'vuelidate/lib/validators';

import AlertService from '@/shared/alert/alert.service';
import { IEntityWithServiceImpl, EntityWithServiceImpl } from '@/shared/model/entity-with-service-impl.model';
import EntityWithServiceImplService from './entity-with-service-impl.service';

const validations: any = {
  entityWithServiceImpl: {
    clara: {}
  }
};

@Component({
  validations
})
export default class EntityWithServiceImplUpdate extends Vue {
  @Inject('alertService') private alertService: () => AlertService;
  @Inject('entityWithServiceImplService') private entityWithServiceImplService: () => EntityWithServiceImplService;
  public entityWithServiceImpl: IEntityWithServiceImpl = new EntityWithServiceImpl();
  public isSaving = false;

  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (to.params.entityWithServiceImplId) {
        vm.retrieveEntityWithServiceImpl(to.params.entityWithServiceImplId);
      }
    });
  }

  public save(): void {
    this.isSaving = true;
    if (this.entityWithServiceImpl.id) {
      this.entityWithServiceImplService()
        .update(this.entityWithServiceImpl)
        .then(param => {
          this.isSaving = false;
          this.$router.go(-1);
          const message = this.$t('jhipsterApp.entityWithServiceImpl.updated', { param: param.id });
          this.alertService().showAlert(message, 'info');
        });
    } else {
      this.entityWithServiceImplService()
        .create(this.entityWithServiceImpl)
        .then(param => {
          this.isSaving = false;
          this.$router.go(-1);
          const message = this.$t('jhipsterApp.entityWithServiceImpl.created', { param: param.id });
          this.alertService().showAlert(message, 'success');
        });
    }
  }

  public retrieveEntityWithServiceImpl(entityWithServiceImplId): void {
    this.entityWithServiceImplService()
      .find(entityWithServiceImplId)
      .then(res => {
        this.entityWithServiceImpl = res;
      });
  }

  public previousState(): void {
    this.$router.go(-1);
  }

  public initRelationships(): void {}
}
