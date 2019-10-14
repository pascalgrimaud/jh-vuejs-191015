/* tslint:disable max-line-length */
import { shallowMount, createLocalVue, Wrapper } from '@vue/test-utils';
import sinon, { SinonStubbedInstance } from 'sinon';

import * as config from '@/shared/config/config';
import FieldTestMapstructEntityDetailComponent from '@/entities/field-test-mapstruct-entity/field-test-mapstruct-entity-details.vue';
import FieldTestMapstructEntityClass from '@/entities/field-test-mapstruct-entity/field-test-mapstruct-entity-details.component';
import FieldTestMapstructEntityService from '@/entities/field-test-mapstruct-entity/field-test-mapstruct-entity.service';

const localVue = createLocalVue();

config.initVueApp(localVue);
const i18n = config.initI18N(localVue);
const store = config.initVueXStore(localVue);
localVue.component('font-awesome-icon', {});
localVue.component('router-link', {});

describe('Component Tests', () => {
  describe('FieldTestMapstructEntity Management Detail Component', () => {
    let wrapper: Wrapper<FieldTestMapstructEntityClass>;
    let comp: FieldTestMapstructEntityClass;
    let fieldTestMapstructEntityServiceStub: SinonStubbedInstance<FieldTestMapstructEntityService>;

    beforeEach(() => {
      fieldTestMapstructEntityServiceStub = sinon.createStubInstance<FieldTestMapstructEntityService>(FieldTestMapstructEntityService);

      wrapper = shallowMount<FieldTestMapstructEntityClass>(FieldTestMapstructEntityDetailComponent, {
        store,
        i18n,
        localVue,
        provide: { fieldTestMapstructEntityService: () => fieldTestMapstructEntityServiceStub }
      });
      comp = wrapper.vm;
    });

    describe('OnInit', () => {
      it('Should call load all on init', async () => {
        // GIVEN
        const foundFieldTestMapstructEntity = { id: 123 };
        fieldTestMapstructEntityServiceStub.find.resolves(foundFieldTestMapstructEntity);

        // WHEN
        comp.retrieveFieldTestMapstructEntity(123);
        await comp.$nextTick();

        // THEN
        expect(comp.fieldTestMapstructEntity).toBe(foundFieldTestMapstructEntity);
      });
    });
  });
});
