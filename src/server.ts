import {GraphQLServer} from 'graphql-yoga';
import './database';

import UserSchema from './modules/users/schemas/UserSchema';
import PostSchema from './modules/posts/schemas/PostSchema';

import mutations from './modules/mutations';
import queries from './modules/queries';
import resolvers from './modules/resolvers';

const typeDefs = `${UserSchema} ${PostSchema} ${mutations} ${queries}`;

const server = new GraphQLServer({
  typeDefs: typeDefs,
  resolvers: resolvers
});

server.start({
  port: 3333
}, () => console.log('Server is running on port 3333'))

