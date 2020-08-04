import UserSchema from './schemas/UserSchema';
import mutations from './mutations';
import queries from './queries';

const typeDefs = `${UserSchema} ${mutations} ${queries}`;

export default typeDefs;
