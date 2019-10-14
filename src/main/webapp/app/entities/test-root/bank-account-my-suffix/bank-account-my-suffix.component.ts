import { mixins } from 'vue-class-component';

import { Component, Inject } from 'vue-property-decorator';
import Vue2Filters from 'vue2-filters';
import { IBankAccountMySuffix } from '@/shared/model/test-root/bank-account-my-suffix.model';
import AlertService from '@/shared/alert/alert.service';

import JhiDataUtils from '@/shared/data/data-utils.service';

import BankAccountMySuffixService from './bank-account-my-suffix.service';

@Component
export default class BankAccountMySuffix extends mixins(JhiDataUtils, Vue2Filters.mixin) {
  @Inject('alertService') private alertService: () => AlertService;
  @Inject('bankAccountService') private bankAccountService: () => BankAccountMySuffixService;
  private removeId: number = null;
  public bankAccounts: IBankAccountMySuffix[] = [];

  public isFetching = false;
  public dismissCountDown: number = this.$store.getters.dismissCountDown;
  public dismissSecs: number = this.$store.getters.dismissSecs;
  public alertType: string = this.$store.getters.alertType;
  public alertMessage: any = this.$store.getters.alertMessage;

  public getAlertFromStore() {
    this.dismissCountDown = this.$store.getters.dismissCountDown;
    this.dismissSecs = this.$store.getters.dismissSecs;
    this.alertType = this.$store.getters.alertType;
    this.alertMessage = this.$store.getters.alertMessage;
  }

  public countDownChanged(dismissCountDown: number) {
    this.alertService().countDownChanged(dismissCountDown);
    this.getAlertFromStore();
  }

  public mounted(): void {
    this.retrieveAllBankAccountMySuffixs();
  }

  public clear(): void {
    this.retrieveAllBankAccountMySuffixs();
  }

  public retrieveAllBankAccountMySuffixs(): void {
    this.isFetching = true;

    this.bankAccountService()
      .retrieve()
      .then(
        res => {
          this.bankAccounts = res.data;
          this.isFetching = false;
        },
        err => {
          this.isFetching = false;
        }
      );
  }

  public prepareRemove(instance: IBankAccountMySuffix): void {
    this.removeId = instance.id;
  }

  public removeBankAccountMySuffix(): void {
    this.bankAccountService()
      .delete(this.removeId)
      .then(() => {
        const message = this.$t('jhipsterApp.testRootBankAccount.deleted', { param: this.removeId });
        this.alertService().showAlert(message, 'danger');
        this.getAlertFromStore();

        this.removeId = null;
        this.retrieveAllBankAccountMySuffixs();
        this.closeDialog();
      });
  }

  public closeDialog(): void {
    (<any>this.$refs.removeEntity).hide();
  }
}
