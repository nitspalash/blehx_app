import React, { Component } from "react";
import { Image, View, StatusBar, TouchableOpacity } from "react-native";
import { Container,Footer, Header,ListView, Title, Button, Icon, Tabs, Tab, Right, Left, Body, Content ,Text ,ImageHeader} from 'native-base';
import ImageSlider from 'react-native-image-slider';
//import { Button1 } from 'react-native-elements'
import styles from "./styles";
import Icon2 from 'react-native-vector-icons/FontAwesome';
import TabNavigator from 'react-native-tab-navigator';
import TabOne from './tabOne';
import TabTwo from './tabTwo';
const logo = require("../../../img/splash-logo.png");

export default class Details extends Component {
  // eslint-disable-line
 
  render() {
    const banner = require("../../../img/car.png");
    // eslint-disable-line
    return (
      <Container>
      <Header style={{ backgroundColor: "#112D42" }}  androidStatusBarColor="#112D42"
          iosBarStyle="light-content">
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Details</Title>
          </Body>
          <Right />
        </Header>
      <Content style={styles.container}>
      
        <View>

        <ImageSlider images={[
        banner,
        banner,
        banner
    ]}/>
    <View style={{flex: 1, flexDirection: 'row',marginTop:20}}>
						<View  style={styles.content1}>
						<Text style={styles.content1text}> sadsad 45</Text>
						</View>
						<View style={styles.content1} >
            <Text style={styles.content2text}>345 USD</Text>			
					</View>
          </View>
          <View style={{flex: 1, flexDirection: 'row',marginTop:20}}>
						<View style={{flex: 1,flexDirection: 'column',marginLeft:20}}>
									<Text style={{fontSize:15,color:'gray'}}>Shipping  :  20-30 Nov    Weight  : 5.5Kg</Text>
                  <Text style={{fontSize:15,color:'gray'}}>Quantity  :  <Icon2 name="minus" />    0    <Icon2 name="plus" />    </Text>
                  
					</View>
          </View>
         
        </View>
        <View>
        {/* <TabNavigator style={{flex: 1,marginTop:80}}>
  <TabNavigator.Item
    title="Notes"
    onPress={() => this.setState({ selectedTab: 'home' })}>
    <Text>Tab1</Text>
  </TabNavigator.Item>
  <TabNavigator.Item
    title="Payment"
    onPress={() => this.setState({ selectedTab: 'home' })}>
    <Text>Tab2</Text>
  </TabNavigator.Item>
  <TabNavigator.Item
    title="Warranty"
    onPress={() => this.setState({ selectedTab: 'home' })}>
    <Text>Tab3</Text>
  </TabNavigator.Item>
  <TabNavigator.Item
    title="Discount"
    onPress={() => this.setState({ selectedTab: 'home' })}>
    <Text>Tab4</Text>
  </TabNavigator.Item>
</TabNavigator> */}
 <Tabs style={{flex: 1,marginTop:30}}>
              <Tab heading="Notes" >
              <View title="NATIVE" style={styles.content}>
            <Text style={styles.header}>
              Notes
            </Text>
            <Text style={styles.text}>
              Components you define will end up rendering as native platform widgets
            </Text>
          </View>
              </Tab>
              <Tab heading="Payment"  >
              <Text style={styles.header}>
              Payments
            </Text>
            <Text style={styles.text}>
              Components you define will end up rendering as native platform widgets
            </Text>
              </Tab>
              <Tab heading="Warranty"  >
              <Text style={styles.header}>
              Warrenty
            </Text>
            <Text style={styles.text}>
              Components you define will end up rendering as native platform widgets
            </Text>
                </Tab>
                <Tab heading="Discount"  >
                <Text style={styles.header}>
              Discount
            </Text>
            <Text style={styles.text}>
              Components you define will end up rendering as native platform widgets
            </Text>
              </Tab>
          </Tabs>
          </View>
         
      </Content>
      <Footer transparent>
      <View style={{flex: 1, flexDirection: 'row'}}>
      <View style={{flex: 0.5}}>
      <Button style={{flex: 0.5,backgroundColor:'#ede9d5',alignContent:'center'}}>
      <Text style={{flex: 1,color:'#ffb345',fontSize:20}}>Bid</Text>
                    </Button>
                       </View>
                    
<View style={{flex: 0.5,alignItems: 'center'}}>
                    <Button  style={{flex: 0.5,backgroundColor:'#ffb345'}}>
                    <Text style={{flex: 1,color:'#ede9d5',fontSize:20}}>Add To Cart</Text> 
                    </Button>
                    </View>
            </View>
  </Footer>
  </Container>
    );
  }
}
//export default Details;