import { Component, Vue, Inject } from 'vue-property-decorator';

import { IEntityWithServiceImplPaginationAndDTO } from '@/shared/model/entity-with-service-impl-pagination-and-dto.model';
import EntityWithServiceImplPaginationAndDTOService from './entity-with-service-impl-pagination-and-dto.service';

@Component
export default class EntityWithServiceImplPaginationAndDTODetails extends Vue {
  @Inject('entityWithServiceImplPaginationAndDTOService')
  private entityWithServiceImplPaginationAndDTOService: () => EntityWithServiceImplPaginationAndDTOService;
  public entityWithServiceImplPaginationAndDTO: IEntityWithServiceImplPaginationAndDTO = {};

  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (to.params.entityWithServiceImplPaginationAndDTOId) {
        vm.retrieveEntityWithServiceImplPaginationAndDTO(to.params.entityWithServiceImplPaginationAndDTOId);
      }
    });
  }

  public retrieveEntityWithServiceImplPaginationAndDTO(entityWithServiceImplPaginationAndDTOId) {
    this.entityWithServiceImplPaginationAndDTOService()
      .find(entityWithServiceImplPaginationAndDTOId)
      .then(res => {
        this.entityWithServiceImplPaginationAndDTO = res;
      });
  }

  public previousState() {
    this.$router.go(-1);
  }
}
