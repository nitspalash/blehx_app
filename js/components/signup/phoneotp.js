import React, { Component } from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { Image, View,Alert, StatusBar,TextInput, TouchableOpacity,AsyncStorage } from "react-native";
import Spinner from 'react-native-loading-spinner-overlay';
import {verifyotp,sendotp} from '../../actions/authActions';

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
  constructor() {super()
    this.state = {
      mobile1: '',
      mobile2: '',
      mobile3: '',
      mobile4: '',
      visible: false
    }
  
    this.pressVerifyotp=this.pressVerifyotp.bind(this)
    this.resend=this.resend.bind(this)
    
  }
  // eslint-disable-line
   focusNextField(nextField) {
      this.refs[nextField].focus();
  }

  pressVerifyotp(){
      this.setState({
        visible: !this.state.visible
      });
     const otp = this.state.mobile1+this.state.mobile2+this.state.mobile3+this.state.mobile4;
     const mobile = this.props.navigation.state.params.mob
    this.props.verifyotp(mobile,otp).then(res=>{ //alert(JSON.stringify(res.data[0].id))
     
      if(res.status=='failure'){
        Alert.alert('Pleas enter a valid code');
        this.props.navigation.navigate("Phoneotp",{ mob:mobile});
        this.setState({
          visible: false
        });
      }else{ //alert(res.data.id)
        //this.props.navigation.navigate("Phoneotp",{ mob:mobile});
        this.props.navigation.navigate("Login",{id:res.data[0].id})
        this.setState({
          visible: false
        });
      }
    })
    }
    resend(){
      const mobile = this.props.navigation.state.params.mob
      
      this.props.sendotp(mobile).then(res=>{ 
       
      Alert.alert('New OTP send to your mobile no');
       
        
      })
      
    }
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
    <View style={{ flex: 1 }}>
        <Spinner visible={this.state.visible} textContent={"Loading..."} textStyle={{color: '#FFF'}} />
      </View>
       <View style={{paddingBottom:20, paddingTop:20, alignItems: 'center' }}>
          <Text style={{color:'#8b8b8b', fontSize:18}}>OTP sent to  {this.props.navigation.state.params.mob}</Text>
       </View> 
       <Form>
       <View style={{flexDirection: 'row',paddingLeft:100,paddingRight:100}}>
         <View style={{flex:0.25}}>
        <TextInput
          ref="1"
          style={styles.default}
          keyboardType="numeric"
          placeholder=""
          returnKeyType="next"
          blurOnSubmit={false}
          maxLength={1}
    enablesReturnKeyAutomatically={true}
    onChangeText={text => {
      this.setState({mobile1: text})
      //console.log('onChangeText', this.refs.card_exp_date_mm)
      if(text && text.length == 1){
        this.focusNextField('2')
      }}}
        />
        </View>
        <View style={{flex:0.25}}>
        <TextInput
          ref="2"
          style={styles.default}
          keyboardType="numeric"
          placeholder=""
          returnKeyType="next"
          blurOnSubmit={false}
          maxLength={1}
    enablesReturnKeyAutomatically={true}
    onChangeText={text => {
      this.setState({mobile2: text})
      //console.log('onChangeText', this.refs.card_exp_date_mm)
      if(text && text.length == 1){
        this.focusNextField('3')
      }}}
        />
        </View>
        <View style={{flex:0.25}}>
        <TextInput
          ref="3"
          style={styles.default}
          keyboardType="numeric"
          placeholder=""
          returnKeyType="next"
          blurOnSubmit={false}
          maxLength={1}
    enablesReturnKeyAutomatically={true}
    onChangeText={text => {
      this.setState({mobile3: text})
      //console.log('onChangeText', this.refs.card_exp_date_mm)
      if(text && text.length == 1){
        this.focusNextField('4')
      }}}
        />
        </View>
        <View style={{flex:0.25}}>
        <TextInput
          ref="4"
          style={styles.default}
          keyboardType="numeric"
          placeholder=""
          blurOnSubmit={false}
          maxLength={1}
          returnKeyType="done"
          onChangeText={text => {
            this.setState({mobile4: text})
            //console.log('onChangeText', this.refs.card_exp_date_mm)
            if(text && text.length == 1){
              //this.pressVerifyotp(text)
            }}}
        />
        </View>
        {/* <TextInput
          ref="5"
          style={styles.default}
          keyboardType="numbers-and-punctuation"
          placeholder="blurOnSubmit = true"
          returnKeyType="done"
        /> */}
</View>
</Form>
			<View>
      <Form>
            {/* <Item floatingLabel>
              <Label>Enter your phone number</Label>
              <Input />              
            </Item> */}
            <View style={{padding:10, alignItems: 'center' }}>
              <Text style={{color:'#8b8b8b', fontSize:14}}>Following code valid for 60 sec</Text>
            </View> 
            <View style={{padding:10, alignItems: 'center' }}>		
              <Text  style={{color:'#8b8b8b', fontSize:18}}>Did not received OTP?</Text>
              
              <Text style={{color: '#ffb247'}}
                    onPress={() => this.resend()}>
                RESEND CODE
              </Text>
            </View>
            {/* <Button block dark style={styles.mb15} onPress={()=>this.pressVerifyotp()}><Text>VERIFY</Text></Button> */}
      </Form>
        
			</View>
      
      
      
		</Content>
    <Footer transparent>
      <View style={{flex:1}}>
        <Button full style={styles.mb15} onPress={()=>this.pressVerifyotp()}><Text style={{color:'#FFFFFF'}}>VERIFY</Text></Button>
      </View>
    </Footer>
      </Container>
    );
  }
}

//export default Phoneotp;
Phoneotp.propTypes = {
  auth : PropTypes.object.isRequired,
  verifyotp:PropTypes.func.isRequired,
  sendotp:PropTypes.func.isRequired
  
}
const mapStateToProps = (state)=>{
	return {
		auth:state.auth
	}
}

const mapDispatchToProps = (dispatch)=>{
	return {
    verifyotp:(mobile,otp)=>dispatch(verifyotp(mobile,otp)),
    sendotp:(mobile)=>dispatch(sendotp(mobile))
    
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Phoneotp);