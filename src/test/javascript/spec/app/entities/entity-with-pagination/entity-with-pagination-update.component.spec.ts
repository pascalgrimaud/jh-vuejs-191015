/* tslint:disable max-line-length */
import { shallowMount, createLocalVue, Wrapper } from '@vue/test-utils';
import sinon, { SinonStubbedInstance } from 'sinon';
import Router from 'vue-router';

import AlertService from '@/shared/alert/alert.service';
import * as config from '@/shared/config/config';
import EntityWithPaginationUpdateComponent from '@/entities/entity-with-pagination/entity-with-pagination-update.vue';
import EntityWithPaginationClass from '@/entities/entity-with-pagination/entity-with-pagination-update.component';
import EntityWithPaginationService from '@/entities/entity-with-pagination/entity-with-pagination.service';

const localVue = createLocalVue();

config.initVueApp(localVue);
const i18n = config.initI18N(localVue);
const store = config.initVueXStore(localVue);
const router = new Router();
localVue.use(Router);
localVue.component('font-awesome-icon', {});

describe('Component Tests', () => {
  describe('EntityWithPagination Management Update Component', () => {
    let wrapper: Wrapper<EntityWithPaginationClass>;
    let comp: EntityWithPaginationClass;
    let entityWithPaginationServiceStub: SinonStubbedInstance<EntityWithPaginationService>;

    beforeEach(() => {
      entityWithPaginationServiceStub = sinon.createStubInstance<EntityWithPaginationService>(EntityWithPaginationService);

      wrapper = shallowMount<EntityWithPaginationClass>(EntityWithPaginationUpdateComponent, {
        store,
        i18n,
        localVue,
        router,
        provide: {
          alertService: () => new AlertService(store),
          entityWithPaginationService: () => entityWithPaginationServiceStub
        }
      });
      comp = wrapper.vm;
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', async () => {
        // GIVEN
        const entity = { id: 123 };
        comp.entityWithPagination = entity;
        entityWithPaginationServiceStub.update.resolves(entity);

        // WHEN
        comp.save();
        await comp.$nextTick();

        // THEN
        expect(entityWithPaginationServiceStub.update.calledWith(entity)).toBeTruthy();
        expect(comp.isSaving).toEqual(false);
      });

      it('Should call create service on save for new entity', async () => {
        // GIVEN
        const entity = {};
        comp.entityWithPagination = entity;
        entityWithPaginationServiceStub.create.resolves(entity);

        // WHEN
        comp.save();
        await comp.$nextTick();

        // THEN
        expect(entityWithPaginationServiceStub.create.calledWith(entity)).toBeTruthy();
        expect(comp.isSaving).toEqual(false);
      });
    });
  });
});
