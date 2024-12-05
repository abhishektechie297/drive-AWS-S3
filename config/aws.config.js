const AWS = require('aws-sdk');

AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID, // Set in .env or securely
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY, // Set in .env or securely
    region: 'us-east-1', // Replace with your S3 bucket region
  });
  
  const s3 = new AWS.S3();

  module.exports= s3;