/* tslint:disable max-line-length */
import { shallowMount, createLocalVue, Wrapper } from '@vue/test-utils';
import sinon, { SinonStubbedInstance } from 'sinon';
import Router from 'vue-router';

import AlertService from '@/shared/alert/alert.service';
import * as config from '@/shared/config/config';
import EntityWithServiceImplUpdateComponent from '@/entities/entity-with-service-impl/entity-with-service-impl-update.vue';
import EntityWithServiceImplClass from '@/entities/entity-with-service-impl/entity-with-service-impl-update.component';
import EntityWithServiceImplService from '@/entities/entity-with-service-impl/entity-with-service-impl.service';

const localVue = createLocalVue();

config.initVueApp(localVue);
const i18n = config.initI18N(localVue);
const store = config.initVueXStore(localVue);
const router = new Router();
localVue.use(Router);
localVue.component('font-awesome-icon', {});

describe('Component Tests', () => {
  describe('EntityWithServiceImpl Management Update Component', () => {
    let wrapper: Wrapper<EntityWithServiceImplClass>;
    let comp: EntityWithServiceImplClass;
    let entityWithServiceImplServiceStub: SinonStubbedInstance<EntityWithServiceImplService>;

    beforeEach(() => {
      entityWithServiceImplServiceStub = sinon.createStubInstance<EntityWithServiceImplService>(EntityWithServiceImplService);

      wrapper = shallowMount<EntityWithServiceImplClass>(EntityWithServiceImplUpdateComponent, {
        store,
        i18n,
        localVue,
        router,
        provide: {
          alertService: () => new AlertService(store),
          entityWithServiceImplService: () => entityWithServiceImplServiceStub
        }
      });
      comp = wrapper.vm;
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', async () => {
        // GIVEN
        const entity = { id: 123 };
        comp.entityWithServiceImpl = entity;
        entityWithServiceImplServiceStub.update.resolves(entity);

        // WHEN
        comp.save();
        await comp.$nextTick();

        // THEN
        expect(entityWithServiceImplServiceStub.update.calledWith(entity)).toBeTruthy();
        expect(comp.isSaving).toEqual(false);
      });

      it('Should call create service on save for new entity', async () => {
        // GIVEN
        const entity = {};
        comp.entityWithServiceImpl = entity;
        entityWithServiceImplServiceStub.create.resolves(entity);

        // WHEN
        comp.save();
        await comp.$nextTick();

        // THEN
        expect(entityWithServiceImplServiceStub.create.calledWith(entity)).toBeTruthy();
        expect(comp.isSaving).toEqual(false);
      });
    });
  });
});
