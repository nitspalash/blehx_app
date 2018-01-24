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
class ChangePassword extends Component {
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
            <Title>Change Password</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Current Password</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>New password</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Retype new password</Label>
              <Input />
            </Item>
          </Form>         
          
        </Content>
        <Footer transparent>
        <View style={{flex:1}}>
          <Button full style={styles.mb15} onPress={()=>this.props.navigation.navigate("Phoneotp")}><Text style={{color:'#FFFFFF'}}>Save</Text></Button>
        </View>
      </Footer>
      </Container>
    );
  }
}

export default ChangePassword;
