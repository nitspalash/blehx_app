import React, { Component } from "react";
import { Image, View, StatusBar, TouchableOpacity,AsyncStorage ,Alert} from "react-native";
import { Container,Footer,Thumbnail, Header,ListView,Spinner, Title, Button, Icon, Tabs, Tab, Right, Left, Body, Content ,Text ,ImageHeader} from 'native-base';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {orderdetails_f} from '../../actions/orderdetailsActions';


import styles from "./styles";

 class Cart extends Component {
  constructor(props) {super(props)
		this.state = {
      visible: false,
      isdeliver:'',
      login_details:'',
      delailslist:'',
    }
    
	  
    
	  }
   
 // eslint-disable-line
 componentWillMount(){ 
  
  const navigate = this.props.navigation;
  //alert(this.props.navigation.state.params.delevery_date)
  if(this.props.navigation.state.params.delevery_date)
  {
    this.isdeliver = this.props.navigation.state.params.delevery_date;
  }
  else{
    this.isdeliver = 'On the way';
  }
 
 

    this.props.orderdetails_f(this.props.navigation.state.params.id).then(res=>{
      this.delailslist = res;
     
   // alert(JSON.stringify(res))
        this.setState({visible:false});
       
       })

}
static alert(title, message, buttons, options, type){

}



  render() {

    const banner = require("../../../img/product-1.png");
    const plus = require("../../../img/plus.png");
    const minus = require("../../../img/minus.png");


    let cartlist = [];	
    
   //alert(JSON.stringify(this.delailslist))
     if(this.delailslist && this.delailslist != 1)
     { 
      //alert(JSON.stringify(this.delailslist))
      for(let i = 0; i < this.delailslist.data.length; i++){ 
       
        cartlist.push(
          <View style={{flexDirection: 'row', backgroundColor:'#FFF', padding:5}}>
              <View style={{flex:0.3, backgroundColor:'#35e1e1'}}>
                
                <TouchableOpacity>
            <View style={{backgroundColor: "#35e1e1",flex:1,justifyContent: 'center',alignItems: 'center',}}>	
            {
                  //  this.delailslist.data[i].image != ''?(
                  //     <Thumbnail source={{uri: this.delailslist.data.data[i].image }} style={styles.pimage} />
                  //   ):(
                      <Thumbnail source={banner} style={{width:80, height:80}}/>
                    //)
                  }
          
            </View>
          </TouchableOpacity>
              </View>
              <View style={{flex:0.4, paddingLeft:5}}>
                  <View><Text style={{fontSize:18, color:'#5f5f5f'}}>{this.delailslist.data[i].name}</Text></View>
                  {/* <View><Text style={{fontSize:12, color:'#5f5f5f'}}>{this.props.productcartlist.data[i].description}</Text></View> */}
                  <View><Text style={{fontSize:18, color:'#5f5f5f', paddingTop:15}}>Quantiety : {this.delailslist.data[i].quantiety}</Text></View>
              </View>
              <View style={{flex:0.3, paddingLeft:5}}>
                  <View><Text style={{fontSize:18, color:'#5f5f5f'}}></Text></View>
                  <View style={{flexDirection: 'row'}}>
                  
                  </View>
                  <View style={{paddingTop:15}}><Text style={{fontSize:18, color:'#5f5f5f', paddingTop:15}}>{this.delailslist.data[i].price} USD</Text></View>
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
            <Title>Order Details</Title>
          </Body>
          <Right />
        </Header>
      <Content style={styles.container}>      
        {/* {cartlist} */}
        <View style={{padding:10}}>
            <View style={{flexDirection: 'row', backgroundColor:'#FFF', padding:5}}>
              
              <View style={{flex:1, paddingLeft:5}}>
                  <View><Text style={{fontSize:18, color:'#000000'}}>{this.props.navigation.state.params.orderid}</Text></View>
                  {/* <View><Text style={{fontSize:12, color:'#5f5f5f'}}>{this.props.productcartlist.data[i].description}</Text></View> */}
                  <View><Text style={{fontSize:14, color:'#5f5f5f', paddingTop:10}}>Plased </Text></View>
                  <View><Text style={{fontSize:10, color:'#5f5f5f', paddingTop:5}}>{this.isdeliver} </Text></View>
              </View>
              {/* <View style={{flex:1, paddingLeft:5, paddingTop:20}}>
                  
                  <View style={{flexDirection: 'row'}}>
                 
                    <Text style={{ color:'#000000', paddingLeft:5, paddingRight:5}}>123.00 USD</Text>
                    
                  </View>
                  
              </View> */}
              
            </View>
            </View>
            <View style={{padding:10}}>
            <View style={{flexDirection: 'row', backgroundColor:'#FFF', padding:5}}>
              
              <View style={{flex:1, paddingLeft:5}}>
                  <View><Text style={{fontSize:18, color:'#000000'}}>Delivery Address</Text></View>
                  {/* <View><Text style={{fontSize:12, color:'#5f5f5f'}}>{this.props.productcartlist.data[i].description}</Text></View> */}
                  <View><Text style={{fontSize:14, color:'#5f5f5f', paddingTop:10}}>{this.props.navigation.state.params.shipping_address} </Text></View>
                  {/* <View><Text style={{fontSize:12, color:'#5f5f5f', paddingTop:5}}>westbengal </Text></View> */}
              </View>
              
              
            </View>
            </View>
            <View style={{padding:10}}>
            {cartlist}
          </View>
          <View style={{padding:10}}>
            <View style={{flexDirection: 'row', backgroundColor:'#FFF', padding:5}}>
              
              <View style={{flex:1, paddingLeft:5}}>
                  <View><Text style={{fontSize:18, color:'#5f5f5f'}}>Subtotal</Text></View>
                  {/* <View><Text style={{fontSize:12, color:'#5f5f5f'}}>{this.props.productcartlist.data[i].description}</Text></View> */}
                  <View><Text style={{fontSize:14, color:'#5f5f5f', paddingTop:5}}>Shipping </Text></View>
                  <View><Text style={{fontSize:18, color:'#000000', paddingTop:15}}>Total </Text></View>
              </View>
              <View style={{flex:1,justifyContent: 'center',alignItems: 'center'}}>
                  <View><Text style={{fontSize:18, color:'#5f5f5f'}}>{this.props.navigation.state.params.total_price}</Text></View>
                  {/* <View><Text style={{fontSize:12, color:'#5f5f5f'}}>{this.props.productcartlist.data[i].description}</Text></View> */}
                  <View><Text style={{fontSize:14, color:'#5f5f5f', paddingTop:5}}>00 USD </Text></View>
                  <View><Text style={{fontSize:18, color:'#000000', paddingTop:15}}>{this.props.navigation.state.params.total_price} </Text></View>
              </View>
              
            </View>
            </View>
        
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
  orderdetails_f:PropTypes.func.isRequired,
  orderdetails: PropTypes.object.isRequired,
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
      orderdetails_f:(order_id)=>dispatch(orderdetails_f(order_id)),
     
	  }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(Cart);