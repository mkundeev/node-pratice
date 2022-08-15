import { User, userModel } from "./user.model";
import { CreateUserDto } from "./users.schemas";
import { NotFound } from 'http-errors';

export class UsersService {
  public createUser(dto: CreateUserDto): User {
    return userModel.insert(dto);
  }

  public getUserById(id: string): User {
    const user = userModel.findById(id);
    if (!user) {
      throw new NotFound(`user with id '${id}' not found`);
    }

    return user;
  }
 public updateUser(dto: Partial<CreateUserDto>, id: string): User {
    const user = userModel.updateById(dto, id);
    if (!user) {
      throw new NotFound(`user with id '${id}' not found`);
    }

    return user;
  }

public deletUserById(id: string): User {
    const user = userModel.deletById(id);
    if (!user) {
      throw new NotFound(`user with id '${id}' not found`);
    }

    return user;
  }


  public getUsers(): User[] {
    const users = userModel.find();
    if (users.length===0) {
      throw new NotFound(`No users in db`);
    }

    return users;
  }
}

export const usersService = new UsersService();
