import express from "express";
import "dotenv/config";
import connectDb from "./config/connectDb";
import apiRoutes from "./routes/apiRoutes";

import swaggerUI from "swagger-ui-express";
import docs from "./docs";

const port = process.env.PORT || 8080;

connectDb();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("API is running");
});

apiRoutes(app);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(docs));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
