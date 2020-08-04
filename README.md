## 🚀 GraphQl First Project

This is the first of many projects that I will create using GraphQl. 
For this first project, I decided to create something simple but useful to learn. The idea here is a basic application to store users in database. 

## 👨🏻‍🔧 For this project, I'm using:

- Node.JS
- TypeORM
- graphql-yoga
- Postgres
- ts-node-dev

## 👨🏻‍💻 Running the project:

First, you must have to create a file called ormconfig.json, this file must follow the ormconfig.example.json file. Put yout host, port, username, password 
and database name and you're ready to start.

    // Installing the dependencies
    yarn 
    
    // Creating the tables
    yarn typeorm migration:run
    
    // Starting the server
    yarn dev:server
    
Then, go to your browser and access `http://localhost:3333`

## 🛤 Queries and mutations 

To create a user, you can use the following mutation:

    mutation {
      createUser(
        name: "John doe", 
        email: "johndoe@mail.com", 
        password: "123456") {
        name,
        email
      }
    }
   
To update an user, you can use the following mutation:

    mutation {
      updateUser(
        id: "ID_OF_USER", 
        user: { 
          email: "bob@mymail.com", 
        }
      ) {
        email,
        name
      }
    }
    
To get the users, you can use the following mutation:
 
    {
      users {
        id,
        name,
        email
      }
    }
    
To get the users, you can use the following query:

    {
      users {
        id,
        name,
        email
      }
    }

Finally, to get one user, you can use the following query:

    {
      user(id: "THE_USER_ID") {
        id,
        name,
        email
      }
    }
