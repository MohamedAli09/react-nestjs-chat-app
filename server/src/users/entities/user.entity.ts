import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { AbstractEntity } from 'src/common/database/abstract.entity';
import { Field, ObjectType } from '@nestjs/graphql';
@Schema({ versionKey: false }) // versionKey: false is used to remove the __v field from the document
@ObjectType() // ObjectType is used to create a class that can be used in graphql
export class User extends AbstractEntity {
  @Prop({ type: String, required: true })
  @Field()
  email: string;

  @Prop({ type: String, required: true })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User); // createForClass create a schema for a class and add _id field
