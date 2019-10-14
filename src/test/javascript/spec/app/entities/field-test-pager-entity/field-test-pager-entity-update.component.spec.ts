/* tslint:disable max-line-length */
import { shallowMount, createLocalVue, Wrapper } from '@vue/test-utils';
import sinon, { SinonStubbedInstance } from 'sinon';
import Router from 'vue-router';

import AlertService from '@/shared/alert/alert.service';
import * as config from '@/shared/config/config';
import FieldTestPagerEntityUpdateComponent from '@/entities/field-test-pager-entity/field-test-pager-entity-update.vue';
import FieldTestPagerEntityClass from '@/entities/field-test-pager-entity/field-test-pager-entity-update.component';
import FieldTestPagerEntityService from '@/entities/field-test-pager-entity/field-test-pager-entity.service';

const localVue = createLocalVue();

config.initVueApp(localVue);
const i18n = config.initI18N(localVue);
const store = config.initVueXStore(localVue);
const router = new Router();
localVue.use(Router);
localVue.component('font-awesome-icon', {});

describe('Component Tests', () => {
  describe('FieldTestPagerEntity Management Update Component', () => {
    let wrapper: Wrapper<FieldTestPagerEntityClass>;
    let comp: FieldTestPagerEntityClass;
    let fieldTestPagerEntityServiceStub: SinonStubbedInstance<FieldTestPagerEntityService>;

    beforeEach(() => {
      fieldTestPagerEntityServiceStub = sinon.createStubInstance<FieldTestPagerEntityService>(FieldTestPagerEntityService);

      wrapper = shallowMount<FieldTestPagerEntityClass>(FieldTestPagerEntityUpdateComponent, {
        store,
        i18n,
        localVue,
        router,
        provide: {
          alertService: () => new AlertService(store),
          fieldTestPagerEntityService: () => fieldTestPagerEntityServiceStub
        }
      });
      comp = wrapper.vm;
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', async () => {
        // GIVEN
        const entity = { id: 123 };
        comp.fieldTestPagerEntity = entity;
        fieldTestPagerEntityServiceStub.update.resolves(entity);

        // WHEN
        comp.save();
        await comp.$nextTick();

        // THEN
        expect(fieldTestPagerEntityServiceStub.update.calledWith(entity)).toBeTruthy();
        expect(comp.isSaving).toEqual(false);
      });

      it('Should call create service on save for new entity', async () => {
        // GIVEN
        const entity = {};
        comp.fieldTestPagerEntity = entity;
        fieldTestPagerEntityServiceStub.create.resolves(entity);

        // WHEN
        comp.save();
        await comp.$nextTick();

        // THEN
        expect(fieldTestPagerEntityServiceStub.create.calledWith(entity)).toBeTruthy();
        expect(comp.isSaving).toEqual(false);
      });
    });
  });
});
