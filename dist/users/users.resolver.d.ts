import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
export declare class UsersResolver {
    private readonly usersService;
    constructor(usersService: UsersService);
    createUser(createUserInput: CreateUserInput): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(id: string): Promise<User>;
    updateUser(updateUserInput: UpdateUserInput): Promise<User>;
    removeUser(id: string): Promise<User>;
    findUserByEmail(email: string): Promise<User>;
    findUserByEmailAndPassword(email: string, password: string): Promise<User>;
    updateUserPassword(id: string, newPassword: string): Promise<User>;
}
