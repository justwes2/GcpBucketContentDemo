import React, { Component } from 'react';


class Player extends Component {
  constructor(props){
    super()
  }
  render() {
    let url = 'https://00e9e64bac547d78b68a646958d11faddb90fcc65fda9fea34-apidata.googleusercontent.com/download/storage/v1/b/coffay-storage/o/Beach-14297.mp4'
    return (
      <video id="video" width="320" height="240" controls>
        <source src={url} type="video/mp4"/>
      </video>
    );
  }
}

export default Player;
