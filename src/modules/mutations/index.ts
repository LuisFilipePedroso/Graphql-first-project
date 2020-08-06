export default `
  input UserInput {
    name: String
    email: String
    password: String
  }

  input PostInput {
    title: String!
    author_id: ID!
  }

  type Mutation {
    createUser(input: UserInput!): User!
    updateUser(id: ID, user: UserInput): User
    
    createPost(input: PostInput!): Post!
    updatePost(id: ID!, post: PostInput!): Post! 
  }
`
