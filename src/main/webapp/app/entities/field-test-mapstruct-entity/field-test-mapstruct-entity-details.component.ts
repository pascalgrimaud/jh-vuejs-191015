import { Component, Inject } from 'vue-property-decorator';

import { mixins } from 'vue-class-component';
import JhiDataUtils from '@/shared/data/data-utils.service';

import { IFieldTestMapstructEntity } from '@/shared/model/field-test-mapstruct-entity.model';
import FieldTestMapstructEntityService from './field-test-mapstruct-entity.service';

@Component
export default class FieldTestMapstructEntityDetails extends mixins(JhiDataUtils) {
  @Inject('fieldTestMapstructEntityService') private fieldTestMapstructEntityService: () => FieldTestMapstructEntityService;
  public fieldTestMapstructEntity: IFieldTestMapstructEntity = {};

  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (to.params.fieldTestMapstructEntityId) {
        vm.retrieveFieldTestMapstructEntity(to.params.fieldTestMapstructEntityId);
      }
    });
  }

  public retrieveFieldTestMapstructEntity(fieldTestMapstructEntityId) {
    this.fieldTestMapstructEntityService()
      .find(fieldTestMapstructEntityId)
      .then(res => {
        this.fieldTestMapstructEntity = res;
      });
  }

  public previousState() {
    this.$router.go(-1);
  }
}
