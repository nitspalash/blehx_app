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
const profilebg = require("../../../img/edit-pro-background.png");
const profile = require("../../../img/profile.png");
const map = require("../../../img/location-map.png");
const editicon = require("../../../img/edit-profile-pencil.png");

class EditProfile extends Component {
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
            <Title>Edit Profile</Title>            
          </Body>
          <Right />

        </Header>
		<Content style={styles.container}>
      <View style={{backgroundColor:'#FFFFFF', height:200}}>
        <Image source={profilebg} style={styles.imageContainer}>
          <View style={styles.logoContainer}>
						<Image source={profile} style={styles.profile}>
              <View style={{backgroundColor:'#FFFFFF', width:20, height:20, marginTop:76, marginLeft:30}}><Image source={editicon} style={{width:12, height:12, margin:4}}/></View>
            </Image>
					</View>
          <View style={styles.logoContainer}>
						<Text style={{fontSize:14, color:'#5f5f5f'}}>Santanu Patra </Text>
					</View>
          <View style={styles.logoContainer} style={{flexDirection: 'row'}}>
          <Image source={map} style={{width:10, height:12, margin:2}}/><Text style={{fontSize:12, color:'#5f5f5f'}}>Dumdum </Text>
					</View>
        </Image>
      </View> 
      <View style={{backgroundColor:'#FFFFFF', margin:10}}>
          
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
        <Label>Phone number</Label>
        <Input keyboardType="numeric" onChangeText={(text) => this.setState({phone_number:text})} />
      </Item>
      {/* <Button block dark style={styles.mb15} onPress={()=>this.register()}><Text>Log In</Text></Button> */}
    </Form>
      <View style={{height:10}}></View>  
      </View>      
              
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

export default EditProfile;
