/* tslint:disable max-line-length */
import axios from 'axios';

import * as config from '@/shared/config/config';
import {} from '@/shared/date/filters';
import EntityWithServiceClassAndDTOService from '@/entities/entity-with-service-class-and-dto/entity-with-service-class-and-dto.service';
import { EntityWithServiceClassAndDTO } from '@/shared/model/entity-with-service-class-and-dto.model';

const mockedAxios: any = axios;
jest.mock('axios', () => ({
  get: jest.fn(),
  post: jest.fn(),
  put: jest.fn(),
  delete: jest.fn()
}));

describe('Service Tests', () => {
  describe('EntityWithServiceClassAndDTO Service', () => {
    let service: EntityWithServiceClassAndDTOService;
    let elemDefault;
    beforeEach(() => {
      service = new EntityWithServiceClassAndDTOService();

      elemDefault = new EntityWithServiceClassAndDTO(0, 'AAAAAAA');
    });

    describe('Service methods', () => {
      it('should find an element', async () => {
        const returnedFromService = Object.assign({}, elemDefault);
        mockedAxios.get.mockReturnValue(Promise.resolve({ data: returnedFromService }));

        return service.find(123).then(res => {
          expect(res).toMatchObject(elemDefault);
        });
      });

      it('should create a EntityWithServiceClassAndDTO', async () => {
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

      it('should update a EntityWithServiceClassAndDTO', async () => {
        const returnedFromService = Object.assign(
          {
            lucas: 'BBBBBB'
          },
          elemDefault
        );

        const expected = Object.assign({}, returnedFromService);
        mockedAxios.put.mockReturnValue(Promise.resolve({ data: returnedFromService }));

        return service.update(expected).then(res => {
          expect(res).toMatchObject(expected);
        });
      });

      it('should return a list of EntityWithServiceClassAndDTO', async () => {
        const returnedFromService = Object.assign(
          {
            lucas: 'BBBBBB'
          },
          elemDefault
        );
        const expected = Object.assign({}, returnedFromService);
        mockedAxios.get.mockReturnValue(Promise.resolve([returnedFromService]));
        return service.retrieve().then(res => {
          expect(res).toContainEqual(expected);
        });
      });

      it('should delete a EntityWithServiceClassAndDTO', async () => {
        mockedAxios.delete.mockReturnValue(Promise.resolve({ ok: true }));
        return service.delete(123).then(res => {
          expect(res.ok).toBeTruthy();
        });
      });
    });
  });
});
