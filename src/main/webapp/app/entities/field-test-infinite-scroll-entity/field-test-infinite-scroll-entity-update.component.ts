import { Component, Inject } from 'vue-property-decorator';

import { mixins } from 'vue-class-component';
import JhiDataUtils from '@/shared/data/data-utils.service';

import { numeric, required, minLength, maxLength } from 'vuelidate/lib/validators';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import { DATE_TIME_LONG_FORMAT, INSTANT_FORMAT, ZONED_DATE_TIME_FORMAT } from '@/shared/date/filters';

import AlertService from '@/shared/alert/alert.service';
import { IFieldTestInfiniteScrollEntity, FieldTestInfiniteScrollEntity } from '@/shared/model/field-test-infinite-scroll-entity.model';
import FieldTestInfiniteScrollEntityService from './field-test-infinite-scroll-entity.service';

const validations: any = {
  fieldTestInfiniteScrollEntity: {
    stringHugo: {},
    stringRequiredHugo: {
      required
    },
    stringMinlengthHugo: {
      minLength: minLength(0)
    },
    stringMaxlengthHugo: {
      maxLength: maxLength(20)
    },
    stringPatternHugo: {},
    integerHugo: {},
    integerRequiredHugo: {
      required,
      numeric
    },
    integerMinHugo: {
      numeric
    },
    integerMaxHugo: {
      numeric
    },
    longHugo: {},
    longRequiredHugo: {
      required,
      numeric
    },
    longMinHugo: {
      numeric
    },
    longMaxHugo: {
      numeric
    },
    floatHugo: {},
    floatRequiredHugo: {
      required,
      numeric
    },
    floatMinHugo: {
      numeric
    },
    floatMaxHugo: {
      numeric
    },
    doubleRequiredHugo: {
      required,
      numeric
    },
    doubleMinHugo: {
      numeric
    },
    doubleMaxHugo: {
      numeric
    },
    bigDecimalRequiredHugo: {
      required,
      numeric
    },
    bigDecimalMinHugo: {
      numeric
    },
    bigDecimalMaxHugo: {
      numeric
    },
    localDateHugo: {},
    localDateRequiredHugo: {
      required
    },
    instantHugo: {},
    instanteRequiredHugo: {
      required
    },
    zonedDateTimeHugo: {},
    zonedDateTimeRequiredHugo: {
      required
    },
    durationHugo: {},
    durationRequiredHugo: {
      required,
      numeric
    },
    booleanHugo: {},
    booleanRequiredHugo: {
      required
    },
    enumHugo: {},
    enumRequiredHugo: {
      required
    },
    uuidHugo: {},
    uuidRequiredHugo: {
      required
    },
    byteImageHugo: {},
    byteImageRequiredHugo: {
      required
    },
    byteImageMinbytesHugo: {},
    byteImageMaxbytesHugo: {},
    byteAnyHugo: {},
    byteAnyRequiredHugo: {
      required
    },
    byteAnyMinbytesHugo: {},
    byteAnyMaxbytesHugo: {},
    byteTextHugo: {},
    byteTextRequiredHugo: {
      required
    }
  }
};

@Component({
  validations
})
export default class FieldTestInfiniteScrollEntityUpdate extends mixins(JhiDataUtils) {
  @Inject('alertService') private alertService: () => AlertService;
  @Inject('fieldTestInfiniteScrollEntityService') private fieldTestInfiniteScrollEntityService: () => FieldTestInfiniteScrollEntityService;
  public fieldTestInfiniteScrollEntity: IFieldTestInfiniteScrollEntity = new FieldTestInfiniteScrollEntity();
  public isSaving = false;

  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (to.params.fieldTestInfiniteScrollEntityId) {
        vm.retrieveFieldTestInfiniteScrollEntity(to.params.fieldTestInfiniteScrollEntityId);
      }
    });
  }

  public save(): void {
    this.isSaving = true;
    if (this.fieldTestInfiniteScrollEntity.id) {
      this.fieldTestInfiniteScrollEntityService()
        .update(this.fieldTestInfiniteScrollEntity)
        .then(param => {
          this.isSaving = false;
          this.$router.go(-1);
          const message = this.$t('jhipsterApp.fieldTestInfiniteScrollEntity.updated', { param: param.id });
          this.alertService().showAlert(message, 'info');
        });
    } else {
      this.fieldTestInfiniteScrollEntityService()
        .create(this.fieldTestInfiniteScrollEntity)
        .then(param => {
          this.isSaving = false;
          this.$router.go(-1);
          const message = this.$t('jhipsterApp.fieldTestInfiniteScrollEntity.created', { param: param.id });
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
      this.fieldTestInfiniteScrollEntity[field] = parse(event.target.value, DATE_TIME_LONG_FORMAT, new Date());
    } else {
      this.fieldTestInfiniteScrollEntity[field] = null;
    }
  }

  public updateZonedDateTimeField(field, event) {
    if (event.target.value) {
      this.fieldTestInfiniteScrollEntity[field] = parse(event.target.value, DATE_TIME_LONG_FORMAT, new Date());
    } else {
      this.fieldTestInfiniteScrollEntity[field] = null;
    }
  }

  public retrieveFieldTestInfiniteScrollEntity(fieldTestInfiniteScrollEntityId): void {
    this.fieldTestInfiniteScrollEntityService()
      .find(fieldTestInfiniteScrollEntityId)
      .then(res => {
        this.fieldTestInfiniteScrollEntity = res;
      });
  }

  public previousState(): void {
    this.$router.go(-1);
  }

  public clearInputImage(field, fieldContentType, idInput): void {
    if (this.fieldTestInfiniteScrollEntity && field && fieldContentType) {
      if (this.fieldTestInfiniteScrollEntity.hasOwnProperty(field)) {
        this.fieldTestInfiniteScrollEntity[field] = null;
      }
      if (this.fieldTestInfiniteScrollEntity.hasOwnProperty(fieldContentType)) {
        this.fieldTestInfiniteScrollEntity[fieldContentType] = null;
      }
      if (idInput) {
        (<any>this).$refs[idInput] = null;
      }
    }
  }

  public initRelationships(): void {}
}
