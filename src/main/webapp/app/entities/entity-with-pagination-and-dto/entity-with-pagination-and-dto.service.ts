import axios from 'axios';

import buildPaginationQueryOpts from '@/shared/sort/sorts';

import { IEntityWithPaginationAndDTO } from '@/shared/model/entity-with-pagination-and-dto.model';

const baseApiUrl = 'api/entity-with-pagination-and-dtos';

export default class EntityWithPaginationAndDTOService {
  public find(id: number): Promise<IEntityWithPaginationAndDTO> {
    return new Promise<IEntityWithPaginationAndDTO>(resolve => {
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

  public create(entity: IEntityWithPaginationAndDTO): Promise<IEntityWithPaginationAndDTO> {
    return new Promise<IEntityWithPaginationAndDTO>(resolve => {
      axios.post(`${baseApiUrl}`, entity).then(function(res) {
        resolve(res.data);
      });
    });
  }

  public update(entity: IEntityWithPaginationAndDTO): Promise<IEntityWithPaginationAndDTO> {
    return new Promise<IEntityWithPaginationAndDTO>(resolve => {
      axios.put(`${baseApiUrl}`, entity).then(function(res) {
        resolve(res.data);
      });
    });
  }
}
