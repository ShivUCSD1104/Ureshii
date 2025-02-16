import React from 'react';
import {
  ImageBackground,
  Image,
  StyleSheet,
  StatusBar,
  Dimensions,
} from 'react-native';
import { Block, Button, Text, Input, Icon, theme } from 'galio-framework';

const { height, width } = Dimensions.get('screen');

import argonTheme from '../constants/Theme';
import Images from '../constants/Images';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

class Onboarding extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: false,
    };
  }

  render() {
    const { navigation } = this.props;

    return (
      <Block flex style={styles.container}>
        <StatusBar hidden />
        <Block flex center></Block>

        <Block center flex={1}>
          <Text color='darkslateblue' size={60} fontWeight='bold'>
            Welcome!
          </Text>
        </Block>

        <Block flex style={styles.question}>
          <Block style={styles.text} padding='2%'>
            <Text color='darkslateblue' size={20} textAlign='left'>
              What's your name?
            </Text>
          </Block>

          <Block center width={350}>
            <Input right placeholder='e.g John Doe' onChangeText={text => setText(text)} defaultValue={text}/>
            console.log(text);
          </Block>
          <Block
            flex
            style={styles.button}
            paddingTop='10%'
            alignItems='center'
          >
            <Button onPress={() => navigation.navigate('App')}>Next</Button>
          </Block>
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.COLORS.WHITE,
  },
  padded: {
    paddingHorizontal: theme.SIZES.BASE * 2,
    position: 'relative',
    bottom: theme.SIZES.BASE,
    zIndex: 2,
  },
  question: {
    flexDirection: 'column',
    flex: 1,
    paddingHorizontal: theme.SIZES.BASE * 2,
    position: 'relative',
    top: -150,
  },
  button: {
    width: width - theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0,
  },
  logo: {
    width: 200,
    height: 60,
    zIndex: 2,
    position: 'relative',
    marginTop: '-50%',
  },
  title: {
    marginTop: '-5%',
  },
  subTitle: {
    marginTop: 20,
  },
  text: {
    position: 'relative',
    left: -15,
  }
});

export default Onboarding;
