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
  Form,
  Item,
  Label,
  Subtitle
} from "native-base";

import styles from "./styles";
const logo = require("../../../img/splash-logo.png");
class Signup extends Component {
  // eslint-disable-line

  render() {
    return (
      <Container style={styles.container}>
        <Header hasSubtitle style={{ backgroundColor: "#112D42" }} androidStatusBarColor="#062a3c"
          iosBarStyle="light-content">
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Phone</Title>            
          </Body>
          <Right />

        </Header>
		<Content style={{padding:10}}>			
      <Form>
            <Item floatingLabel>
              <Label>Enter your phone number</Label>
              <Input />
            </Item>
            
              <Button block dark style={styles.mb15} onPress={()=>this.props.navigation.navigate("Phoneotp")}><Text>VERIFY</Text></Button>
            
      </Form>
      
		</Content>
   
      </Container>
    );
  }
}

export default Signup;
