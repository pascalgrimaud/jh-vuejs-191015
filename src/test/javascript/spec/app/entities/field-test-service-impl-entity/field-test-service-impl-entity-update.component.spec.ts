/* tslint:disable max-line-length */
import { shallowMount, createLocalVue, Wrapper } from '@vue/test-utils';
import sinon, { SinonStubbedInstance } from 'sinon';
import Router from 'vue-router';

import AlertService from '@/shared/alert/alert.service';
import * as config from '@/shared/config/config';
import FieldTestServiceImplEntityUpdateComponent from '@/entities/field-test-service-impl-entity/field-test-service-impl-entity-update.vue';
import FieldTestServiceImplEntityClass from '@/entities/field-test-service-impl-entity/field-test-service-impl-entity-update.component';
import FieldTestServiceImplEntityService from '@/entities/field-test-service-impl-entity/field-test-service-impl-entity.service';

const localVue = createLocalVue();

config.initVueApp(localVue);
const i18n = config.initI18N(localVue);
const store = config.initVueXStore(localVue);
const router = new Router();
localVue.use(Router);
localVue.component('font-awesome-icon', {});

describe('Component Tests', () => {
  describe('FieldTestServiceImplEntity Management Update Component', () => {
    let wrapper: Wrapper<FieldTestServiceImplEntityClass>;
    let comp: FieldTestServiceImplEntityClass;
    let fieldTestServiceImplEntityServiceStub: SinonStubbedInstance<FieldTestServiceImplEntityService>;

    beforeEach(() => {
      fieldTestServiceImplEntityServiceStub = sinon.createStubInstance<FieldTestServiceImplEntityService>(
        FieldTestServiceImplEntityService
      );

      wrapper = shallowMount<FieldTestServiceImplEntityClass>(FieldTestServiceImplEntityUpdateComponent, {
        store,
        i18n,
        localVue,
        router,
        provide: {
          alertService: () => new AlertService(store),
          fieldTestServiceImplEntityService: () => fieldTestServiceImplEntityServiceStub
        }
      });
      comp = wrapper.vm;
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', async () => {
        // GIVEN
        const entity = { id: 123 };
        comp.fieldTestServiceImplEntity = entity;
        fieldTestServiceImplEntityServiceStub.update.resolves(entity);

        // WHEN
        comp.save();
        await comp.$nextTick();

        // THEN
        expect(fieldTestServiceImplEntityServiceStub.update.calledWith(entity)).toBeTruthy();
        expect(comp.isSaving).toEqual(false);
      });

      it('Should call create service on save for new entity', async () => {
        // GIVEN
        const entity = {};
        comp.fieldTestServiceImplEntity = entity;
        fieldTestServiceImplEntityServiceStub.create.resolves(entity);

        // WHEN
        comp.save();
        await comp.$nextTick();

        // THEN
        expect(fieldTestServiceImplEntityServiceStub.create.calledWith(entity)).toBeTruthy();
        expect(comp.isSaving).toEqual(false);
      });
    });
  });
});
