import { Component, Inject } from 'vue-property-decorator';

import { mixins } from 'vue-class-component';
import JhiDataUtils from '@/shared/data/data-utils.service';

import { IFieldTestEntity } from '@/shared/model/field-test-entity.model';
import FieldTestEntityService from './field-test-entity.service';

@Component
export default class FieldTestEntityDetails extends mixins(JhiDataUtils) {
  @Inject('fieldTestEntityService') private fieldTestEntityService: () => FieldTestEntityService;
  public fieldTestEntity: IFieldTestEntity = {};

  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (to.params.fieldTestEntityId) {
        vm.retrieveFieldTestEntity(to.params.fieldTestEntityId);
      }
    });
  }

  public retrieveFieldTestEntity(fieldTestEntityId) {
    this.fieldTestEntityService()
      .find(fieldTestEntityId)
      .then(res => {
        this.fieldTestEntity = res;
      });
  }

  public previousState() {
    this.$router.go(-1);
  }
}
