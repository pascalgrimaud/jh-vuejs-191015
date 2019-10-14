import { Component, Inject } from 'vue-property-decorator';

import { mixins } from 'vue-class-component';
import JhiDataUtils from '@/shared/data/data-utils.service';

import { numeric, required, minLength, maxLength } from 'vuelidate/lib/validators';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import { DATE_TIME_LONG_FORMAT, INSTANT_FORMAT, ZONED_DATE_TIME_FORMAT } from '@/shared/date/filters';

import AlertService from '@/shared/alert/alert.service';
import { IFieldTestServiceImplEntity, FieldTestServiceImplEntity } from '@/shared/model/field-test-service-impl-entity.model';
import FieldTestServiceImplEntityService from './field-test-service-impl-entity.service';

const validations: any = {
  fieldTestServiceImplEntity: {
    stringMika: {},
    stringRequiredMika: {
      required
    },
    stringMinlengthMika: {
      minLength: minLength(0)
    },
    stringMaxlengthMika: {
      maxLength: maxLength(20)
    },
    stringPatternMika: {},
    integerMika: {},
    integerRequiredMika: {
      required,
      numeric
    },
    integerMinMika: {
      numeric
    },
    integerMaxMika: {
      numeric
    },
    longMika: {},
    longRequiredMika: {
      required,
      numeric
    },
    longMinMika: {
      numeric
    },
    longMaxMika: {
      numeric
    },
    floatMika: {},
    floatRequiredMika: {
      required,
      numeric
    },
    floatMinMika: {
      numeric
    },
    floatMaxMika: {
      numeric
    },
    doubleRequiredMika: {
      required,
      numeric
    },
    doubleMinMika: {
      numeric
    },
    doubleMaxMika: {
      numeric
    },
    bigDecimalRequiredMika: {
      required,
      numeric
    },
    bigDecimalMinMika: {
      numeric
    },
    bigDecimalMaxMika: {
      numeric
    },
    localDateMika: {},
    localDateRequiredMika: {
      required
    },
    instantMika: {},
    instanteRequiredMika: {
      required
    },
    zonedDateTimeMika: {},
    zonedDateTimeRequiredMika: {
      required
    },
    durationMika: {},
    durationRequiredMika: {
      required,
      numeric
    },
    booleanMika: {},
    booleanRequiredMika: {
      required
    },
    enumMika: {},
    enumRequiredMika: {
      required
    },
    uuidMika: {},
    uuidRequiredMika: {
      required
    },
    byteImageMika: {},
    byteImageRequiredMika: {
      required
    },
    byteImageMinbytesMika: {},
    byteImageMaxbytesMika: {},
    byteAnyMika: {},
    byteAnyRequiredMika: {
      required
    },
    byteAnyMinbytesMika: {},
    byteAnyMaxbytesMika: {},
    byteTextMika: {},
    byteTextRequiredMika: {
      required
    }
  }
};

@Component({
  validations
})
export default class FieldTestServiceImplEntityUpdate extends mixins(JhiDataUtils) {
  @Inject('alertService') private alertService: () => AlertService;
  @Inject('fieldTestServiceImplEntityService') private fieldTestServiceImplEntityService: () => FieldTestServiceImplEntityService;
  public fieldTestServiceImplEntity: IFieldTestServiceImplEntity = new FieldTestServiceImplEntity();
  public isSaving = false;

  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (to.params.fieldTestServiceImplEntityId) {
        vm.retrieveFieldTestServiceImplEntity(to.params.fieldTestServiceImplEntityId);
      }
    });
  }

  public save(): void {
    this.isSaving = true;
    if (this.fieldTestServiceImplEntity.id) {
      this.fieldTestServiceImplEntityService()
        .update(this.fieldTestServiceImplEntity)
        .then(param => {
          this.isSaving = false;
          this.$router.go(-1);
          const message = this.$t('jhipsterApp.fieldTestServiceImplEntity.updated', { param: param.id });
          this.alertService().showAlert(message, 'info');
        });
    } else {
      this.fieldTestServiceImplEntityService()
        .create(this.fieldTestServiceImplEntity)
        .then(param => {
          this.isSaving = false;
          this.$router.go(-1);
          const message = this.$t('jhipsterApp.fieldTestServiceImplEntity.created', { param: param.id });
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
      this.fieldTestServiceImplEntity[field] = parse(event.target.value, DATE_TIME_LONG_FORMAT, new Date());
    } else {
      this.fieldTestServiceImplEntity[field] = null;
    }
  }

  public updateZonedDateTimeField(field, event) {
    if (event.target.value) {
      this.fieldTestServiceImplEntity[field] = parse(event.target.value, DATE_TIME_LONG_FORMAT, new Date());
    } else {
      this.fieldTestServiceImplEntity[field] = null;
    }
  }

  public retrieveFieldTestServiceImplEntity(fieldTestServiceImplEntityId): void {
    this.fieldTestServiceImplEntityService()
      .find(fieldTestServiceImplEntityId)
      .then(res => {
        this.fieldTestServiceImplEntity = res;
      });
  }

  public previousState(): void {
    this.$router.go(-1);
  }

  public clearInputImage(field, fieldContentType, idInput): void {
    if (this.fieldTestServiceImplEntity && field && fieldContentType) {
      if (this.fieldTestServiceImplEntity.hasOwnProperty(field)) {
        this.fieldTestServiceImplEntity[field] = null;
      }
      if (this.fieldTestServiceImplEntity.hasOwnProperty(fieldContentType)) {
        this.fieldTestServiceImplEntity[fieldContentType] = null;
      }
      if (idInput) {
        (<any>this).$refs[idInput] = null;
      }
    }
  }

  public initRelationships(): void {}
}
