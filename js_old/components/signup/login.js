import React, { Component } from "react";
import { Image, View, StatusBar, TouchableOpacity } from "react-native";

import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Footer,
  Icon,
  Left,
  Right,
  Body,
  Text,
  Input,
  Item,
  Form,
  Label,
  Subtitle
} from "native-base";

import styles from "./styles";
const logo = require("../../../img/splash-logo.png");
class Login extends Component {
  // eslint-disable-line

  render() {
    return (
      <Container style={styles.container}>
        <Header style={{ backgroundColor: "#112D42" }} androidStatusBarColor="#062a3c"
          iosBarStyle="light-content">
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Log In</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Password</Label>
              <Input />
            </Item>
            <Button block dark style={styles.mb15} onPress={()=>this.props.navigation.navigate("Drawer")}><Text>Log In</Text></Button>
          </Form>         
          
        </Content>
        
      </Container>
    );
  }
}

export default Login;
