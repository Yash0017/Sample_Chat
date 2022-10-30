/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *sticky header
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
} from 'react-native';

import {
  
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {
  Container,
  Header,
  Title,
  Left,
  Body,
  Right,
  Icon,
  Button,
  Tab,
  Tabs
} from 'native-base' ;

import Clist from './Chat-list' ;

const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic">
        <Container>
          <Header noLeft hasTabs style={{backgroundColor:'#ffffff',elevation:0}}>
            <Body>
              <Title style={{paddingLeft: 15, color:'black'}}>Plus</Title>
            </Body>
            <Right>
              <Button transparent>
                <Icon name='menu' style={{color:'black'}}></Icon>
              </Button>
            </Right>
            </Header>
            <Tabs tabBarUnderlineStyle={{borderBottomColor:'black' , borderBottomWidth:2}}>
              <Tab heading="Chat" tabStyle={{backgroundColor:'#ffffff'}} textStyle={{color:'#414141'}} activeTextStyle={{color:'black' , fontWeight:"bold"}} activeTabStyle={{backgroundColor:'#ffffff'}}>
                <Clist />
              </Tab>
              <Tab heading="Contacts" tabStyle={{backgroundColor:'#ffffff'}} textStyle={{color:'#414141'}} activeTextStyle={{color:'black' , fontWeight:"bold"}} activeTabStyle={{backgroundColor:'#ffffff'}}></Tab>
            </Tabs>
          </Container>
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
};

export default App;
