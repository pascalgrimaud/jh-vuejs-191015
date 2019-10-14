/* tslint:disable max-line-length */
import axios from 'axios';
import { format } from 'date-fns';

import * as config from '@/shared/config/config';
import { DATE_FORMAT, DATE_TIME_FORMAT } from '@/shared/date/filters';
import FieldTestServiceClassEntityService from '@/entities/field-test-service-class-entity/field-test-service-class-entity.service';
import { FieldTestServiceClassEntity, EnumFieldClass, EnumRequiredFieldClass } from '@/shared/model/field-test-service-class-entity.model';

const mockedAxios: any = axios;
jest.mock('axios', () => ({
  get: jest.fn(),
  post: jest.fn(),
  put: jest.fn(),
  delete: jest.fn()
}));

describe('Service Tests', () => {
  describe('FieldTestServiceClassEntity Service', () => {
    let service: FieldTestServiceClassEntityService;
    let elemDefault;
    let currentDate: Date;
    beforeEach(() => {
      service = new FieldTestServiceClassEntityService();
      currentDate = new Date();

      elemDefault = new FieldTestServiceClassEntity(
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
            localDateBob: format(currentDate, DATE_FORMAT),
            localDateRequiredBob: format(currentDate, DATE_FORMAT),
            instantBob: format(currentDate, DATE_TIME_FORMAT),
            instanteRequiredBob: format(currentDate, DATE_TIME_FORMAT),
            zonedDateTimeBob: format(currentDate, DATE_TIME_FORMAT),
            zonedDateTimeRequiredBob: format(currentDate, DATE_TIME_FORMAT)
          },
          elemDefault
        );
        mockedAxios.get.mockReturnValue(Promise.resolve({ data: returnedFromService }));

        return service.find(123).then(res => {
          expect(res).toMatchObject(elemDefault);
        });
      });

      it('should create a FieldTestServiceClassEntity', async () => {
        const returnedFromService = Object.assign(
          {
            id: 0,
            localDateBob: format(currentDate, DATE_FORMAT),
            localDateRequiredBob: format(currentDate, DATE_FORMAT),
            instantBob: format(currentDate, DATE_TIME_FORMAT),
            instanteRequiredBob: format(currentDate, DATE_TIME_FORMAT),
            zonedDateTimeBob: format(currentDate, DATE_TIME_FORMAT),
            zonedDateTimeRequiredBob: format(currentDate, DATE_TIME_FORMAT)
          },
          elemDefault
        );
        const expected = Object.assign(
          {
            localDateBob: currentDate,
            localDateRequiredBob: currentDate,
            instantBob: currentDate,
            instanteRequiredBob: currentDate,
            zonedDateTimeBob: currentDate,
            zonedDateTimeRequiredBob: currentDate
          },
          returnedFromService
        );

        mockedAxios.post.mockReturnValue(Promise.resolve({ data: returnedFromService }));
        return service.create({}).then(res => {
          expect(res).toMatchObject(expected);
        });
      });

      it('should update a FieldTestServiceClassEntity', async () => {
        const returnedFromService = Object.assign(
          {
            stringBob: 'BBBBBB',
            stringRequiredBob: 'BBBBBB',
            stringMinlengthBob: 'BBBBBB',
            stringMaxlengthBob: 'BBBBBB',
            stringPatternBob: 'BBBBBB',
            integerBob: 1,
            integerRequiredBob: 1,
            integerMinBob: 1,
            integerMaxBob: 1,
            longBob: 1,
            longRequiredBob: 1,
            longMinBob: 1,
            longMaxBob: 1,
            floatBob: 1,
            floatRequiredBob: 1,
            floatMinBob: 1,
            floatMaxBob: 1,
            doubleRequiredBob: 1,
            doubleMinBob: 1,
            doubleMaxBob: 1,
            bigDecimalRequiredBob: 1,
            bigDecimalMinBob: 1,
            bigDecimalMaxBob: 1,
            localDateBob: format(currentDate, DATE_FORMAT),
            localDateRequiredBob: format(currentDate, DATE_FORMAT),
            instantBob: format(currentDate, DATE_TIME_FORMAT),
            instanteRequiredBob: format(currentDate, DATE_TIME_FORMAT),
            zonedDateTimeBob: format(currentDate, DATE_TIME_FORMAT),
            zonedDateTimeRequiredBob: format(currentDate, DATE_TIME_FORMAT),
            durationBob: 1,
            durationRequiredBob: 1,
            booleanBob: true,
            booleanRequiredBob: true,
            enumBob: 'BBBBBB',
            enumRequiredBob: 'BBBBBB',
            uuidBob: 'BBBBBB',
            uuidRequiredBob: 'BBBBBB',
            byteImageBob: 'BBBBBB',
            byteImageRequiredBob: 'BBBBBB',
            byteImageMinbytesBob: 'BBBBBB',
            byteImageMaxbytesBob: 'BBBBBB',
            byteAnyBob: 'BBBBBB',
            byteAnyRequiredBob: 'BBBBBB',
            byteAnyMinbytesBob: 'BBBBBB',
            byteAnyMaxbytesBob: 'BBBBBB',
            byteTextBob: 'BBBBBB',
            byteTextRequiredBob: 'BBBBBB'
          },
          elemDefault
        );

        const expected = Object.assign(
          {
            localDateBob: currentDate,
            localDateRequiredBob: currentDate,
            instantBob: currentDate,
            instanteRequiredBob: currentDate,
            zonedDateTimeBob: currentDate,
            zonedDateTimeRequiredBob: currentDate
          },
          returnedFromService
        );
        mockedAxios.put.mockReturnValue(Promise.resolve({ data: returnedFromService }));

        return service.update(expected).then(res => {
          expect(res).toMatchObject(expected);
        });
      });

      it('should return a list of FieldTestServiceClassEntity', async () => {
        const returnedFromService = Object.assign(
          {
            stringBob: 'BBBBBB',
            stringRequiredBob: 'BBBBBB',
            stringMinlengthBob: 'BBBBBB',
            stringMaxlengthBob: 'BBBBBB',
            stringPatternBob: 'BBBBBB',
            integerBob: 1,
            integerRequiredBob: 1,
            integerMinBob: 1,
            integerMaxBob: 1,
            longBob: 1,
            longRequiredBob: 1,
            longMinBob: 1,
            longMaxBob: 1,
            floatBob: 1,
            floatRequiredBob: 1,
            floatMinBob: 1,
            floatMaxBob: 1,
            doubleRequiredBob: 1,
            doubleMinBob: 1,
            doubleMaxBob: 1,
            bigDecimalRequiredBob: 1,
            bigDecimalMinBob: 1,
            bigDecimalMaxBob: 1,
            localDateBob: format(currentDate, DATE_FORMAT),
            localDateRequiredBob: format(currentDate, DATE_FORMAT),
            instantBob: format(currentDate, DATE_TIME_FORMAT),
            instanteRequiredBob: format(currentDate, DATE_TIME_FORMAT),
            zonedDateTimeBob: format(currentDate, DATE_TIME_FORMAT),
            zonedDateTimeRequiredBob: format(currentDate, DATE_TIME_FORMAT),
            durationBob: 1,
            durationRequiredBob: 1,
            booleanBob: true,
            booleanRequiredBob: true,
            enumBob: 'BBBBBB',
            enumRequiredBob: 'BBBBBB',
            uuidBob: 'BBBBBB',
            uuidRequiredBob: 'BBBBBB',
            byteImageBob: 'BBBBBB',
            byteImageRequiredBob: 'BBBBBB',
            byteImageMinbytesBob: 'BBBBBB',
            byteImageMaxbytesBob: 'BBBBBB',
            byteAnyBob: 'BBBBBB',
            byteAnyRequiredBob: 'BBBBBB',
            byteAnyMinbytesBob: 'BBBBBB',
            byteAnyMaxbytesBob: 'BBBBBB',
            byteTextBob: 'BBBBBB',
            byteTextRequiredBob: 'BBBBBB'
          },
          elemDefault
        );
        const expected = Object.assign(
          {
            localDateBob: currentDate,
            localDateRequiredBob: currentDate,
            instantBob: currentDate,
            instanteRequiredBob: currentDate,
            zonedDateTimeBob: currentDate,
            zonedDateTimeRequiredBob: currentDate
          },
          returnedFromService
        );
        mockedAxios.get.mockReturnValue(Promise.resolve([returnedFromService]));
        return service.retrieve().then(res => {
          expect(res).toContainEqual(expected);
        });
      });

      it('should delete a FieldTestServiceClassEntity', async () => {
        mockedAxios.delete.mockReturnValue(Promise.resolve({ ok: true }));
        return service.delete(123).then(res => {
          expect(res.ok).toBeTruthy();
        });
      });
    });
  });
});
