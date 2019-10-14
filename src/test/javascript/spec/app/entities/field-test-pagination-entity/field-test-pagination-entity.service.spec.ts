/* tslint:disable max-line-length */
import axios from 'axios';
import { format } from 'date-fns';

import * as config from '@/shared/config/config';
import { DATE_FORMAT, DATE_TIME_FORMAT } from '@/shared/date/filters';
import FieldTestPaginationEntityService from '@/entities/field-test-pagination-entity/field-test-pagination-entity.service';
import { FieldTestPaginationEntity, EnumFieldClass, EnumRequiredFieldClass } from '@/shared/model/field-test-pagination-entity.model';

const mockedAxios: any = axios;
jest.mock('axios', () => ({
  get: jest.fn(),
  post: jest.fn(),
  put: jest.fn(),
  delete: jest.fn()
}));

describe('Service Tests', () => {
  describe('FieldTestPaginationEntity Service', () => {
    let service: FieldTestPaginationEntityService;
    let elemDefault;
    let currentDate: Date;
    beforeEach(() => {
      service = new FieldTestPaginationEntityService();
      currentDate = new Date();

      elemDefault = new FieldTestPaginationEntity(
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
            localDateAlice: format(currentDate, DATE_FORMAT),
            localDateRequiredAlice: format(currentDate, DATE_FORMAT),
            instantAlice: format(currentDate, DATE_TIME_FORMAT),
            instanteRequiredAlice: format(currentDate, DATE_TIME_FORMAT),
            zonedDateTimeAlice: format(currentDate, DATE_TIME_FORMAT),
            zonedDateTimeRequiredAlice: format(currentDate, DATE_TIME_FORMAT)
          },
          elemDefault
        );
        mockedAxios.get.mockReturnValue(Promise.resolve({ data: returnedFromService }));

        return service.find(123).then(res => {
          expect(res).toMatchObject(elemDefault);
        });
      });

      it('should create a FieldTestPaginationEntity', async () => {
        const returnedFromService = Object.assign(
          {
            id: 0,
            localDateAlice: format(currentDate, DATE_FORMAT),
            localDateRequiredAlice: format(currentDate, DATE_FORMAT),
            instantAlice: format(currentDate, DATE_TIME_FORMAT),
            instanteRequiredAlice: format(currentDate, DATE_TIME_FORMAT),
            zonedDateTimeAlice: format(currentDate, DATE_TIME_FORMAT),
            zonedDateTimeRequiredAlice: format(currentDate, DATE_TIME_FORMAT)
          },
          elemDefault
        );
        const expected = Object.assign(
          {
            localDateAlice: currentDate,
            localDateRequiredAlice: currentDate,
            instantAlice: currentDate,
            instanteRequiredAlice: currentDate,
            zonedDateTimeAlice: currentDate,
            zonedDateTimeRequiredAlice: currentDate
          },
          returnedFromService
        );

        mockedAxios.post.mockReturnValue(Promise.resolve({ data: returnedFromService }));
        return service.create({}).then(res => {
          expect(res).toMatchObject(expected);
        });
      });

      it('should update a FieldTestPaginationEntity', async () => {
        const returnedFromService = Object.assign(
          {
            stringAlice: 'BBBBBB',
            stringRequiredAlice: 'BBBBBB',
            stringMinlengthAlice: 'BBBBBB',
            stringMaxlengthAlice: 'BBBBBB',
            stringPatternAlice: 'BBBBBB',
            integerAlice: 1,
            integerRequiredAlice: 1,
            integerMinAlice: 1,
            integerMaxAlice: 1,
            longAlice: 1,
            longRequiredAlice: 1,
            longMinAlice: 1,
            longMaxAlice: 1,
            floatAlice: 1,
            floatRequiredAlice: 1,
            floatMinAlice: 1,
            floatMaxAlice: 1,
            doubleRequiredAlice: 1,
            doubleMinAlice: 1,
            doubleMaxAlice: 1,
            bigDecimalRequiredAlice: 1,
            bigDecimalMinAlice: 1,
            bigDecimalMaxAlice: 1,
            localDateAlice: format(currentDate, DATE_FORMAT),
            localDateRequiredAlice: format(currentDate, DATE_FORMAT),
            instantAlice: format(currentDate, DATE_TIME_FORMAT),
            instanteRequiredAlice: format(currentDate, DATE_TIME_FORMAT),
            zonedDateTimeAlice: format(currentDate, DATE_TIME_FORMAT),
            zonedDateTimeRequiredAlice: format(currentDate, DATE_TIME_FORMAT),
            durationAlice: 1,
            durationRequiredAlice: 1,
            booleanAlice: true,
            booleanRequiredAlice: true,
            enumAlice: 'BBBBBB',
            enumRequiredAlice: 'BBBBBB',
            uuidAlice: 'BBBBBB',
            uuidRequiredAlice: 'BBBBBB',
            byteImageAlice: 'BBBBBB',
            byteImageRequiredAlice: 'BBBBBB',
            byteImageMinbytesAlice: 'BBBBBB',
            byteImageMaxbytesAlice: 'BBBBBB',
            byteAnyAlice: 'BBBBBB',
            byteAnyRequiredAlice: 'BBBBBB',
            byteAnyMinbytesAlice: 'BBBBBB',
            byteAnyMaxbytesAlice: 'BBBBBB',
            byteTextAlice: 'BBBBBB',
            byteTextRequiredAlice: 'BBBBBB'
          },
          elemDefault
        );

        const expected = Object.assign(
          {
            localDateAlice: currentDate,
            localDateRequiredAlice: currentDate,
            instantAlice: currentDate,
            instanteRequiredAlice: currentDate,
            zonedDateTimeAlice: currentDate,
            zonedDateTimeRequiredAlice: currentDate
          },
          returnedFromService
        );
        mockedAxios.put.mockReturnValue(Promise.resolve({ data: returnedFromService }));

        return service.update(expected).then(res => {
          expect(res).toMatchObject(expected);
        });
      });

      it('should return a list of FieldTestPaginationEntity', async () => {
        const returnedFromService = Object.assign(
          {
            stringAlice: 'BBBBBB',
            stringRequiredAlice: 'BBBBBB',
            stringMinlengthAlice: 'BBBBBB',
            stringMaxlengthAlice: 'BBBBBB',
            stringPatternAlice: 'BBBBBB',
            integerAlice: 1,
            integerRequiredAlice: 1,
            integerMinAlice: 1,
            integerMaxAlice: 1,
            longAlice: 1,
            longRequiredAlice: 1,
            longMinAlice: 1,
            longMaxAlice: 1,
            floatAlice: 1,
            floatRequiredAlice: 1,
            floatMinAlice: 1,
            floatMaxAlice: 1,
            doubleRequiredAlice: 1,
            doubleMinAlice: 1,
            doubleMaxAlice: 1,
            bigDecimalRequiredAlice: 1,
            bigDecimalMinAlice: 1,
            bigDecimalMaxAlice: 1,
            localDateAlice: format(currentDate, DATE_FORMAT),
            localDateRequiredAlice: format(currentDate, DATE_FORMAT),
            instantAlice: format(currentDate, DATE_TIME_FORMAT),
            instanteRequiredAlice: format(currentDate, DATE_TIME_FORMAT),
            zonedDateTimeAlice: format(currentDate, DATE_TIME_FORMAT),
            zonedDateTimeRequiredAlice: format(currentDate, DATE_TIME_FORMAT),
            durationAlice: 1,
            durationRequiredAlice: 1,
            booleanAlice: true,
            booleanRequiredAlice: true,
            enumAlice: 'BBBBBB',
            enumRequiredAlice: 'BBBBBB',
            uuidAlice: 'BBBBBB',
            uuidRequiredAlice: 'BBBBBB',
            byteImageAlice: 'BBBBBB',
            byteImageRequiredAlice: 'BBBBBB',
            byteImageMinbytesAlice: 'BBBBBB',
            byteImageMaxbytesAlice: 'BBBBBB',
            byteAnyAlice: 'BBBBBB',
            byteAnyRequiredAlice: 'BBBBBB',
            byteAnyMinbytesAlice: 'BBBBBB',
            byteAnyMaxbytesAlice: 'BBBBBB',
            byteTextAlice: 'BBBBBB',
            byteTextRequiredAlice: 'BBBBBB'
          },
          elemDefault
        );
        const expected = Object.assign(
          {
            localDateAlice: currentDate,
            localDateRequiredAlice: currentDate,
            instantAlice: currentDate,
            instanteRequiredAlice: currentDate,
            zonedDateTimeAlice: currentDate,
            zonedDateTimeRequiredAlice: currentDate
          },
          returnedFromService
        );
        mockedAxios.get.mockReturnValue(Promise.resolve([returnedFromService]));
        return service.retrieve({ sort: {}, page: 0, size: 10 }).then(res => {
          expect(res).toContainEqual(expected);
        });
      });

      it('should delete a FieldTestPaginationEntity', async () => {
        mockedAxios.delete.mockReturnValue(Promise.resolve({ ok: true }));
        return service.delete(123).then(res => {
          expect(res.ok).toBeTruthy();
        });
      });
    });
  });
});
