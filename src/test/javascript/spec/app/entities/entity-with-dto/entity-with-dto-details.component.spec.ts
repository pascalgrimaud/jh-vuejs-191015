/* tslint:disable max-line-length */
import { shallowMount, createLocalVue, Wrapper } from '@vue/test-utils';
import sinon, { SinonStubbedInstance } from 'sinon';

import * as config from '@/shared/config/config';
import EntityWithDTODetailComponent from '@/entities/entity-with-dto/entity-with-dto-details.vue';
import EntityWithDTOClass from '@/entities/entity-with-dto/entity-with-dto-details.component';
import EntityWithDTOService from '@/entities/entity-with-dto/entity-with-dto.service';

const localVue = createLocalVue();

config.initVueApp(localVue);
const i18n = config.initI18N(localVue);
const store = config.initVueXStore(localVue);
localVue.component('font-awesome-icon', {});
localVue.component('router-link', {});

describe('Component Tests', () => {
  describe('EntityWithDTO Management Detail Component', () => {
    let wrapper: Wrapper<EntityWithDTOClass>;
    let comp: EntityWithDTOClass;
    let entityWithDTOServiceStub: SinonStubbedInstance<EntityWithDTOService>;

    beforeEach(() => {
      entityWithDTOServiceStub = sinon.createStubInstance<EntityWithDTOService>(EntityWithDTOService);

      wrapper = shallowMount<EntityWithDTOClass>(EntityWithDTODetailComponent, {
        store,
        i18n,
        localVue,
        provide: { entityWithDTOService: () => entityWithDTOServiceStub }
      });
      comp = wrapper.vm;
    });

    describe('OnInit', () => {
      it('Should call load all on init', async () => {
        // GIVEN
        const foundEntityWithDTO = { id: 123 };
        entityWithDTOServiceStub.find.resolves(foundEntityWithDTO);

        // WHEN
        comp.retrieveEntityWithDTO(123);
        await comp.$nextTick();

        // THEN
        expect(comp.entityWithDTO).toBe(foundEntityWithDTO);
      });
    });
  });
});
