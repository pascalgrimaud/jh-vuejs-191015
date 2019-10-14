import axios from 'axios';

import { IFieldTestServiceClassEntity } from '@/shared/model/field-test-service-class-entity.model';

const baseApiUrl = 'api/field-test-service-class-entities';

export default class FieldTestServiceClassEntityService {
  public find(id: number): Promise<IFieldTestServiceClassEntity> {
    return new Promise<IFieldTestServiceClassEntity>(resolve => {
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

  public create(entity: IFieldTestServiceClassEntity): Promise<IFieldTestServiceClassEntity> {
    return new Promise<IFieldTestServiceClassEntity>(resolve => {
      axios.post(`${baseApiUrl}`, entity).then(function(res) {
        resolve(res.data);
      });
    });
  }

  public update(entity: IFieldTestServiceClassEntity): Promise<IFieldTestServiceClassEntity> {
    return new Promise<IFieldTestServiceClassEntity>(resolve => {
      axios.put(`${baseApiUrl}`, entity).then(function(res) {
        resolve(res.data);
      });
    });
  }
}
