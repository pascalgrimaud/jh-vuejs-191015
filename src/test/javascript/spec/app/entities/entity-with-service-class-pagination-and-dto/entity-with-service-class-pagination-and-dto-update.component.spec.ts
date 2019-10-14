/* tslint:disable max-line-length */
import { shallowMount, createLocalVue, Wrapper } from '@vue/test-utils';
import sinon, { SinonStubbedInstance } from 'sinon';
import Router from 'vue-router';

import AlertService from '@/shared/alert/alert.service';
import * as config from '@/shared/config/config';
import EntityWithServiceClassPaginationAndDTOUpdateComponent from '@/entities/entity-with-service-class-pagination-and-dto/entity-with-service-class-pagination-and-dto-update.vue';
import EntityWithServiceClassPaginationAndDTOClass from '@/entities/entity-with-service-class-pagination-and-dto/entity-with-service-class-pagination-and-dto-update.component';
import EntityWithServiceClassPaginationAndDTOService from '@/entities/entity-with-service-class-pagination-and-dto/entity-with-service-class-pagination-and-dto.service';

const localVue = createLocalVue();

config.initVueApp(localVue);
const i18n = config.initI18N(localVue);
const store = config.initVueXStore(localVue);
const router = new Router();
localVue.use(Router);
localVue.component('font-awesome-icon', {});

describe('Component Tests', () => {
  describe('EntityWithServiceClassPaginationAndDTO Management Update Component', () => {
    let wrapper: Wrapper<EntityWithServiceClassPaginationAndDTOClass>;
    let comp: EntityWithServiceClassPaginationAndDTOClass;
    let entityWithServiceClassPaginationAndDTOServiceStub: SinonStubbedInstance<EntityWithServiceClassPaginationAndDTOService>;

    beforeEach(() => {
      entityWithServiceClassPaginationAndDTOServiceStub = sinon.createStubInstance<EntityWithServiceClassPaginationAndDTOService>(
        EntityWithServiceClassPaginationAndDTOService
      );

      wrapper = shallowMount<EntityWithServiceClassPaginationAndDTOClass>(EntityWithServiceClassPaginationAndDTOUpdateComponent, {
        store,
        i18n,
        localVue,
        router,
        provide: {
          alertService: () => new AlertService(store),
          entityWithServiceClassPaginationAndDTOService: () => entityWithServiceClassPaginationAndDTOServiceStub
        }
      });
      comp = wrapper.vm;
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', async () => {
        // GIVEN
        const entity = { id: 123 };
        comp.entityWithServiceClassPaginationAndDTO = entity;
        entityWithServiceClassPaginationAndDTOServiceStub.update.resolves(entity);

        // WHEN
        comp.save();
        await comp.$nextTick();

        // THEN
        expect(entityWithServiceClassPaginationAndDTOServiceStub.update.calledWith(entity)).toBeTruthy();
        expect(comp.isSaving).toEqual(false);
      });

      it('Should call create service on save for new entity', async () => {
        // GIVEN
        const entity = {};
        comp.entityWithServiceClassPaginationAndDTO = entity;
        entityWithServiceClassPaginationAndDTOServiceStub.create.resolves(entity);

        // WHEN
        comp.save();
        await comp.$nextTick();

        // THEN
        expect(entityWithServiceClassPaginationAndDTOServiceStub.create.calledWith(entity)).toBeTruthy();
        expect(comp.isSaving).toEqual(false);
      });
    });
  });
});
