import { Component, Inject } from 'vue-property-decorator';

import { mixins } from 'vue-class-component';
import JhiDataUtils from '@/shared/data/data-utils.service';

import { numeric, required, minLength, maxLength } from 'vuelidate/lib/validators';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import { DATE_TIME_LONG_FORMAT, INSTANT_FORMAT, ZONED_DATE_TIME_FORMAT } from '@/shared/date/filters';

import AlertService from '@/shared/alert/alert.service';
import { IFieldTestEntity, FieldTestEntity } from '@/shared/model/field-test-entity.model';
import FieldTestEntityService from './field-test-entity.service';

const validations: any = {
  fieldTestEntity: {
    stringTom: {},
    stringRequiredTom: {
      required
    },
    stringMinlengthTom: {
      minLength: minLength(0)
    },
    stringMaxlengthTom: {
      maxLength: maxLength(20)
    },
    stringPatternTom: {},
    integerTom: {},
    integerRequiredTom: {
      required,
      numeric
    },
    integerMinTom: {
      numeric
    },
    integerMaxTom: {
      numeric
    },
    longTom: {},
    longRequiredTom: {
      required,
      numeric
    },
    longMinTom: {
      numeric
    },
    longMaxTom: {
      numeric
    },
    floatTom: {},
    floatRequiredTom: {
      required,
      numeric
    },
    floatMinTom: {
      numeric
    },
    floatMaxTom: {
      numeric
    },
    doubleRequiredTom: {
      required,
      numeric
    },
    doubleMinTom: {
      numeric
    },
    doubleMaxTom: {
      numeric
    },
    bigDecimalRequiredTom: {
      required,
      numeric
    },
    bigDecimalMinTom: {
      numeric
    },
    bigDecimalMaxTom: {
      numeric
    },
    localDateTom: {},
    localDateRequiredTom: {
      required
    },
    instantTom: {},
    instantRequiredTom: {
      required
    },
    zonedDateTimeTom: {},
    zonedDateTimeRequiredTom: {
      required
    },
    durationTom: {},
    durationRequiredTom: {
      required,
      numeric
    },
    booleanTom: {},
    booleanRequiredTom: {
      required
    },
    enumTom: {},
    enumRequiredTom: {
      required
    },
    uuidTom: {},
    uuidRequiredTom: {
      required
    },
    byteImageTom: {},
    byteImageRequiredTom: {
      required
    },
    byteImageMinbytesTom: {},
    byteImageMaxbytesTom: {},
    byteAnyTom: {},
    byteAnyRequiredTom: {
      required
    },
    byteAnyMinbytesTom: {},
    byteAnyMaxbytesTom: {},
    byteTextTom: {},
    byteTextRequiredTom: {
      required
    }
  }
};

@Component({
  validations
})
export default class FieldTestEntityUpdate extends mixins(JhiDataUtils) {
  @Inject('alertService') private alertService: () => AlertService;
  @Inject('fieldTestEntityService') private fieldTestEntityService: () => FieldTestEntityService;
  public fieldTestEntity: IFieldTestEntity = new FieldTestEntity();
  public isSaving = false;

  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (to.params.fieldTestEntityId) {
        vm.retrieveFieldTestEntity(to.params.fieldTestEntityId);
      }
    });
  }

  public save(): void {
    this.isSaving = true;
    if (this.fieldTestEntity.id) {
      this.fieldTestEntityService()
        .update(this.fieldTestEntity)
        .then(param => {
          this.isSaving = false;
          this.$router.go(-1);
          const message = this.$t('jhipsterApp.fieldTestEntity.updated', { param: param.id });
          this.alertService().showAlert(message, 'info');
        });
    } else {
      this.fieldTestEntityService()
        .create(this.fieldTestEntity)
        .then(param => {
          this.isSaving = false;
          this.$router.go(-1);
          const message = this.$t('jhipsterApp.fieldTestEntity.created', { param: param.id });
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
      this.fieldTestEntity[field] = parse(event.target.value, DATE_TIME_LONG_FORMAT, new Date());
    } else {
      this.fieldTestEntity[field] = null;
    }
  }

  public updateZonedDateTimeField(field, event) {
    if (event.target.value) {
      this.fieldTestEntity[field] = parse(event.target.value, DATE_TIME_LONG_FORMAT, new Date());
    } else {
      this.fieldTestEntity[field] = null;
    }
  }

  public retrieveFieldTestEntity(fieldTestEntityId): void {
    this.fieldTestEntityService()
      .find(fieldTestEntityId)
      .then(res => {
        this.fieldTestEntity = res;
      });
  }

  public previousState(): void {
    this.$router.go(-1);
  }

  public clearInputImage(field, fieldContentType, idInput): void {
    if (this.fieldTestEntity && field && fieldContentType) {
      if (this.fieldTestEntity.hasOwnProperty(field)) {
        this.fieldTestEntity[field] = null;
      }
      if (this.fieldTestEntity.hasOwnProperty(fieldContentType)) {
        this.fieldTestEntity[fieldContentType] = null;
      }
      if (idInput) {
        (<any>this).$refs[idInput] = null;
      }
    }
  }

  public initRelationships(): void {}
}
