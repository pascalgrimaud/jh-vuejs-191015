import { Component, Inject } from 'vue-property-decorator';

import { mixins } from 'vue-class-component';
import JhiDataUtils from '@/shared/data/data-utils.service';

import { numeric, required, minLength, maxLength } from 'vuelidate/lib/validators';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import { DATE_TIME_LONG_FORMAT, INSTANT_FORMAT, ZONED_DATE_TIME_FORMAT } from '@/shared/date/filters';

import AlertService from '@/shared/alert/alert.service';
import { IFieldTestMapstructEntity, FieldTestMapstructEntity } from '@/shared/model/field-test-mapstruct-entity.model';
import FieldTestMapstructEntityService from './field-test-mapstruct-entity.service';

const validations: any = {
  fieldTestMapstructEntity: {
    stringEva: {},
    stringRequiredEva: {
      required
    },
    stringMinlengthEva: {
      minLength: minLength(0)
    },
    stringMaxlengthEva: {
      maxLength: maxLength(20)
    },
    stringPatternEva: {},
    integerEva: {},
    integerRequiredEva: {
      required,
      numeric
    },
    integerMinEva: {
      numeric
    },
    integerMaxEva: {
      numeric
    },
    longEva: {},
    longRequiredEva: {
      required,
      numeric
    },
    longMinEva: {
      numeric
    },
    longMaxEva: {
      numeric
    },
    floatEva: {},
    floatRequiredEva: {
      required,
      numeric
    },
    floatMinEva: {
      numeric
    },
    floatMaxEva: {
      numeric
    },
    doubleRequiredEva: {
      required,
      numeric
    },
    doubleMinEva: {
      numeric
    },
    doubleMaxEva: {
      numeric
    },
    bigDecimalRequiredEva: {
      required,
      numeric
    },
    bigDecimalMinEva: {
      numeric
    },
    bigDecimalMaxEva: {
      numeric
    },
    localDateEva: {},
    localDateRequiredEva: {
      required
    },
    instantEva: {},
    instanteRequiredEva: {
      required
    },
    zonedDateTimeEva: {},
    zonedDateTimeRequiredEva: {
      required
    },
    durationEva: {},
    durationRequiredEva: {
      required,
      numeric
    },
    booleanEva: {},
    booleanRequiredEva: {
      required
    },
    enumEva: {},
    enumRequiredEva: {
      required
    },
    uuidEva: {},
    uuidRequiredEva: {
      required
    },
    byteImageEva: {},
    byteImageRequiredEva: {
      required
    },
    byteImageMinbytesEva: {},
    byteImageMaxbytesEva: {},
    byteAnyEva: {},
    byteAnyRequiredEva: {
      required
    },
    byteAnyMinbytesEva: {},
    byteAnyMaxbytesEva: {},
    byteTextEva: {},
    byteTextRequiredEva: {
      required
    }
  }
};

@Component({
  validations
})
export default class FieldTestMapstructEntityUpdate extends mixins(JhiDataUtils) {
  @Inject('alertService') private alertService: () => AlertService;
  @Inject('fieldTestMapstructEntityService') private fieldTestMapstructEntityService: () => FieldTestMapstructEntityService;
  public fieldTestMapstructEntity: IFieldTestMapstructEntity = new FieldTestMapstructEntity();
  public isSaving = false;

  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (to.params.fieldTestMapstructEntityId) {
        vm.retrieveFieldTestMapstructEntity(to.params.fieldTestMapstructEntityId);
      }
    });
  }

  public save(): void {
    this.isSaving = true;
    if (this.fieldTestMapstructEntity.id) {
      this.fieldTestMapstructEntityService()
        .update(this.fieldTestMapstructEntity)
        .then(param => {
          this.isSaving = false;
          this.$router.go(-1);
          const message = this.$t('jhipsterApp.fieldTestMapstructEntity.updated', { param: param.id });
          this.alertService().showAlert(message, 'info');
        });
    } else {
      this.fieldTestMapstructEntityService()
        .create(this.fieldTestMapstructEntity)
        .then(param => {
          this.isSaving = false;
          this.$router.go(-1);
          const message = this.$t('jhipsterApp.fieldTestMapstructEntity.created', { param: param.id });
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
      this.fieldTestMapstructEntity[field] = parse(event.target.value, DATE_TIME_LONG_FORMAT, new Date());
    } else {
      this.fieldTestMapstructEntity[field] = null;
    }
  }

  public updateZonedDateTimeField(field, event) {
    if (event.target.value) {
      this.fieldTestMapstructEntity[field] = parse(event.target.value, DATE_TIME_LONG_FORMAT, new Date());
    } else {
      this.fieldTestMapstructEntity[field] = null;
    }
  }

  public retrieveFieldTestMapstructEntity(fieldTestMapstructEntityId): void {
    this.fieldTestMapstructEntityService()
      .find(fieldTestMapstructEntityId)
      .then(res => {
        this.fieldTestMapstructEntity = res;
      });
  }

  public previousState(): void {
    this.$router.go(-1);
  }

  public clearInputImage(field, fieldContentType, idInput): void {
    if (this.fieldTestMapstructEntity && field && fieldContentType) {
      if (this.fieldTestMapstructEntity.hasOwnProperty(field)) {
        this.fieldTestMapstructEntity[field] = null;
      }
      if (this.fieldTestMapstructEntity.hasOwnProperty(fieldContentType)) {
        this.fieldTestMapstructEntity[fieldContentType] = null;
      }
      if (idInput) {
        (<any>this).$refs[idInput] = null;
      }
    }
  }

  public initRelationships(): void {}
}
