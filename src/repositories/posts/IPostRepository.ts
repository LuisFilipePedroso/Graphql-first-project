import IFindPostDTO from './dtos/IFindPostDTO';
import ICreatePostDTO from './dtos/ICreatePostDTO';
import Post from '../../database/entities/Post';

export default interface IPostRepository {
  find(args?: IFindPostDTO): Promise<Post[]>;
  findById(id: string): Promise<Post | undefined>;
  create(data: ICreatePostDTO): Promise<Post | undefined>;
  save(user: Post): Promise<Post>;
}
