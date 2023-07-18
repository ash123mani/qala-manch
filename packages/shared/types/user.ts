export interface UserPayload {
  userName: string;
  name?: string;
}

export interface UserResponse {
  userName: string;
  isNewUser: boolean;
}