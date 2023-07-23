export interface UserInterface {
  userName: string;
  profileSteps: {
    basicInfo: BasicInfoStepInterface
  };
}
export interface UserPayload {
  userName: string;
  basicInfo?: BasicInfoStepInterface | undefined;
}

export interface ProfileSteps {
  profileSteps: {
    basicInfo: BasicInfoStepInterface | undefined
  }
}

export interface UserResponse extends ProfileSteps {
  userName: string;
  isNewUser: boolean;
}

export enum UserTypes {
  Explorer = 'explorer',
  Artist = 'artist'
}

export interface BasicInfoStepInterface {
  name: string;
  email: string;
}