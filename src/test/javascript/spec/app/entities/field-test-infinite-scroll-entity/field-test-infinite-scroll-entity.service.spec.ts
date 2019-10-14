/* tslint:disable max-line-length */
import axios from 'axios';
import { format } from 'date-fns';

import * as config from '@/shared/config/config';
import { DATE_FORMAT, DATE_TIME_FORMAT } from '@/shared/date/filters';
import FieldTestInfiniteScrollEntityService from '@/entities/field-test-infinite-scroll-entity/field-test-infinite-scroll-entity.service';
import {
  FieldTestInfiniteScrollEntity,
  EnumFieldClass,
  EnumRequiredFieldClass
} from '@/shared/model/field-test-infinite-scroll-entity.model';

const mockedAxios: any = axios;
jest.mock('axios', () => ({
  get: jest.fn(),
  post: jest.fn(),
  put: jest.fn(),
  delete: jest.fn()
}));

describe('Service Tests', () => {
  describe('FieldTestInfiniteScrollEntity Service', () => {
    let service: FieldTestInfiniteScrollEntityService;
    let elemDefault;
    let currentDate: Date;
    beforeEach(() => {
      service = new FieldTestInfiniteScrollEntityService();
      currentDate = new Date();

      elemDefault = new FieldTestInfiniteScrollEntity(
        0,
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        currentDate,
        currentDate,
        currentDate,
        currentDate,
        currentDate,
        currentDate,
        0,
        0,
        false,
        false,
        EnumFieldClass.ENUM_VALUE_1,
        EnumRequiredFieldClass.ENUM_VALUE_1,
        'AAAAAAA',
        'AAAAAAA',
        'image/png',
        'AAAAAAA',
        'image/png',
        'AAAAAAA',
        'image/png',
        'AAAAAAA',
        'image/png',
        'AAAAAAA',
        'image/png',
        'AAAAAAA',
        'image/png',
        'AAAAAAA',
        'image/png',
        'AAAAAAA',
        'image/png',
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA'
      );
    });

    describe('Service methods', () => {
      it('should find an element', async () => {
        const returnedFromService = Object.assign(
          {
            localDateHugo: format(currentDate, DATE_FORMAT),
            localDateRequiredHugo: format(currentDate, DATE_FORMAT),
            instantHugo: format(currentDate, DATE_TIME_FORMAT),
            instanteRequiredHugo: format(currentDate, DATE_TIME_FORMAT),
            zonedDateTimeHugo: format(currentDate, DATE_TIME_FORMAT),
            zonedDateTimeRequiredHugo: format(currentDate, DATE_TIME_FORMAT)
          },
          elemDefault
        );
        mockedAxios.get.mockReturnValue(Promise.resolve({ data: returnedFromService }));

        return service.find(123).then(res => {
          expect(res).toMatchObject(elemDefault);
        });
      });

      it('should create a FieldTestInfiniteScrollEntity', async () => {
        const returnedFromService = Object.assign(
          {
            id: 0,
            localDateHugo: format(currentDate, DATE_FORMAT),
            localDateRequiredHugo: format(currentDate, DATE_FORMAT),
            instantHugo: format(currentDate, DATE_TIME_FORMAT),
            instanteRequiredHugo: format(currentDate, DATE_TIME_FORMAT),
            zonedDateTimeHugo: format(currentDate, DATE_TIME_FORMAT),
            zonedDateTimeRequiredHugo: format(currentDate, DATE_TIME_FORMAT)
          },
          elemDefault
        );
        const expected = Object.assign(
          {
            localDateHugo: currentDate,
            localDateRequiredHugo: currentDate,
            instantHugo: currentDate,
            instanteRequiredHugo: currentDate,
            zonedDateTimeHugo: currentDate,
            zonedDateTimeRequiredHugo: currentDate
          },
          returnedFromService
        );

        mockedAxios.post.mockReturnValue(Promise.resolve({ data: returnedFromService }));
        return service.create({}).then(res => {
          expect(res).toMatchObject(expected);
        });
      });

      it('should update a FieldTestInfiniteScrollEntity', async () => {
        const returnedFromService = Object.assign(
          {
            stringHugo: 'BBBBBB',
            stringRequiredHugo: 'BBBBBB',
            stringMinlengthHugo: 'BBBBBB',
            stringMaxlengthHugo: 'BBBBBB',
            stringPatternHugo: 'BBBBBB',
            integerHugo: 1,
            integerRequiredHugo: 1,
            integerMinHugo: 1,
            integerMaxHugo: 1,
            longHugo: 1,
            longRequiredHugo: 1,
            longMinHugo: 1,
            longMaxHugo: 1,
            floatHugo: 1,
            floatRequiredHugo: 1,
            floatMinHugo: 1,
            floatMaxHugo: 1,
            doubleRequiredHugo: 1,
            doubleMinHugo: 1,
            doubleMaxHugo: 1,
            bigDecimalRequiredHugo: 1,
            bigDecimalMinHugo: 1,
            bigDecimalMaxHugo: 1,
            localDateHugo: format(currentDate, DATE_FORMAT),
            localDateRequiredHugo: format(currentDate, DATE_FORMAT),
            instantHugo: format(currentDate, DATE_TIME_FORMAT),
            instanteRequiredHugo: format(currentDate, DATE_TIME_FORMAT),
            zonedDateTimeHugo: format(currentDate, DATE_TIME_FORMAT),
            zonedDateTimeRequiredHugo: format(currentDate, DATE_TIME_FORMAT),
            durationHugo: 1,
            durationRequiredHugo: 1,
            booleanHugo: true,
            booleanRequiredHugo: true,
            enumHugo: 'BBBBBB',
            enumRequiredHugo: 'BBBBBB',
            uuidHugo: 'BBBBBB',
            uuidRequiredHugo: 'BBBBBB',
            byteImageHugo: 'BBBBBB',
            byteImageRequiredHugo: 'BBBBBB',
            byteImageMinbytesHugo: 'BBBBBB',
            byteImageMaxbytesHugo: 'BBBBBB',
            byteAnyHugo: 'BBBBBB',
            byteAnyRequiredHugo: 'BBBBBB',
            byteAnyMinbytesHugo: 'BBBBBB',
            byteAnyMaxbytesHugo: 'BBBBBB',
            byteTextHugo: 'BBBBBB',
            byteTextRequiredHugo: 'BBBBBB'
          },
          elemDefault
        );

        const expected = Object.assign(
          {
            localDateHugo: currentDate,
            localDateRequiredHugo: currentDate,
            instantHugo: currentDate,
            instanteRequiredHugo: currentDate,
            zonedDateTimeHugo: currentDate,
            zonedDateTimeRequiredHugo: currentDate
          },
          returnedFromService
        );
        mockedAxios.put.mockReturnValue(Promise.resolve({ data: returnedFromService }));

        return service.update(expected).then(res => {
          expect(res).toMatchObject(expected);
        });
      });

      it('should return a list of FieldTestInfiniteScrollEntity', async () => {
        const returnedFromService = Object.assign(
          {
            stringHugo: 'BBBBBB',
            stringRequiredHugo: 'BBBBBB',
            stringMinlengthHugo: 'BBBBBB',
            stringMaxlengthHugo: 'BBBBBB',
            stringPatternHugo: 'BBBBBB',
            integerHugo: 1,
            integerRequiredHugo: 1,
            integerMinHugo: 1,
            integerMaxHugo: 1,
            longHugo: 1,
            longRequiredHugo: 1,
            longMinHugo: 1,
            longMaxHugo: 1,
            floatHugo: 1,
            floatRequiredHugo: 1,
            floatMinHugo: 1,
            floatMaxHugo: 1,
            doubleRequiredHugo: 1,
            doubleMinHugo: 1,
            doubleMaxHugo: 1,
            bigDecimalRequiredHugo: 1,
            bigDecimalMinHugo: 1,
            bigDecimalMaxHugo: 1,
            localDateHugo: format(currentDate, DATE_FORMAT),
            localDateRequiredHugo: format(currentDate, DATE_FORMAT),
            instantHugo: format(currentDate, DATE_TIME_FORMAT),
            instanteRequiredHugo: format(currentDate, DATE_TIME_FORMAT),
            zonedDateTimeHugo: format(currentDate, DATE_TIME_FORMAT),
            zonedDateTimeRequiredHugo: format(currentDate, DATE_TIME_FORMAT),
            durationHugo: 1,
            durationRequiredHugo: 1,
            booleanHugo: true,
            booleanRequiredHugo: true,
            enumHugo: 'BBBBBB',
            enumRequiredHugo: 'BBBBBB',
            uuidHugo: 'BBBBBB',
            uuidRequiredHugo: 'BBBBBB',
            byteImageHugo: 'BBBBBB',
            byteImageRequiredHugo: 'BBBBBB',
            byteImageMinbytesHugo: 'BBBBBB',
            byteImageMaxbytesHugo: 'BBBBBB',
            byteAnyHugo: 'BBBBBB',
            byteAnyRequiredHugo: 'BBBBBB',
            byteAnyMinbytesHugo: 'BBBBBB',
            byteAnyMaxbytesHugo: 'BBBBBB',
            byteTextHugo: 'BBBBBB',
            byteTextRequiredHugo: 'BBBBBB'
          },
          elemDefault
        );
        const expected = Object.assign(
          {
            localDateHugo: currentDate,
            localDateRequiredHugo: currentDate,
            instantHugo: currentDate,
            instanteRequiredHugo: currentDate,
            zonedDateTimeHugo: currentDate,
            zonedDateTimeRequiredHugo: currentDate
          },
          returnedFromService
        );
        mockedAxios.get.mockReturnValue(Promise.resolve([returnedFromService]));
        return service.retrieve({ sort: {}, page: 0, size: 10 }).then(res => {
          expect(res).toContainEqual(expected);
        });
      });

      it('should delete a FieldTestInfiniteScrollEntity', async () => {
        mockedAxios.delete.mockReturnValue(Promise.resolve({ ok: true }));
        return service.delete(123).then(res => {
          expect(res.ok).toBeTruthy();
        });
      });
    });
  });
});
