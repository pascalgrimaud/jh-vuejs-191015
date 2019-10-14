/* tslint:disable max-line-length */
import { shallowMount, createLocalVue, Wrapper } from '@vue/test-utils';
import sinon, { SinonStubbedInstance } from 'sinon';

import * as config from '@/shared/config/config';
import EntityWithPaginationAndDTODetailComponent from '@/entities/entity-with-pagination-and-dto/entity-with-pagination-and-dto-details.vue';
import EntityWithPaginationAndDTOClass from '@/entities/entity-with-pagination-and-dto/entity-with-pagination-and-dto-details.component';
import EntityWithPaginationAndDTOService from '@/entities/entity-with-pagination-and-dto/entity-with-pagination-and-dto.service';

const localVue = createLocalVue();

config.initVueApp(localVue);
const i18n = config.initI18N(localVue);
const store = config.initVueXStore(localVue);
localVue.component('font-awesome-icon', {});
localVue.component('router-link', {});

describe('Component Tests', () => {
  describe('EntityWithPaginationAndDTO Management Detail Component', () => {
    let wrapper: Wrapper<EntityWithPaginationAndDTOClass>;
    let comp: EntityWithPaginationAndDTOClass;
    let entityWithPaginationAndDTOServiceStub: SinonStubbedInstance<EntityWithPaginationAndDTOService>;

    beforeEach(() => {
      entityWithPaginationAndDTOServiceStub = sinon.createStubInstance<EntityWithPaginationAndDTOService>(
        EntityWithPaginationAndDTOService
      );

      wrapper = shallowMount<EntityWithPaginationAndDTOClass>(EntityWithPaginationAndDTODetailComponent, {
        store,
        i18n,
        localVue,
        provide: { entityWithPaginationAndDTOService: () => entityWithPaginationAndDTOServiceStub }
      });
      comp = wrapper.vm;
    });

    describe('OnInit', () => {
      it('Should call load all on init', async () => {
        // GIVEN
        const foundEntityWithPaginationAndDTO = { id: 123 };
        entityWithPaginationAndDTOServiceStub.find.resolves(foundEntityWithPaginationAndDTO);

        // WHEN
        comp.retrieveEntityWithPaginationAndDTO(123);
        await comp.$nextTick();

        // THEN
        expect(comp.entityWithPaginationAndDTO).toBe(foundEntityWithPaginationAndDTO);
      });
    });
  });
});
