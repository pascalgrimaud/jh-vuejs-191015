/* tslint:disable max-line-length */
import axios from 'axios';
import { format } from 'date-fns';

import * as config from '@/shared/config/config';
import { DATE_FORMAT, DATE_TIME_FORMAT } from '@/shared/date/filters';
import FieldTestMapstructEntityService from '@/entities/field-test-mapstruct-entity/field-test-mapstruct-entity.service';
import { FieldTestMapstructEntity, EnumFieldClass, EnumRequiredFieldClass } from '@/shared/model/field-test-mapstruct-entity.model';

const mockedAxios: any = axios;
jest.mock('axios', () => ({
  get: jest.fn(),
  post: jest.fn(),
  put: jest.fn(),
  delete: jest.fn()
}));

describe('Service Tests', () => {
  describe('FieldTestMapstructEntity Service', () => {
    let service: FieldTestMapstructEntityService;
    let elemDefault;
    let currentDate: Date;
    beforeEach(() => {
      service = new FieldTestMapstructEntityService();
      currentDate = new Date();

      elemDefault = new FieldTestMapstructEntity(
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
            localDateEva: format(currentDate, DATE_FORMAT),
            localDateRequiredEva: format(currentDate, DATE_FORMAT),
            instantEva: format(currentDate, DATE_TIME_FORMAT),
            instanteRequiredEva: format(currentDate, DATE_TIME_FORMAT),
            zonedDateTimeEva: format(currentDate, DATE_TIME_FORMAT),
            zonedDateTimeRequiredEva: format(currentDate, DATE_TIME_FORMAT)
          },
          elemDefault
        );
        mockedAxios.get.mockReturnValue(Promise.resolve({ data: returnedFromService }));

        return service.find(123).then(res => {
          expect(res).toMatchObject(elemDefault);
        });
      });

      it('should create a FieldTestMapstructEntity', async () => {
        const returnedFromService = Object.assign(
          {
            id: 0,
            localDateEva: format(currentDate, DATE_FORMAT),
            localDateRequiredEva: format(currentDate, DATE_FORMAT),
            instantEva: format(currentDate, DATE_TIME_FORMAT),
            instanteRequiredEva: format(currentDate, DATE_TIME_FORMAT),
            zonedDateTimeEva: format(currentDate, DATE_TIME_FORMAT),
            zonedDateTimeRequiredEva: format(currentDate, DATE_TIME_FORMAT)
          },
          elemDefault
        );
        const expected = Object.assign(
          {
            localDateEva: currentDate,
            localDateRequiredEva: currentDate,
            instantEva: currentDate,
            instanteRequiredEva: currentDate,
            zonedDateTimeEva: currentDate,
            zonedDateTimeRequiredEva: currentDate
          },
          returnedFromService
        );

        mockedAxios.post.mockReturnValue(Promise.resolve({ data: returnedFromService }));
        return service.create({}).then(res => {
          expect(res).toMatchObject(expected);
        });
      });

      it('should update a FieldTestMapstructEntity', async () => {
        const returnedFromService = Object.assign(
          {
            stringEva: 'BBBBBB',
            stringRequiredEva: 'BBBBBB',
            stringMinlengthEva: 'BBBBBB',
            stringMaxlengthEva: 'BBBBBB',
            stringPatternEva: 'BBBBBB',
            integerEva: 1,
            integerRequiredEva: 1,
            integerMinEva: 1,
            integerMaxEva: 1,
            longEva: 1,
            longRequiredEva: 1,
            longMinEva: 1,
            longMaxEva: 1,
            floatEva: 1,
            floatRequiredEva: 1,
            floatMinEva: 1,
            floatMaxEva: 1,
            doubleRequiredEva: 1,
            doubleMinEva: 1,
            doubleMaxEva: 1,
            bigDecimalRequiredEva: 1,
            bigDecimalMinEva: 1,
            bigDecimalMaxEva: 1,
            localDateEva: format(currentDate, DATE_FORMAT),
            localDateRequiredEva: format(currentDate, DATE_FORMAT),
            instantEva: format(currentDate, DATE_TIME_FORMAT),
            instanteRequiredEva: format(currentDate, DATE_TIME_FORMAT),
            zonedDateTimeEva: format(currentDate, DATE_TIME_FORMAT),
            zonedDateTimeRequiredEva: format(currentDate, DATE_TIME_FORMAT),
            durationEva: 1,
            durationRequiredEva: 1,
            booleanEva: true,
            booleanRequiredEva: true,
            enumEva: 'BBBBBB',
            enumRequiredEva: 'BBBBBB',
            uuidEva: 'BBBBBB',
            uuidRequiredEva: 'BBBBBB',
            byteImageEva: 'BBBBBB',
            byteImageRequiredEva: 'BBBBBB',
            byteImageMinbytesEva: 'BBBBBB',
            byteImageMaxbytesEva: 'BBBBBB',
            byteAnyEva: 'BBBBBB',
            byteAnyRequiredEva: 'BBBBBB',
            byteAnyMinbytesEva: 'BBBBBB',
            byteAnyMaxbytesEva: 'BBBBBB',
            byteTextEva: 'BBBBBB',
            byteTextRequiredEva: 'BBBBBB'
          },
          elemDefault
        );

        const expected = Object.assign(
          {
            localDateEva: currentDate,
            localDateRequiredEva: currentDate,
            instantEva: currentDate,
            instanteRequiredEva: currentDate,
            zonedDateTimeEva: currentDate,
            zonedDateTimeRequiredEva: currentDate
          },
          returnedFromService
        );
        mockedAxios.put.mockReturnValue(Promise.resolve({ data: returnedFromService }));

        return service.update(expected).then(res => {
          expect(res).toMatchObject(expected);
        });
      });

      it('should return a list of FieldTestMapstructEntity', async () => {
        const returnedFromService = Object.assign(
          {
            stringEva: 'BBBBBB',
            stringRequiredEva: 'BBBBBB',
            stringMinlengthEva: 'BBBBBB',
            stringMaxlengthEva: 'BBBBBB',
            stringPatternEva: 'BBBBBB',
            integerEva: 1,
            integerRequiredEva: 1,
            integerMinEva: 1,
            integerMaxEva: 1,
            longEva: 1,
            longRequiredEva: 1,
            longMinEva: 1,
            longMaxEva: 1,
            floatEva: 1,
            floatRequiredEva: 1,
            floatMinEva: 1,
            floatMaxEva: 1,
            doubleRequiredEva: 1,
            doubleMinEva: 1,
            doubleMaxEva: 1,
            bigDecimalRequiredEva: 1,
            bigDecimalMinEva: 1,
            bigDecimalMaxEva: 1,
            localDateEva: format(currentDate, DATE_FORMAT),
            localDateRequiredEva: format(currentDate, DATE_FORMAT),
            instantEva: format(currentDate, DATE_TIME_FORMAT),
            instanteRequiredEva: format(currentDate, DATE_TIME_FORMAT),
            zonedDateTimeEva: format(currentDate, DATE_TIME_FORMAT),
            zonedDateTimeRequiredEva: format(currentDate, DATE_TIME_FORMAT),
            durationEva: 1,
            durationRequiredEva: 1,
            booleanEva: true,
            booleanRequiredEva: true,
            enumEva: 'BBBBBB',
            enumRequiredEva: 'BBBBBB',
            uuidEva: 'BBBBBB',
            uuidRequiredEva: 'BBBBBB',
            byteImageEva: 'BBBBBB',
            byteImageRequiredEva: 'BBBBBB',
            byteImageMinbytesEva: 'BBBBBB',
            byteImageMaxbytesEva: 'BBBBBB',
            byteAnyEva: 'BBBBBB',
            byteAnyRequiredEva: 'BBBBBB',
            byteAnyMinbytesEva: 'BBBBBB',
            byteAnyMaxbytesEva: 'BBBBBB',
            byteTextEva: 'BBBBBB',
            byteTextRequiredEva: 'BBBBBB'
          },
          elemDefault
        );
        const expected = Object.assign(
          {
            localDateEva: currentDate,
            localDateRequiredEva: currentDate,
            instantEva: currentDate,
            instanteRequiredEva: currentDate,
            zonedDateTimeEva: currentDate,
            zonedDateTimeRequiredEva: currentDate
          },
          returnedFromService
        );
        mockedAxios.get.mockReturnValue(Promise.resolve([returnedFromService]));
        return service.retrieve().then(res => {
          expect(res).toContainEqual(expected);
        });
      });

      it('should delete a FieldTestMapstructEntity', async () => {
        mockedAxios.delete.mockReturnValue(Promise.resolve({ ok: true }));
        return service.delete(123).then(res => {
          expect(res.ok).toBeTruthy();
        });
      });
    });
  });
});
