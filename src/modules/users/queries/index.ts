export default `
  type Query {
      users: [User!]!
      user(id: ID!): User
  }
`;
