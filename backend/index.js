/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */

const Storage = require('@google-cloud/storage');

const storage = new Storage();

const bucketName = 'coffay-storage'

const addressRoot = "https://storage.cloud.google.com/"
exports.showBucketContents = (req, res) => {
  // Set CORS headers
  // e.g. allow GETs from any origin with the Content-Type header
  // and cache preflight response for an 3600s
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "GET");
  res.set("Access-Control-Allow-Headers", "Content-Type");
  res.set("Access-Control-Max-Age", "3600");
  // Send response to OPTIONS requests and terminate the function execution
  if (req.method == 'OPTIONS') {
    res.status(204).send('');
  }
  // Continue with function code
  const fileNames = []
  storage
  .bucket(bucketName)
  .getFiles()
  .then(results => {
    const files = results[0];


    console.log('Files:');
    files.forEach(file => {
      console.log(file.name);
      fileNames.push({
        "file name" : file.name,
        "link" : addressRoot+bucketName+"/"+file.name
      })
    });
    res.send(fileNames)
  })
  .catch(err => {
    console.error('ERROR:', err);
  });
};
