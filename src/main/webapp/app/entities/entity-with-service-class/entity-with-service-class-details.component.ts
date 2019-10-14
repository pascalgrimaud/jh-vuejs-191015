import { Component, Vue, Inject } from 'vue-property-decorator';

import { IEntityWithServiceClass } from '@/shared/model/entity-with-service-class.model';
import EntityWithServiceClassService from './entity-with-service-class.service';

@Component
export default class EntityWithServiceClassDetails extends Vue {
  @Inject('entityWithServiceClassService') private entityWithServiceClassService: () => EntityWithServiceClassService;
  public entityWithServiceClass: IEntityWithServiceClass = {};

  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (to.params.entityWithServiceClassId) {
        vm.retrieveEntityWithServiceClass(to.params.entityWithServiceClassId);
      }
    });
  }

  public retrieveEntityWithServiceClass(entityWithServiceClassId) {
    this.entityWithServiceClassService()
      .find(entityWithServiceClassId)
      .then(res => {
        this.entityWithServiceClass = res;
      });
  }

  public previousState() {
    this.$router.go(-1);
  }
}
