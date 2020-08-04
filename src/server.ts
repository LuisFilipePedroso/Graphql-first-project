import {GraphQLServer} from 'graphql-yoga';
import './database';

import UsersTypes from './modules/users';
import UsersResolver from './modules/users/resolvers/index';

const server = new GraphQLServer({typeDefs: [UsersTypes], resolvers: [ UsersResolver ]});

server.start({
  port: 3333
}, () => console.log('Server is running on port 3333'))

