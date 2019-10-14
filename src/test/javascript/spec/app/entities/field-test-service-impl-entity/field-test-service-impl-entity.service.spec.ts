/* tslint:disable max-line-length */
import axios from 'axios';
import { format } from 'date-fns';

import * as config from '@/shared/config/config';
import { DATE_FORMAT, DATE_TIME_FORMAT } from '@/shared/date/filters';
import FieldTestServiceImplEntityService from '@/entities/field-test-service-impl-entity/field-test-service-impl-entity.service';
import { FieldTestServiceImplEntity, EnumFieldClass, EnumRequiredFieldClass } from '@/shared/model/field-test-service-impl-entity.model';

const mockedAxios: any = axios;
jest.mock('axios', () => ({
  get: jest.fn(),
  post: jest.fn(),
  put: jest.fn(),
  delete: jest.fn()
}));

describe('Service Tests', () => {
  describe('FieldTestServiceImplEntity Service', () => {
    let service: FieldTestServiceImplEntityService;
    let elemDefault;
    let currentDate: Date;
    beforeEach(() => {
      service = new FieldTestServiceImplEntityService();
      currentDate = new Date();

      elemDefault = new FieldTestServiceImplEntity(
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
            localDateMika: format(currentDate, DATE_FORMAT),
            localDateRequiredMika: format(currentDate, DATE_FORMAT),
            instantMika: format(currentDate, DATE_TIME_FORMAT),
            instanteRequiredMika: format(currentDate, DATE_TIME_FORMAT),
            zonedDateTimeMika: format(currentDate, DATE_TIME_FORMAT),
            zonedDateTimeRequiredMika: format(currentDate, DATE_TIME_FORMAT)
          },
          elemDefault
        );
        mockedAxios.get.mockReturnValue(Promise.resolve({ data: returnedFromService }));

        return service.find(123).then(res => {
          expect(res).toMatchObject(elemDefault);
        });
      });

      it('should create a FieldTestServiceImplEntity', async () => {
        const returnedFromService = Object.assign(
          {
            id: 0,
            localDateMika: format(currentDate, DATE_FORMAT),
            localDateRequiredMika: format(currentDate, DATE_FORMAT),
            instantMika: format(currentDate, DATE_TIME_FORMAT),
            instanteRequiredMika: format(currentDate, DATE_TIME_FORMAT),
            zonedDateTimeMika: format(currentDate, DATE_TIME_FORMAT),
            zonedDateTimeRequiredMika: format(currentDate, DATE_TIME_FORMAT)
          },
          elemDefault
        );
        const expected = Object.assign(
          {
            localDateMika: currentDate,
            localDateRequiredMika: currentDate,
            instantMika: currentDate,
            instanteRequiredMika: currentDate,
            zonedDateTimeMika: currentDate,
            zonedDateTimeRequiredMika: currentDate
          },
          returnedFromService
        );

        mockedAxios.post.mockReturnValue(Promise.resolve({ data: returnedFromService }));
        return service.create({}).then(res => {
          expect(res).toMatchObject(expected);
        });
      });

      it('should update a FieldTestServiceImplEntity', async () => {
        const returnedFromService = Object.assign(
          {
            stringMika: 'BBBBBB',
            stringRequiredMika: 'BBBBBB',
            stringMinlengthMika: 'BBBBBB',
            stringMaxlengthMika: 'BBBBBB',
            stringPatternMika: 'BBBBBB',
            integerMika: 1,
            integerRequiredMika: 1,
            integerMinMika: 1,
            integerMaxMika: 1,
            longMika: 1,
            longRequiredMika: 1,
            longMinMika: 1,
            longMaxMika: 1,
            floatMika: 1,
            floatRequiredMika: 1,
            floatMinMika: 1,
            floatMaxMika: 1,
            doubleRequiredMika: 1,
            doubleMinMika: 1,
            doubleMaxMika: 1,
            bigDecimalRequiredMika: 1,
            bigDecimalMinMika: 1,
            bigDecimalMaxMika: 1,
            localDateMika: format(currentDate, DATE_FORMAT),
            localDateRequiredMika: format(currentDate, DATE_FORMAT),
            instantMika: format(currentDate, DATE_TIME_FORMAT),
            instanteRequiredMika: format(currentDate, DATE_TIME_FORMAT),
            zonedDateTimeMika: format(currentDate, DATE_TIME_FORMAT),
            zonedDateTimeRequiredMika: format(currentDate, DATE_TIME_FORMAT),
            durationMika: 1,
            durationRequiredMika: 1,
            booleanMika: true,
            booleanRequiredMika: true,
            enumMika: 'BBBBBB',
            enumRequiredMika: 'BBBBBB',
            uuidMika: 'BBBBBB',
            uuidRequiredMika: 'BBBBBB',
            byteImageMika: 'BBBBBB',
            byteImageRequiredMika: 'BBBBBB',
            byteImageMinbytesMika: 'BBBBBB',
            byteImageMaxbytesMika: 'BBBBBB',
            byteAnyMika: 'BBBBBB',
            byteAnyRequiredMika: 'BBBBBB',
            byteAnyMinbytesMika: 'BBBBBB',
            byteAnyMaxbytesMika: 'BBBBBB',
            byteTextMika: 'BBBBBB',
            byteTextRequiredMika: 'BBBBBB'
          },
          elemDefault
        );

        const expected = Object.assign(
          {
            localDateMika: currentDate,
            localDateRequiredMika: currentDate,
            instantMika: currentDate,
            instanteRequiredMika: currentDate,
            zonedDateTimeMika: currentDate,
            zonedDateTimeRequiredMika: currentDate
          },
          returnedFromService
        );
        mockedAxios.put.mockReturnValue(Promise.resolve({ data: returnedFromService }));

        return service.update(expected).then(res => {
          expect(res).toMatchObject(expected);
        });
      });

      it('should return a list of FieldTestServiceImplEntity', async () => {
        const returnedFromService = Object.assign(
          {
            stringMika: 'BBBBBB',
            stringRequiredMika: 'BBBBBB',
            stringMinlengthMika: 'BBBBBB',
            stringMaxlengthMika: 'BBBBBB',
            stringPatternMika: 'BBBBBB',
            integerMika: 1,
            integerRequiredMika: 1,
            integerMinMika: 1,
            integerMaxMika: 1,
            longMika: 1,
            longRequiredMika: 1,
            longMinMika: 1,
            longMaxMika: 1,
            floatMika: 1,
            floatRequiredMika: 1,
            floatMinMika: 1,
            floatMaxMika: 1,
            doubleRequiredMika: 1,
            doubleMinMika: 1,
            doubleMaxMika: 1,
            bigDecimalRequiredMika: 1,
            bigDecimalMinMika: 1,
            bigDecimalMaxMika: 1,
            localDateMika: format(currentDate, DATE_FORMAT),
            localDateRequiredMika: format(currentDate, DATE_FORMAT),
            instantMika: format(currentDate, DATE_TIME_FORMAT),
            instanteRequiredMika: format(currentDate, DATE_TIME_FORMAT),
            zonedDateTimeMika: format(currentDate, DATE_TIME_FORMAT),
            zonedDateTimeRequiredMika: format(currentDate, DATE_TIME_FORMAT),
            durationMika: 1,
            durationRequiredMika: 1,
            booleanMika: true,
            booleanRequiredMika: true,
            enumMika: 'BBBBBB',
            enumRequiredMika: 'BBBBBB',
            uuidMika: 'BBBBBB',
            uuidRequiredMika: 'BBBBBB',
            byteImageMika: 'BBBBBB',
            byteImageRequiredMika: 'BBBBBB',
            byteImageMinbytesMika: 'BBBBBB',
            byteImageMaxbytesMika: 'BBBBBB',
            byteAnyMika: 'BBBBBB',
            byteAnyRequiredMika: 'BBBBBB',
            byteAnyMinbytesMika: 'BBBBBB',
            byteAnyMaxbytesMika: 'BBBBBB',
            byteTextMika: 'BBBBBB',
            byteTextRequiredMika: 'BBBBBB'
          },
          elemDefault
        );
        const expected = Object.assign(
          {
            localDateMika: currentDate,
            localDateRequiredMika: currentDate,
            instantMika: currentDate,
            instanteRequiredMika: currentDate,
            zonedDateTimeMika: currentDate,
            zonedDateTimeRequiredMika: currentDate
          },
          returnedFromService
        );
        mockedAxios.get.mockReturnValue(Promise.resolve([returnedFromService]));
        return service.retrieve().then(res => {
          expect(res).toContainEqual(expected);
        });
      });

      it('should delete a FieldTestServiceImplEntity', async () => {
        mockedAxios.delete.mockReturnValue(Promise.resolve({ ok: true }));
        return service.delete(123).then(res => {
          expect(res.ok).toBeTruthy();
        });
      });
    });
  });
});
