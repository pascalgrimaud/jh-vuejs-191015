/* tslint:disable max-line-length */
import { shallowMount, createLocalVue, Wrapper } from '@vue/test-utils';
import sinon, { SinonStubbedInstance } from 'sinon';
import Router from 'vue-router';

import AlertService from '@/shared/alert/alert.service';
import * as config from '@/shared/config/config';
import EntityWithServiceImplPaginationAndDTOUpdateComponent from '@/entities/entity-with-service-impl-pagination-and-dto/entity-with-service-impl-pagination-and-dto-update.vue';
import EntityWithServiceImplPaginationAndDTOClass from '@/entities/entity-with-service-impl-pagination-and-dto/entity-with-service-impl-pagination-and-dto-update.component';
import EntityWithServiceImplPaginationAndDTOService from '@/entities/entity-with-service-impl-pagination-and-dto/entity-with-service-impl-pagination-and-dto.service';

const localVue = createLocalVue();

config.initVueApp(localVue);
const i18n = config.initI18N(localVue);
const store = config.initVueXStore(localVue);
const router = new Router();
localVue.use(Router);
localVue.component('font-awesome-icon', {});

describe('Component Tests', () => {
  describe('EntityWithServiceImplPaginationAndDTO Management Update Component', () => {
    let wrapper: Wrapper<EntityWithServiceImplPaginationAndDTOClass>;
    let comp: EntityWithServiceImplPaginationAndDTOClass;
    let entityWithServiceImplPaginationAndDTOServiceStub: SinonStubbedInstance<EntityWithServiceImplPaginationAndDTOService>;

    beforeEach(() => {
      entityWithServiceImplPaginationAndDTOServiceStub = sinon.createStubInstance<EntityWithServiceImplPaginationAndDTOService>(
        EntityWithServiceImplPaginationAndDTOService
      );

      wrapper = shallowMount<EntityWithServiceImplPaginationAndDTOClass>(EntityWithServiceImplPaginationAndDTOUpdateComponent, {
        store,
        i18n,
        localVue,
        router,
        provide: {
          alertService: () => new AlertService(store),
          entityWithServiceImplPaginationAndDTOService: () => entityWithServiceImplPaginationAndDTOServiceStub
        }
      });
      comp = wrapper.vm;
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', async () => {
        // GIVEN
        const entity = { id: 123 };
        comp.entityWithServiceImplPaginationAndDTO = entity;
        entityWithServiceImplPaginationAndDTOServiceStub.update.resolves(entity);

        // WHEN
        comp.save();
        await comp.$nextTick();

        // THEN
        expect(entityWithServiceImplPaginationAndDTOServiceStub.update.calledWith(entity)).toBeTruthy();
        expect(comp.isSaving).toEqual(false);
      });

      it('Should call create service on save for new entity', async () => {
        // GIVEN
        const entity = {};
        comp.entityWithServiceImplPaginationAndDTO = entity;
        entityWithServiceImplPaginationAndDTOServiceStub.create.resolves(entity);

        // WHEN
        comp.save();
        await comp.$nextTick();

        // THEN
        expect(entityWithServiceImplPaginationAndDTOServiceStub.create.calledWith(entity)).toBeTruthy();
        expect(comp.isSaving).toEqual(false);
      });
    });
  });
});
