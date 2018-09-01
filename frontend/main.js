$(function() {
   console.log("foo");
   $.ajax({
     url: 'https://us-central1-serverless-mvp.cloudfunctions.net/showBucketContents',
     type: 'POST',
     success: function (response) {
       console.log(response);
       // $("#list").append('ahoy')
       for (let file of response) {
         $("#list").append('<li>'+file["file name"]+' &nbsp;&nbsp;&nbsp; <a href='+file["link"]+'>link</a></li>');
       }

     },
     error: function () {
       alert('error: ', error);
     }
   });
});
