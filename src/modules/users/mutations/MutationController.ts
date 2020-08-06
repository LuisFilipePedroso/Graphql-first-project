import UsersRepository from '../../../repositories/users/UsersRepository';

class MutationController {

  async create(parent: any, data: { input: { name: string, email: string, password: string } }) {
    const { name, email, password } = data.input;
    const usersRepository = new UsersRepository();

    const userAlreadyExists = await usersRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new Error('User already exists');
    }

    return await usersRepository.create({name, email, password});
  }

  async update(parent: any, data: { id: string, user: { name: string, email: string, password: string } }) {
    const usersRepository = new UsersRepository();

    let user = await usersRepository.findById(data.id);

    if (!user) {
      throw new Error('User does not exists');
    }

    if (data.user.email) {
      const emailExists = await usersRepository.findByEmail(data.user.email);

      if (emailExists) {
        throw new Error('Email already exists');
      }
    }

    Object.assign(user, {
      name: data.user.name || user.name,
      email: data.user.email || user.email,
      password: data.user.password || user.password,
    })

    await usersRepository.save(user);

    return user;
  }
}

export default MutationController;
