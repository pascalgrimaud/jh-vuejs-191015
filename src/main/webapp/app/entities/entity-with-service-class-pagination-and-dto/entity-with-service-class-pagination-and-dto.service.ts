import axios from 'axios';

import buildPaginationQueryOpts from '@/shared/sort/sorts';

import { IEntityWithServiceClassPaginationAndDTO } from '@/shared/model/entity-with-service-class-pagination-and-dto.model';

const baseApiUrl = 'api/entity-with-service-class-pagination-and-dtos';

export default class EntityWithServiceClassPaginationAndDTOService {
  public find(id: number): Promise<IEntityWithServiceClassPaginationAndDTO> {
    return new Promise<IEntityWithServiceClassPaginationAndDTO>(resolve => {
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

  public create(entity: IEntityWithServiceClassPaginationAndDTO): Promise<IEntityWithServiceClassPaginationAndDTO> {
    return new Promise<IEntityWithServiceClassPaginationAndDTO>(resolve => {
      axios.post(`${baseApiUrl}`, entity).then(function(res) {
        resolve(res.data);
      });
    });
  }

  public update(entity: IEntityWithServiceClassPaginationAndDTO): Promise<IEntityWithServiceClassPaginationAndDTO> {
    return new Promise<IEntityWithServiceClassPaginationAndDTO>(resolve => {
      axios.put(`${baseApiUrl}`, entity).then(function(res) {
        resolve(res.data);
      });
    });
  }
}
