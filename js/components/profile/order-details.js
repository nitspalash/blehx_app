import React, { Component } from "react";
import { Image, View, StatusBar, TouchableOpacity,AsyncStorage ,Alert} from "react-native";
import { Container,Footer,Thumbnail, Header,ListView,Spinner, Title, Button, Icon, Tabs, Tab, Right, Left, Body, Content ,Text ,ImageHeader} from 'native-base';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {orderhistory} from '../../actions/orderActions';


import styles from "./styles";

 class Cart extends Component {
  constructor(props) {super(props)
		this.state = {
      visible: false,
      quqntity:'',
      login_details:'',
      
    }
    
	  
    
	  }
   
 // eslint-disable-line
 componentWillMount(){ 
  
  const navigate = this.props.navigation;
  
AsyncStorage.getItem('userData',(err,result)=>{
  if(result)
  {
  this.login_details = JSON.parse(result);

    this.props.orderhistory(this.login_details.id).then(res=>{

     
        this.setState({visible:false});
       
       })


   
  
  //alert(login_details.id)
  }
})

this.orderdetails=this.orderdetails.bind(this);

}
static alert(title, message, buttons, options, type){

}
orderdetails(id,data) 
{ 
  
  this.props.navigation.navigate("OrderFullDetails",data[id])
  
}


  render() {

    const banner = require("../../../img/product-1.png");
    const plus = require("../../../img/plus.png");
    const minus = require("../../../img/minus.png");


    let cartlist = [];	
    
    //alert(JSON.stringify(this.props.order.data))
     if(this.props.order.data && this.props.order.data != 1)
     { 
      
      for(let i = 0; i < this.props.order.data.length; i++){ 
       
        cartlist.push(
          <View style={{padding:10}}>
            <View style={{flexDirection: 'row', backgroundColor:'#FFF', padding:5}}>
              
              <View style={{flex:1, paddingLeft:5}}>
                  <View><Text style={{fontSize:18, color:'#000000'}}>{this.props.order.data[i].orderid}</Text></View>
                  {/* <View><Text style={{fontSize:12, color:'#5f5f5f'}}>{this.props.productcartlist.data[i].description}</Text></View> */}
                  <View><Text style={{fontSize:14, color:'#5f5f5f', paddingTop:10}}>{this.props.order.data[i].order_date} </Text></View>
                  <View><Text style={{fontSize:10, color:'#5f5f5f', paddingTop:5}}>{this.props.order.data[i].order_time} </Text></View>
              </View>
              <View style={{flex:1, paddingLeft:5, paddingTop:20}}>
                  
                  <View style={{flexDirection: 'row'}}>
                 
                    <Text style={{ color:'#000000', paddingLeft:5, paddingRight:5}}>{this.props.order.data[i].total_price} USD</Text>
                    
                  </View>
                  
              </View>
              <View style={{paddingTop:15}}><Button style={{backgroundColor:'#ffb345',alignContent:'center', height:25}} onPress={()=>{this.orderdetails(i,this.props.order.data)}}>
      <Text style={{color:'#fff',fontSize:12}}>View</Text>
                    </Button></View>
            </View>
          </View>
            )
          }
        }
        else if(this.props.order.message)
        {
          
         cartlist =<View style={{ flex: 1,justifyContent: 'center', alignItems: 'center'}}><Text style={{textAlign: 'center',fontWeight: 'bold', fontSize: 18,width: 200,marginTop:20}}> {this.props.order.message} </Text></View>
          
        }
        
     else{ 
      cartlist =  (
        <Spinner />
        );
     }

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
            <Title>Order History</Title>
          </Body>
          <Right />
        </Header>
      <Content style={styles.container}>      
        {cartlist}
        
      </Content>
      {/* <Footer transparent>
      <View style={{flex: 1, flexDirection: 'row'}}>
      <View style={{flex: 1}}>
      <Button style={{flex: 1,backgroundColor:'#ede9d5',alignContent:'center'}} onPress={() => this.props.navigation.goBack()}>
      <Text style={{flex: 1,color:'#ffb345',fontSize:20}}>Back</Text>
                    </Button>
                       </View>
                    
 <View style={{flex: 0.5,alignItems: 'center'}}>
                    <Button  style={{flex: 0.5,backgroundColor:'#ffb345'}} onPress={()=>this.go_checkout()}>
                    <Text style={{flex: 1,color:'#ede9d5',fontSize:20}}>Checkout</Text> 
                    </Button>
                    </View> 
            </View>
  </Footer> */}
  </Container>
    );
  }
}
//export default Cart;

Cart.propTypes = {
	auth : PropTypes.object.isRequired,
  orderhistory:PropTypes.func.isRequired,
  order: PropTypes.object.isRequired,
  }
  const mapStateToProps = (state)=>{ //alert(JSON.stringify(state));
	  return {
      auth:state.auth,
      order:state.order.data,
     
    }
   // alert(JSON.stringify(product))
  }
  
  const mapDispatchToProps = (dispatch)=>{
	  return {
      orderhistory:(user_id)=>dispatch(orderhistory(user_id)),
     
	  }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(Cart);