const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const mongoose = require("mongoose");
const schema = require("./graphql/schema");
const resolvers = require("./graphql/Resolvers");

const app=express();

mongoose.connect("mongodb://localhost:27017/graphql", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  mongoose.connection.once("open", () => {
    console.log("Connected to MongoDB");
  });
  app.use(
    "/",
    graphqlHTTP({
      schema,
      rootValue: resolvers,
      graphiql: true,
    })
  );
  
  app.listen(5110, () => {
    console.log("Server is running on http://localhost:5110/graphql");
  });
