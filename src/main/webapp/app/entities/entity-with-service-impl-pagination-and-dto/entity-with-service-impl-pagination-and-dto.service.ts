import axios from 'axios';

import buildPaginationQueryOpts from '@/shared/sort/sorts';

import { IEntityWithServiceImplPaginationAndDTO } from '@/shared/model/entity-with-service-impl-pagination-and-dto.model';

const baseApiUrl = 'api/entity-with-service-impl-pagination-and-dtos';

export default class EntityWithServiceImplPaginationAndDTOService {
  public find(id: number): Promise<IEntityWithServiceImplPaginationAndDTO> {
    return new Promise<IEntityWithServiceImplPaginationAndDTO>(resolve => {
      axios.get(`${baseApiUrl}/${id}`).then(function(res) {
        resolve(res.data);
      });
    });
  }

  public retrieve(paginationQuery?: any): Promise<any> {
    return new Promise<any>(resolve => {
      axios.get(baseApiUrl + `?${buildPaginationQueryOpts(paginationQuery)}`).then(function(res) {
        resolve(res);
      });
    });
  }

  public delete(id: number): Promise<any> {
    return new Promise<any>(resolve => {
      axios.delete(`${baseApiUrl}/${id}`).then(function(res) {
        resolve(res);
      });
    });
  }

  public create(entity: IEntityWithServiceImplPaginationAndDTO): Promise<IEntityWithServiceImplPaginationAndDTO> {
    return new Promise<IEntityWithServiceImplPaginationAndDTO>(resolve => {
      axios.post(`${baseApiUrl}`, entity).then(function(res) {
        resolve(res.data);
      });
    });
  }

  public update(entity: IEntityWithServiceImplPaginationAndDTO): Promise<IEntityWithServiceImplPaginationAndDTO> {
    return new Promise<IEntityWithServiceImplPaginationAndDTO>(resolve => {
      axios.put(`${baseApiUrl}`, entity).then(function(res) {
        resolve(res.data);
      });
    });
  }
}
