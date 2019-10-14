/* tslint:disable max-line-length */
import { shallowMount, createLocalVue, Wrapper } from '@vue/test-utils';
import sinon, { SinonStubbedInstance } from 'sinon';
import Router from 'vue-router';

import AlertService from '@/shared/alert/alert.service';
import * as config from '@/shared/config/config';
import EntityWithServiceClassAndDTOUpdateComponent from '@/entities/entity-with-service-class-and-dto/entity-with-service-class-and-dto-update.vue';
import EntityWithServiceClassAndDTOClass from '@/entities/entity-with-service-class-and-dto/entity-with-service-class-and-dto-update.component';
import EntityWithServiceClassAndDTOService from '@/entities/entity-with-service-class-and-dto/entity-with-service-class-and-dto.service';

const localVue = createLocalVue();

config.initVueApp(localVue);
const i18n = config.initI18N(localVue);
const store = config.initVueXStore(localVue);
const router = new Router();
localVue.use(Router);
localVue.component('font-awesome-icon', {});

describe('Component Tests', () => {
  describe('EntityWithServiceClassAndDTO Management Update Component', () => {
    let wrapper: Wrapper<EntityWithServiceClassAndDTOClass>;
    let comp: EntityWithServiceClassAndDTOClass;
    let entityWithServiceClassAndDTOServiceStub: SinonStubbedInstance<EntityWithServiceClassAndDTOService>;

    beforeEach(() => {
      entityWithServiceClassAndDTOServiceStub = sinon.createStubInstance<EntityWithServiceClassAndDTOService>(
        EntityWithServiceClassAndDTOService
      );

      wrapper = shallowMount<EntityWithServiceClassAndDTOClass>(EntityWithServiceClassAndDTOUpdateComponent, {
        store,
        i18n,
        localVue,
        router,
        provide: {
          alertService: () => new AlertService(store),
          entityWithServiceClassAndDTOService: () => entityWithServiceClassAndDTOServiceStub
        }
      });
      comp = wrapper.vm;
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', async () => {
        // GIVEN
        const entity = { id: 123 };
        comp.entityWithServiceClassAndDTO = entity;
        entityWithServiceClassAndDTOServiceStub.update.resolves(entity);

        // WHEN
        comp.save();
        await comp.$nextTick();

        // THEN
        expect(entityWithServiceClassAndDTOServiceStub.update.calledWith(entity)).toBeTruthy();
        expect(comp.isSaving).toEqual(false);
      });

      it('Should call create service on save for new entity', async () => {
        // GIVEN
        const entity = {};
        comp.entityWithServiceClassAndDTO = entity;
        entityWithServiceClassAndDTOServiceStub.create.resolves(entity);

        // WHEN
        comp.save();
        await comp.$nextTick();

        // THEN
        expect(entityWithServiceClassAndDTOServiceStub.create.calledWith(entity)).toBeTruthy();
        expect(comp.isSaving).toEqual(false);
      });
    });
  });
});
