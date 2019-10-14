import { Component, Inject } from 'vue-property-decorator';

import { mixins } from 'vue-class-component';
import JhiDataUtils from '@/shared/data/data-utils.service';

import { IFieldTestServiceClassEntity } from '@/shared/model/field-test-service-class-entity.model';
import FieldTestServiceClassEntityService from './field-test-service-class-entity.service';

@Component
export default class FieldTestServiceClassEntityDetails extends mixins(JhiDataUtils) {
  @Inject('fieldTestServiceClassEntityService') private fieldTestServiceClassEntityService: () => FieldTestServiceClassEntityService;
  public fieldTestServiceClassEntity: IFieldTestServiceClassEntity = {};

  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (to.params.fieldTestServiceClassEntityId) {
        vm.retrieveFieldTestServiceClassEntity(to.params.fieldTestServiceClassEntityId);
      }
    });
  }

  public retrieveFieldTestServiceClassEntity(fieldTestServiceClassEntityId) {
    this.fieldTestServiceClassEntityService()
      .find(fieldTestServiceClassEntityId)
      .then(res => {
        this.fieldTestServiceClassEntity = res;
      });
  }

  public previousState() {
    this.$router.go(-1);
  }
}
