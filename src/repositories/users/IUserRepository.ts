import ICreateUserDTO from 'repositories/users/ICreateUserDTO';
import User from 'database/entities/User';

export default interface IUsersRepository {
  find(): Promise<User[]>;
  findById(id: string): Promise<User | undefined>;
  findByEmail(email: string): Promise<User | undefined>;
  create(data: ICreateUserDTO): Promise<User | undefined>;
  save(user: User): Promise<User>;
}
