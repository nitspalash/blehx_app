import React, { Component } from "react";
import { Image, View, StatusBar,Alert, TouchableOpacity ,AsyncStorage} from "react-native";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
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
    this.setState({
      visible: !this.state.visible
    });
   // alert('df');
  // alert(res.ack);
    if(res.status!=='success'){
      //Alert.alert('Login fail,please try again');
      this.setState({mobile:''});
    }else{ 
      this.props.navigation.navigate("Phoneotp",{ mob:mobile});
    }
  })
  }
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
      <Input keyboardType="phone-pad" onChangeText={(text) => this.setState({mobile:text})} />
    </Item>
    
</Form>
      
		</Content>
   {/* <Footer transparent>
     <View style={{flex:1}}>
     <Button full style={styles.mb15} onPress={()=>this.pressSendotp()}><Text>VERIFY</Text></Button>
       </View>
     </Footer> */}
     <Footer transparent>
      <View style={{flex:1}}>
        <Button full style={styles.mb15} onPress={()=>this.pressSendotp()}><Text style={{color:'#FFFFFF'}}>VERIFY</Text></Button>
      </View>
    </Footer>
      </Container>
    );
  }
}

//export default Signup;
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