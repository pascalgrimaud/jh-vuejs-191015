import { Component, Vue, Inject } from 'vue-property-decorator';

import { numeric, required, minLength, maxLength } from 'vuelidate/lib/validators';

import AlertService from '@/shared/alert/alert.service';
import { IEntityWithServiceClass, EntityWithServiceClass } from '@/shared/model/entity-with-service-class.model';
import EntityWithServiceClassService from './entity-with-service-class.service';

const validations: any = {
  entityWithServiceClass: {
    zoe: {}
  }
};

@Component({
  validations
})
export default class EntityWithServiceClassUpdate extends Vue {
  @Inject('alertService') private alertService: () => AlertService;
  @Inject('entityWithServiceClassService') private entityWithServiceClassService: () => EntityWithServiceClassService;
  public entityWithServiceClass: IEntityWithServiceClass = new EntityWithServiceClass();
  public isSaving = false;

  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (to.params.entityWithServiceClassId) {
        vm.retrieveEntityWithServiceClass(to.params.entityWithServiceClassId);
      }
    });
  }

  public save(): void {
    this.isSaving = true;
    if (this.entityWithServiceClass.id) {
      this.entityWithServiceClassService()
        .update(this.entityWithServiceClass)
        .then(param => {
          this.isSaving = false;
          this.$router.go(-1);
          const message = this.$t('jhipsterApp.entityWithServiceClass.updated', { param: param.id });
          this.alertService().showAlert(message, 'info');
        });
    } else {
      this.entityWithServiceClassService()
        .create(this.entityWithServiceClass)
        .then(param => {
          this.isSaving = false;
          this.$router.go(-1);
          const message = this.$t('jhipsterApp.entityWithServiceClass.created', { param: param.id });
          this.alertService().showAlert(message, 'success');
        });
    }
  }

  public retrieveEntityWithServiceClass(entityWithServiceClassId): void {
    this.entityWithServiceClassService()
      .find(entityWithServiceClassId)
      .then(res => {
        this.entityWithServiceClass = res;
      });
  }

  public previousState(): void {
    this.$router.go(-1);
  }

  public initRelationships(): void {}
}
