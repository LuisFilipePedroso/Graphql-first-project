import PostsRepository from '../../../repositories/posts/PostsRepository';
import IFindPostDTO from "../../../repositories/posts/dtos/IFindPostDTO";

class QueryController {

  async find(parent: any, args: IFindPostDTO) {
    const postsRepository = new PostsRepository();

    return await postsRepository.find(args);
  }

  async show(parent: any, id: string) {
    const postsRepository = new PostsRepository();

    const post = postsRepository.findById(id);

    if (!post) {
      throw new Error('Post not found');
    }

    return post;
  }
}

export default QueryController;
