import { IsInt, IsNotEmpty, IsString } from 'class-validator';
import { Transform } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePostDto {
  @ApiProperty({
    example: 'Post Title',
    description: 'The title of the post',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({
    example: 'Post Body',
    description: 'The body of the post',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  body: string;

  @ApiProperty({
    example: 'image.png',
    description: 'The name of the post image',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  image: string;
}