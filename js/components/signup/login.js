import React, { Component } from "react";
import { Image, View,Alert, StatusBar, TouchableOpacity } from "react-native";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {signup} from '../../actions/authActions';
import Spinner from 'react-native-loading-spinner-overlay';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button';
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
  constructor() {super()
    this.state = {
      full_name: '',
      email: '',
      password: '',
      visible: false
    }
  
    
    this.register=this.register.bind(this)
    
  }
  register(){
    if(!this.state.full_name){
      Alert.alert('Please enter name');
      return false;
    }
    else if(!this.state.email){
      Alert.alert('Please enter email');
      return false;
    }
    else if(!this.state.password){
      Alert.alert('Please enter password');
      return false;
    }
    else if(!this.state.type){
      Alert.alert('Please select user type');
      return false;
    } 
    //alert(this.props.navigation.state.params.id);
    const id =this.props.navigation.state.params.id;
    const full_name = this.state.full_name;
    const email = this.state.email;
    const password = this.state.password;
    const type = this.state.type;
    //alert(type);
    this.props.signup(id,full_name,email,password,type).then(res=>{ alert(JSON.stringify(res))
      this.setState({
        visible: !this.state.visible
      });
     // alert('df');
     
      if(res.status!=="success"){
        Alert.alert(res.details.message);
        
      }else{ 
        this.props.navigation.navigate("Drawer");
        
        
      }
    })
    }
    onSelect(index, value){ //alert(index)
      this.setState({
        type: value
      })

      //this.setState({password:text})
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
            <Title>Log In</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Name</Label>
              <Input keyboardType="default" onChangeText={(text) => this.setState({full_name:text})} />
            </Item>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input keyboardType="email-address" onChangeText={(text) => this.setState({email:text})} />
              
            </Item>
            <Item floatingLabel>
              <Label>Password</Label>
              <Input secureTextEntry onChangeText={(text) => this.setState({password:text})} />
            </Item>
            <View>
            <Label style={{ padding:12 }}>Type</Label>
              <RadioGroup
       size={24}
       thickness={2}
       color='gray'
       selectedIndex={1}
       onSelect = {(index, value) => this.onSelect(index, value)}
      >
        <RadioButton value={'S'} >
          <Text>Seller</Text>
        </RadioButton>
 
        <RadioButton value={'B'}>
          <Text>Buyer</Text>
        </RadioButton>
 
       
      </RadioGroup>
      </View>
            {/* <Button block dark style={styles.mb15} onPress={()=>this.register()}><Text>Log In</Text></Button> */}
          </Form>         
          
        </Content>
        <Footer transparent>
      <View style={{flex:1}}>
        <Button full style={styles.mb15} onPress={()=>this.register()}><Text style={{color:'#FFFFFF'}}>Update</Text></Button>
      </View>
    </Footer>
      </Container>
    );
  }
}

//export default Login;
Login.propTypes = {
  auth : PropTypes.object.isRequired,
  signup:PropTypes.func.isRequired,
  
  
}
const mapStateToProps = (state)=>{
	return {
		auth:state.auth
	}
}

const mapDispatchToProps = (dispatch)=>{
	return {
    signup:(id,name,email,password)=>dispatch(signup(id,name,email,password)),
    
    
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);