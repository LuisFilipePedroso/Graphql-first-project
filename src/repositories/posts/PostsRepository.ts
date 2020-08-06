import ICreatePostDTO from './dtos/ICreatePostDTO';
import IFindPostDTO from './dtos/IFindPostDTO';
import Post from '../../database/entities/Post';
import IPostRepository from './IPostRepository';
import { getRepository, Repository } from 'typeorm';

class PostsRepository implements IPostRepository {
  private ormRepository: Repository<Post>;

  constructor() {
    this.ormRepository = getRepository(Post);
  }

  public async find(args?: IFindPostDTO): Promise<Post[]> {
    const query = this.ormRepository.find({ relations: ['author'] });

    return await query;
  }

  public async findById(id: string): Promise<Post | undefined> {
    return await this.ormRepository.findOne(id, { relations: ['author'] });
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
