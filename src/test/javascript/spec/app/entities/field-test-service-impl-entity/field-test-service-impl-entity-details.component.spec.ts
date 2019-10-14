/* tslint:disable max-line-length */
import { shallowMount, createLocalVue, Wrapper } from '@vue/test-utils';
import sinon, { SinonStubbedInstance } from 'sinon';

import * as config from '@/shared/config/config';
import FieldTestServiceImplEntityDetailComponent from '@/entities/field-test-service-impl-entity/field-test-service-impl-entity-details.vue';
import FieldTestServiceImplEntityClass from '@/entities/field-test-service-impl-entity/field-test-service-impl-entity-details.component';
import FieldTestServiceImplEntityService from '@/entities/field-test-service-impl-entity/field-test-service-impl-entity.service';

const localVue = createLocalVue();

config.initVueApp(localVue);
const i18n = config.initI18N(localVue);
const store = config.initVueXStore(localVue);
localVue.component('font-awesome-icon', {});
localVue.component('router-link', {});

describe('Component Tests', () => {
  describe('FieldTestServiceImplEntity Management Detail Component', () => {
    let wrapper: Wrapper<FieldTestServiceImplEntityClass>;
    let comp: FieldTestServiceImplEntityClass;
    let fieldTestServiceImplEntityServiceStub: SinonStubbedInstance<FieldTestServiceImplEntityService>;

    beforeEach(() => {
      fieldTestServiceImplEntityServiceStub = sinon.createStubInstance<FieldTestServiceImplEntityService>(
        FieldTestServiceImplEntityService
      );

      wrapper = shallowMount<FieldTestServiceImplEntityClass>(FieldTestServiceImplEntityDetailComponent, {
        store,
        i18n,
        localVue,
        provide: { fieldTestServiceImplEntityService: () => fieldTestServiceImplEntityServiceStub }
      });
      comp = wrapper.vm;
    });

    describe('OnInit', () => {
      it('Should call load all on init', async () => {
        // GIVEN
        const foundFieldTestServiceImplEntity = { id: 123 };
        fieldTestServiceImplEntityServiceStub.find.resolves(foundFieldTestServiceImplEntity);

        // WHEN
        comp.retrieveFieldTestServiceImplEntity(123);
        await comp.$nextTick();

        // THEN
        expect(comp.fieldTestServiceImplEntity).toBe(foundFieldTestServiceImplEntity);
      });
    });
  });
});
