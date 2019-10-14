import axios from 'axios';

import buildPaginationQueryOpts from '@/shared/sort/sorts';

import { IFieldTestPaginationEntity } from '@/shared/model/field-test-pagination-entity.model';

const baseApiUrl = 'api/field-test-pagination-entities';

export default class FieldTestPaginationEntityService {
  public find(id: number): Promise<IFieldTestPaginationEntity> {
    return new Promise<IFieldTestPaginationEntity>(resolve => {
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

  public create(entity: IFieldTestPaginationEntity): Promise<IFieldTestPaginationEntity> {
    return new Promise<IFieldTestPaginationEntity>(resolve => {
      axios.post(`${baseApiUrl}`, entity).then(function(res) {
        resolve(res.data);
      });
    });
  }

  public update(entity: IFieldTestPaginationEntity): Promise<IFieldTestPaginationEntity> {
    return new Promise<IFieldTestPaginationEntity>(resolve => {
      axios.put(`${baseApiUrl}`, entity).then(function(res) {
        resolve(res.data);
      });
    });
  }
}
