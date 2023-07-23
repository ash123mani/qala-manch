import User from '@/models/user';
import { UserPayload, UserResponse, UserInterface } from '@qala-manch/shared';

export const createUser = async (payload: UserPayload): Promise<UserResponse> => {
    const { userName, basicInfo } = payload;
    const user = await User.findOne({ userName });

    if (!user) {
      await User.create({ userName });
      const filter = { 'userName': userName };
      const update = { $set: { 'profileSteps.basicInfo': basicInfo } };
      const user = await User.findOneAndUpdate(filter, update, { new: true }) as UserInterface;

      return {
        userName: user.userName,
        isNewUser: true,
        profileSteps: {
          basicInfo: user?.profileSteps?.basicInfo
        }
      };
    } {
      return {
        userName: user.userName,
        isNewUser: false,
        profileSteps: {
          basicInfo: user?.profileSteps?.basicInfo
        }
      };
    }
};