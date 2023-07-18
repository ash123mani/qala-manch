import User from '@/models/user';
import { UserPayload,UserResponse } from '@qala-manch/shared';

export const createUser = async (payload: UserPayload): Promise<UserResponse> => {
    const { userName } = payload;
    const user = await User.findOne({ userName });

    if (!user) {
      const user = await User.create({ userName });
      return {
        userName: user.userName,
        isNewUser: true
      };
    } {
      return {
        userName: user.userName,
        isNewUser: false
      };
    }
};