/* tslint:disable max-line-length */
import axios from 'axios';

import * as config from '@/shared/config/config';
import {} from '@/shared/date/filters';
import EntityWithServiceImplAndPaginationService from '@/entities/entity-with-service-impl-and-pagination/entity-with-service-impl-and-pagination.service';
import { EntityWithServiceImplAndPagination } from '@/shared/model/entity-with-service-impl-and-pagination.model';

const mockedAxios: any = axios;
jest.mock('axios', () => ({
  get: jest.fn(),
  post: jest.fn(),
  put: jest.fn(),
  delete: jest.fn()
}));

describe('Service Tests', () => {
  describe('EntityWithServiceImplAndPagination Service', () => {
    let service: EntityWithServiceImplAndPaginationService;
    let elemDefault;
    beforeEach(() => {
      service = new EntityWithServiceImplAndPaginationService();

      elemDefault = new EntityWithServiceImplAndPagination(0, 'AAAAAAA');
    });

    describe('Service methods', () => {
      it('should find an element', async () => {
        const returnedFromService = Object.assign({}, elemDefault);
        mockedAxios.get.mockReturnValue(Promise.resolve({ data: returnedFromService }));

        return service.find(123).then(res => {
          expect(res).toMatchObject(elemDefault);
        });
      });

      it('should create a EntityWithServiceImplAndPagination', async () => {
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

      it('should update a EntityWithServiceImplAndPagination', async () => {
        const returnedFromService = Object.assign(
          {
            hugo: 'BBBBBB'
          },
          elemDefault
        );

        const expected = Object.assign({}, returnedFromService);
        mockedAxios.put.mockReturnValue(Promise.resolve({ data: returnedFromService }));

        return service.update(expected).then(res => {
          expect(res).toMatchObject(expected);
        });
      });

      it('should return a list of EntityWithServiceImplAndPagination', async () => {
        const returnedFromService = Object.assign(
          {
            hugo: 'BBBBBB'
          },
          elemDefault
        );
        const expected = Object.assign({}, returnedFromService);
        mockedAxios.get.mockReturnValue(Promise.resolve([returnedFromService]));
        return service.retrieve({ sort: {}, page: 0, size: 10 }).then(res => {
          expect(res).toContainEqual(expected);
        });
      });

      it('should delete a EntityWithServiceImplAndPagination', async () => {
        mockedAxios.delete.mockReturnValue(Promise.resolve({ ok: true }));
        return service.delete(123).then(res => {
          expect(res.ok).toBeTruthy();
        });
      });
    });
  });
});
