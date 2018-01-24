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
class Phoneotp extends Component {
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
            <Title>Phone</Title>            
          </Body>
          <Right />

        </Header>
		<Content style={{padding:10}}>
       <View style={{paddingBottom:20, paddingTop:20, alignItems: 'center' }}>
          <Text style={{color:'#8b8b8b', fontSize:18}}>OTP sent tp 9733701536</Text>
       </View> 
			<View>
      <Form>
            <Item floatingLabel>
              <Label>Enter your phone number</Label>
              <Input />              
            </Item>
            <View style={{padding:10, alignItems: 'center' }}>
              <Text style={{color:'#8b8b8b', fontSize:14}}>Following code in 3 sec</Text>
            </View> 
            <View style={{padding:10, alignItems: 'center' }}>		
              <Text  style={{color:'#8b8b8b', fontSize:18}}>Did not received OTP?</Text>
              
              <Text style={{color: '#ffb247'}}
                    onPress={() => Linking.openURL('http://google.com')}>
                RESEND CODE
              </Text>
            </View>
            <Button block dark style={styles.mb15} onPress={()=>this.props.navigation.navigate("Login")}><Text>VERIFY</Text></Button>
      </Form>
        
			</View>
      
      
      
		</Content>
   
      </Container>
    );
  }
}

export default Phoneotp;
