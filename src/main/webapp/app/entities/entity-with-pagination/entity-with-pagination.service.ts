import axios from 'axios';

import buildPaginationQueryOpts from '@/shared/sort/sorts';

import { IEntityWithPagination } from '@/shared/model/entity-with-pagination.model';

const baseApiUrl = 'api/entity-with-paginations';

export default class EntityWithPaginationService {
  public find(id: number): Promise<IEntityWithPagination> {
    return new Promise<IEntityWithPagination>(resolve => {
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

  public create(entity: IEntityWithPagination): Promise<IEntityWithPagination> {
    return new Promise<IEntityWithPagination>(resolve => {
      axios.post(`${baseApiUrl}`, entity).then(function(res) {
        resolve(res.data);
      });
    });
  }

  public update(entity: IEntityWithPagination): Promise<IEntityWithPagination> {
    return new Promise<IEntityWithPagination>(resolve => {
      axios.put(`${baseApiUrl}`, entity).then(function(res) {
        resolve(res.data);
      });
    });
  }
}
