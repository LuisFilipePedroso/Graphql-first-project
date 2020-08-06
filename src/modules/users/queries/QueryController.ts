import UsersRepository from '../../../repositories/users/UsersRepository';

class QueryController {

  async find() {
    const usersRepository = new UsersRepository();

    const users = await usersRepository.find();

    return users;
  }

  async show(parent: any, id: string) {
    const usersRepository = new UsersRepository();

    const user = usersRepository.findById(id);

    if (!user) {
      throw new Error('User not found');
    }

    return user;
  }
}

export default QueryController;
