import axios from 'axios';

import { IEntityWithServiceImpl } from '@/shared/model/entity-with-service-impl.model';

const baseApiUrl = 'api/entity-with-service-impls';

export default class EntityWithServiceImplService {
  public find(id: number): Promise<IEntityWithServiceImpl> {
    return new Promise<IEntityWithServiceImpl>(resolve => {
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

  public create(entity: IEntityWithServiceImpl): Promise<IEntityWithServiceImpl> {
    return new Promise<IEntityWithServiceImpl>(resolve => {
      axios.post(`${baseApiUrl}`, entity).then(function(res) {
        resolve(res.data);
      });
    });
  }

  public update(entity: IEntityWithServiceImpl): Promise<IEntityWithServiceImpl> {
    return new Promise<IEntityWithServiceImpl>(resolve => {
      axios.put(`${baseApiUrl}`, entity).then(function(res) {
        resolve(res.data);
      });
    });
  }
}
