import express from "express";
const APP = express();
import SERVER from "./graphql/schema.js";

SERVER.applyMiddleware({
  app: APP,
});

const PORT = 4000 || process.env;

APP.listen(PORT, () => {
  console.log(`The server has started on port: ${PORT}`);
  console.log(`http://localhost:${PORT}/graphql`);
});
