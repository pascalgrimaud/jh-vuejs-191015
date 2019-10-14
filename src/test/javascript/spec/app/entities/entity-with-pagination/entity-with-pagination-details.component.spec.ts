/* tslint:disable max-line-length */
import { shallowMount, createLocalVue, Wrapper } from '@vue/test-utils';
import sinon, { SinonStubbedInstance } from 'sinon';

import * as config from '@/shared/config/config';
import EntityWithPaginationDetailComponent from '@/entities/entity-with-pagination/entity-with-pagination-details.vue';
import EntityWithPaginationClass from '@/entities/entity-with-pagination/entity-with-pagination-details.component';
import EntityWithPaginationService from '@/entities/entity-with-pagination/entity-with-pagination.service';

const localVue = createLocalVue();

config.initVueApp(localVue);
const i18n = config.initI18N(localVue);
const store = config.initVueXStore(localVue);
localVue.component('font-awesome-icon', {});
localVue.component('router-link', {});

describe('Component Tests', () => {
  describe('EntityWithPagination Management Detail Component', () => {
    let wrapper: Wrapper<EntityWithPaginationClass>;
    let comp: EntityWithPaginationClass;
    let entityWithPaginationServiceStub: SinonStubbedInstance<EntityWithPaginationService>;

    beforeEach(() => {
      entityWithPaginationServiceStub = sinon.createStubInstance<EntityWithPaginationService>(EntityWithPaginationService);

      wrapper = shallowMount<EntityWithPaginationClass>(EntityWithPaginationDetailComponent, {
        store,
        i18n,
        localVue,
        provide: { entityWithPaginationService: () => entityWithPaginationServiceStub }
      });
      comp = wrapper.vm;
    });

    describe('OnInit', () => {
      it('Should call load all on init', async () => {
        // GIVEN
        const foundEntityWithPagination = { id: 123 };
        entityWithPaginationServiceStub.find.resolves(foundEntityWithPagination);

        // WHEN
        comp.retrieveEntityWithPagination(123);
        await comp.$nextTick();

        // THEN
        expect(comp.entityWithPagination).toBe(foundEntityWithPagination);
      });
    });
  });
});
