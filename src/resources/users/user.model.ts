import * as uuid from "uuid";

export interface User {
  id: string;
  username: string;
  email: string;
  password: string;
}

let users: User[] = [];

export class UserModel {
  insert(userParams: Omit<User, "id">) {
    const user: User = {
      id: uuid.v4(),
      ...userParams,
    };
    users.push(user);
    return user;
  }

  findById(id: string) {
    return users.find((user) => user.id === id);
  }
  updateById(userParams:Partial<User>, id: string) {
    users.forEach((user:User, index:number) => {
      if (user.id === id) {
      users[index]= {...user,...userParams} 
      }
    })
    return users.find((user) => user.id === id);
    
  }
  deletById(id: string) {
    const user = users.find((user) => user.id === id);
    users = users.filter((user) => user.id !== id)
    return user;
  }
  find() {
    return users;
  }
}

export const userModel = new UserModel();
