import { Schema, InferSchemaType, Model, model } from 'mongoose';

export interface UserInterface {
  userName: string;
  name: string;
}
export type UserType = InferSchemaType<typeof schema>;
type UserModel = Model<UserInterface>;

const schema = new Schema<UserInterface, UserModel>({
  userName: { type: String, required: [true, 'Please enter your username'] },
  name: { type: String, required: [true, 'Please enter your name']},
});

export default model<UserInterface, UserModel>('User', schema);