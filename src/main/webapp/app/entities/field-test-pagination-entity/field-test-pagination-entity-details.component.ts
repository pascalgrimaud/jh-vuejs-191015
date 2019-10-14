import { Component, Inject } from 'vue-property-decorator';

import { mixins } from 'vue-class-component';
import JhiDataUtils from '@/shared/data/data-utils.service';

import { IFieldTestPaginationEntity } from '@/shared/model/field-test-pagination-entity.model';
import FieldTestPaginationEntityService from './field-test-pagination-entity.service';

@Component
export default class FieldTestPaginationEntityDetails extends mixins(JhiDataUtils) {
  @Inject('fieldTestPaginationEntityService') private fieldTestPaginationEntityService: () => FieldTestPaginationEntityService;
  public fieldTestPaginationEntity: IFieldTestPaginationEntity = {};

  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (to.params.fieldTestPaginationEntityId) {
        vm.retrieveFieldTestPaginationEntity(to.params.fieldTestPaginationEntityId);
      }
    });
  }

  public retrieveFieldTestPaginationEntity(fieldTestPaginationEntityId) {
    this.fieldTestPaginationEntityService()
      .find(fieldTestPaginationEntityId)
      .then(res => {
        this.fieldTestPaginationEntity = res;
      });
  }

  public previousState() {
    this.$router.go(-1);
  }
}
