import React, { Component } from "react";
import { Image, View, StatusBar, TouchableOpacity } from "react-native";
import { Container,Footer, Header,ListView, Title, Button, Icon, Tabs, Tab, Right, Left, Body, Content ,Text ,ImageHeader} from 'native-base';

import styles from "./styles";


export default class Cart extends Component {
  // eslint-disable-line
 
  render() {
    const banner = require("../../../img/product-1.png");
    const plus = require("../../../img/plus.png");
    const minus = require("../../../img/minus.png");
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
            <Title>Cart</Title>
          </Body>
          <Right />
        </Header>
      <Content style={styles.container}>      
        <View style={{padding:10}}>
            <View style={{flexDirection: 'row', backgroundColor:'#FFF', padding:5}}>
              <View style={{flex:0.3, backgroundColor:'#35e1e1'}}>
                <Image source={banner} style={{width:80, height:80}}/>
              </View>
              <View style={{flex:0.4, paddingLeft:5}}>
                  <View><Text style={{fontSize:18, color:'#5f5f5f'}}>Antminer D3</Text></View>
                  <View><Text style={{fontSize:12, color:'#5f5f5f'}}>Decembar Batch</Text></View>
                  <View><Text style={{fontSize:18, color:'#5f5f5f', paddingTop:15}}>512 USD</Text></View>
              </View>
              <View style={{flex:0.3, paddingLeft:5}}>
                  <View><Text style={{fontSize:18, color:'#5f5f5f'}}></Text></View>
                  <View style={{flexDirection: 'row'}}>
                    <Image source={plus} style={styles.icon}/>
                    <Text style={{ color:'#5f5f5f', paddingLeft:5, paddingRight:5}}>5</Text>
										<Image source={minus} style={styles.icon}/>
                  </View>
                  <View style={{paddingTop:15}}><Button style={{backgroundColor:'#ffb345',alignContent:'center', height:25}} onPress={() => this.props.navigation.goBack()}>
      <Text style={{color:'#fff',fontSize:12}}>Delete</Text>
                    </Button></View>
              </View>
            </View>
          </View>
          <View style={{padding:10}}>
          <View style={{flexDirection: 'row', backgroundColor:'#FFF', padding:5}}>
            <View style={{flex:0.3, backgroundColor:'#35e1e1'}}>
              <Image source={banner} style={{width:80, height:80}}/>
            </View>
            <View style={{flex:0.4, paddingLeft:5}}>
                <View><Text style={{fontSize:18, color:'#5f5f5f'}}>Antminer D3</Text></View>
                <View><Text style={{fontSize:12, color:'#5f5f5f'}}>Decembar Batch</Text></View>
                <View><Text style={{fontSize:18, color:'#5f5f5f', paddingTop:15}}>512 USD</Text></View>
            </View>
            <View style={{flex:0.3, paddingLeft:5}}>
                <View><Text style={{fontSize:18, color:'#5f5f5f'}}></Text></View>
                <View style={{flexDirection: 'row'}}>
                  <Image source={plus} style={styles.icon}/>
                  <Text style={{ color:'#5f5f5f', paddingLeft:5, paddingRight:5}}>5</Text>
                  <Image source={minus} style={styles.icon}/>
                </View>
                <View style={{paddingTop:15}}><Button style={{backgroundColor:'#ffb345',alignContent:'center', height:25}} onPress={() => this.props.navigation.goBack()}>
    <Text style={{color:'#fff',fontSize:12}}>Delete</Text>
                  </Button></View>
            </View>
          </View>
        </View>
        <View style={{padding:10}}>
            <View style={{flexDirection: 'row', backgroundColor:'#FFF', padding:5}}>
              <View style={{flex:0.3, backgroundColor:'#35e1e1'}}>
                <Image source={banner} style={{width:80, height:80}}/>
              </View>
              <View style={{flex:0.4, paddingLeft:5}}>
                  <View><Text style={{fontSize:18, color:'#5f5f5f'}}>Antminer D3</Text></View>
                  <View><Text style={{fontSize:12, color:'#5f5f5f'}}>Decembar Batch</Text></View>
                  <View><Text style={{fontSize:18, color:'#5f5f5f', paddingTop:15}}>512 USD</Text></View>
              </View>
              <View style={{flex:0.3, paddingLeft:5}}>
                  <View><Text style={{fontSize:18, color:'#5f5f5f'}}></Text></View>
                  <View style={{flexDirection: 'row'}}>
                    <Image source={plus} style={styles.icon}/>
                    <Text style={{ color:'#5f5f5f', paddingLeft:5, paddingRight:5}}>5</Text>
										<Image source={minus} style={styles.icon}/>
                  </View>
                  <View style={{paddingTop:15}}><Button style={{backgroundColor:'#ffb345',alignContent:'center', height:25}} onPress={() => this.props.navigation.goBack()}>
      <Text style={{color:'#fff',fontSize:12}}>Delete</Text>
                    </Button></View>
              </View>
            </View>
          </View>
         
      </Content>
      <Footer transparent>
      <View style={{flex: 1, flexDirection: 'row'}}>
      <View style={{flex: 0.5}}>
      <Button style={{flex: 0.5,backgroundColor:'#ede9d5',alignContent:'center'}} onPress={() => this.props.navigation.goBack()}>
      <Text style={{flex: 1,color:'#ffb345',fontSize:20}}>Back</Text>
                    </Button>
                       </View>
                    
<View style={{flex: 0.5,alignItems: 'center'}}>
                    <Button  style={{flex: 0.5,backgroundColor:'#ffb345'}} onPress={()=>this.props.navigation.navigate("Checkout")}>
                    <Text style={{flex: 1,color:'#ede9d5',fontSize:20}}>Checkout</Text> 
                    </Button>
                    </View>
            </View>
  </Footer>
  </Container>
    );
  }
}
//export default Cart;