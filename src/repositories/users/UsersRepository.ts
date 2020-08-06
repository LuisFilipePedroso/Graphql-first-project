import ICreateUserDTO from './ICreateUserDTO';
import User from '../../database/entities/User';
import IUserRepository from './IUserRepository';
import { getRepository, Repository } from 'typeorm';

class UsersRepository implements IUserRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  public async find(): Promise<User[]> {
    return await this.ormRepository.find({ relations: ['posts'] });
  }

  public async findById(id: string): Promise<User | undefined> {
    console.log(id);
    const user = await this.ormRepository.findOne(id, { relations: ['posts'] });

    return user;
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne({
      where: {
        email,
      },
    });

    return user;
  }

  public async create(userData: ICreateUserDTO): Promise<User> {
    const user = this.ormRepository.create(userData);

    await this.ormRepository.save(user);

    return user;
  }

  public async save(user: User): Promise<User> {
    return this.ormRepository.save(user);
  }
}

export default UsersRepository;
