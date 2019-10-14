import { Component, Inject } from 'vue-property-decorator';

import { mixins } from 'vue-class-component';
import JhiDataUtils from '@/shared/data/data-utils.service';

import { IFieldTestInfiniteScrollEntity } from '@/shared/model/field-test-infinite-scroll-entity.model';
import FieldTestInfiniteScrollEntityService from './field-test-infinite-scroll-entity.service';

@Component
export default class FieldTestInfiniteScrollEntityDetails extends mixins(JhiDataUtils) {
  @Inject('fieldTestInfiniteScrollEntityService') private fieldTestInfiniteScrollEntityService: () => FieldTestInfiniteScrollEntityService;
  public fieldTestInfiniteScrollEntity: IFieldTestInfiniteScrollEntity = {};

  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (to.params.fieldTestInfiniteScrollEntityId) {
        vm.retrieveFieldTestInfiniteScrollEntity(to.params.fieldTestInfiniteScrollEntityId);
      }
    });
  }

  public retrieveFieldTestInfiniteScrollEntity(fieldTestInfiniteScrollEntityId) {
    this.fieldTestInfiniteScrollEntityService()
      .find(fieldTestInfiniteScrollEntityId)
      .then(res => {
        this.fieldTestInfiniteScrollEntity = res;
      });
  }

  public previousState() {
    this.$router.go(-1);
  }
}
