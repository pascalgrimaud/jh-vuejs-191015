import { Component, Vue, Inject } from 'vue-property-decorator';

import { IEntityWithPaginationAndDTO } from '@/shared/model/entity-with-pagination-and-dto.model';
import EntityWithPaginationAndDTOService from './entity-with-pagination-and-dto.service';

@Component
export default class EntityWithPaginationAndDTODetails extends Vue {
  @Inject('entityWithPaginationAndDTOService') private entityWithPaginationAndDTOService: () => EntityWithPaginationAndDTOService;
  public entityWithPaginationAndDTO: IEntityWithPaginationAndDTO = {};

  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (to.params.entityWithPaginationAndDTOId) {
        vm.retrieveEntityWithPaginationAndDTO(to.params.entityWithPaginationAndDTOId);
      }
    });
  }

  public retrieveEntityWithPaginationAndDTO(entityWithPaginationAndDTOId) {
    this.entityWithPaginationAndDTOService()
      .find(entityWithPaginationAndDTOId)
      .then(res => {
        this.entityWithPaginationAndDTO = res;
      });
  }

  public previousState() {
    this.$router.go(-1);
  }
}
