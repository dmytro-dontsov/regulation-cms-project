const path = require('path')

module.exports = () => {
  const envPath = path.resolve(__dirname, '.env')
  process.loadEnvFile(envPath)
}
