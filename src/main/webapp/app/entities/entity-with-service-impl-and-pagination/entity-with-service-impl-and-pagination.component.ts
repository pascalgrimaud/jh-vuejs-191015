import { mixins } from 'vue-class-component';

import { Component, Inject } from 'vue-property-decorator';
import Vue2Filters from 'vue2-filters';
import { IEntityWithServiceImplAndPagination } from '@/shared/model/entity-with-service-impl-and-pagination.model';
import AlertService from '@/shared/alert/alert.service';

import EntityWithServiceImplAndPaginationService from './entity-with-service-impl-and-pagination.service';

@Component
export default class EntityWithServiceImplAndPagination extends mixins(Vue2Filters.mixin) {
  @Inject('alertService') private alertService: () => AlertService;
  @Inject('entityWithServiceImplAndPaginationService')
  private entityWithServiceImplAndPaginationService: () => EntityWithServiceImplAndPaginationService;
  private removeId: number = null;
  public itemsPerPage = 20;
  public queryCount: number = null;
  public page = 1;
  public previousPage = 1;
  public propOrder = 'id';
  public reverse = false;
  public totalItems = 0;
  public entityWithServiceImplAndPaginations: IEntityWithServiceImplAndPagination[] = [];

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
    this.retrieveAllEntityWithServiceImplAndPaginations();
  }

  public clear(): void {
    this.page = 1;
    this.retrieveAllEntityWithServiceImplAndPaginations();
  }

  public retrieveAllEntityWithServiceImplAndPaginations(): void {
    this.isFetching = true;

    const paginationQuery = {
      page: this.page - 1,
      size: this.itemsPerPage,
      sort: this.sort()
    };
    this.entityWithServiceImplAndPaginationService()
      .retrieve(paginationQuery)
      .then(
        res => {
          this.entityWithServiceImplAndPaginations = res.data;
          this.totalItems = Number(res.headers['x-total-count']);
          this.queryCount = this.totalItems;
          this.isFetching = false;
        },
        err => {
          this.isFetching = false;
        }
      );
  }

  public prepareRemove(instance: IEntityWithServiceImplAndPagination): void {
    this.removeId = instance.id;
  }

  public removeEntityWithServiceImplAndPagination(): void {
    this.entityWithServiceImplAndPaginationService()
      .delete(this.removeId)
      .then(() => {
        const message = this.$t('jhipsterApp.entityWithServiceImplAndPagination.deleted', { param: this.removeId });
        this.alertService().showAlert(message, 'danger');
        this.getAlertFromStore();

        this.removeId = null;
        this.retrieveAllEntityWithServiceImplAndPaginations();
        this.closeDialog();
      });
  }

  public sort(): Array<any> {
    const result = [this.propOrder + ',' + (this.reverse ? 'asc' : 'desc')];
    if (this.propOrder !== 'id') {
      result.push('id');
    }
    return result;
  }

  public loadPage(page: number): void {
    if (page !== this.previousPage) {
      this.previousPage = page;
      this.transition();
    }
  }

  public transition(): void {
    this.retrieveAllEntityWithServiceImplAndPaginations();
  }

  public changeOrder(propOrder): void {
    this.propOrder = propOrder;
    this.reverse = !this.reverse;
    this.transition();
  }

  public closeDialog(): void {
    (<any>this.$refs.removeEntity).hide();
  }
}
