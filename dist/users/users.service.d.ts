import { Model } from 'mongoose';
import { User, UserDocument } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
export declare class UsersService {
    private userModel;
    constructor(userModel: Model<UserDocument>);
    create(createUserInput: CreateUserInput): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(id: number): Promise<User>;
    update(id: number, updateUserInput: UpdateUserInput): Promise<User>;
    remove(id: number): Promise<User>;
    findOneByEmail(email: string): Promise<User>;
    findOneByEmailAndPassword(email: string, password: string): Promise<User>;
    updatePassword(id: number, newPassword: string): Promise<User>;
}
