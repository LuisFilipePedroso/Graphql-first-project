import PostsRepository from '../../../repositories/posts/PostsRepository';

class QueryController {

  async find() {
    const postsRepository = new PostsRepository();

    return await postsRepository.find();
  }

  async show(id: string) {
    const postsRepository = new PostsRepository();

    const post = postsRepository.findById(id);

    if (!post) {
      throw new Error('Post not found');
    }

    return post;
  }
}

export default QueryController;
