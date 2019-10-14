import { Component, Inject } from 'vue-property-decorator';

import { mixins } from 'vue-class-component';
import JhiDataUtils from '@/shared/data/data-utils.service';

import { numeric, required, minLength, maxLength } from 'vuelidate/lib/validators';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import { DATE_TIME_LONG_FORMAT, INSTANT_FORMAT, ZONED_DATE_TIME_FORMAT } from '@/shared/date/filters';

import AlertService from '@/shared/alert/alert.service';
import { IFieldTestServiceClassEntity, FieldTestServiceClassEntity } from '@/shared/model/field-test-service-class-entity.model';
import FieldTestServiceClassEntityService from './field-test-service-class-entity.service';

const validations: any = {
  fieldTestServiceClassEntity: {
    stringBob: {},
    stringRequiredBob: {
      required
    },
    stringMinlengthBob: {
      minLength: minLength(0)
    },
    stringMaxlengthBob: {
      maxLength: maxLength(20)
    },
    stringPatternBob: {},
    integerBob: {},
    integerRequiredBob: {
      required,
      numeric
    },
    integerMinBob: {
      numeric
    },
    integerMaxBob: {
      numeric
    },
    longBob: {},
    longRequiredBob: {
      required,
      numeric
    },
    longMinBob: {
      numeric
    },
    longMaxBob: {
      numeric
    },
    floatBob: {},
    floatRequiredBob: {
      required,
      numeric
    },
    floatMinBob: {
      numeric
    },
    floatMaxBob: {
      numeric
    },
    doubleRequiredBob: {
      required,
      numeric
    },
    doubleMinBob: {
      numeric
    },
    doubleMaxBob: {
      numeric
    },
    bigDecimalRequiredBob: {
      required,
      numeric
    },
    bigDecimalMinBob: {
      numeric
    },
    bigDecimalMaxBob: {
      numeric
    },
    localDateBob: {},
    localDateRequiredBob: {
      required
    },
    instantBob: {},
    instanteRequiredBob: {
      required
    },
    zonedDateTimeBob: {},
    zonedDateTimeRequiredBob: {
      required
    },
    durationBob: {},
    durationRequiredBob: {
      required,
      numeric
    },
    booleanBob: {},
    booleanRequiredBob: {
      required
    },
    enumBob: {},
    enumRequiredBob: {
      required
    },
    uuidBob: {},
    uuidRequiredBob: {
      required
    },
    byteImageBob: {},
    byteImageRequiredBob: {
      required
    },
    byteImageMinbytesBob: {},
    byteImageMaxbytesBob: {},
    byteAnyBob: {},
    byteAnyRequiredBob: {
      required
    },
    byteAnyMinbytesBob: {},
    byteAnyMaxbytesBob: {},
    byteTextBob: {},
    byteTextRequiredBob: {
      required
    }
  }
};

@Component({
  validations
})
export default class FieldTestServiceClassEntityUpdate extends mixins(JhiDataUtils) {
  @Inject('alertService') private alertService: () => AlertService;
  @Inject('fieldTestServiceClassEntityService') private fieldTestServiceClassEntityService: () => FieldTestServiceClassEntityService;
  public fieldTestServiceClassEntity: IFieldTestServiceClassEntity = new FieldTestServiceClassEntity();
  public isSaving = false;

  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (to.params.fieldTestServiceClassEntityId) {
        vm.retrieveFieldTestServiceClassEntity(to.params.fieldTestServiceClassEntityId);
      }
    });
  }

  public save(): void {
    this.isSaving = true;
    if (this.fieldTestServiceClassEntity.id) {
      this.fieldTestServiceClassEntityService()
        .update(this.fieldTestServiceClassEntity)
        .then(param => {
          this.isSaving = false;
          this.$router.go(-1);
          const message = this.$t('jhipsterApp.fieldTestServiceClassEntity.updated', { param: param.id });
          this.alertService().showAlert(message, 'info');
        });
    } else {
      this.fieldTestServiceClassEntityService()
        .create(this.fieldTestServiceClassEntity)
        .then(param => {
          this.isSaving = false;
          this.$router.go(-1);
          const message = this.$t('jhipsterApp.fieldTestServiceClassEntity.created', { param: param.id });
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
      this.fieldTestServiceClassEntity[field] = parse(event.target.value, DATE_TIME_LONG_FORMAT, new Date());
    } else {
      this.fieldTestServiceClassEntity[field] = null;
    }
  }

  public updateZonedDateTimeField(field, event) {
    if (event.target.value) {
      this.fieldTestServiceClassEntity[field] = parse(event.target.value, DATE_TIME_LONG_FORMAT, new Date());
    } else {
      this.fieldTestServiceClassEntity[field] = null;
    }
  }

  public retrieveFieldTestServiceClassEntity(fieldTestServiceClassEntityId): void {
    this.fieldTestServiceClassEntityService()
      .find(fieldTestServiceClassEntityId)
      .then(res => {
        this.fieldTestServiceClassEntity = res;
      });
  }

  public previousState(): void {
    this.$router.go(-1);
  }

  public clearInputImage(field, fieldContentType, idInput): void {
    if (this.fieldTestServiceClassEntity && field && fieldContentType) {
      if (this.fieldTestServiceClassEntity.hasOwnProperty(field)) {
        this.fieldTestServiceClassEntity[field] = null;
      }
      if (this.fieldTestServiceClassEntity.hasOwnProperty(fieldContentType)) {
        this.fieldTestServiceClassEntity[fieldContentType] = null;
      }
      if (idInput) {
        (<any>this).$refs[idInput] = null;
      }
    }
  }

  public initRelationships(): void {}
}
