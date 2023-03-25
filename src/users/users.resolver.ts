import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { ApiTags, ApiOperation, ApiBody, ApiParam } from '@nestjs/swagger';

@ApiTags('users')
@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({ summary: 'Create a new user' })
  @ApiParam({ name: 'id', type: 'string', description: 'User ID' })
  @ApiBody({ type: CreateUserInput })
  @Mutation(() => User)
  async createUser(@Args('createUserInput') createUserInput: CreateUserInput): Promise<User> {
    return this.usersService.create(createUserInput);
  }

  @ApiOperation({ summary: 'Get all users' })
  @Query(() => [User], { name: 'users' })
  findAll() {
    return this.usersService.findAll();
  }

  @ApiOperation({ summary: 'Get a user by ID' })
  @Query(() => User, { name: 'user' })
  findOne(@Args('id', { type: () => Int }) id: string) {
    return this.usersService.findOne(id);
  }

  @ApiOperation({ summary: 'Update a user by ID' })
  @ApiBody({ type: UpdateUserInput })
  @Mutation(() => User)
  updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.usersService.update(updateUserInput.id, updateUserInput);
  }

  @ApiOperation({ summary: 'Delete a user by ID' })
  @Mutation(() => User)
  removeUser(@Args('id', { type: () => Int }) id: string) {
    return this.usersService.remove(id);
  }

  @ApiOperation({ summary: 'Get a user by email' })
  @Query(() => User, { name: 'userByEmail' })
  findUserByEmail(@Args('email') email: string) {
    return this.usersService.findOneByEmail(email);
  }

  @ApiOperation({ summary: 'Get a user by email and password' })
  @Query(() => User, { name: 'userByEmailAndPassword' })
  findUserByEmailAndPassword(
    @Args('email') email: string,
    @Args('password') password: string,
  ) {
    return this.usersService.findOneByEmailAndPassword(email, password);
  }

  @ApiOperation({ summary: 'Update a user password by ID' })
  @Mutation(() => User)
  updateUserPassword(
    @Args('id', { type: () => Int }) id: string,
    @Args('newPassword') newPassword: string,
  ) {
    return this.usersService.updatePassword(id, newPassword);
  }
}