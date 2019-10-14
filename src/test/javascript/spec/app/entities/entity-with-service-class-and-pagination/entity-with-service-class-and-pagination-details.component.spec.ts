/* tslint:disable max-line-length */
import { shallowMount, createLocalVue, Wrapper } from '@vue/test-utils';
import sinon, { SinonStubbedInstance } from 'sinon';

import * as config from '@/shared/config/config';
import EntityWithServiceClassAndPaginationDetailComponent from '@/entities/entity-with-service-class-and-pagination/entity-with-service-class-and-pagination-details.vue';
import EntityWithServiceClassAndPaginationClass from '@/entities/entity-with-service-class-and-pagination/entity-with-service-class-and-pagination-details.component';
import EntityWithServiceClassAndPaginationService from '@/entities/entity-with-service-class-and-pagination/entity-with-service-class-and-pagination.service';

const localVue = createLocalVue();

config.initVueApp(localVue);
const i18n = config.initI18N(localVue);
const store = config.initVueXStore(localVue);
localVue.component('font-awesome-icon', {});
localVue.component('router-link', {});

describe('Component Tests', () => {
  describe('EntityWithServiceClassAndPagination Management Detail Component', () => {
    let wrapper: Wrapper<EntityWithServiceClassAndPaginationClass>;
    let comp: EntityWithServiceClassAndPaginationClass;
    let entityWithServiceClassAndPaginationServiceStub: SinonStubbedInstance<EntityWithServiceClassAndPaginationService>;

    beforeEach(() => {
      entityWithServiceClassAndPaginationServiceStub = sinon.createStubInstance<EntityWithServiceClassAndPaginationService>(
        EntityWithServiceClassAndPaginationService
      );

      wrapper = shallowMount<EntityWithServiceClassAndPaginationClass>(EntityWithServiceClassAndPaginationDetailComponent, {
        store,
        i18n,
        localVue,
        provide: { entityWithServiceClassAndPaginationService: () => entityWithServiceClassAndPaginationServiceStub }
      });
      comp = wrapper.vm;
    });

    describe('OnInit', () => {
      it('Should call load all on init', async () => {
        // GIVEN
        const foundEntityWithServiceClassAndPagination = { id: 123 };
        entityWithServiceClassAndPaginationServiceStub.find.resolves(foundEntityWithServiceClassAndPagination);

        // WHEN
        comp.retrieveEntityWithServiceClassAndPagination(123);
        await comp.$nextTick();

        // THEN
        expect(comp.entityWithServiceClassAndPagination).toBe(foundEntityWithServiceClassAndPagination);
      });
    });
  });
});
