import React, { Component } from 'react';

class List extends Component {

  const videos = new Request("https://us-central1-serverless-mvp.cloudfunctions.net/showBucketContents", {
    method: "POST",
    "Content-Type": "application/json"
  });
  fetch(videos)
    .then(response => {
      console.log(response);
      return response.json();
    })
  //   .then(data => {
  //     // Loop over each user in the response and send it
  //     // to the renderUser helper.
  //     data.forEach(user => {
  //       renderUser(user);
  //     });
  //   })
  //   .catch(error => {
  //     // If an error is found it will be caught here
  //     // and can be subsequently handled.
  //     console.log('Error Found:', error);
  //   });
  // });
  render() {
    return(
    // <h3>Hello world</h3>
    );
  }
}

export default List;
