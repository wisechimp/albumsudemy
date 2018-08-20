import React from 'react';
import { Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection'

//This Text in the Card gets inserted into props.children in the Card.js
const AlbumDetail = (props) => {
  return (
    <Card>
      <CardSection>
        <Text>{props.album.title}</Text>
      </CardSection>
    </Card>
  );
};

export default AlbumDetail;
