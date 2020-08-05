import ICreatePostDTO from './ICreatePostDTO';
import Post from '../../database/entities/Post';
import IPostRepository from './IPostRepository';
import { getRepository, Repository } from 'typeorm';

class PostsRepository implements IPostRepository {
  private ormRepository: Repository<Post>;

  constructor() {
    this.ormRepository = getRepository(Post);
  }

  public async find(): Promise<Post[]> {
    return await this.ormRepository.find();
  }

  public async findById(id: string): Promise<Post | undefined> {
    const post = await this.ormRepository.findOne(id);

    return post;
  }

  public async create(userData: ICreatePostDTO): Promise<Post> {
    const post = this.ormRepository.create(userData);

    await this.ormRepository.save(post);

    return post;
  }

  public async save(post: Post): Promise<Post> {
    return this.ormRepository.save(post);
  }
}

export default PostsRepository;
