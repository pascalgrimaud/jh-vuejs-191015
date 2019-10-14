import { Component, Vue, Inject } from 'vue-property-decorator';

import { IMapsIdUserProfileWithDTO } from '@/shared/model/maps-id-user-profile-with-dto.model';
import MapsIdUserProfileWithDTOService from './maps-id-user-profile-with-dto.service';

@Component
export default class MapsIdUserProfileWithDTODetails extends Vue {
  @Inject('mapsIdUserProfileWithDTOService') private mapsIdUserProfileWithDTOService: () => MapsIdUserProfileWithDTOService;
  public mapsIdUserProfileWithDTO: IMapsIdUserProfileWithDTO = {};

  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (to.params.mapsIdUserProfileWithDTOId) {
        vm.retrieveMapsIdUserProfileWithDTO(to.params.mapsIdUserProfileWithDTOId);
      }
    });
  }

  public retrieveMapsIdUserProfileWithDTO(mapsIdUserProfileWithDTOId) {
    this.mapsIdUserProfileWithDTOService()
      .find(mapsIdUserProfileWithDTOId)
      .then(res => {
        this.mapsIdUserProfileWithDTO = res;
      });
  }

  public previousState() {
    this.$router.go(-1);
  }
}
