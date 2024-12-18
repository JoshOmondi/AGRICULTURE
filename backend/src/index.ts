import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
// import routes from "./routes/userRoutes";
import user_router from "./routes/userRoutes";
import project_router from "./routes/projectRoutes";

dotenv.config();
const port = process.env.PORT || 4700;
const app = express();
app.use(json());
app.use(cors());

app.use("/user", user_router);
app.use("/project", project_router);

app.listen(port, () => {
  console.log(`Project management running on port ${port}`);
});

// app.use("/api", routes);