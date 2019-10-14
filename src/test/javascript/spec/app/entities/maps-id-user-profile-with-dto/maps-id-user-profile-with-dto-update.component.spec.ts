/* tslint:disable max-line-length */
import { shallowMount, createLocalVue, Wrapper } from '@vue/test-utils';
import sinon, { SinonStubbedInstance } from 'sinon';
import Router from 'vue-router';

import AlertService from '@/shared/alert/alert.service';
import * as config from '@/shared/config/config';
import MapsIdUserProfileWithDTOUpdateComponent from '@/entities/maps-id-user-profile-with-dto/maps-id-user-profile-with-dto-update.vue';
import MapsIdUserProfileWithDTOClass from '@/entities/maps-id-user-profile-with-dto/maps-id-user-profile-with-dto-update.component';
import MapsIdUserProfileWithDTOService from '@/entities/maps-id-user-profile-with-dto/maps-id-user-profile-with-dto.service';

import UserService from '@/admin/user-management/user-management.service';

const localVue = createLocalVue();

config.initVueApp(localVue);
const i18n = config.initI18N(localVue);
const store = config.initVueXStore(localVue);
const router = new Router();
localVue.use(Router);
localVue.component('font-awesome-icon', {});

describe('Component Tests', () => {
  describe('MapsIdUserProfileWithDTO Management Update Component', () => {
    let wrapper: Wrapper<MapsIdUserProfileWithDTOClass>;
    let comp: MapsIdUserProfileWithDTOClass;
    let mapsIdUserProfileWithDTOServiceStub: SinonStubbedInstance<MapsIdUserProfileWithDTOService>;

    beforeEach(() => {
      mapsIdUserProfileWithDTOServiceStub = sinon.createStubInstance<MapsIdUserProfileWithDTOService>(MapsIdUserProfileWithDTOService);

      wrapper = shallowMount<MapsIdUserProfileWithDTOClass>(MapsIdUserProfileWithDTOUpdateComponent, {
        store,
        i18n,
        localVue,
        router,
        provide: {
          alertService: () => new AlertService(store),
          mapsIdUserProfileWithDTOService: () => mapsIdUserProfileWithDTOServiceStub,

          userService: () => new UserService()
        }
      });
      comp = wrapper.vm;
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', async () => {
        // GIVEN
        const entity = { id: 123 };
        comp.mapsIdUserProfileWithDTO = entity;
        mapsIdUserProfileWithDTOServiceStub.update.resolves(entity);

        // WHEN
        comp.save();
        await comp.$nextTick();

        // THEN
        expect(mapsIdUserProfileWithDTOServiceStub.update.calledWith(entity)).toBeTruthy();
        expect(comp.isSaving).toEqual(false);
      });

      it('Should call create service on save for new entity', async () => {
        // GIVEN
        const entity = {};
        comp.mapsIdUserProfileWithDTO = entity;
        mapsIdUserProfileWithDTOServiceStub.create.resolves(entity);

        // WHEN
        comp.save();
        await comp.$nextTick();

        // THEN
        expect(mapsIdUserProfileWithDTOServiceStub.create.calledWith(entity)).toBeTruthy();
        expect(comp.isSaving).toEqual(false);
      });
    });
  });
});
