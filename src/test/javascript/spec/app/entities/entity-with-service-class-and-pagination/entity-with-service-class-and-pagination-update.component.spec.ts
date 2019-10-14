/* tslint:disable max-line-length */
import { shallowMount, createLocalVue, Wrapper } from '@vue/test-utils';
import sinon, { SinonStubbedInstance } from 'sinon';
import Router from 'vue-router';

import AlertService from '@/shared/alert/alert.service';
import * as config from '@/shared/config/config';
import EntityWithServiceClassAndPaginationUpdateComponent from '@/entities/entity-with-service-class-and-pagination/entity-with-service-class-and-pagination-update.vue';
import EntityWithServiceClassAndPaginationClass from '@/entities/entity-with-service-class-and-pagination/entity-with-service-class-and-pagination-update.component';
import EntityWithServiceClassAndPaginationService from '@/entities/entity-with-service-class-and-pagination/entity-with-service-class-and-pagination.service';

const localVue = createLocalVue();

config.initVueApp(localVue);
const i18n = config.initI18N(localVue);
const store = config.initVueXStore(localVue);
const router = new Router();
localVue.use(Router);
localVue.component('font-awesome-icon', {});

describe('Component Tests', () => {
  describe('EntityWithServiceClassAndPagination Management Update Component', () => {
    let wrapper: Wrapper<EntityWithServiceClassAndPaginationClass>;
    let comp: EntityWithServiceClassAndPaginationClass;
    let entityWithServiceClassAndPaginationServiceStub: SinonStubbedInstance<EntityWithServiceClassAndPaginationService>;

    beforeEach(() => {
      entityWithServiceClassAndPaginationServiceStub = sinon.createStubInstance<EntityWithServiceClassAndPaginationService>(
        EntityWithServiceClassAndPaginationService
      );

      wrapper = shallowMount<EntityWithServiceClassAndPaginationClass>(EntityWithServiceClassAndPaginationUpdateComponent, {
        store,
        i18n,
        localVue,
        router,
        provide: {
          alertService: () => new AlertService(store),
          entityWithServiceClassAndPaginationService: () => entityWithServiceClassAndPaginationServiceStub
        }
      });
      comp = wrapper.vm;
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', async () => {
        // GIVEN
        const entity = { id: 123 };
        comp.entityWithServiceClassAndPagination = entity;
        entityWithServiceClassAndPaginationServiceStub.update.resolves(entity);

        // WHEN
        comp.save();
        await comp.$nextTick();

        // THEN
        expect(entityWithServiceClassAndPaginationServiceStub.update.calledWith(entity)).toBeTruthy();
        expect(comp.isSaving).toEqual(false);
      });

      it('Should call create service on save for new entity', async () => {
        // GIVEN
        const entity = {};
        comp.entityWithServiceClassAndPagination = entity;
        entityWithServiceClassAndPaginationServiceStub.create.resolves(entity);

        // WHEN
        comp.save();
        await comp.$nextTick();

        // THEN
        expect(entityWithServiceClassAndPaginationServiceStub.create.calledWith(entity)).toBeTruthy();
        expect(comp.isSaving).toEqual(false);
      });
    });
  });
});
