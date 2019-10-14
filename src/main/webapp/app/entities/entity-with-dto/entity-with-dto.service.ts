import axios from 'axios';

import { IEntityWithDTO } from '@/shared/model/entity-with-dto.model';

const baseApiUrl = 'api/entity-with-dtos';

export default class EntityWithDTOService {
  public find(id: number): Promise<IEntityWithDTO> {
    return new Promise<IEntityWithDTO>(resolve => {
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

  public create(entity: IEntityWithDTO): Promise<IEntityWithDTO> {
    return new Promise<IEntityWithDTO>(resolve => {
      axios.post(`${baseApiUrl}`, entity).then(function(res) {
        resolve(res.data);
      });
    });
  }

  public update(entity: IEntityWithDTO): Promise<IEntityWithDTO> {
    return new Promise<IEntityWithDTO>(resolve => {
      axios.put(`${baseApiUrl}`, entity).then(function(res) {
        resolve(res.data);
      });
    });
  }
}
