import React, { Component } from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import { Image, View,Alert
,  StatusBar, TouchableOpacity ,AsyncStorage} from "react-native";

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
import {sendotp} from '../../actions/authActions';
import styles from "./styles";
const logo = require("../../../img/splash-logo.png");
class Signup extends Component {
  // eslint-disable-line
  constructor() {super()
    this.state = {
      mobile: ''
    }
  
    this.pressSendotp=this.pressSendotp.bind(this)
  
  }
  pressSendotp(){
  if(!this.state.mobile){
    Alert.alert('Please enter mobile number');
    return false;
  }
  
  const mobile = this.state.mobile;
  //alert(mobile);
  this.props.sendotp(mobile).then(res=>{ 
   // alert('df');
   alert(res.ack);
    if(res.ack!==1){
      Alert.alert('Login fail,please try again');
      this.setState({mobile:''});
    }else{ alert(mobile);
      this.props.navigation.navigate("Phoneotp",{ mob:mobile});
    }
  })
  }



  render() {
    return (
      <Container style={styles.container}>
        <Header hasSubtitle style={{ backgroundColor: "#112D42" }}>
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
              <Input keyboardType="numeric" onChangeText={(text) => this.setState({mobile:text})} />
            </Item>
            <Button block dark style={styles.mb15} onPress={()=>this.pressSendotp()}><Text>VERIFY</Text></Button>
      </Form>
      
		</Content>
   
      </Container>
    );
  }
}


Signup.propTypes = {
  auth : PropTypes.object.isRequired,
  sendotp:PropTypes.func.isRequired
}
const mapStateToProps = (state)=>{
	return {
		auth:state.auth
	}
}

const mapDispatchToProps = (dispatch)=>{
	return {
		sendotp:(mobile)=>dispatch(sendotp(mobile))
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Signup);



//export default Signup;
