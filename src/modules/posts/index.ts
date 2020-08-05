import PostSchema from './schemas/PostSchema';
import mutations from './mutations';
import queries from './queries';

const typeDefs = `${PostSchema} ${mutations} ${queries}`;

export default typeDefs;
