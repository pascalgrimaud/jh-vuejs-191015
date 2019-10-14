/* tslint:disable max-line-length */
import { shallowMount, createLocalVue, Wrapper } from '@vue/test-utils';
import sinon, { SinonStubbedInstance } from 'sinon';

import * as config from '@/shared/config/config';
import FieldTestPagerEntityDetailComponent from '@/entities/field-test-pager-entity/field-test-pager-entity-details.vue';
import FieldTestPagerEntityClass from '@/entities/field-test-pager-entity/field-test-pager-entity-details.component';
import FieldTestPagerEntityService from '@/entities/field-test-pager-entity/field-test-pager-entity.service';

const localVue = createLocalVue();

config.initVueApp(localVue);
const i18n = config.initI18N(localVue);
const store = config.initVueXStore(localVue);
localVue.component('font-awesome-icon', {});
localVue.component('router-link', {});

describe('Component Tests', () => {
  describe('FieldTestPagerEntity Management Detail Component', () => {
    let wrapper: Wrapper<FieldTestPagerEntityClass>;
    let comp: FieldTestPagerEntityClass;
    let fieldTestPagerEntityServiceStub: SinonStubbedInstance<FieldTestPagerEntityService>;

    beforeEach(() => {
      fieldTestPagerEntityServiceStub = sinon.createStubInstance<FieldTestPagerEntityService>(FieldTestPagerEntityService);

      wrapper = shallowMount<FieldTestPagerEntityClass>(FieldTestPagerEntityDetailComponent, {
        store,
        i18n,
        localVue,
        provide: { fieldTestPagerEntityService: () => fieldTestPagerEntityServiceStub }
      });
      comp = wrapper.vm;
    });

    describe('OnInit', () => {
      it('Should call load all on init', async () => {
        // GIVEN
        const foundFieldTestPagerEntity = { id: 123 };
        fieldTestPagerEntityServiceStub.find.resolves(foundFieldTestPagerEntity);

        // WHEN
        comp.retrieveFieldTestPagerEntity(123);
        await comp.$nextTick();

        // THEN
        expect(comp.fieldTestPagerEntity).toBe(foundFieldTestPagerEntity);
      });
    });
  });
});
