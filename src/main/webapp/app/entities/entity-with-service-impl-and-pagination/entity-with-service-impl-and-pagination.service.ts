import axios from 'axios';

import buildPaginationQueryOpts from '@/shared/sort/sorts';

import { IEntityWithServiceImplAndPagination } from '@/shared/model/entity-with-service-impl-and-pagination.model';

const baseApiUrl = 'api/entity-with-service-impl-and-paginations';

export default class EntityWithServiceImplAndPaginationService {
  public find(id: number): Promise<IEntityWithServiceImplAndPagination> {
    return new Promise<IEntityWithServiceImplAndPagination>(resolve => {
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

  public create(entity: IEntityWithServiceImplAndPagination): Promise<IEntityWithServiceImplAndPagination> {
    return new Promise<IEntityWithServiceImplAndPagination>(resolve => {
      axios.post(`${baseApiUrl}`, entity).then(function(res) {
        resolve(res.data);
      });
    });
  }

  public update(entity: IEntityWithServiceImplAndPagination): Promise<IEntityWithServiceImplAndPagination> {
    return new Promise<IEntityWithServiceImplAndPagination>(resolve => {
      axios.put(`${baseApiUrl}`, entity).then(function(res) {
        resolve(res.data);
      });
    });
  }
}
