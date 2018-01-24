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
class Profile extends Component {
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
            <Title>Profile</Title>            
          </Body>
          <Right />

        </Header>
        <Content style={styles.container}>
        <View style={{backgroundColor:'#FFFFFF', height:200}}>
          <Image source={profilebg} style={styles.imageContainer}>
            <View style={styles.logoContainer}>
              <Image source={profile} style={styles.profile}/>
                
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
          <View style={{margin:5}}>
              <View style={{flexDirection: 'row'}}>
                <Text style={{paddingRight:10}}>Name :</Text><Text>Santanu Patra</Text>
              </View>
              <View style={{height:10}}></View>
              <View style={{flexDirection: 'row'}}>
                <Text style={{paddingRight:10}}>Email:</Text><Text>santanu@natitsolved.com</Text>
              </View>
              <View style={{height:10}}></View>  
              <View style={{flexDirection: 'row'}}>
                <Text style={{paddingRight:10}}>Phone:</Text><Text>9874207080</Text>
              </View>
              <View style={{height:10}}></View>
            </View>  
        </View>      
                
      </Content>
   
      </Container>
    );
  }
}

export default Profile;
