import React, { Component } from 'react';
import Iframe from 'react-iframe'

export default (props) => {
  return (
    <div>
      Albert & Gage
      <SpotifyPlayer
        src="https://embed.spotify.com/?uri=spotify:user:1247199566:playlist:3IZnq8jKmvBOXDbGtaWMRM"
      />
    </div>
  );
}


class SpotifyPlayer extends Component {

  render() {
    return (
      <Iframe 
        url={this.props.src}
        width="300px"
        height="380px"
        frameborder="0"
        allowtransparency="true"
      />
    )
  }
}
