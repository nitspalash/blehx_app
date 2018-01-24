import React, { Component } from "react";
import { Image, View, StatusBar,TextInput, TouchableOpacity ,AsyncStorage} from "react-native";

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
  constructor(props) {
    super(props)
    //console.log(props)
    this.state = {
      
    }
 }













  render() {

  //   focusNextField(nextField) {
  //     this.refs[nextField].focus();
  // }
    //const state = this.props.navigation;
    //alert(this.props.navigation.state.params.mob);
//var title = state.params.param;
    return (
      <Container style={styles.container}>
        <Header style={{ backgroundColor: "#112D42" }}>
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
    <View>
        <TextInput
          ref="1"
          style={styles.default}
          placeholder="blurOnSubmit = false"
          returnKeyType="next"
          blurOnSubmit={false}
          onSubmitEditing={() => this.focusNextField('2')}
        />
        <TextInput
          ref="2"
          style={styles.default}
          keyboardType="email-address"
          placeholder="blurOnSubmit = false"
          returnKeyType="next"
          blurOnSubmit={false}
          onSubmitEditing={() => this.focusNextField('3')}
        />
        <TextInput
          ref="3"
          style={styles.default}
          keyboardType="url"
          placeholder="blurOnSubmit = false"
          returnKeyType="next"
          blurOnSubmit={false}
          onSubmitEditing={() => this.focusNextField('4')}
        />
        <TextInput
          ref="4"
          style={styles.default}
          keyboardType="numeric"
          placeholder="blurOnSubmit = false"
          blurOnSubmit={false}
          onSubmitEditing={() => this.focusNextField('5')}
        />
        <TextInput
          ref="5"
          style={styles.default}
          keyboardType="numbers-and-punctuation"
          placeholder="blurOnSubmit = true"
          returnKeyType="done"
        />
</View>
       <View style={{paddingBottom:20, paddingTop:20, alignItems: 'center' }}>
          <Text>OTP sent to {this.props.navigation.state.params.mob}</Text>
       </View> 
			<View>
      <Form>
            <Item floatingLabel>
              <Label>Enter your phone number</Label>
              <Input keyboardType="numeric" onChangeText={(text) => this.setState({mobile:text})} />             
            </Item>
            <Text style={{padding:10, alignItems: 'center' }}>Following code in 3 sec</Text>
            <View>		
              <Text style={{padding:10, alignItems: 'center' }}>Did not received OTP?</Text>
              
              <Text style={{color: 'gray'}}
                    onPress={() => Linking.openURL('http://google.com')}>
                RESEND CODE
              </Text>
            </View>
            <Button block dark style={styles.mb15} onPress={()=>this.pressSendotp()}><Text>VERIFY</Text></Button>
      </Form>
        
			</View>
      
      
      
		</Content>
   
      </Container>
    );
  }
}

export default Phoneotp;
