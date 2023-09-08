import { Schema, InferSchemaType, Model, model } from 'mongoose';
import { UserInterface } from '@qala-manch/shared';

export type UserType = InferSchemaType<typeof schema>;
type UserModel = Model<UserInterface>;

const schema = new Schema<UserInterface, UserModel>({
  username: {
    type: String,
    required: [ true, 'Please enter your username.'],
    trim: true
  },
  hash: {
    type: String,
    required: true,
    select: false
  },
  salt: {
    type: String,
    required: true,
    select: false
  },
  profileSteps: {
    basicInfo: {
      name: {
        type: String,
        // required: [true, 'Please enter your name'],
        minLength: [ 3, 'Name should have atleast 3 words.' ]
      },
      email: {
        type: String,
        match: [
          // eslint-disable-next-line max-len, no-useless-escape
          /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
          'Please provide a valid email',
        ],
      }
    }
  }
},
  {
    timestamps: true
  }
);

export default model<UserInterface, UserModel>('User', schema);