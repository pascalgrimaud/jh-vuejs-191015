/* tslint:disable max-line-length */
import { shallowMount, createLocalVue, Wrapper } from '@vue/test-utils';
import sinon, { SinonStubbedInstance } from 'sinon';

import * as config from '@/shared/config/config';
import FieldTestEntityDetailComponent from '@/entities/field-test-entity/field-test-entity-details.vue';
import FieldTestEntityClass from '@/entities/field-test-entity/field-test-entity-details.component';
import FieldTestEntityService from '@/entities/field-test-entity/field-test-entity.service';

const localVue = createLocalVue();

config.initVueApp(localVue);
const i18n = config.initI18N(localVue);
const store = config.initVueXStore(localVue);
localVue.component('font-awesome-icon', {});
localVue.component('router-link', {});

describe('Component Tests', () => {
  describe('FieldTestEntity Management Detail Component', () => {
    let wrapper: Wrapper<FieldTestEntityClass>;
    let comp: FieldTestEntityClass;
    let fieldTestEntityServiceStub: SinonStubbedInstance<FieldTestEntityService>;

    beforeEach(() => {
      fieldTestEntityServiceStub = sinon.createStubInstance<FieldTestEntityService>(FieldTestEntityService);

      wrapper = shallowMount<FieldTestEntityClass>(FieldTestEntityDetailComponent, {
        store,
        i18n,
        localVue,
        provide: { fieldTestEntityService: () => fieldTestEntityServiceStub }
      });
      comp = wrapper.vm;
    });

    describe('OnInit', () => {
      it('Should call load all on init', async () => {
        // GIVEN
        const foundFieldTestEntity = { id: 123 };
        fieldTestEntityServiceStub.find.resolves(foundFieldTestEntity);

        // WHEN
        comp.retrieveFieldTestEntity(123);
        await comp.$nextTick();

        // THEN
        expect(comp.fieldTestEntity).toBe(foundFieldTestEntity);
      });
    });
  });
});
