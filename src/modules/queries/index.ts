export default `
  type Query {
    users(limit: Int, filter: String): [User!]!
    user(id: ID!): User
  
    posts(limit: Int, filter: String): [Post!]!
    post(id: ID!): Post
  }
`
