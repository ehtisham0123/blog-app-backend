import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
  ) {}

  async create(createUserInput: CreateUserInput): Promise<User> {
    const createdUser = new this.userModel(createUserInput);
    return createdUser.save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async findOne(id: number): Promise<User> {
    return this.userModel.findById(id).exec();
  }

  async update(id: number, updateUserInput: UpdateUserInput): Promise<User> {
    return this.userModel.findByIdAndUpdate(id, updateUserInput, { new: true }).exec();
  }

  async remove(id: number): Promise<User> {
    return this.userModel.findByIdAndDelete(id).exec();
  }

  async findOneByEmail(email: string): Promise<User> {
    return this.userModel.findOne({ email }).exec();
  }

  async findOneByEmailAndPassword(email: string, password: string): Promise<User> {
    return this.userModel.findOne({ email, password }).exec();
  }

  async updatePassword(id: number, newPassword: string): Promise<User> {
    return this.userModel.findByIdAndUpdate(id, { password: newPassword }, { new: true }).exec();
  }
}