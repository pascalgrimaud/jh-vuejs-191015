import axios from 'axios';

import buildPaginationQueryOpts from '@/shared/sort/sorts';

import { IFieldTestInfiniteScrollEntity } from '@/shared/model/field-test-infinite-scroll-entity.model';

const baseApiUrl = 'api/field-test-infinite-scroll-entities';

export default class FieldTestInfiniteScrollEntityService {
  public find(id: number): Promise<IFieldTestInfiniteScrollEntity> {
    return new Promise<IFieldTestInfiniteScrollEntity>(resolve => {
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

  public create(entity: IFieldTestInfiniteScrollEntity): Promise<IFieldTestInfiniteScrollEntity> {
    return new Promise<IFieldTestInfiniteScrollEntity>(resolve => {
      axios.post(`${baseApiUrl}`, entity).then(function(res) {
        resolve(res.data);
      });
    });
  }

  public update(entity: IFieldTestInfiniteScrollEntity): Promise<IFieldTestInfiniteScrollEntity> {
    return new Promise<IFieldTestInfiniteScrollEntity>(resolve => {
      axios.put(`${baseApiUrl}`, entity).then(function(res) {
        resolve(res.data);
      });
    });
  }
}
