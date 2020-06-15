import { uuid } from 'uuidv4';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';
import IFindAllProviders from '@modules/users/dtos/IFindAllProviders';

import Users from '@modules/users/infra/typeorm/entities/Users';

class FakeUsersRepository implements IUsersRepository {
  private users: Users[] = [];

  public async findAllProvider({
    except_user_id,
  }: IFindAllProviders): Promise<Users[]> {
    let { users } = this;

    if (except_user_id) {
      users = this.users.filter(user => user.id !== except_user_id);
    }

    return users;
  }

  public async findById(id: string): Promise<Users | undefined> {
    const findUser = this.users.find(user => user.id === id);

    return findUser;
  }

  public async findByEmail(email: string): Promise<Users | undefined> {
    const findUser = this.users.find(user => user.email === email);

    return findUser;
  }

  public async create({
    name,
    email,
    password,
  }: ICreateUserDTO): Promise<Users> {
    const user = new Users();

    user.id = uuid();
    user.name = name;
    user.email = email;
    user.password = password;

    await this.users.push(user);

    return user;
  }

  public async save(user: Users): Promise<Users> {
    const findIndex = this.users.findIndex(findUser => findUser.id === user.id);

    this.users[findIndex] = user;

    return user;
  }
}

export default FakeUsersRepository;
