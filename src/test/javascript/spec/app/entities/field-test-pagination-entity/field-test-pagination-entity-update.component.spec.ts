/* tslint:disable max-line-length */
import { shallowMount, createLocalVue, Wrapper } from '@vue/test-utils';
import sinon, { SinonStubbedInstance } from 'sinon';
import Router from 'vue-router';

import AlertService from '@/shared/alert/alert.service';
import * as config from '@/shared/config/config';
import FieldTestPaginationEntityUpdateComponent from '@/entities/field-test-pagination-entity/field-test-pagination-entity-update.vue';
import FieldTestPaginationEntityClass from '@/entities/field-test-pagination-entity/field-test-pagination-entity-update.component';
import FieldTestPaginationEntityService from '@/entities/field-test-pagination-entity/field-test-pagination-entity.service';

const localVue = createLocalVue();

config.initVueApp(localVue);
const i18n = config.initI18N(localVue);
const store = config.initVueXStore(localVue);
const router = new Router();
localVue.use(Router);
localVue.component('font-awesome-icon', {});

describe('Component Tests', () => {
  describe('FieldTestPaginationEntity Management Update Component', () => {
    let wrapper: Wrapper<FieldTestPaginationEntityClass>;
    let comp: FieldTestPaginationEntityClass;
    let fieldTestPaginationEntityServiceStub: SinonStubbedInstance<FieldTestPaginationEntityService>;

    beforeEach(() => {
      fieldTestPaginationEntityServiceStub = sinon.createStubInstance<FieldTestPaginationEntityService>(FieldTestPaginationEntityService);

      wrapper = shallowMount<FieldTestPaginationEntityClass>(FieldTestPaginationEntityUpdateComponent, {
        store,
        i18n,
        localVue,
        router,
        provide: {
          alertService: () => new AlertService(store),
          fieldTestPaginationEntityService: () => fieldTestPaginationEntityServiceStub
        }
      });
      comp = wrapper.vm;
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', async () => {
        // GIVEN
        const entity = { id: 123 };
        comp.fieldTestPaginationEntity = entity;
        fieldTestPaginationEntityServiceStub.update.resolves(entity);

        // WHEN
        comp.save();
        await comp.$nextTick();

        // THEN
        expect(fieldTestPaginationEntityServiceStub.update.calledWith(entity)).toBeTruthy();
        expect(comp.isSaving).toEqual(false);
      });

      it('Should call create service on save for new entity', async () => {
        // GIVEN
        const entity = {};
        comp.fieldTestPaginationEntity = entity;
        fieldTestPaginationEntityServiceStub.create.resolves(entity);

        // WHEN
        comp.save();
        await comp.$nextTick();

        // THEN
        expect(fieldTestPaginationEntityServiceStub.create.calledWith(entity)).toBeTruthy();
        expect(comp.isSaving).toEqual(false);
      });
    });
  });
});
