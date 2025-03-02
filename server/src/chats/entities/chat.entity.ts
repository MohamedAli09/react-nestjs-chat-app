import { ObjectType, Field } from '@nestjs/graphql';
import { AbstractEntity } from '../../common/database/abstract.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@ObjectType()
@Schema()
export class Chat extends AbstractEntity {
  @Field() // this decorator is used to expose the field to the GraphQL schema
  @Prop() // this decorator is used to define the field in the Mongoose schema
  userId: string; // this is the user ID of the chat creator

  @Field()
  @Prop()
  isPrivate: boolean;

  @Field(() => [String])
  @Prop([String])
  userIds: string[]; // this is an array of user IDs that are part of the chat

  @Field({ nullable: true })
  @Prop()
  name?: string;
}

export const ChatSchema = SchemaFactory.createForClass(Chat); //
