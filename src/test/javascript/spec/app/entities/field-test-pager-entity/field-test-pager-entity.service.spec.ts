/* tslint:disable max-line-length */
import axios from 'axios';
import { format } from 'date-fns';

import * as config from '@/shared/config/config';
import { DATE_FORMAT, DATE_TIME_FORMAT } from '@/shared/date/filters';
import FieldTestPagerEntityService from '@/entities/field-test-pager-entity/field-test-pager-entity.service';
import { FieldTestPagerEntity, EnumFieldClass, EnumRequiredFieldClass } from '@/shared/model/field-test-pager-entity.model';

const mockedAxios: any = axios;
jest.mock('axios', () => ({
  get: jest.fn(),
  post: jest.fn(),
  put: jest.fn(),
  delete: jest.fn()
}));

describe('Service Tests', () => {
  describe('FieldTestPagerEntity Service', () => {
    let service: FieldTestPagerEntityService;
    let elemDefault;
    let currentDate: Date;
    beforeEach(() => {
      service = new FieldTestPagerEntityService();
      currentDate = new Date();

      elemDefault = new FieldTestPagerEntity(
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
            localDateJade: format(currentDate, DATE_FORMAT),
            localDateRequiredJade: format(currentDate, DATE_FORMAT),
            instantJade: format(currentDate, DATE_TIME_FORMAT),
            instanteRequiredJade: format(currentDate, DATE_TIME_FORMAT),
            zonedDateTimeJade: format(currentDate, DATE_TIME_FORMAT),
            zonedDateTimeRequiredJade: format(currentDate, DATE_TIME_FORMAT)
          },
          elemDefault
        );
        mockedAxios.get.mockReturnValue(Promise.resolve({ data: returnedFromService }));

        return service.find(123).then(res => {
          expect(res).toMatchObject(elemDefault);
        });
      });

      it('should create a FieldTestPagerEntity', async () => {
        const returnedFromService = Object.assign(
          {
            id: 0,
            localDateJade: format(currentDate, DATE_FORMAT),
            localDateRequiredJade: format(currentDate, DATE_FORMAT),
            instantJade: format(currentDate, DATE_TIME_FORMAT),
            instanteRequiredJade: format(currentDate, DATE_TIME_FORMAT),
            zonedDateTimeJade: format(currentDate, DATE_TIME_FORMAT),
            zonedDateTimeRequiredJade: format(currentDate, DATE_TIME_FORMAT)
          },
          elemDefault
        );
        const expected = Object.assign(
          {
            localDateJade: currentDate,
            localDateRequiredJade: currentDate,
            instantJade: currentDate,
            instanteRequiredJade: currentDate,
            zonedDateTimeJade: currentDate,
            zonedDateTimeRequiredJade: currentDate
          },
          returnedFromService
        );

        mockedAxios.post.mockReturnValue(Promise.resolve({ data: returnedFromService }));
        return service.create({}).then(res => {
          expect(res).toMatchObject(expected);
        });
      });

      it('should update a FieldTestPagerEntity', async () => {
        const returnedFromService = Object.assign(
          {
            stringJade: 'BBBBBB',
            stringRequiredJade: 'BBBBBB',
            stringMinlengthJade: 'BBBBBB',
            stringMaxlengthJade: 'BBBBBB',
            stringPatternJade: 'BBBBBB',
            integerJade: 1,
            integerRequiredJade: 1,
            integerMinJade: 1,
            integerMaxJade: 1,
            longJade: 1,
            longRequiredJade: 1,
            longMinJade: 1,
            longMaxJade: 1,
            floatJade: 1,
            floatRequiredJade: 1,
            floatMinJade: 1,
            floatMaxJade: 1,
            doubleRequiredJade: 1,
            doubleMinJade: 1,
            doubleMaxJade: 1,
            bigDecimalRequiredJade: 1,
            bigDecimalMinJade: 1,
            bigDecimalMaxJade: 1,
            localDateJade: format(currentDate, DATE_FORMAT),
            localDateRequiredJade: format(currentDate, DATE_FORMAT),
            instantJade: format(currentDate, DATE_TIME_FORMAT),
            instanteRequiredJade: format(currentDate, DATE_TIME_FORMAT),
            zonedDateTimeJade: format(currentDate, DATE_TIME_FORMAT),
            zonedDateTimeRequiredJade: format(currentDate, DATE_TIME_FORMAT),
            durationJade: 1,
            durationRequiredJade: 1,
            booleanJade: true,
            booleanRequiredJade: true,
            enumJade: 'BBBBBB',
            enumRequiredJade: 'BBBBBB',
            uuidJade: 'BBBBBB',
            uuidRequiredJade: 'BBBBBB',
            byteImageJade: 'BBBBBB',
            byteImageRequiredJade: 'BBBBBB',
            byteImageMinbytesJade: 'BBBBBB',
            byteImageMaxbytesJade: 'BBBBBB',
            byteAnyJade: 'BBBBBB',
            byteAnyRequiredJade: 'BBBBBB',
            byteAnyMinbytesJade: 'BBBBBB',
            byteAnyMaxbytesJade: 'BBBBBB',
            byteTextJade: 'BBBBBB',
            byteTextRequiredJade: 'BBBBBB'
          },
          elemDefault
        );

        const expected = Object.assign(
          {
            localDateJade: currentDate,
            localDateRequiredJade: currentDate,
            instantJade: currentDate,
            instanteRequiredJade: currentDate,
            zonedDateTimeJade: currentDate,
            zonedDateTimeRequiredJade: currentDate
          },
          returnedFromService
        );
        mockedAxios.put.mockReturnValue(Promise.resolve({ data: returnedFromService }));

        return service.update(expected).then(res => {
          expect(res).toMatchObject(expected);
        });
      });

      it('should return a list of FieldTestPagerEntity', async () => {
        const returnedFromService = Object.assign(
          {
            stringJade: 'BBBBBB',
            stringRequiredJade: 'BBBBBB',
            stringMinlengthJade: 'BBBBBB',
            stringMaxlengthJade: 'BBBBBB',
            stringPatternJade: 'BBBBBB',
            integerJade: 1,
            integerRequiredJade: 1,
            integerMinJade: 1,
            integerMaxJade: 1,
            longJade: 1,
            longRequiredJade: 1,
            longMinJade: 1,
            longMaxJade: 1,
            floatJade: 1,
            floatRequiredJade: 1,
            floatMinJade: 1,
            floatMaxJade: 1,
            doubleRequiredJade: 1,
            doubleMinJade: 1,
            doubleMaxJade: 1,
            bigDecimalRequiredJade: 1,
            bigDecimalMinJade: 1,
            bigDecimalMaxJade: 1,
            localDateJade: format(currentDate, DATE_FORMAT),
            localDateRequiredJade: format(currentDate, DATE_FORMAT),
            instantJade: format(currentDate, DATE_TIME_FORMAT),
            instanteRequiredJade: format(currentDate, DATE_TIME_FORMAT),
            zonedDateTimeJade: format(currentDate, DATE_TIME_FORMAT),
            zonedDateTimeRequiredJade: format(currentDate, DATE_TIME_FORMAT),
            durationJade: 1,
            durationRequiredJade: 1,
            booleanJade: true,
            booleanRequiredJade: true,
            enumJade: 'BBBBBB',
            enumRequiredJade: 'BBBBBB',
            uuidJade: 'BBBBBB',
            uuidRequiredJade: 'BBBBBB',
            byteImageJade: 'BBBBBB',
            byteImageRequiredJade: 'BBBBBB',
            byteImageMinbytesJade: 'BBBBBB',
            byteImageMaxbytesJade: 'BBBBBB',
            byteAnyJade: 'BBBBBB',
            byteAnyRequiredJade: 'BBBBBB',
            byteAnyMinbytesJade: 'BBBBBB',
            byteAnyMaxbytesJade: 'BBBBBB',
            byteTextJade: 'BBBBBB',
            byteTextRequiredJade: 'BBBBBB'
          },
          elemDefault
        );
        const expected = Object.assign(
          {
            localDateJade: currentDate,
            localDateRequiredJade: currentDate,
            instantJade: currentDate,
            instanteRequiredJade: currentDate,
            zonedDateTimeJade: currentDate,
            zonedDateTimeRequiredJade: currentDate
          },
          returnedFromService
        );
        mockedAxios.get.mockReturnValue(Promise.resolve([returnedFromService]));
        return service.retrieve({ sort: {}, page: 0, size: 10 }).then(res => {
          expect(res).toContainEqual(expected);
        });
      });

      it('should delete a FieldTestPagerEntity', async () => {
        mockedAxios.delete.mockReturnValue(Promise.resolve({ ok: true }));
        return service.delete(123).then(res => {
          expect(res.ok).toBeTruthy();
        });
      });
    });
  });
});
