import { Controller } from '@nestjs/common';
import { UserService } from './user.service';
import { UserModel } from './models/user.model';
import { User } from './models/user.entity';

@Controller('user')
export class UserController {
  constructor(public readonly service: UserService) {}

  public async createUser(user: UserModel) {
    try {
      return this.service.createUser(user);
    } catch (error) {
      console.log('UserController', error);
      throw error;
    }
  }

  public async getUserByUid(user_uid: string): Promise<User> {
    try {
      return this.service.getUserByUid(user_uid);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  public async getUserById(user_id: number): Promise<User> {
    try {
      return this.service.getUserById(user_id);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  public async updateUser(user: UserModel): Promise<User> {
    try {
      return this.service.updateUserByUid(user);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
