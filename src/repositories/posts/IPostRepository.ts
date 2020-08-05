import ICreatePostDTO from './ICreatePostDTO';
import Post from '../../database/entities/Post';

export default interface IPostRepository {
  find(): Promise<Post[]>;
  findById(id: string): Promise<Post | undefined>;
  create(data: ICreatePostDTO): Promise<Post | undefined>;
  save(user: Post): Promise<Post>;
}
