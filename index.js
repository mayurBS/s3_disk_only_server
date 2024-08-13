require('dotenv').config();
const config = require('config');
const S3rver = require("s3rver");

/** Environment variables */
const s3ServerConfig = config.get("S3_SERVER");
const { NODE_ENV } = process.env;
console.log(" --- ENVIRONMENT---", NODE_ENV);

/** Function to create and start S3 server */
const startS3Server = async () => {
  try {
    const s3rver = new S3rver({
      port: s3ServerConfig.PORT,
      address: s3ServerConfig.HOST,
      silent: false,
      directory: s3ServerConfig.CACHE_PATH,
    });
    
    await s3rver.run();
    
    console.log("====================================================================================");
    console.log(`🚀 S3rver running and up on: http://${s3ServerConfig.HOST}:${s3ServerConfig.PORT}`);
    console.log("====================================================================================");
  } catch (error) {
    console.error("Error starting S3 server:", error);
  }
};

/** Connect to database and start S3 server */
const init = async () => {
  try {
    await startS3Server();
  } catch (error) {
    console.error("Initialization error:", error);
  }
};

init();
