$(function() {
   $.ajax({
     url: 'https://us-central1-serverless-mvp.cloudfunctions.net/showBucketContents',
     type: 'POST',
     success: function (response) {
       console.log(response);
       for (let file of response) {
         $("#list").append('<li>' + file["file name"] + '&nbsp;&nbsp;&nbsp;<a onClick=playVideo("' +  file["link"].toString() + '")>play</a>&nbsp;&nbsp;&nbsp;<a href=' + file["link"] + '>link</a></li>');
       }
     },
     error: function () {
       alert('error: ', error);
     }
   });
});


function playVideo(link) {
  const viewer = $("#viewer");
  viewer.empty();
  viewer.append('<video id="video" width="320" height="240" controls> <source src='+ link+' type="video/mp4"></video>')
  const video = document.getElementById('video');
  video.play()

};
