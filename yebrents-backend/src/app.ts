import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import dbMongo from './config/mongo'
import indexRoutes from './routes/index.routes'

const PORT = process.env.PORT

const app = express()
app.use(express.json())

app.use('/api', indexRoutes)

app.use(cors())

dbMongo()
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err))

if (PORT !== undefined) {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
}
