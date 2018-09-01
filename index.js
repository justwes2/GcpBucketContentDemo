/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */

const Storage = require('@google-cloud/storage');

const storage = new Storage();

const bucketName = 'coffay-storage'


exports.showBucketContents = (req, res) => {
  const fileNames = []
  storage
  .bucket(bucketName)
  .getFiles()
  .then(results => {
    const files = results[0];


    console.log('Files:');
    files.forEach(file => {
      console.log(file.name);
      fileNames.push(file.name)
    });
    res.send(fileNames)
  })
  .catch(err => {
    console.error('ERROR:', err);
  });
};



// curl  https://us-central1-serverless-mvp.cloudfunctions.net/showBucketContents
