export interface UserInterface {
  username: string;
  hash: string;
  salt: string;
  profileSteps: {
    basicInfo: BasicInfoStepInterface
  };
}
export interface UserPayload {
  username: string;
  password: string;
  basicInfo?: BasicInfoStepInterface | undefined;
}

export interface ProfileSteps {
  profileSteps: {
    basicInfo: BasicInfoStepInterface | undefined
  }
}

export interface UserResponse {
  username: string;
}

export enum UserTypes {
  Explorer = 'explorer',
  Artist = 'artist'
}

export interface BasicInfoStepInterface {
  name: string;
  email: string;
}