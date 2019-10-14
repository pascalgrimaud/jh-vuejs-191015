/* tslint:disable max-line-length */
import axios from 'axios';
import { format } from 'date-fns';

import * as config from '@/shared/config/config';
import { DATE_TIME_FORMAT } from '@/shared/date/filters';
import MapsIdUserProfileWithDTOService from '@/entities/maps-id-user-profile-with-dto/maps-id-user-profile-with-dto.service';
import { MapsIdUserProfileWithDTO } from '@/shared/model/maps-id-user-profile-with-dto.model';

const mockedAxios: any = axios;
jest.mock('axios', () => ({
  get: jest.fn(),
  post: jest.fn(),
  put: jest.fn(),
  delete: jest.fn()
}));

describe('Service Tests', () => {
  describe('MapsIdUserProfileWithDTO Service', () => {
    let service: MapsIdUserProfileWithDTOService;
    let elemDefault;
    let currentDate: Date;
    beforeEach(() => {
      service = new MapsIdUserProfileWithDTOService();
      currentDate = new Date();

      elemDefault = new MapsIdUserProfileWithDTO(0, currentDate);
    });

    describe('Service methods', () => {
      it('should find an element', async () => {
        const returnedFromService = Object.assign(
          {
            dateOfBirth: format(currentDate, DATE_TIME_FORMAT)
          },
          elemDefault
        );
        mockedAxios.get.mockReturnValue(Promise.resolve({ data: returnedFromService }));

        return service.find(123).then(res => {
          expect(res).toMatchObject(elemDefault);
        });
      });

      it('should create a MapsIdUserProfileWithDTO', async () => {
        const returnedFromService = Object.assign(
          {
            id: 0,
            dateOfBirth: format(currentDate, DATE_TIME_FORMAT)
          },
          elemDefault
        );
        const expected = Object.assign(
          {
            dateOfBirth: currentDate
          },
          returnedFromService
        );

        mockedAxios.post.mockReturnValue(Promise.resolve({ data: returnedFromService }));
        return service.create({}).then(res => {
          expect(res).toMatchObject(expected);
        });
      });

      it('should update a MapsIdUserProfileWithDTO', async () => {
        const returnedFromService = Object.assign(
          {
            dateOfBirth: format(currentDate, DATE_TIME_FORMAT)
          },
          elemDefault
        );

        const expected = Object.assign(
          {
            dateOfBirth: currentDate
          },
          returnedFromService
        );
        mockedAxios.put.mockReturnValue(Promise.resolve({ data: returnedFromService }));

        return service.update(expected).then(res => {
          expect(res).toMatchObject(expected);
        });
      });

      it('should return a list of MapsIdUserProfileWithDTO', async () => {
        const returnedFromService = Object.assign(
          {
            dateOfBirth: format(currentDate, DATE_TIME_FORMAT)
          },
          elemDefault
        );
        const expected = Object.assign(
          {
            dateOfBirth: currentDate
          },
          returnedFromService
        );
        mockedAxios.get.mockReturnValue(Promise.resolve([returnedFromService]));
        return service.retrieve().then(res => {
          expect(res).toContainEqual(expected);
        });
      });

      it('should delete a MapsIdUserProfileWithDTO', async () => {
        mockedAxios.delete.mockReturnValue(Promise.resolve({ ok: true }));
        return service.delete(123).then(res => {
          expect(res.ok).toBeTruthy();
        });
      });
    });
  });
});
