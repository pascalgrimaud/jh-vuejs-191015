/* tslint:disable max-line-length */
import { shallowMount, createLocalVue, Wrapper } from '@vue/test-utils';
import sinon, { SinonStubbedInstance } from 'sinon';
import Router from 'vue-router';

import AlertService from '@/shared/alert/alert.service';
import * as config from '@/shared/config/config';
import EntityWithPaginationAndDTOUpdateComponent from '@/entities/entity-with-pagination-and-dto/entity-with-pagination-and-dto-update.vue';
import EntityWithPaginationAndDTOClass from '@/entities/entity-with-pagination-and-dto/entity-with-pagination-and-dto-update.component';
import EntityWithPaginationAndDTOService from '@/entities/entity-with-pagination-and-dto/entity-with-pagination-and-dto.service';

const localVue = createLocalVue();

config.initVueApp(localVue);
const i18n = config.initI18N(localVue);
const store = config.initVueXStore(localVue);
const router = new Router();
localVue.use(Router);
localVue.component('font-awesome-icon', {});

describe('Component Tests', () => {
  describe('EntityWithPaginationAndDTO Management Update Component', () => {
    let wrapper: Wrapper<EntityWithPaginationAndDTOClass>;
    let comp: EntityWithPaginationAndDTOClass;
    let entityWithPaginationAndDTOServiceStub: SinonStubbedInstance<EntityWithPaginationAndDTOService>;

    beforeEach(() => {
      entityWithPaginationAndDTOServiceStub = sinon.createStubInstance<EntityWithPaginationAndDTOService>(
        EntityWithPaginationAndDTOService
      );

      wrapper = shallowMount<EntityWithPaginationAndDTOClass>(EntityWithPaginationAndDTOUpdateComponent, {
        store,
        i18n,
        localVue,
        router,
        provide: {
          alertService: () => new AlertService(store),
          entityWithPaginationAndDTOService: () => entityWithPaginationAndDTOServiceStub
        }
      });
      comp = wrapper.vm;
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', async () => {
        // GIVEN
        const entity = { id: 123 };
        comp.entityWithPaginationAndDTO = entity;
        entityWithPaginationAndDTOServiceStub.update.resolves(entity);

        // WHEN
        comp.save();
        await comp.$nextTick();

        // THEN
        expect(entityWithPaginationAndDTOServiceStub.update.calledWith(entity)).toBeTruthy();
        expect(comp.isSaving).toEqual(false);
      });

      it('Should call create service on save for new entity', async () => {
        // GIVEN
        const entity = {};
        comp.entityWithPaginationAndDTO = entity;
        entityWithPaginationAndDTOServiceStub.create.resolves(entity);

        // WHEN
        comp.save();
        await comp.$nextTick();

        // THEN
        expect(entityWithPaginationAndDTOServiceStub.create.calledWith(entity)).toBeTruthy();
        expect(comp.isSaving).toEqual(false);
      });
    });
  });
});
