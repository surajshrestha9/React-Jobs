import * as dotenv from "dotenv";
import express from "express";
const app = express();
import morgan from "morgan";
dotenv.config();

import { nanoid } from "nanoid";

let jobs = [
  { id: nanoid(), company: "apple", position: "front-end" },
  { id: nanoid(), company: "google", position: "backend" },
];

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

// Get all jobs
app.get("/api/v1/jobs", (req, res) => {
  res.status(200).json({ jobs });
});
// create job
app.post("/api/v1/jobs", (req, res) => {
  const { company, position } = req.body;
  if (!company || !position) {
    res.status(400).json({ message: "please provide company and position" }); //400 bad request
    return;
  }
  const id = nanoid(10);
  const job = { id, company, position };
  jobs.push(job); //add manually to jobs array
  res.status(200).json({ job });
});

// get single job
app.get("/api/v1/jobs/:id", (req, res) => {
  const { id } = req.params;
 
  const job = jobs.find((job)=>job.id===id);
  if (!job) {
    return res.status(201).json({msg:`no job with ${id}`})
  }
});

// EDIT JOB
app.patch('/api/v1/jobs/:id', (req, res) => {
  const { company, position } = req.body;
  if (!company || !position) {
    return res.status(400).json({ msg: 'please provide company and position' });
  }
  const { id } = req.params;
  const job = jobs.find((job) => job.id === id);
  if (!job) {
    return res.status(404).json({ msg: `no job with id ${id}` });
  }

  job.company = company;
  job.position = position;
  res.status(200).json({ msg: 'job modified', job });
});

// DELETE JOB
app.delete('/api/v1/jobs/:id', (req, res) => {
  const { id } = req.params;
  const job = jobs.find((job) => job.id === id);
  if (!job) {
    return res.status(404).json({ msg: `no job with id ${id}` });
  }
  const newJobs = jobs.filter((job) => job.id !== id);
  jobs = newJobs;

  res.status(200).json({ msg: 'job deleted' });
});

const port = process.env.PORT || 5100;

app.listen(port, () => {
  console.log(`server running on PORT ${port}...`);
});
