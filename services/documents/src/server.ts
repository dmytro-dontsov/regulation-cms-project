process.loadEnvFile()
import { start } from './app'
import { connectDB } from '@commons/mongo'

async function startServer() {
  try {
    await connectDB()

    start()

    console.log('🚀 Server is running and DB is connected')
  } catch (err) {
    console.error('💥 Application failed to start:', err)
    process.exit(1)
  }
}

startServer()
