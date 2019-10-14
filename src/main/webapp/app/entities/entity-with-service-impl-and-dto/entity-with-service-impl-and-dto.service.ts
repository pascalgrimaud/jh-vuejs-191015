import axios from 'axios';

import { IEntityWithServiceImplAndDTO } from '@/shared/model/entity-with-service-impl-and-dto.model';

const baseApiUrl = 'api/entity-with-service-impl-and-dtos';

export default class EntityWithServiceImplAndDTOService {
  public find(id: number): Promise<IEntityWithServiceImplAndDTO> {
    return new Promise<IEntityWithServiceImplAndDTO>(resolve => {
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

  public create(entity: IEntityWithServiceImplAndDTO): Promise<IEntityWithServiceImplAndDTO> {
    return new Promise<IEntityWithServiceImplAndDTO>(resolve => {
      axios.post(`${baseApiUrl}`, entity).then(function(res) {
        resolve(res.data);
      });
    });
  }

  public update(entity: IEntityWithServiceImplAndDTO): Promise<IEntityWithServiceImplAndDTO> {
    return new Promise<IEntityWithServiceImplAndDTO>(resolve => {
      axios.put(`${baseApiUrl}`, entity).then(function(res) {
        resolve(res.data);
      });
    });
  }
}
