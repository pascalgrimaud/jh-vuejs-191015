import { Component, Vue, Inject } from 'vue-property-decorator';

import { IEntityWithDTO } from '@/shared/model/entity-with-dto.model';
import EntityWithDTOService from './entity-with-dto.service';

@Component
export default class EntityWithDTODetails extends Vue {
  @Inject('entityWithDTOService') private entityWithDTOService: () => EntityWithDTOService;
  public entityWithDTO: IEntityWithDTO = {};

  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (to.params.entityWithDTOId) {
        vm.retrieveEntityWithDTO(to.params.entityWithDTOId);
      }
    });
  }

  public retrieveEntityWithDTO(entityWithDTOId) {
    this.entityWithDTOService()
      .find(entityWithDTOId)
      .then(res => {
        this.entityWithDTO = res;
      });
  }

  public previousState() {
    this.$router.go(-1);
  }
}
