import { Component, Inject } from 'vue-property-decorator';

import { mixins } from 'vue-class-component';
import JhiDataUtils from '@/shared/data/data-utils.service';

import { IFieldTestPagerEntity } from '@/shared/model/field-test-pager-entity.model';
import FieldTestPagerEntityService from './field-test-pager-entity.service';

@Component
export default class FieldTestPagerEntityDetails extends mixins(JhiDataUtils) {
  @Inject('fieldTestPagerEntityService') private fieldTestPagerEntityService: () => FieldTestPagerEntityService;
  public fieldTestPagerEntity: IFieldTestPagerEntity = {};

  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (to.params.fieldTestPagerEntityId) {
        vm.retrieveFieldTestPagerEntity(to.params.fieldTestPagerEntityId);
      }
    });
  }

  public retrieveFieldTestPagerEntity(fieldTestPagerEntityId) {
    this.fieldTestPagerEntityService()
      .find(fieldTestPagerEntityId)
      .then(res => {
        this.fieldTestPagerEntity = res;
      });
  }

  public previousState() {
    this.$router.go(-1);
  }
}
