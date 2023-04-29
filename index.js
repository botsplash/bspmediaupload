const axios           = require('axios');
const dotenv          = require('dotenv');
const fs              = require('fs');

dotenv.config();

const BASE_URL        = process.env.BSP_BASE_URL;
const ACCOUNT_ID      = process.env.BSP_ACCOUNT_ID;
const API_USERNAME    = process.env.BSP_API_USERNAME;
const API_PASSWORD    = process.env.BSP_API_PASSWORD;
const LOCAL_FILE_PATH = process.env.BSP_LOCAL_FILE_PATH;

const UPLOAD_URL      = `${BASE_URL}/${ACCOUNT_ID}/upload`;

async function uploadFile() {
  try {
    const response = await axios.post(UPLOAD_URL, {
      file: fs.createReadStream(LOCAL_FILE_PATH)
    }, {
      auth  : {
        username: API_USERNAME,
        password: API_PASSWORD
      },
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    return response.data;
  } catch (err) {
    console.error('uploadFile:error:', err);
    return null;
  }
}

console.log('uploadFile:start:', UPLOAD_URL);
uploadFile()
  .then(res => console.log('uploadFile:done:', res))
  .catch((err) => console.log('uploadFile:err:', err));
