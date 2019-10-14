/* tslint:disable max-line-length */
import axios from 'axios';

import * as config from '@/shared/config/config';
import {} from '@/shared/date/filters';
import EntityWithServiceImplAndDTOService from '@/entities/entity-with-service-impl-and-dto/entity-with-service-impl-and-dto.service';
import { EntityWithServiceImplAndDTO } from '@/shared/model/entity-with-service-impl-and-dto.model';

const mockedAxios: any = axios;
jest.mock('axios', () => ({
  get: jest.fn(),
  post: jest.fn(),
  put: jest.fn(),
  delete: jest.fn()
}));

describe('Service Tests', () => {
  describe('EntityWithServiceImplAndDTO Service', () => {
    let service: EntityWithServiceImplAndDTOService;
    let elemDefault;
    beforeEach(() => {
      service = new EntityWithServiceImplAndDTOService();

      elemDefault = new EntityWithServiceImplAndDTO(0, 'AAAAAAA');
    });

    describe('Service methods', () => {
      it('should find an element', async () => {
        const returnedFromService = Object.assign({}, elemDefault);
        mockedAxios.get.mockReturnValue(Promise.resolve({ data: returnedFromService }));

        return service.find(123).then(res => {
          expect(res).toMatchObject(elemDefault);
        });
      });

      it('should create a EntityWithServiceImplAndDTO', async () => {
        const returnedFromService = Object.assign(
          {
            id: 0
          },
          elemDefault
        );
        const expected = Object.assign({}, returnedFromService);

        mockedAxios.post.mockReturnValue(Promise.resolve({ data: returnedFromService }));
        return service.create({}).then(res => {
          expect(res).toMatchObject(expected);
        });
      });

      it('should update a EntityWithServiceImplAndDTO', async () => {
        const returnedFromService = Object.assign(
          {
            louis: 'BBBBBB'
          },
          elemDefault
        );

        const expected = Object.assign({}, returnedFromService);
        mockedAxios.put.mockReturnValue(Promise.resolve({ data: returnedFromService }));

        return service.update(expected).then(res => {
          expect(res).toMatchObject(expected);
        });
      });

      it('should return a list of EntityWithServiceImplAndDTO', async () => {
        const returnedFromService = Object.assign(
          {
            louis: 'BBBBBB'
          },
          elemDefault
        );
        const expected = Object.assign({}, returnedFromService);
        mockedAxios.get.mockReturnValue(Promise.resolve([returnedFromService]));
        return service.retrieve().then(res => {
          expect(res).toContainEqual(expected);
        });
      });

      it('should delete a EntityWithServiceImplAndDTO', async () => {
        mockedAxios.delete.mockReturnValue(Promise.resolve({ ok: true }));
        return service.delete(123).then(res => {
          expect(res.ok).toBeTruthy();
        });
      });
    });
  });
});
