import axios from 'axios';

import { IEntityWithServiceClassAndDTO } from '@/shared/model/entity-with-service-class-and-dto.model';

const baseApiUrl = 'api/entity-with-service-class-and-dtos';

export default class EntityWithServiceClassAndDTOService {
  public find(id: number): Promise<IEntityWithServiceClassAndDTO> {
    return new Promise<IEntityWithServiceClassAndDTO>(resolve => {
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

  public create(entity: IEntityWithServiceClassAndDTO): Promise<IEntityWithServiceClassAndDTO> {
    return new Promise<IEntityWithServiceClassAndDTO>(resolve => {
      axios.post(`${baseApiUrl}`, entity).then(function(res) {
        resolve(res.data);
      });
    });
  }

  public update(entity: IEntityWithServiceClassAndDTO): Promise<IEntityWithServiceClassAndDTO> {
    return new Promise<IEntityWithServiceClassAndDTO>(resolve => {
      axios.put(`${baseApiUrl}`, entity).then(function(res) {
        resolve(res.data);
      });
    });
  }
}
