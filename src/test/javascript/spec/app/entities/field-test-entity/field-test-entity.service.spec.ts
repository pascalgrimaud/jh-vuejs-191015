/* tslint:disable max-line-length */
import axios from 'axios';
import { format } from 'date-fns';

import * as config from '@/shared/config/config';
import { DATE_FORMAT, DATE_TIME_FORMAT } from '@/shared/date/filters';
import FieldTestEntityService from '@/entities/field-test-entity/field-test-entity.service';
import { FieldTestEntity, EnumFieldClass, EnumRequiredFieldClass } from '@/shared/model/field-test-entity.model';

const mockedAxios: any = axios;
jest.mock('axios', () => ({
  get: jest.fn(),
  post: jest.fn(),
  put: jest.fn(),
  delete: jest.fn()
}));

describe('Service Tests', () => {
  describe('FieldTestEntity Service', () => {
    let service: FieldTestEntityService;
    let elemDefault;
    let currentDate: Date;
    beforeEach(() => {
      service = new FieldTestEntityService();
      currentDate = new Date();

      elemDefault = new FieldTestEntity(
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
            localDateTom: format(currentDate, DATE_FORMAT),
            localDateRequiredTom: format(currentDate, DATE_FORMAT),
            instantTom: format(currentDate, DATE_TIME_FORMAT),
            instantRequiredTom: format(currentDate, DATE_TIME_FORMAT),
            zonedDateTimeTom: format(currentDate, DATE_TIME_FORMAT),
            zonedDateTimeRequiredTom: format(currentDate, DATE_TIME_FORMAT)
          },
          elemDefault
        );
        mockedAxios.get.mockReturnValue(Promise.resolve({ data: returnedFromService }));

        return service.find(123).then(res => {
          expect(res).toMatchObject(elemDefault);
        });
      });

      it('should create a FieldTestEntity', async () => {
        const returnedFromService = Object.assign(
          {
            id: 0,
            localDateTom: format(currentDate, DATE_FORMAT),
            localDateRequiredTom: format(currentDate, DATE_FORMAT),
            instantTom: format(currentDate, DATE_TIME_FORMAT),
            instantRequiredTom: format(currentDate, DATE_TIME_FORMAT),
            zonedDateTimeTom: format(currentDate, DATE_TIME_FORMAT),
            zonedDateTimeRequiredTom: format(currentDate, DATE_TIME_FORMAT)
          },
          elemDefault
        );
        const expected = Object.assign(
          {
            localDateTom: currentDate,
            localDateRequiredTom: currentDate,
            instantTom: currentDate,
            instantRequiredTom: currentDate,
            zonedDateTimeTom: currentDate,
            zonedDateTimeRequiredTom: currentDate
          },
          returnedFromService
        );

        mockedAxios.post.mockReturnValue(Promise.resolve({ data: returnedFromService }));
        return service.create({}).then(res => {
          expect(res).toMatchObject(expected);
        });
      });

      it('should update a FieldTestEntity', async () => {
        const returnedFromService = Object.assign(
          {
            stringTom: 'BBBBBB',
            stringRequiredTom: 'BBBBBB',
            stringMinlengthTom: 'BBBBBB',
            stringMaxlengthTom: 'BBBBBB',
            stringPatternTom: 'BBBBBB',
            integerTom: 1,
            integerRequiredTom: 1,
            integerMinTom: 1,
            integerMaxTom: 1,
            longTom: 1,
            longRequiredTom: 1,
            longMinTom: 1,
            longMaxTom: 1,
            floatTom: 1,
            floatRequiredTom: 1,
            floatMinTom: 1,
            floatMaxTom: 1,
            doubleRequiredTom: 1,
            doubleMinTom: 1,
            doubleMaxTom: 1,
            bigDecimalRequiredTom: 1,
            bigDecimalMinTom: 1,
            bigDecimalMaxTom: 1,
            localDateTom: format(currentDate, DATE_FORMAT),
            localDateRequiredTom: format(currentDate, DATE_FORMAT),
            instantTom: format(currentDate, DATE_TIME_FORMAT),
            instantRequiredTom: format(currentDate, DATE_TIME_FORMAT),
            zonedDateTimeTom: format(currentDate, DATE_TIME_FORMAT),
            zonedDateTimeRequiredTom: format(currentDate, DATE_TIME_FORMAT),
            durationTom: 1,
            durationRequiredTom: 1,
            booleanTom: true,
            booleanRequiredTom: true,
            enumTom: 'BBBBBB',
            enumRequiredTom: 'BBBBBB',
            uuidTom: 'BBBBBB',
            uuidRequiredTom: 'BBBBBB',
            byteImageTom: 'BBBBBB',
            byteImageRequiredTom: 'BBBBBB',
            byteImageMinbytesTom: 'BBBBBB',
            byteImageMaxbytesTom: 'BBBBBB',
            byteAnyTom: 'BBBBBB',
            byteAnyRequiredTom: 'BBBBBB',
            byteAnyMinbytesTom: 'BBBBBB',
            byteAnyMaxbytesTom: 'BBBBBB',
            byteTextTom: 'BBBBBB',
            byteTextRequiredTom: 'BBBBBB'
          },
          elemDefault
        );

        const expected = Object.assign(
          {
            localDateTom: currentDate,
            localDateRequiredTom: currentDate,
            instantTom: currentDate,
            instantRequiredTom: currentDate,
            zonedDateTimeTom: currentDate,
            zonedDateTimeRequiredTom: currentDate
          },
          returnedFromService
        );
        mockedAxios.put.mockReturnValue(Promise.resolve({ data: returnedFromService }));

        return service.update(expected).then(res => {
          expect(res).toMatchObject(expected);
        });
      });

      it('should return a list of FieldTestEntity', async () => {
        const returnedFromService = Object.assign(
          {
            stringTom: 'BBBBBB',
            stringRequiredTom: 'BBBBBB',
            stringMinlengthTom: 'BBBBBB',
            stringMaxlengthTom: 'BBBBBB',
            stringPatternTom: 'BBBBBB',
            integerTom: 1,
            integerRequiredTom: 1,
            integerMinTom: 1,
            integerMaxTom: 1,
            longTom: 1,
            longRequiredTom: 1,
            longMinTom: 1,
            longMaxTom: 1,
            floatTom: 1,
            floatRequiredTom: 1,
            floatMinTom: 1,
            floatMaxTom: 1,
            doubleRequiredTom: 1,
            doubleMinTom: 1,
            doubleMaxTom: 1,
            bigDecimalRequiredTom: 1,
            bigDecimalMinTom: 1,
            bigDecimalMaxTom: 1,
            localDateTom: format(currentDate, DATE_FORMAT),
            localDateRequiredTom: format(currentDate, DATE_FORMAT),
            instantTom: format(currentDate, DATE_TIME_FORMAT),
            instantRequiredTom: format(currentDate, DATE_TIME_FORMAT),
            zonedDateTimeTom: format(currentDate, DATE_TIME_FORMAT),
            zonedDateTimeRequiredTom: format(currentDate, DATE_TIME_FORMAT),
            durationTom: 1,
            durationRequiredTom: 1,
            booleanTom: true,
            booleanRequiredTom: true,
            enumTom: 'BBBBBB',
            enumRequiredTom: 'BBBBBB',
            uuidTom: 'BBBBBB',
            uuidRequiredTom: 'BBBBBB',
            byteImageTom: 'BBBBBB',
            byteImageRequiredTom: 'BBBBBB',
            byteImageMinbytesTom: 'BBBBBB',
            byteImageMaxbytesTom: 'BBBBBB',
            byteAnyTom: 'BBBBBB',
            byteAnyRequiredTom: 'BBBBBB',
            byteAnyMinbytesTom: 'BBBBBB',
            byteAnyMaxbytesTom: 'BBBBBB',
            byteTextTom: 'BBBBBB',
            byteTextRequiredTom: 'BBBBBB'
          },
          elemDefault
        );
        const expected = Object.assign(
          {
            localDateTom: currentDate,
            localDateRequiredTom: currentDate,
            instantTom: currentDate,
            instantRequiredTom: currentDate,
            zonedDateTimeTom: currentDate,
            zonedDateTimeRequiredTom: currentDate
          },
          returnedFromService
        );
        mockedAxios.get.mockReturnValue(Promise.resolve([returnedFromService]));
        return service.retrieve().then(res => {
          expect(res).toContainEqual(expected);
        });
      });

      it('should delete a FieldTestEntity', async () => {
        mockedAxios.delete.mockReturnValue(Promise.resolve({ ok: true }));
        return service.delete(123).then(res => {
          expect(res.ok).toBeTruthy();
        });
      });
    });
  });
});
