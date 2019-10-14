import { Component, Vue, Inject } from 'vue-property-decorator';

import { IEntityWithPagination } from '@/shared/model/entity-with-pagination.model';
import EntityWithPaginationService from './entity-with-pagination.service';

@Component
export default class EntityWithPaginationDetails extends Vue {
  @Inject('entityWithPaginationService') private entityWithPaginationService: () => EntityWithPaginationService;
  public entityWithPagination: IEntityWithPagination = {};

  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (to.params.entityWithPaginationId) {
        vm.retrieveEntityWithPagination(to.params.entityWithPaginationId);
      }
    });
  }

  public retrieveEntityWithPagination(entityWithPaginationId) {
    this.entityWithPaginationService()
      .find(entityWithPaginationId)
      .then(res => {
        this.entityWithPagination = res;
      });
  }

  public previousState() {
    this.$router.go(-1);
  }
}
