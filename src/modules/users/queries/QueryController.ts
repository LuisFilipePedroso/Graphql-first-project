import UsersRepository from '../../../repositories/UsersRepository';

class QueryController {

  async find() {
    const usersRepository = new UsersRepository();

    return await usersRepository.find();
  }

  async show(id: string) {
    const usersRepository = new UsersRepository();

    const user = usersRepository.findById(id);

    if (!user) {
      throw new Error('User not found');
    }

    return user;
  }
}

export default QueryController;
