export interface IMapsIdUserProfileWithDTO {
  id?: number;
  dateOfBirth?: Date;
  userLogin?: string;
  userId?: number;
}

export class MapsIdUserProfileWithDTO implements IMapsIdUserProfileWithDTO {
  constructor(public id?: number, public dateOfBirth?: Date, public userLogin?: string, public userId?: number) {}
}
