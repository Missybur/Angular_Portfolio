"use strict";

require('dotenv').config();

var aws = require('aws-sdk');
var s3 = new aws.S3();

var params = {
  Bucket: process.env.AWS_BUCKET,
  Key: 'hi',
  Body: 'this is my string!'
}

s3.putObject(params, function(err, data) {
  console.log('err:', err);
  console.log('data:', data);
  });