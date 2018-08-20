import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  //Initial empty state
  state = { albums: [] };

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => this.setState({ albums: response.data }));
  }

  //album= this is a Prop and gets referred to in AlbumDetail
  //{album} this is a variable created above
renderAlbums() {
  return this.state.albums.map(album =>
        <AlbumDetail key={album.title} album={album} />
  );
}

  render() {
    console.log(this.state);

    return (
      <View>
        {this.renderAlbums()}
      </View>
    );
  }
}

export default AlbumList;
