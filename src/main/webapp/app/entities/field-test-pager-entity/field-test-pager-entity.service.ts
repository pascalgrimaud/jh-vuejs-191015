import axios from 'axios';

import buildPaginationQueryOpts from '@/shared/sort/sorts';

import { IFieldTestPagerEntity } from '@/shared/model/field-test-pager-entity.model';

const baseApiUrl = 'api/field-test-pager-entities';

export default class FieldTestPagerEntityService {
  public find(id: number): Promise<IFieldTestPagerEntity> {
    return new Promise<IFieldTestPagerEntity>(resolve => {
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

  public create(entity: IFieldTestPagerEntity): Promise<IFieldTestPagerEntity> {
    return new Promise<IFieldTestPagerEntity>(resolve => {
      axios.post(`${baseApiUrl}`, entity).then(function(res) {
        resolve(res.data);
      });
    });
  }

  public update(entity: IFieldTestPagerEntity): Promise<IFieldTestPagerEntity> {
    return new Promise<IFieldTestPagerEntity>(resolve => {
      axios.put(`${baseApiUrl}`, entity).then(function(res) {
        resolve(res.data);
      });
    });
  }
}
