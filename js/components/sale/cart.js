import React, { Component } from "react";
import { Image, View, StatusBar, TouchableOpacity,AsyncStorage ,Alert} from "react-native";
import { Container,Footer,Thumbnail, Header,ListView,Spinner, Title, Button, Icon, Tabs, Tab, Right, Left, Body, Content ,Text ,ImageHeader} from 'native-base';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {productaddcart} from '../../actions/productcartActions';
import {productcart} from '../../actions/productcartActions';
import {productcartdelete} from '../../actions/productcartActions';

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
  
  this.quantity = 1;
  //alert(this.login_details.id)
  this.props.productaddcart(this.props.navigation.state.params,this.login_details.id,this.quantity).then(res=>{

  //alert(JSON.stringify(res))
    this.setState({visible:false});

    this.props.productcart(this.login_details.id).then(res=>{

     
        this.setState({visible:false});
       
       })


   
   })
  //alert(login_details.id)
  }
})

this.productdetails=this.productdetails.bind(this);
this.increament=this.increament.bind(this);
this.decreament=this.decreament.bind(this);
this.cartdelete=this.cartdelete.bind(this);
this.cartdcartdelete_confirmelete=this.cartdelete_confirm.bind(this);

}
static alert(title, message, buttons, options, type){

}
productdetails(id,data) 
{ 
  
  this.props.navigation.navigate("Details",data[id].id)
  
}

increament(id,data) 
{ 
  //alert(JSON.stringify(data))
  this.props.productaddcart(data[id].product_id,data[id].uid,data[id].crtQuantity+1 ).then(res=>{

    //alert(JSON.stringify(res))
      this.setState({visible:false});
  
      this.props.productcart(this.login_details.id).then(res=>{
  
       
          this.setState({visible:false});
         
         })
  
  
     
     })
  
}

decreament(id,data) 
{ 
  //alert(JSON.stringify(data))
  if(data[id].crtQuantity > 1)
  {
  this.props.productaddcart(data[id].product_id,data[id].uid,data[id].crtQuantity-1 ).then(res=>{

    //alert(JSON.stringify(res))
      this.setState({visible:false});
  
      this.props.productcart(this.login_details.id).then(res=>{
  
       
          this.setState({visible:false});
         
         })
  
  
     
     })
    }
    else{
      //alert('Your product quantiety is minimum ')
      Alert.alert(
        'Minimum Quantiety',
        'Your product quantiety is minimum....',
        [
         
          {text: 'OK', onPress: () =>console.log('Cancel Pressed'), style: 'cancel'}
        ],
        { cancelable: false }
      )
    }
  
}

cartdelete(id)
{ 
  //  alert(title, message, buttons, options, type)

  Alert.alert(
    'Remove Cart',
    'Are you want to remove this product from cart...?',
    [
      {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
      {text: 'OK', onPress: () => this.cartdelete_confirm(id)},
    ],
    { cancelable: false }
  )
}

cartdelete_confirm(id){ 

  this.props.productcartdelete(id).then(res=>{

    //alert(JSON.stringify(res))
      this.setState({visible:false});
  //alert(this.login_details.id)
      this.props.productcart(this.login_details.id).then(res=>{
  
       
          this.setState({visible:false});
         
         })
  
  
     
     })

}

go_checkout(){ 
  
  if(this.props.productcartlist.data.length > 0 )
  {
    this.props.navigation.navigate("Checkout")
  }
  else{
    Alert.alert(
      'Empty Cart',
      'Your cart is empty. Please select any product first...',
      [
       
        {text: 'OK', onPress: () =>console.log('Cancel Pressed'), style: 'cancel'}
      ],
      { cancelable: false }
    )
  }
  
  //this.props.navigation.navigate("Checkout")
}
  render() {

    const banner = require("../../../img/product-1.png");
    const plus = require("../../../img/plus.png");
    const minus = require("../../../img/minus.png");


    let cartlist = [];	
    
    //alert(JSON.stringify(this.props))
     if(this.props.productcartlist.data && this.props.productcartlist.data != 1)
     { 
      
      for(let i = 0; i < this.props.productcartlist.data.length; i++){ 
       
        cartlist.push(
          <View style={{padding:10}}>
            <View style={{flexDirection: 'row', backgroundColor:'#FFF', padding:5}}>
              <View style={{flex:0.3, backgroundColor:'#35e1e1'}}>
                {/* <Image source={banner} style={{width:80, height:80}}/> */}
                <TouchableOpacity onPress={()=>{this.productdetails(i,this.props.productcartlist.data)}}>
            <View style={{backgroundColor: "#35e1e1",flex:1,justifyContent: 'center',alignItems: 'center',}}>	
            {
                  //  this.props.productcartlist.data[i].image != ''?(
                  //     <Thumbnail source={{uri: this.props.productcartlist.data[i].image }} style={styles.pimage} />
                  //   ):(
                      <Thumbnail source={banner} style={{width:80, height:80}}/>
                    //)
                  }
          
            </View>
          </TouchableOpacity>
              </View>
              <View style={{flex:0.4, paddingLeft:5}}>
                  <View><Text style={{fontSize:18, color:'#5f5f5f'}}>{this.props.productcartlist.data[i].name}</Text></View>
                  {/* <View><Text style={{fontSize:12, color:'#5f5f5f'}}>{this.props.productcartlist.data[i].description}</Text></View> */}
                  <View><Text style={{fontSize:18, color:'#5f5f5f', paddingTop:15}}>{this.props.productcartlist.data[i].price} USD</Text></View>
              </View>
              <View style={{flex:0.3, paddingLeft:5}}>
                  <View><Text style={{fontSize:18, color:'#5f5f5f'}}></Text></View>
                  <View style={{flexDirection: 'row'}}>
                  <TouchableOpacity   onPress={()=>{this.increament(i,this.props.productcartlist.data)}}>
                    <Image source={plus} style={styles.icon}/>
                    </TouchableOpacity >
                    <Text style={{ color:'#5f5f5f', paddingLeft:5, paddingRight:5}}>{this.props.productcartlist.data[i].crtQuantity}</Text>
                    <TouchableOpacity   onPress={()=>{this.decreament(i,this.props.productcartlist.data)}}>
                  	<Image source={minus} style={styles.icon}/>
                    </TouchableOpacity >
                  </View>
                  <View style={{paddingTop:15}}><Button style={{backgroundColor:'#ffb345',alignContent:'center', height:25}} onPress={() => this.cartdelete(this.props.productcartlist.data[i].crid)}>
      <Text style={{color:'#fff',fontSize:12}}>Delete</Text>
                    </Button></View>
              </View>
            </View>
          </View>
            )
          }
        }
        else if(this.props.productcartlist.message)
        {
          
         cartlist =<View style={{ flex: 1,justifyContent: 'center', alignItems: 'center'}}><Text style={{textAlign: 'center',fontWeight: 'bold', fontSize: 18,width: 200,marginTop:20}}> {this.props.productcartlist.message} </Text></View>
          
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
            <Title>Cart</Title>
          </Body>
          <Right />
        </Header>
      <Content style={styles.container}>      
        {cartlist}
          
        {/* <View style={{padding:10}}>
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
          </View> */}
         
      </Content>
      <Footer transparent>
      <View style={{flex: 1, flexDirection: 'row'}}>
      <View style={{flex: 0.5}}>
      <Button style={{flex: 0.5,backgroundColor:'#ede9d5',alignContent:'center'}} onPress={() => this.props.navigation.goBack()}>
      <Text style={{flex: 1,color:'#ffb345',fontSize:20}}>Back</Text>
                    </Button>
                       </View>
                    
<View style={{flex: 0.5,alignItems: 'center'}}>
                    <Button  style={{flex: 0.5,backgroundColor:'#ffb345'}} onPress={()=>this.go_checkout()}>
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

Cart.propTypes = {
	auth : PropTypes.object.isRequired,
  productaddcart:PropTypes.func.isRequired,
  productcart:PropTypes.func.isRequired,
  productcartdelete:PropTypes.func.isRequired,
  productcartlist : PropTypes.object.isRequired,
  }
  const mapStateToProps = (state)=>{ //alert(JSON.stringify(state));
	  return {
      auth:state.auth,
      productcartlist:state.productcart.data,
     
    }
   // alert(JSON.stringify(product))
  }
  
  const mapDispatchToProps = (dispatch)=>{
	  return {
      productaddcart:(product_id,user_id,quantity)=>dispatch(productaddcart(product_id,user_id,quantity)),
      productcart:(user_id)=>dispatch(productcart(user_id)),
      productcartdelete:(id)=>dispatch(productcartdelete(id))
     
      
	  }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(Cart);