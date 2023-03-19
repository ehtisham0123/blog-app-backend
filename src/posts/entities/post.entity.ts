import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PostDocument = Post & Document;

@Schema()
export class Post extends Document {
  @Prop()
  title: string;

  @Prop()
  body: string;

  @Prop()
  image: string;
}

export const PostSchema = SchemaFactory.createForClass(Post);