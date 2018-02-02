import React, { Component } from "react";
import { Image, View,Alert, StatusBar, TouchableOpacity } from "react-native";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {login} from '../../actions/authActions';
import Spinner from 'react-native-loading-spinner-overlay';
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
class Emaillogin extends Component {
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
     if(!this.state.email){
      Alert.alert('Please enter email');
      return false;
    }
    else if(!this.state.password){
      Alert.alert('Please enter password');
      return false;
    } 
    else{ 
      const email = this.state.email;
      const password = this.state.password;
      
      this.props.login(email,password).then(res=>{ alert(JSON.encode(res))
        this.setState({
          visible: !this.state.visible
        });
        //alert(res.ack);
       
        if(res.status!= 'succcess'){
          Alert.alert('not');
          
        }else{ 
        this.props.navigation.navigate("Drawer");
          
          
        }
      })
    }
    //alert(this.props.navigation.state.params.id);
   
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
              <Label>Email</Label>
              <Input keyboardType="email-address" onChangeText={(text) => this.setState({email:text})} />
              
            </Item>
            <Item floatingLabel>
              <Label>Password</Label>
              <Input secureTextEntry onChangeText={(text) => this.setState({password:text})} />
            </Item>
            {/* <Button block dark style={styles.mb15} onPress={()=>this.register()}><Text>Log In</Text></Button> */}
          </Form>         
          
        </Content>
        <Footer transparent>
      <View style={{flex:1}}>
        <Button full style={styles.mb15} onPress={()=>this.register()}><Text style={{color:'#FFFFFF'}}>Log In</Text></Button>
      </View>
    </Footer>
      </Container>
    );
  }
}

//export default Login;
Emaillogin.propTypes = {
  auth : PropTypes.object.isRequired,
  login:PropTypes.func.isRequired,
  
  
}
const mapStateToProps = (state)=>{
	return {
		auth:state.auth
	}
}

const mapDispatchToProps = (dispatch)=>{
	return {
    login:(id,name,email,password)=>dispatch(login(id,name,email,password)),
    
    
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Emaillogin);