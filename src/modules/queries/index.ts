export default `
  type Query {
    users: [User!]!
    user(id: ID!): User
  
    posts: [Post!]!
    post(id: ID!): Post
  }
`
