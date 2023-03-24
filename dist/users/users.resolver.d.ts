import { UsersService } from './users.service';
import { User } from './entities/user.entity';
export declare class UsersResolver {
    private readonly usersService;
    constructor(usersService: UsersService);
    findAll(): Promise<User[]>;
    findOne(id: number): Promise<User>;
    removeUser(id: number): Promise<User>;
    findUserByEmail(email: string): Promise<User>;
    findUserByEmailAndPassword(email: string, password: string): Promise<User>;
}
