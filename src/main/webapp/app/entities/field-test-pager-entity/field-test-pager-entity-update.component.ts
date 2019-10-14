import { Component, Inject } from 'vue-property-decorator';

import { mixins } from 'vue-class-component';
import JhiDataUtils from '@/shared/data/data-utils.service';

import { numeric, required, minLength, maxLength } from 'vuelidate/lib/validators';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import { DATE_TIME_LONG_FORMAT, INSTANT_FORMAT, ZONED_DATE_TIME_FORMAT } from '@/shared/date/filters';

import AlertService from '@/shared/alert/alert.service';
import { IFieldTestPagerEntity, FieldTestPagerEntity } from '@/shared/model/field-test-pager-entity.model';
import FieldTestPagerEntityService from './field-test-pager-entity.service';

const validations: any = {
  fieldTestPagerEntity: {
    stringJade: {},
    stringRequiredJade: {
      required
    },
    stringMinlengthJade: {
      minLength: minLength(0)
    },
    stringMaxlengthJade: {
      maxLength: maxLength(20)
    },
    stringPatternJade: {},
    integerJade: {},
    integerRequiredJade: {
      required,
      numeric
    },
    integerMinJade: {
      numeric
    },
    integerMaxJade: {
      numeric
    },
    longJade: {},
    longRequiredJade: {
      required,
      numeric
    },
    longMinJade: {
      numeric
    },
    longMaxJade: {
      numeric
    },
    floatJade: {},
    floatRequiredJade: {
      required,
      numeric
    },
    floatMinJade: {
      numeric
    },
    floatMaxJade: {
      numeric
    },
    doubleRequiredJade: {
      required,
      numeric
    },
    doubleMinJade: {
      numeric
    },
    doubleMaxJade: {
      numeric
    },
    bigDecimalRequiredJade: {
      required,
      numeric
    },
    bigDecimalMinJade: {
      numeric
    },
    bigDecimalMaxJade: {
      numeric
    },
    localDateJade: {},
    localDateRequiredJade: {
      required
    },
    instantJade: {},
    instanteRequiredJade: {
      required
    },
    zonedDateTimeJade: {},
    zonedDateTimeRequiredJade: {
      required
    },
    durationJade: {},
    durationRequiredJade: {
      required,
      numeric
    },
    booleanJade: {},
    booleanRequiredJade: {
      required
    },
    enumJade: {},
    enumRequiredJade: {
      required
    },
    uuidJade: {},
    uuidRequiredJade: {
      required
    },
    byteImageJade: {},
    byteImageRequiredJade: {
      required
    },
    byteImageMinbytesJade: {},
    byteImageMaxbytesJade: {},
    byteAnyJade: {},
    byteAnyRequiredJade: {
      required
    },
    byteAnyMinbytesJade: {},
    byteAnyMaxbytesJade: {},
    byteTextJade: {},
    byteTextRequiredJade: {
      required
    }
  }
};

@Component({
  validations
})
export default class FieldTestPagerEntityUpdate extends mixins(JhiDataUtils) {
  @Inject('alertService') private alertService: () => AlertService;
  @Inject('fieldTestPagerEntityService') private fieldTestPagerEntityService: () => FieldTestPagerEntityService;
  public fieldTestPagerEntity: IFieldTestPagerEntity = new FieldTestPagerEntity();
  public isSaving = false;

  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (to.params.fieldTestPagerEntityId) {
        vm.retrieveFieldTestPagerEntity(to.params.fieldTestPagerEntityId);
      }
    });
  }

  public save(): void {
    this.isSaving = true;
    if (this.fieldTestPagerEntity.id) {
      this.fieldTestPagerEntityService()
        .update(this.fieldTestPagerEntity)
        .then(param => {
          this.isSaving = false;
          this.$router.go(-1);
          const message = this.$t('jhipsterApp.fieldTestPagerEntity.updated', { param: param.id });
          this.alertService().showAlert(message, 'info');
        });
    } else {
      this.fieldTestPagerEntityService()
        .create(this.fieldTestPagerEntity)
        .then(param => {
          this.isSaving = false;
          this.$router.go(-1);
          const message = this.$t('jhipsterApp.fieldTestPagerEntity.created', { param: param.id });
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
      this.fieldTestPagerEntity[field] = parse(event.target.value, DATE_TIME_LONG_FORMAT, new Date());
    } else {
      this.fieldTestPagerEntity[field] = null;
    }
  }

  public updateZonedDateTimeField(field, event) {
    if (event.target.value) {
      this.fieldTestPagerEntity[field] = parse(event.target.value, DATE_TIME_LONG_FORMAT, new Date());
    } else {
      this.fieldTestPagerEntity[field] = null;
    }
  }

  public retrieveFieldTestPagerEntity(fieldTestPagerEntityId): void {
    this.fieldTestPagerEntityService()
      .find(fieldTestPagerEntityId)
      .then(res => {
        this.fieldTestPagerEntity = res;
      });
  }

  public previousState(): void {
    this.$router.go(-1);
  }

  public clearInputImage(field, fieldContentType, idInput): void {
    if (this.fieldTestPagerEntity && field && fieldContentType) {
      if (this.fieldTestPagerEntity.hasOwnProperty(field)) {
        this.fieldTestPagerEntity[field] = null;
      }
      if (this.fieldTestPagerEntity.hasOwnProperty(fieldContentType)) {
        this.fieldTestPagerEntity[fieldContentType] = null;
      }
      if (idInput) {
        (<any>this).$refs[idInput] = null;
      }
    }
  }

  public initRelationships(): void {}
}
