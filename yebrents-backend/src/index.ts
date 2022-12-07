import express from 'express'
import indexRoutes from './routes/index.routes'

const app = express()

app.use(express.json())

const PORT = process.env.PORT || 5005

// ℹ️ Needed to accept from requests from 'the outside'. CORS stands for cross origin resource sharing
// unless the request if from the same domain, by default express wont accept POST requests
const cors = require("cors");

const FRONTEND_URL = process.env.ORIGIN || "http://localhost:3000";

app.set("trust proxy", 1);


app.use("/api", indexRoutes);

// controls a very specific header to pass headers from the frontend
app.use(
  cors({
    origin: [FRONTEND_URL]
  })
);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

