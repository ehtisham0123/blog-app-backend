import { PartialType } from '@nestjs/mapped-types';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { CreatePostDto } from './create-post.dto';

export class UpdatePostDto extends PartialType(CreatePostDto) {}



//     {
//       "title": "Hello World Post Title",
//       "body": "Hello World Post Body",
//       "image": "Hello World image.png"
//     }

//   641c6edd851504aa6683b92e
     