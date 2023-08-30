import { Inject, Injectable } from '@nestjs/common';
import { User } from './models/user.entity';
import { UserModel } from './models/user.model';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private readonly repo: typeof User,
  ) {}

  async createUser(user: UserModel): Promise<any> {
    try {
      return await this.repo.create<User>({ user });
    } catch (error) {
      console.log('createUserService', error);
      throw error;
    }
  }

  async getUserByUid(user_uid: string): Promise<User | null> {
    try {
      let result = await this.repo.findOne<User>({
        where: {
          uid: user_uid,
        },
      });

      if (!result) {
        return null;
      } else {
        return result;
      }
    } catch (error) {
      console.log('get user by uid in service', error);
      throw error;
    }
  }

  async getUserById(user_id: number): Promise<User> {
    try {
      return this.repo.findOne<User>({
        where: {
          id: user_id,
        },
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async updateUserByUid(user: UserModel): Promise<User> {
    try {
      const updatedUser = await this.repo.update(
        {
          first_name: user.first_name,
          last_name: user.last_name,
          email: user.email,
          isDiabetic: user.isDiabetic,
        },
        {
          where: {
            uid: user.uid,
          },
        },
      );

      return this.getUserByUid(user.uid);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
