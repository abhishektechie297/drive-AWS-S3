// const { S3Client } = require('@aws-sdk/client-s3')
// const multer = require('multer');
// const multerS3 = require('multer-s3');

// // Configure AWS SDK

// const s3 = new AWS.S3();

// // Configure multer-s3
// const upload = multer({
//   storage: multerS3({
//     s3: s3,
//     bucket: 'drive-abhishek-image', // Your bucket name
//     acl: 'public-read', // Set permissions (adjust based on your requirements)
//     metadata: (req, file, cb) => {
//       cb(null, { fieldName: file.fieldname });
//     },
//     key: (req, file, cb) => {
//       cb(null, `uploads/${Date.now()}_${file.originalname}`); // Unique file key
//     },
//   }),
// });

// module.exports = upload;

const { S3Client } = require('@aws-sdk/client-s3')
const multer = require('multer')
const AWS = require('aws-sdk');

const multerS3 = require('multer-s3')


AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID, // Set in .env or securely
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY, // Set in .env or securely
    region:'ap-northeast-1', // Replace with your S3 bucket region
  });
  
const s3 = new S3Client()

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'drive-abhishek-image',
  })
})

module.exports=upload;