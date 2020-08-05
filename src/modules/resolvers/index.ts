import UserMutationController from '../users/mutations/MutationController';
import UserQueryController from '../users/queries/QueryController';

import PostMutationController from '../posts/mutations/MutationController';
import PostQueryController from '../posts/queries/QueryController';

const userMutationController = new UserMutationController();
const userQueryController = new UserQueryController();

const postMutationController = new PostMutationController();
const postQueryController = new PostQueryController();

export default {
  Query: {
    users: userQueryController.find,
    user: userQueryController.show,
    posts: postQueryController.find,
    post: postQueryController.show,
  },
  Mutation: {
    createUser: userMutationController.create,
    updateUser: userMutationController.update,
    createPost: postMutationController.create,
    updatePost: postMutationController.update,
  }
}
