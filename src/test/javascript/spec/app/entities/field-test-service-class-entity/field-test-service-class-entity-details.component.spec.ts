/* tslint:disable max-line-length */
import { shallowMount, createLocalVue, Wrapper } from '@vue/test-utils';
import sinon, { SinonStubbedInstance } from 'sinon';

import * as config from '@/shared/config/config';
import FieldTestServiceClassEntityDetailComponent from '@/entities/field-test-service-class-entity/field-test-service-class-entity-details.vue';
import FieldTestServiceClassEntityClass from '@/entities/field-test-service-class-entity/field-test-service-class-entity-details.component';
import FieldTestServiceClassEntityService from '@/entities/field-test-service-class-entity/field-test-service-class-entity.service';

const localVue = createLocalVue();

config.initVueApp(localVue);
const i18n = config.initI18N(localVue);
const store = config.initVueXStore(localVue);
localVue.component('font-awesome-icon', {});
localVue.component('router-link', {});

describe('Component Tests', () => {
  describe('FieldTestServiceClassEntity Management Detail Component', () => {
    let wrapper: Wrapper<FieldTestServiceClassEntityClass>;
    let comp: FieldTestServiceClassEntityClass;
    let fieldTestServiceClassEntityServiceStub: SinonStubbedInstance<FieldTestServiceClassEntityService>;

    beforeEach(() => {
      fieldTestServiceClassEntityServiceStub = sinon.createStubInstance<FieldTestServiceClassEntityService>(
        FieldTestServiceClassEntityService
      );

      wrapper = shallowMount<FieldTestServiceClassEntityClass>(FieldTestServiceClassEntityDetailComponent, {
        store,
        i18n,
        localVue,
        provide: { fieldTestServiceClassEntityService: () => fieldTestServiceClassEntityServiceStub }
      });
      comp = wrapper.vm;
    });

    describe('OnInit', () => {
      it('Should call load all on init', async () => {
        // GIVEN
        const foundFieldTestServiceClassEntity = { id: 123 };
        fieldTestServiceClassEntityServiceStub.find.resolves(foundFieldTestServiceClassEntity);

        // WHEN
        comp.retrieveFieldTestServiceClassEntity(123);
        await comp.$nextTick();

        // THEN
        expect(comp.fieldTestServiceClassEntity).toBe(foundFieldTestServiceClassEntity);
      });
    });
  });
});
