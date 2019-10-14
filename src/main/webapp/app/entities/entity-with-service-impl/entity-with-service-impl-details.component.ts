import { Component, Vue, Inject } from 'vue-property-decorator';

import { IEntityWithServiceImpl } from '@/shared/model/entity-with-service-impl.model';
import EntityWithServiceImplService from './entity-with-service-impl.service';

@Component
export default class EntityWithServiceImplDetails extends Vue {
  @Inject('entityWithServiceImplService') private entityWithServiceImplService: () => EntityWithServiceImplService;
  public entityWithServiceImpl: IEntityWithServiceImpl = {};

  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (to.params.entityWithServiceImplId) {
        vm.retrieveEntityWithServiceImpl(to.params.entityWithServiceImplId);
      }
    });
  }

  public retrieveEntityWithServiceImpl(entityWithServiceImplId) {
    this.entityWithServiceImplService()
      .find(entityWithServiceImplId)
      .then(res => {
        this.entityWithServiceImpl = res;
      });
  }

  public previousState() {
    this.$router.go(-1);
  }
}
