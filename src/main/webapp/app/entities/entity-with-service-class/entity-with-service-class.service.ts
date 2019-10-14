import axios from 'axios';

import { IEntityWithServiceClass } from '@/shared/model/entity-with-service-class.model';

const baseApiUrl = 'api/entity-with-service-classes';

export default class EntityWithServiceClassService {
  public find(id: number): Promise<IEntityWithServiceClass> {
    return new Promise<IEntityWithServiceClass>(resolve => {
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

  public create(entity: IEntityWithServiceClass): Promise<IEntityWithServiceClass> {
    return new Promise<IEntityWithServiceClass>(resolve => {
      axios.post(`${baseApiUrl}`, entity).then(function(res) {
        resolve(res.data);
      });
    });
  }

  public update(entity: IEntityWithServiceClass): Promise<IEntityWithServiceClass> {
    return new Promise<IEntityWithServiceClass>(resolve => {
      axios.put(`${baseApiUrl}`, entity).then(function(res) {
        resolve(res.data);
      });
    });
  }
}
