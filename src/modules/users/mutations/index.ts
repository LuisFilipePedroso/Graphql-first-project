export default  `
  input UserInput {
    name: String
    email: String
    password: String
  }

  type Mutation {
      createUser(input: UserInput): User!
      updateUser(id: ID, user: UserInput): User
  }
`;
