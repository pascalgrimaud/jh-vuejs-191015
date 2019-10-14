/* tslint:disable max-line-length */
import { shallowMount, createLocalVue, Wrapper } from '@vue/test-utils';
import sinon, { SinonStubbedInstance } from 'sinon';
import Router from 'vue-router';

import AlertService from '@/shared/alert/alert.service';
import * as config from '@/shared/config/config';
import FieldTestInfiniteScrollEntityUpdateComponent from '@/entities/field-test-infinite-scroll-entity/field-test-infinite-scroll-entity-update.vue';
import FieldTestInfiniteScrollEntityClass from '@/entities/field-test-infinite-scroll-entity/field-test-infinite-scroll-entity-update.component';
import FieldTestInfiniteScrollEntityService from '@/entities/field-test-infinite-scroll-entity/field-test-infinite-scroll-entity.service';

const localVue = createLocalVue();

config.initVueApp(localVue);
const i18n = config.initI18N(localVue);
const store = config.initVueXStore(localVue);
const router = new Router();
localVue.use(Router);
localVue.component('font-awesome-icon', {});

describe('Component Tests', () => {
  describe('FieldTestInfiniteScrollEntity Management Update Component', () => {
    let wrapper: Wrapper<FieldTestInfiniteScrollEntityClass>;
    let comp: FieldTestInfiniteScrollEntityClass;
    let fieldTestInfiniteScrollEntityServiceStub: SinonStubbedInstance<FieldTestInfiniteScrollEntityService>;

    beforeEach(() => {
      fieldTestInfiniteScrollEntityServiceStub = sinon.createStubInstance<FieldTestInfiniteScrollEntityService>(
        FieldTestInfiniteScrollEntityService
      );

      wrapper = shallowMount<FieldTestInfiniteScrollEntityClass>(FieldTestInfiniteScrollEntityUpdateComponent, {
        store,
        i18n,
        localVue,
        router,
        provide: {
          alertService: () => new AlertService(store),
          fieldTestInfiniteScrollEntityService: () => fieldTestInfiniteScrollEntityServiceStub
        }
      });
      comp = wrapper.vm;
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', async () => {
        // GIVEN
        const entity = { id: 123 };
        comp.fieldTestInfiniteScrollEntity = entity;
        fieldTestInfiniteScrollEntityServiceStub.update.resolves(entity);

        // WHEN
        comp.save();
        await comp.$nextTick();

        // THEN
        expect(fieldTestInfiniteScrollEntityServiceStub.update.calledWith(entity)).toBeTruthy();
        expect(comp.isSaving).toEqual(false);
      });

      it('Should call create service on save for new entity', async () => {
        // GIVEN
        const entity = {};
        comp.fieldTestInfiniteScrollEntity = entity;
        fieldTestInfiniteScrollEntityServiceStub.create.resolves(entity);

        // WHEN
        comp.save();
        await comp.$nextTick();

        // THEN
        expect(fieldTestInfiniteScrollEntityServiceStub.create.calledWith(entity)).toBeTruthy();
        expect(comp.isSaving).toEqual(false);
      });
    });
  });
});
