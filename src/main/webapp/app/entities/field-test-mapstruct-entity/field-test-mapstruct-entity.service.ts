import axios from 'axios';

import { IFieldTestMapstructEntity } from '@/shared/model/field-test-mapstruct-entity.model';

const baseApiUrl = 'api/field-test-mapstruct-entities';

export default class FieldTestMapstructEntityService {
  public find(id: number): Promise<IFieldTestMapstructEntity> {
    return new Promise<IFieldTestMapstructEntity>(resolve => {
      axios.get(`${baseApiUrl}/${id}`).then(function(res) {
        resolve(res.data);
      });
    });
  }

  public retrieve(): Promise<any> {
    return new Promise<any>(resolve => {
      axios.get(baseApiUrl).then(function(res) {
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

  public create(entity: IFieldTestMapstructEntity): Promise<IFieldTestMapstructEntity> {
    return new Promise<IFieldTestMapstructEntity>(resolve => {
      axios.post(`${baseApiUrl}`, entity).then(function(res) {
        resolve(res.data);
      });
    });
  }

  public update(entity: IFieldTestMapstructEntity): Promise<IFieldTestMapstructEntity> {
    return new Promise<IFieldTestMapstructEntity>(resolve => {
      axios.put(`${baseApiUrl}`, entity).then(function(res) {
        resolve(res.data);
      });
    });
  }
}
