/* tslint:disable max-line-length */
import { shallowMount, createLocalVue, Wrapper } from '@vue/test-utils';
import sinon, { SinonStubbedInstance } from 'sinon';
import Router from 'vue-router';

import AlertService from '@/shared/alert/alert.service';
import * as config from '@/shared/config/config';
import EntityWithServiceClassUpdateComponent from '@/entities/entity-with-service-class/entity-with-service-class-update.vue';
import EntityWithServiceClassClass from '@/entities/entity-with-service-class/entity-with-service-class-update.component';
import EntityWithServiceClassService from '@/entities/entity-with-service-class/entity-with-service-class.service';

const localVue = createLocalVue();

config.initVueApp(localVue);
const i18n = config.initI18N(localVue);
const store = config.initVueXStore(localVue);
const router = new Router();
localVue.use(Router);
localVue.component('font-awesome-icon', {});

describe('Component Tests', () => {
  describe('EntityWithServiceClass Management Update Component', () => {
    let wrapper: Wrapper<EntityWithServiceClassClass>;
    let comp: EntityWithServiceClassClass;
    let entityWithServiceClassServiceStub: SinonStubbedInstance<EntityWithServiceClassService>;

    beforeEach(() => {
      entityWithServiceClassServiceStub = sinon.createStubInstance<EntityWithServiceClassService>(EntityWithServiceClassService);

      wrapper = shallowMount<EntityWithServiceClassClass>(EntityWithServiceClassUpdateComponent, {
        store,
        i18n,
        localVue,
        router,
        provide: {
          alertService: () => new AlertService(store),
          entityWithServiceClassService: () => entityWithServiceClassServiceStub
        }
      });
      comp = wrapper.vm;
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', async () => {
        // GIVEN
        const entity = { id: 123 };
        comp.entityWithServiceClass = entity;
        entityWithServiceClassServiceStub.update.resolves(entity);

        // WHEN
        comp.save();
        await comp.$nextTick();

        // THEN
        expect(entityWithServiceClassServiceStub.update.calledWith(entity)).toBeTruthy();
        expect(comp.isSaving).toEqual(false);
      });

      it('Should call create service on save for new entity', async () => {
        // GIVEN
        const entity = {};
        comp.entityWithServiceClass = entity;
        entityWithServiceClassServiceStub.create.resolves(entity);

        // WHEN
        comp.save();
        await comp.$nextTick();

        // THEN
        expect(entityWithServiceClassServiceStub.create.calledWith(entity)).toBeTruthy();
        expect(comp.isSaving).toEqual(false);
      });
    });
  });
});
