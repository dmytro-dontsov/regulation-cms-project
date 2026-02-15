const path = require('path');

module.exports = () => {
    const envPath = path.resolve(__dirname, '.env');
    process.loadEnvFile(envPath);

    console.log('SERVICE_NAME from env:', process.env.SERVICE_NAME);
};