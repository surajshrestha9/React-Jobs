import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
import morgan from "morgan";

//routers
import jobRouter from "./routes/jobRouter.js";

// app.use(morgan("dev"));
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// //fetch is a promise->use then
// fetch("https://www.course-api.com/react-useReducer-cart-project")
//   .then((res) => res.json())
//   .then((data) => console.log(data));
app.use(express.json());
try {
  const response = await fetch(
    "https://www.course-api.com/react-useReducer-cart-project"
  );
  const cartData = await response.json();
  console.log(cartData);
} catch (error) {
  console.log(error);
}

app.post("/", (req, res) => {
  console.log(req);
  res.json({ message: "data received", data: req.body });
});
`
// Get all jobs
app.get("/api/v1/jobs", );
// create job
app.post("/api/v1/jobs", );

// get single job
app.get("/api/v1/jobs/:id", );

// EDIT JOB
app.patch("/api/v1/jobs/:id", );

// DELETE JOB
app.delete("/api/v1/jobs/:id", );
`
app.use("/api/v1/jobs", jobRouter);

app.use("*", (req, res) => res.status(404).json({ msg: "not found" }));
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ msg: "something went wrong" });
});

const port = process.env.PORT || 5100;

app.listen(port, () => {
  console.log(`server running on PORT ${port}...`);
});
