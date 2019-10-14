import axios from 'axios';

import { IFieldTestServiceImplEntity } from '@/shared/model/field-test-service-impl-entity.model';

const baseApiUrl = 'api/field-test-service-impl-entities';

export default class FieldTestServiceImplEntityService {
  public find(id: number): Promise<IFieldTestServiceImplEntity> {
    return new Promise<IFieldTestServiceImplEntity>(resolve => {
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

  public create(entity: IFieldTestServiceImplEntity): Promise<IFieldTestServiceImplEntity> {
    return new Promise<IFieldTestServiceImplEntity>(resolve => {
      axios.post(`${baseApiUrl}`, entity).then(function(res) {
        resolve(res.data);
      });
    });
  }

  public update(entity: IFieldTestServiceImplEntity): Promise<IFieldTestServiceImplEntity> {
    return new Promise<IFieldTestServiceImplEntity>(resolve => {
      axios.put(`${baseApiUrl}`, entity).then(function(res) {
        resolve(res.data);
      });
    });
  }
}
