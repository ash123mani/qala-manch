import { Schema, InferSchemaType, Model, model } from 'mongoose';

export interface UserInterface {
  userName: string;
}
export type UserType = InferSchemaType<typeof schema>;
type UserModel = Model<UserInterface>;

const schema = new Schema<UserInterface, UserModel>({
  userName: { type: String, required: [true, 'Please enter your username'] },
});

export default model<UserInterface, UserModel>('User', schema);