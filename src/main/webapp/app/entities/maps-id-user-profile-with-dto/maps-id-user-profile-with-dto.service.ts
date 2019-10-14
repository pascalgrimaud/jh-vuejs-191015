import axios from 'axios';

import { IMapsIdUserProfileWithDTO } from '@/shared/model/maps-id-user-profile-with-dto.model';

const baseApiUrl = 'api/maps-id-user-profile-with-dtos';

export default class MapsIdUserProfileWithDTOService {
  public find(id: number): Promise<IMapsIdUserProfileWithDTO> {
    return new Promise<IMapsIdUserProfileWithDTO>(resolve => {
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

  public create(entity: IMapsIdUserProfileWithDTO): Promise<IMapsIdUserProfileWithDTO> {
    return new Promise<IMapsIdUserProfileWithDTO>(resolve => {
      axios.post(`${baseApiUrl}`, entity).then(function(res) {
        resolve(res.data);
      });
    });
  }

  public update(entity: IMapsIdUserProfileWithDTO): Promise<IMapsIdUserProfileWithDTO> {
    return new Promise<IMapsIdUserProfileWithDTO>(resolve => {
      axios.put(`${baseApiUrl}`, entity).then(function(res) {
        resolve(res.data);
      });
    });
  }
}
