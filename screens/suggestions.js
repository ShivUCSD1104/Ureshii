import React from 'react';
import { StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Block, theme } from 'galio-framework';

import {
  ImageBackground,
  Image,
  StatusBar,
} from 'react-native';

import { Button, Text, Input, Icon } from 'galio-framework';

import { Card } from '../components';
import articles from '../constants/articles';
const { width } = Dimensions.get('screen');
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

class suggestions extends React.Component {
  render() {
    const { navigation } = this.props;

    return (
      <Block flex style={styles.container}>
        <StatusBar hidden />
        <Block flex center></Block>

        <Block center flex={1}>
          <Text color='darkslateblue' size={60} fontWeight='bold'>
            Suggestions
          </Text>
        </Block>


        <Block center flex={5}>
          <Block padding='2%'>
            <Block>
            <Text color='darkslateblue' size={20} textAlign='center'>
           Our Observations
            </Text>
            <Text color='steelblue' size={15} textAlign='left'>
            - Your plateau in the middle was caused due to an incomplete diet
            </Text>
            </Block>

            <Block paddingTop="10%">
            <Text color='darkslateblue' size={20} textAlign='center'>
           Our Observations
            </Text>
            <Text color='steelblue' size={15} textAlign='left'>
            - Your plateau in the middle was caused due to an incomplete diet
            </Text>
            </Block>

            <Block paddingTop="10%">
            <Text color='darkslateblue' size={20} textAlign='center'>
           Our Observations
            </Text>
            <Text color='steelblue' size={15} textAlign='left'>
            - Your plateau in the middle was caused due to an incomplete diet
            </Text>
            </Block>
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
    top: -200,
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
});

export default suggestions;
