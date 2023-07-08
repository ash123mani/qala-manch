import User from '@/models/user';

export const createUser = async (payload: any): Promise<{ userName?: string; newUser: boolean; }> => {
    const { userName } = payload;
    const user = await User.findOne({ userName });

    if (!user) {
      const user = await User.create({ userName  });
      return {
        userName: user.userName,
        newUser: true
      };
    } {
      return {
        userName: user.userName,
        newUser: false
      };
    }
};