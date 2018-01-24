import React, { Component } from "react";
import { Image, View, StatusBar, TouchableOpacity } from "react-native";
import { Container, Header, Title, Button, Icon, Tabs, Tab, Right, Left, Body, Content } from 'native-base';

import styles from "./styles";
const logo = require("../../../img/splash-logo.png");
import TabOne from './tabOne';
import TabTwo from './tabTwo';

class Sale extends Component {
  // eslint-disable-line

  render() {
    return (
      <Container style={styles.container}>
        <Header style={{ backgroundColor: "#112D42" }}  androidStatusBarColor="#112D42"
          iosBarStyle="light-content">
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Home</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <View>
            <Tabs >
              <Tab heading="Product Category" >
                <TabOne  navigation={this.props.navigation}/>
              </Tab>
              <Tab heading="Mining"  >
                <TabTwo navigation={this.props.navigation}/>
              </Tab>
             
          </Tabs>
          </View>        
          
        </Content>
        
      </Container>
    );
  }
}

export default Sale;
