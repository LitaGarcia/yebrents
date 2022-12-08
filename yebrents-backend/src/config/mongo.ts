import 'dotenv/config'
import { connect } from 'mongoose'

async function dbConnect (): Promise<void> {
  const MONGO_URI = process.env.MONGO_URI
  if (MONGO_URI != null) {
    await connect(MONGO_URI)
  }
}

export default dbConnect
