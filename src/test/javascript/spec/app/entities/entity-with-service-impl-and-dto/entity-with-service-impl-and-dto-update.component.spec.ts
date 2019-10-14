/* tslint:disable max-line-length */
import { shallowMount, createLocalVue, Wrapper } from '@vue/test-utils';
import sinon, { SinonStubbedInstance } from 'sinon';
import Router from 'vue-router';

import AlertService from '@/shared/alert/alert.service';
import * as config from '@/shared/config/config';
import EntityWithServiceImplAndDTOUpdateComponent from '@/entities/entity-with-service-impl-and-dto/entity-with-service-impl-and-dto-update.vue';
import EntityWithServiceImplAndDTOClass from '@/entities/entity-with-service-impl-and-dto/entity-with-service-impl-and-dto-update.component';
import EntityWithServiceImplAndDTOService from '@/entities/entity-with-service-impl-and-dto/entity-with-service-impl-and-dto.service';

const localVue = createLocalVue();

config.initVueApp(localVue);
const i18n = config.initI18N(localVue);
const store = config.initVueXStore(localVue);
const router = new Router();
localVue.use(Router);
localVue.component('font-awesome-icon', {});

describe('Component Tests', () => {
  describe('EntityWithServiceImplAndDTO Management Update Component', () => {
    let wrapper: Wrapper<EntityWithServiceImplAndDTOClass>;
    let comp: EntityWithServiceImplAndDTOClass;
    let entityWithServiceImplAndDTOServiceStub: SinonStubbedInstance<EntityWithServiceImplAndDTOService>;

    beforeEach(() => {
      entityWithServiceImplAndDTOServiceStub = sinon.createStubInstance<EntityWithServiceImplAndDTOService>(
        EntityWithServiceImplAndDTOService
      );

      wrapper = shallowMount<EntityWithServiceImplAndDTOClass>(EntityWithServiceImplAndDTOUpdateComponent, {
        store,
        i18n,
        localVue,
        router,
        provide: {
          alertService: () => new AlertService(store),
          entityWithServiceImplAndDTOService: () => entityWithServiceImplAndDTOServiceStub
        }
      });
      comp = wrapper.vm;
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', async () => {
        // GIVEN
        const entity = { id: 123 };
        comp.entityWithServiceImplAndDTO = entity;
        entityWithServiceImplAndDTOServiceStub.update.resolves(entity);

        // WHEN
        comp.save();
        await comp.$nextTick();

        // THEN
        expect(entityWithServiceImplAndDTOServiceStub.update.calledWith(entity)).toBeTruthy();
        expect(comp.isSaving).toEqual(false);
      });

      it('Should call create service on save for new entity', async () => {
        // GIVEN
        const entity = {};
        comp.entityWithServiceImplAndDTO = entity;
        entityWithServiceImplAndDTOServiceStub.create.resolves(entity);

        // WHEN
        comp.save();
        await comp.$nextTick();

        // THEN
        expect(entityWithServiceImplAndDTOServiceStub.create.calledWith(entity)).toBeTruthy();
        expect(comp.isSaving).toEqual(false);
      });
    });
  });
});
