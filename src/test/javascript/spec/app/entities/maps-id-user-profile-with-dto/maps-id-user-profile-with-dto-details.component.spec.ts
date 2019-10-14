/* tslint:disable max-line-length */
import { shallowMount, createLocalVue, Wrapper } from '@vue/test-utils';
import sinon, { SinonStubbedInstance } from 'sinon';

import * as config from '@/shared/config/config';
import MapsIdUserProfileWithDTODetailComponent from '@/entities/maps-id-user-profile-with-dto/maps-id-user-profile-with-dto-details.vue';
import MapsIdUserProfileWithDTOClass from '@/entities/maps-id-user-profile-with-dto/maps-id-user-profile-with-dto-details.component';
import MapsIdUserProfileWithDTOService from '@/entities/maps-id-user-profile-with-dto/maps-id-user-profile-with-dto.service';

const localVue = createLocalVue();

config.initVueApp(localVue);
const i18n = config.initI18N(localVue);
const store = config.initVueXStore(localVue);
localVue.component('font-awesome-icon', {});
localVue.component('router-link', {});

describe('Component Tests', () => {
  describe('MapsIdUserProfileWithDTO Management Detail Component', () => {
    let wrapper: Wrapper<MapsIdUserProfileWithDTOClass>;
    let comp: MapsIdUserProfileWithDTOClass;
    let mapsIdUserProfileWithDTOServiceStub: SinonStubbedInstance<MapsIdUserProfileWithDTOService>;

    beforeEach(() => {
      mapsIdUserProfileWithDTOServiceStub = sinon.createStubInstance<MapsIdUserProfileWithDTOService>(MapsIdUserProfileWithDTOService);

      wrapper = shallowMount<MapsIdUserProfileWithDTOClass>(MapsIdUserProfileWithDTODetailComponent, {
        store,
        i18n,
        localVue,
        provide: { mapsIdUserProfileWithDTOService: () => mapsIdUserProfileWithDTOServiceStub }
      });
      comp = wrapper.vm;
    });

    describe('OnInit', () => {
      it('Should call load all on init', async () => {
        // GIVEN
        const foundMapsIdUserProfileWithDTO = { id: 123 };
        mapsIdUserProfileWithDTOServiceStub.find.resolves(foundMapsIdUserProfileWithDTO);

        // WHEN
        comp.retrieveMapsIdUserProfileWithDTO(123);
        await comp.$nextTick();

        // THEN
        expect(comp.mapsIdUserProfileWithDTO).toBe(foundMapsIdUserProfileWithDTO);
      });
    });
  });
});
