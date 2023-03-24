import { InputType, Int, Field } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';

@InputType()
export class CreateUserInput {
  @ApiProperty({
    description: 'The user email address',
    example: 'john.doe@example.com',
  })
  @Field(() => String, { description: 'The user email address' })
  email: string;

  @ApiProperty({
    description: 'The user password',
    example: 'password123',
  })
  @Field(() => String, { description: 'The user password' })
  password: string;

  @ApiProperty({
    description: 'Example field (placeholder)',
    example: 123,
  })
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}