/* tslint:disable max-line-length */
import { shallowMount, createLocalVue, Wrapper } from '@vue/test-utils';
import sinon, { SinonStubbedInstance } from 'sinon';

import * as config from '@/shared/config/config';
import FieldTestInfiniteScrollEntityDetailComponent from '@/entities/field-test-infinite-scroll-entity/field-test-infinite-scroll-entity-details.vue';
import FieldTestInfiniteScrollEntityClass from '@/entities/field-test-infinite-scroll-entity/field-test-infinite-scroll-entity-details.component';
import FieldTestInfiniteScrollEntityService from '@/entities/field-test-infinite-scroll-entity/field-test-infinite-scroll-entity.service';

const localVue = createLocalVue();

config.initVueApp(localVue);
const i18n = config.initI18N(localVue);
const store = config.initVueXStore(localVue);
localVue.component('font-awesome-icon', {});
localVue.component('router-link', {});

describe('Component Tests', () => {
  describe('FieldTestInfiniteScrollEntity Management Detail Component', () => {
    let wrapper: Wrapper<FieldTestInfiniteScrollEntityClass>;
    let comp: FieldTestInfiniteScrollEntityClass;
    let fieldTestInfiniteScrollEntityServiceStub: SinonStubbedInstance<FieldTestInfiniteScrollEntityService>;

    beforeEach(() => {
      fieldTestInfiniteScrollEntityServiceStub = sinon.createStubInstance<FieldTestInfiniteScrollEntityService>(
        FieldTestInfiniteScrollEntityService
      );

      wrapper = shallowMount<FieldTestInfiniteScrollEntityClass>(FieldTestInfiniteScrollEntityDetailComponent, {
        store,
        i18n,
        localVue,
        provide: { fieldTestInfiniteScrollEntityService: () => fieldTestInfiniteScrollEntityServiceStub }
      });
      comp = wrapper.vm;
    });

    describe('OnInit', () => {
      it('Should call load all on init', async () => {
        // GIVEN
        const foundFieldTestInfiniteScrollEntity = { id: 123 };
        fieldTestInfiniteScrollEntityServiceStub.find.resolves(foundFieldTestInfiniteScrollEntity);

        // WHEN
        comp.retrieveFieldTestInfiniteScrollEntity(123);
        await comp.$nextTick();

        // THEN
        expect(comp.fieldTestInfiniteScrollEntity).toBe(foundFieldTestInfiniteScrollEntity);
      });
    });
  });
});
