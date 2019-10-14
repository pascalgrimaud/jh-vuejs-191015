import axios from 'axios';

import buildPaginationQueryOpts from '@/shared/sort/sorts';

import { IEntityWithServiceClassAndPagination } from '@/shared/model/entity-with-service-class-and-pagination.model';

const baseApiUrl = 'api/entity-with-service-class-and-paginations';

export default class EntityWithServiceClassAndPaginationService {
  public find(id: number): Promise<IEntityWithServiceClassAndPagination> {
    return new Promise<IEntityWithServiceClassAndPagination>(resolve => {
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

  public create(entity: IEntityWithServiceClassAndPagination): Promise<IEntityWithServiceClassAndPagination> {
    return new Promise<IEntityWithServiceClassAndPagination>(resolve => {
      axios.post(`${baseApiUrl}`, entity).then(function(res) {
        resolve(res.data);
      });
    });
  }

  public update(entity: IEntityWithServiceClassAndPagination): Promise<IEntityWithServiceClassAndPagination> {
    return new Promise<IEntityWithServiceClassAndPagination>(resolve => {
      axios.put(`${baseApiUrl}`, entity).then(function(res) {
        resolve(res.data);
      });
    });
  }
}
