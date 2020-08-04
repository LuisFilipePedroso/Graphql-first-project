import MutationController from '../mutations/MutationController';
import QueryController from '../queries/QueryController';

const mutationController = new MutationController();
const queryController = new QueryController();

export default {
  Query: {
    users: queryController.find,
    user: queryController.show,
  },
  Mutation: {
    createUser: mutationController.create,
    updateUser: mutationController.update,
  }
}
