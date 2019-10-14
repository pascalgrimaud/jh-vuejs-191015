import { Component, Vue, Inject } from 'vue-property-decorator';

import { IEntityWithServiceClassAndDTO } from '@/shared/model/entity-with-service-class-and-dto.model';
import EntityWithServiceClassAndDTOService from './entity-with-service-class-and-dto.service';

@Component
export default class EntityWithServiceClassAndDTODetails extends Vue {
  @Inject('entityWithServiceClassAndDTOService') private entityWithServiceClassAndDTOService: () => EntityWithServiceClassAndDTOService;
  public entityWithServiceClassAndDTO: IEntityWithServiceClassAndDTO = {};

  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (to.params.entityWithServiceClassAndDTOId) {
        vm.retrieveEntityWithServiceClassAndDTO(to.params.entityWithServiceClassAndDTOId);
      }
    });
  }

  public retrieveEntityWithServiceClassAndDTO(entityWithServiceClassAndDTOId) {
    this.entityWithServiceClassAndDTOService()
      .find(entityWithServiceClassAndDTOId)
      .then(res => {
        this.entityWithServiceClassAndDTO = res;
      });
  }

  public previousState() {
    this.$router.go(-1);
  }
}
