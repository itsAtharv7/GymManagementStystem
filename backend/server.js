import express from "express";
import auth from "./routes/loginRoute.js";
import ConnectDB from "./config/config.js";
import cors from "cors";

const app = express();
app.use(express.json());
ConnectDB();
app.use(cors());
app.use("/api", auth);

app.listen(3000, () => {
  console.log("Server running");
});
