import express from 'express'

const app = express()

app.use(express.json())

const PORT = process.env.PORT || 5005

// ℹ️ Needed to accept from requests from 'the outside'. CORS stands for cross origin resource sharing
// unless the request if from the same domain, by default express wont accept POST requests
const cors = require("cors");

const FRONTEND_URL = process.env.ORIGIN || "http://localhost:3000";

app.set("trust proxy", 1);

// controls a very specific header to pass headers from the frontend
app.use(
  cors({
    origin: [FRONTEND_URL]
  })
);

app.get('/api', (_req, res) => {
    console.log("Alguien anda por aqui")
    res.send("Aqui tienes tu data")
})


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})