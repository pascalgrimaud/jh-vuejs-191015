import { Component, Vue, Inject } from 'vue-property-decorator';

import { IEntityWithServiceClassPaginationAndDTO } from '@/shared/model/entity-with-service-class-pagination-and-dto.model';
import EntityWithServiceClassPaginationAndDTOService from './entity-with-service-class-pagination-and-dto.service';

@Component
export default class EntityWithServiceClassPaginationAndDTODetails extends Vue {
  @Inject('entityWithServiceClassPaginationAndDTOService')
  private entityWithServiceClassPaginationAndDTOService: () => EntityWithServiceClassPaginationAndDTOService;
  public entityWithServiceClassPaginationAndDTO: IEntityWithServiceClassPaginationAndDTO = {};

  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (to.params.entityWithServiceClassPaginationAndDTOId) {
        vm.retrieveEntityWithServiceClassPaginationAndDTO(to.params.entityWithServiceClassPaginationAndDTOId);
      }
    });
  }

  public retrieveEntityWithServiceClassPaginationAndDTO(entityWithServiceClassPaginationAndDTOId) {
    this.entityWithServiceClassPaginationAndDTOService()
      .find(entityWithServiceClassPaginationAndDTOId)
      .then(res => {
        this.entityWithServiceClassPaginationAndDTO = res;
      });
  }

  public previousState() {
    this.$router.go(-1);
  }
}
