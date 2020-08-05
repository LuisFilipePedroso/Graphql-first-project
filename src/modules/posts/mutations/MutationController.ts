import PostsRepository from '../../../repositories/posts/PostsRepository';

class MutationController {

  async create(parent: any, data: { input: { title: string, author_id: string } }) {
    const { title, author_id } = data.input;
    const postsRepository = new PostsRepository();

    return await postsRepository.create({title, author_id});
  }

  async update(parent: any, data: { id: string, post: { title: string } }) {
    const postsRepository = new PostsRepository();

    let post = await postsRepository.findById(data.id);

    if (!post) {
      throw new Error('Post does not exists');
    }

    Object.assign(post, {
      name: data.post.title || post.title,
    })

    await postsRepository.save(post);

    return post;
  }
}

export default MutationController;
