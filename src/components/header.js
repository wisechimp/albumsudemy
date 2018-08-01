// Import libraries for making the Component

import React from 'react';
import { Text, View } from 'react-native';

//Make the Component

const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2, //for iOS
    elevation: 2, //for Android
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
};

//Make the component available to other parts of the app

export default Header;
