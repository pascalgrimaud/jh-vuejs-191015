/* tslint:disable max-line-length */
import { shallowMount, createLocalVue, Wrapper } from '@vue/test-utils';
import sinon, { SinonStubbedInstance } from 'sinon';
import Router from 'vue-router';

import AlertService from '@/shared/alert/alert.service';
import * as config from '@/shared/config/config';
import BankAccountMySuffixUpdateComponent from '@/entities/test-root/bank-account-my-suffix/bank-account-my-suffix-update.vue';
import BankAccountMySuffixClass from '@/entities/test-root/bank-account-my-suffix/bank-account-my-suffix-update.component';
import BankAccountMySuffixService from '@/entities/test-root/bank-account-my-suffix/bank-account-my-suffix.service';

import UserService from '@/admin/user-management/user-management.service';

import OperationService from '@/entities/test-root/operation/operation.service';

const localVue = createLocalVue();

config.initVueApp(localVue);
const i18n = config.initI18N(localVue);
const store = config.initVueXStore(localVue);
const router = new Router();
localVue.use(Router);
localVue.component('font-awesome-icon', {});

describe('Component Tests', () => {
  describe('BankAccountMySuffix Management Update Component', () => {
    let wrapper: Wrapper<BankAccountMySuffixClass>;
    let comp: BankAccountMySuffixClass;
    let bankAccountServiceStub: SinonStubbedInstance<BankAccountMySuffixService>;

    beforeEach(() => {
      bankAccountServiceStub = sinon.createStubInstance<BankAccountMySuffixService>(BankAccountMySuffixService);

      wrapper = shallowMount<BankAccountMySuffixClass>(BankAccountMySuffixUpdateComponent, {
        store,
        i18n,
        localVue,
        router,
        provide: {
          alertService: () => new AlertService(store),
          bankAccountService: () => bankAccountServiceStub,

          userService: () => new UserService(),

          operationService: () => new OperationService()
        }
      });
      comp = wrapper.vm;
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', async () => {
        // GIVEN
        const entity = { id: 123 };
        comp.bankAccount = entity;
        bankAccountServiceStub.update.resolves(entity);

        // WHEN
        comp.save();
        await comp.$nextTick();

        // THEN
        expect(bankAccountServiceStub.update.calledWith(entity)).toBeTruthy();
        expect(comp.isSaving).toEqual(false);
      });

      it('Should call create service on save for new entity', async () => {
        // GIVEN
        const entity = {};
        comp.bankAccount = entity;
        bankAccountServiceStub.create.resolves(entity);

        // WHEN
        comp.save();
        await comp.$nextTick();

        // THEN
        expect(bankAccountServiceStub.create.calledWith(entity)).toBeTruthy();
        expect(comp.isSaving).toEqual(false);
      });
    });
  });
});
