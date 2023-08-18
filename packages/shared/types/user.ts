export interface UserInterface {
  userName: string;
  hash: string;
  salt: string;
  profileSteps: {
    basicInfo: BasicInfoStepInterface
  };
}
export interface UserPayload {
  userName: string;
  password: string;
  basicInfo?: BasicInfoStepInterface | undefined;
}

export interface ProfileSteps {
  profileSteps: {
    basicInfo: BasicInfoStepInterface | undefined
  }
}

export interface UserResponse {
  userName: string;
}

export enum UserTypes {
  Explorer = 'explorer',
  Artist = 'artist'
}

export interface BasicInfoStepInterface {
  name: string;
  email: string;
}