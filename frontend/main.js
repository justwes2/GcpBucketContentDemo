$(function() {
   console.log("foo");
   $.ajax({
     url: 'https://us-central1-serverless-mvp.cloudfunctions.net/showBucketContents',
     type: 'POST',
     success: function (response) {
       console.log(response);
     },
     error: function () {
       alert('error: ', error);
     }
   });
});
