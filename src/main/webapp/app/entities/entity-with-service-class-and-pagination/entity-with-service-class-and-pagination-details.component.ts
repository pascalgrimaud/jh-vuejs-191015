import { Component, Vue, Inject } from 'vue-property-decorator';

import { IEntityWithServiceClassAndPagination } from '@/shared/model/entity-with-service-class-and-pagination.model';
import EntityWithServiceClassAndPaginationService from './entity-with-service-class-and-pagination.service';

@Component
export default class EntityWithServiceClassAndPaginationDetails extends Vue {
  @Inject('entityWithServiceClassAndPaginationService')
  private entityWithServiceClassAndPaginationService: () => EntityWithServiceClassAndPaginationService;
  public entityWithServiceClassAndPagination: IEntityWithServiceClassAndPagination = {};

  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (to.params.entityWithServiceClassAndPaginationId) {
        vm.retrieveEntityWithServiceClassAndPagination(to.params.entityWithServiceClassAndPaginationId);
      }
    });
  }

  public retrieveEntityWithServiceClassAndPagination(entityWithServiceClassAndPaginationId) {
    this.entityWithServiceClassAndPaginationService()
      .find(entityWithServiceClassAndPaginationId)
      .then(res => {
        this.entityWithServiceClassAndPagination = res;
      });
  }

  public previousState() {
    this.$router.go(-1);
  }
}
