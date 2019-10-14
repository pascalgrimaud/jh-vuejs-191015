/* tslint:disable max-line-length */
import { shallowMount, createLocalVue, Wrapper } from '@vue/test-utils';
import sinon, { SinonStubbedInstance } from 'sinon';
import Router from 'vue-router';

import AlertService from '@/shared/alert/alert.service';
import * as config from '@/shared/config/config';
import FieldTestMapstructEntityUpdateComponent from '@/entities/field-test-mapstruct-entity/field-test-mapstruct-entity-update.vue';
import FieldTestMapstructEntityClass from '@/entities/field-test-mapstruct-entity/field-test-mapstruct-entity-update.component';
import FieldTestMapstructEntityService from '@/entities/field-test-mapstruct-entity/field-test-mapstruct-entity.service';

const localVue = createLocalVue();

config.initVueApp(localVue);
const i18n = config.initI18N(localVue);
const store = config.initVueXStore(localVue);
const router = new Router();
localVue.use(Router);
localVue.component('font-awesome-icon', {});

describe('Component Tests', () => {
  describe('FieldTestMapstructEntity Management Update Component', () => {
    let wrapper: Wrapper<FieldTestMapstructEntityClass>;
    let comp: FieldTestMapstructEntityClass;
    let fieldTestMapstructEntityServiceStub: SinonStubbedInstance<FieldTestMapstructEntityService>;

    beforeEach(() => {
      fieldTestMapstructEntityServiceStub = sinon.createStubInstance<FieldTestMapstructEntityService>(FieldTestMapstructEntityService);

      wrapper = shallowMount<FieldTestMapstructEntityClass>(FieldTestMapstructEntityUpdateComponent, {
        store,
        i18n,
        localVue,
        router,
        provide: {
          alertService: () => new AlertService(store),
          fieldTestMapstructEntityService: () => fieldTestMapstructEntityServiceStub
        }
      });
      comp = wrapper.vm;
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', async () => {
        // GIVEN
        const entity = { id: 123 };
        comp.fieldTestMapstructEntity = entity;
        fieldTestMapstructEntityServiceStub.update.resolves(entity);

        // WHEN
        comp.save();
        await comp.$nextTick();

        // THEN
        expect(fieldTestMapstructEntityServiceStub.update.calledWith(entity)).toBeTruthy();
        expect(comp.isSaving).toEqual(false);
      });

      it('Should call create service on save for new entity', async () => {
        // GIVEN
        const entity = {};
        comp.fieldTestMapstructEntity = entity;
        fieldTestMapstructEntityServiceStub.create.resolves(entity);

        // WHEN
        comp.save();
        await comp.$nextTick();

        // THEN
        expect(fieldTestMapstructEntityServiceStub.create.calledWith(entity)).toBeTruthy();
        expect(comp.isSaving).toEqual(false);
      });
    });
  });
});
