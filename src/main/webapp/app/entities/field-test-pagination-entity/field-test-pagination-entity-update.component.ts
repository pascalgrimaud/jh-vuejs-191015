import { Component, Inject } from 'vue-property-decorator';

import { mixins } from 'vue-class-component';
import JhiDataUtils from '@/shared/data/data-utils.service';

import { numeric, required, minLength, maxLength } from 'vuelidate/lib/validators';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import { DATE_TIME_LONG_FORMAT, INSTANT_FORMAT, ZONED_DATE_TIME_FORMAT } from '@/shared/date/filters';

import AlertService from '@/shared/alert/alert.service';
import { IFieldTestPaginationEntity, FieldTestPaginationEntity } from '@/shared/model/field-test-pagination-entity.model';
import FieldTestPaginationEntityService from './field-test-pagination-entity.service';

const validations: any = {
  fieldTestPaginationEntity: {
    stringAlice: {},
    stringRequiredAlice: {
      required
    },
    stringMinlengthAlice: {
      minLength: minLength(0)
    },
    stringMaxlengthAlice: {
      maxLength: maxLength(20)
    },
    stringPatternAlice: {},
    integerAlice: {},
    integerRequiredAlice: {
      required,
      numeric
    },
    integerMinAlice: {
      numeric
    },
    integerMaxAlice: {
      numeric
    },
    longAlice: {},
    longRequiredAlice: {
      required,
      numeric
    },
    longMinAlice: {
      numeric
    },
    longMaxAlice: {
      numeric
    },
    floatAlice: {},
    floatRequiredAlice: {
      required,
      numeric
    },
    floatMinAlice: {
      numeric
    },
    floatMaxAlice: {
      numeric
    },
    doubleRequiredAlice: {
      required,
      numeric
    },
    doubleMinAlice: {
      numeric
    },
    doubleMaxAlice: {
      numeric
    },
    bigDecimalRequiredAlice: {
      required,
      numeric
    },
    bigDecimalMinAlice: {
      numeric
    },
    bigDecimalMaxAlice: {
      numeric
    },
    localDateAlice: {},
    localDateRequiredAlice: {
      required
    },
    instantAlice: {},
    instanteRequiredAlice: {
      required
    },
    zonedDateTimeAlice: {},
    zonedDateTimeRequiredAlice: {
      required
    },
    durationAlice: {},
    durationRequiredAlice: {
      required,
      numeric
    },
    booleanAlice: {},
    booleanRequiredAlice: {
      required
    },
    enumAlice: {},
    enumRequiredAlice: {
      required
    },
    uuidAlice: {},
    uuidRequiredAlice: {
      required
    },
    byteImageAlice: {},
    byteImageRequiredAlice: {
      required
    },
    byteImageMinbytesAlice: {},
    byteImageMaxbytesAlice: {},
    byteAnyAlice: {},
    byteAnyRequiredAlice: {
      required
    },
    byteAnyMinbytesAlice: {},
    byteAnyMaxbytesAlice: {},
    byteTextAlice: {},
    byteTextRequiredAlice: {
      required
    }
  }
};

@Component({
  validations
})
export default class FieldTestPaginationEntityUpdate extends mixins(JhiDataUtils) {
  @Inject('alertService') private alertService: () => AlertService;
  @Inject('fieldTestPaginationEntityService') private fieldTestPaginationEntityService: () => FieldTestPaginationEntityService;
  public fieldTestPaginationEntity: IFieldTestPaginationEntity = new FieldTestPaginationEntity();
  public isSaving = false;

  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (to.params.fieldTestPaginationEntityId) {
        vm.retrieveFieldTestPaginationEntity(to.params.fieldTestPaginationEntityId);
      }
    });
  }

  public save(): void {
    this.isSaving = true;
    if (this.fieldTestPaginationEntity.id) {
      this.fieldTestPaginationEntityService()
        .update(this.fieldTestPaginationEntity)
        .then(param => {
          this.isSaving = false;
          this.$router.go(-1);
          const message = this.$t('jhipsterApp.fieldTestPaginationEntity.updated', { param: param.id });
          this.alertService().showAlert(message, 'info');
        });
    } else {
      this.fieldTestPaginationEntityService()
        .create(this.fieldTestPaginationEntity)
        .then(param => {
          this.isSaving = false;
          this.$router.go(-1);
          const message = this.$t('jhipsterApp.fieldTestPaginationEntity.created', { param: param.id });
          this.alertService().showAlert(message, 'success');
        });
    }
  }

  public convertDateTimeFromServer(date: Date): string {
    if (date) {
      return format(date, DATE_TIME_LONG_FORMAT);
    }
    return null;
  }

  public updateInstantField(field, event) {
    if (event.target.value) {
      this.fieldTestPaginationEntity[field] = parse(event.target.value, DATE_TIME_LONG_FORMAT, new Date());
    } else {
      this.fieldTestPaginationEntity[field] = null;
    }
  }

  public updateZonedDateTimeField(field, event) {
    if (event.target.value) {
      this.fieldTestPaginationEntity[field] = parse(event.target.value, DATE_TIME_LONG_FORMAT, new Date());
    } else {
      this.fieldTestPaginationEntity[field] = null;
    }
  }

  public retrieveFieldTestPaginationEntity(fieldTestPaginationEntityId): void {
    this.fieldTestPaginationEntityService()
      .find(fieldTestPaginationEntityId)
      .then(res => {
        this.fieldTestPaginationEntity = res;
      });
  }

  public previousState(): void {
    this.$router.go(-1);
  }

  public clearInputImage(field, fieldContentType, idInput): void {
    if (this.fieldTestPaginationEntity && field && fieldContentType) {
      if (this.fieldTestPaginationEntity.hasOwnProperty(field)) {
        this.fieldTestPaginationEntity[field] = null;
      }
      if (this.fieldTestPaginationEntity.hasOwnProperty(fieldContentType)) {
        this.fieldTestPaginationEntity[fieldContentType] = null;
      }
      if (idInput) {
        (<any>this).$refs[idInput] = null;
      }
    }
  }

  public initRelationships(): void {}
}
