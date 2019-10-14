/* tslint:disable max-line-length */
import { shallowMount, createLocalVue, Wrapper } from '@vue/test-utils';
import sinon, { SinonStubbedInstance } from 'sinon';
import Router from 'vue-router';

import AlertService from '@/shared/alert/alert.service';
import * as config from '@/shared/config/config';
import FieldTestServiceClassEntityUpdateComponent from '@/entities/field-test-service-class-entity/field-test-service-class-entity-update.vue';
import FieldTestServiceClassEntityClass from '@/entities/field-test-service-class-entity/field-test-service-class-entity-update.component';
import FieldTestServiceClassEntityService from '@/entities/field-test-service-class-entity/field-test-service-class-entity.service';

const localVue = createLocalVue();

config.initVueApp(localVue);
const i18n = config.initI18N(localVue);
const store = config.initVueXStore(localVue);
const router = new Router();
localVue.use(Router);
localVue.component('font-awesome-icon', {});

describe('Component Tests', () => {
  describe('FieldTestServiceClassEntity Management Update Component', () => {
    let wrapper: Wrapper<FieldTestServiceClassEntityClass>;
    let comp: FieldTestServiceClassEntityClass;
    let fieldTestServiceClassEntityServiceStub: SinonStubbedInstance<FieldTestServiceClassEntityService>;

    beforeEach(() => {
      fieldTestServiceClassEntityServiceStub = sinon.createStubInstance<FieldTestServiceClassEntityService>(
        FieldTestServiceClassEntityService
      );

      wrapper = shallowMount<FieldTestServiceClassEntityClass>(FieldTestServiceClassEntityUpdateComponent, {
        store,
        i18n,
        localVue,
        router,
        provide: {
          alertService: () => new AlertService(store),
          fieldTestServiceClassEntityService: () => fieldTestServiceClassEntityServiceStub
        }
      });
      comp = wrapper.vm;
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', async () => {
        // GIVEN
        const entity = { id: 123 };
        comp.fieldTestServiceClassEntity = entity;
        fieldTestServiceClassEntityServiceStub.update.resolves(entity);

        // WHEN
        comp.save();
        await comp.$nextTick();

        // THEN
        expect(fieldTestServiceClassEntityServiceStub.update.calledWith(entity)).toBeTruthy();
        expect(comp.isSaving).toEqual(false);
      });

      it('Should call create service on save for new entity', async () => {
        // GIVEN
        const entity = {};
        comp.fieldTestServiceClassEntity = entity;
        fieldTestServiceClassEntityServiceStub.create.resolves(entity);

        // WHEN
        comp.save();
        await comp.$nextTick();

        // THEN
        expect(fieldTestServiceClassEntityServiceStub.create.calledWith(entity)).toBeTruthy();
        expect(comp.isSaving).toEqual(false);
      });
    });
  });
});
