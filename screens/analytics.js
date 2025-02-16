import React from 'react';
import { StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Block, theme } from 'galio-framework';
import { VictoryLine, VictoryChart, VictoryTheme, VictoryAxis } from "victory-native";

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

const data = [
  { x: 1, y: 1 },
  { x: 2, y: 3 },
  { x: 3, y: 5 },
  { x: 4, y: 7 },
  { x: 5, y: 14 },
  { x: 6, y: 20 },
  { x: 7, y: 17 },
  { x: 8, y: 25 },
  { x: 9, y:  28},
  { x: 10, y: 33 },
  { x: 11, y: 24 },
  { x: 12, y: 20 },
  { x: 13, y: 23 },
  { x: 14, y: 27 },
  { x: 15, y: 48 },
  { x: 16, y: 10 },
  { x: 17, y: 20 },
  { x: 18, y: 42 },
  { x: 19, y: 50 },
  { x: 20, y: 90 },
  { x: 21, y: 10 },
  { x: 22, y: 20 },
  { x: 23, y: 42 },
  { x: 24, y: 50 },
  { x: 25, y: 90 },
  { x: 26, y: 10 },
  { x: 27, y: 20 },
  { x: 28, y: 42 },
  { x: 29, y: 50 },
  { x: 30, y: 90 },
];


class analytics extends React.Component {
  render() {
    const { navigation } = this.props;

    return (
      <Block flex style={styles.container}>

        <Block style={styles.title} >
          <Text color='darkslateblue' size={60} fontWeight='bold'>
            Analytics
          </Text>
        </Block>

        <Block style={styles.graph}>
          <VictoryChart width={400} height={250} theme={VictoryTheme.material} >
            <VictoryLine 
            style = {{data: { stroke: "hotpink" }, parent: { border: "black"} }}
            data = {data} x= "x" y= "y" animate = {{ duration: 2000, easing: "linear" }}
            />
            
          </VictoryChart>
        </Block>

        <Block style={styles.observations}>
          <Block center>
              <Text color='darkslateblue' size={20}>
            Our Observations
              </Text>
          </Block>

          <Block center paddingTop='2%'>
            <Block padding='2%'>
              <Text color='steelblue' size={15}>
              - Your plateau in the middle was caused due to an incomplete diet
                                                                        {"\n"}
                                                                        {"\n"}
              - Your plateau in the middle was caused due to an incomplete diet
                                                                        {"\n"}
                                                                        {"\n"}
              - Your plateau in the middle was caused due to an incomplete diet 
              </Text>
            </Block>
          </Block>
        </Block>

          <Block center style={styles.button} >
            <Button onPress={() => navigation.navigate('suggestions')}>Next</Button>
          </Block>
        
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.COLORS.WHITE,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  title: {
    bottom: -20,
    },
  graph: {
    top: -50
  },
  observations: {
    top: -80,
  },
  button: {
    width: width - theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0,
    top: -90,
  },
});

export default analytics;
