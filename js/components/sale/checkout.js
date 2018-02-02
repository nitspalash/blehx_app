import React, { Component } from "react";
import { Image, View, StatusBar, TouchableOpacity,AsyncStorage ,Alert,Modal } from "react-native";
import { Container,Footer,Thumbnail, Header,ListView,Item,Label,Input, Title, Button, Icon, Tabs, Tab, Right, Left, Body, Content ,Text ,ImageHeader} from 'native-base';

import styles from "./styles";

import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {productaddcart} from '../../actions/productcartActions';
import {productcart} from '../../actions/productcartActions';
import {update} from '../../actions/productcartActions';
import {order} from '../../actions/productcartActions';


 class Checkout extends Component {
  constructor(props) {super(props)
		this.state = {
      visible: false,
      subTotal:'',
      modalVisible: false,
      street_address:'',
      zip:'',
      city:'',
      state:'',
    }
    
	  }
  // eslint-disable-line
  componentWillMount(){ 
  
    const navigate = this.props.navigation;
    
  AsyncStorage.getItem('userData',(err,result)=>{
    if(result)
    {
    this.login_details = JSON.parse(result);
    
      this.props.productcart(this.login_details.id).then(res=>{
  
          this.setState({visible:false});
         
         })
  
    }
  })
  
  this.updateaddress=this.updateaddress.bind(this);
  this.placeorder=this.placeorder.bind(this);
  
  }
  openModal() { 
    this.setState({modalVisible:true});
  }

  closeModal() {
    this.setState({modalVisible:false});
  }
  updateaddress(){ 
    if(!this.state.street_address){
      Alert.alert('Please enter street address');
      return false;
    }
    else if(!this.state.zip){
      Alert.alert('Please enter zip code');
      return false;
    }
    else if(!this.state.city){
      Alert.alert('Please enter city');
      return false;
    }
    else if(!this.state.state){
      Alert.alert('Please enter state');
      return false;
    } 
    //alert(this.props.navigation.state.params.id);
    const id =this.login_details.id;
    const street_address = this.state.street_address;
    const zip = this.state.zip;
    const city = this.state.city;
    const state = this.state.state;
    //alert(state);
    this.props.update(id,street_address,zip,city,state).then(res=>{ //alert(JSON.stringify(res))
      this.setState({
        visible: !this.state.visible
        
      });
     // alert('df');
     this.setState({modalVisible:false});
        this.props.productcart(this.login_details.id).then(res=>{
  
          this.setState({visible:false});
         
         })
      if(res.status!=="success"){ alert('here');
        Alert.alert(res.details.message);
        
      }else{ 
        //this.props.navigation.navigate("Drawer");
        
        
      }
    })
    }
    placeorder()
    {
     if(this.props.productcartlist.user.street_address_1 == '')
     {
      Alert.alert('Please give delivery street address');
     }
     if(this.props.productcartlist.user.zip == '')
     {
      Alert.alert('Please give delivery zip code');
     }
     if(this.props.productcartlist.user.city == '')
     {
      Alert.alert('Please give delivery city');
     }
     if(this.props.productcartlist.user.state == '')
     {
      Alert.alert('Please give delivery state');
     }
     else{

      
       this.props.order(this.props.productcartlist.user.id).then(res=>{ //alert(JSON.stringify(res))
        this.setState({
          visible: !this.state.visible
        });
        Alert.alert('Your Order Plased Successfully');
        this.props.navigation.navigate("OrderDetails");
      })


     }
    }
  render() {
    const banner = require("../../../img/product-1.png");
    const map = require("../../../img/location-map.png");
    const pencil = require("../../../img/pencil.png");
    


    let cartlist = [];	
    let totalvalue = '';
    let address = '';
    let state = '';
    let city = '';
    let zip = '';
    //alert(JSON.stringify(this.props))
    if(this.props.productcartlist.user)
    {
      address = this.props.productcartlist.user.street_address_1;
      city = this.props.productcartlist.user.city;
      state = this.props.productcartlist.user.state;
      zip = this.props.productcartlist.user.zip;
     // this.setState({street_address:this.props.productcartlist.user.street_address_1})
     //this.state.street_address = this.props.productcartlist.user.street_address_1;

    }
    
     if(this.props.productcartlist.data && this.props.productcartlist.data != 1)
     { 
      let value = 0;
      for(let i = 0; i < this.props.productcartlist.data.length; i++){ 
       
        cartlist.push(
          <View style={{padding:10}}>
          <View style={{flexDirection: 'row', backgroundColor:'#FFF', padding:5}}>
            <View style={{flex:0.3, backgroundColor:'#35e1e1'}}>
              <Image source={banner} style={{width:80, height:80}}/>
            </View>
            <View style={{flex:0.4, paddingLeft:5}}>
                <View><Text style={{fontSize:18, color:'#5f5f5f'}}>{this.props.productcartlist.data[i].name}</Text></View>
                <View><Text style={{fontSize:12, color:'#5f5f5f'}}>Quantity: {this.props.productcartlist.data[i].crtQuantity} </Text></View>
                
            </View>
            <View style={{flex:0.3, paddingLeft:5}}>
                <View><Text style={{fontSize:18, color:'#5f5f5f'}}></Text></View>
               
                <View style={{paddingTop:15}}>
                <Text style={{fontSize:18, color:'#5f5f5f'}}>{this.props.productcartlist.data[i].crtQuantity * this.props.productcartlist.data[i].price} usd</Text>
                </View>
            </View>
          </View>
        </View>
            )

            value = parseInt(value) + parseInt(this.props.productcartlist.data[i].crtQuantity * this.props.productcartlist.data[i].price);
          }

         
          // value = value.toFixed(2);
          // this.setState({subTotal: value});
           //if(value)
//alert(JSON.stringify(this.state))
totalvalue = ( <View style={{padding:10}}>
  <View style={{flexDirection: 'row', backgroundColor:'#FFF', padding:5}}>              
    <View style={{flex:0.7, paddingLeft:5}}>
        <View><Text style={{fontSize:18, color:'#5f5f5f'}}>Total Price: {value} USD</Text></View>
        
    </View>
   
  </View>
</View>)
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
            <Title>Checkout</Title>
          </Body>
          <Right />
        </Header>
      <Content style={styles.container}>      
        <View style={{padding:10}}>
        <Modal
              visible={this.state.modalVisible}
              animationType={'slide'}
              onRequestClose={() => this.closeModal()}
          >
            <View style={styles.modalContainer}>
              <View >
                {/* <Text style={styles.innerContainer}>Update Your Address</Text> */}
                <View style={{margin:10}}>
            <Item floatingLabel>
              <Label>Street Address</Label>
              <Input keyboardType="default" onChangeText={(text) => this.setState({street_address:text})} />
            </Item>
            <Item floatingLabel>
              <Label>Zip</Label>
              <Input keyboardType="default" onChangeText={(text) => this.setState({zip:text})} />
              
            </Item>
            <Item floatingLabel>
              <Label>City</Label>
              <Input keyboardType="default" onChangeText={(text) => this.setState({city:text})} />
            </Item>
            <Item floatingLabel>
              <Label>State</Label>
              <Input keyboardType="default" onChangeText={(text) => this.setState({state:text})} />
            </Item>
            </View>
            
            <Button block dark style={styles.mb18} onPress={()=>this.updateaddress()}><Text>Update</Text></Button>
             
                {/* <Button  onPress={() => this.closeModal()}  title="Close modal">
                <Text>Update</Text> 
                </Button> */}
              </View>
            </View>
          </Modal>
            <View style={{flexDirection: 'row', backgroundColor:'#FFF', padding:5}}>
              <View style={{flex:0.1}}>
                <Image source={map} style={{width:15, height:15}}/>
              </View>
              <View style={{flex:0.7, paddingLeft:5}}>
                  <View><Text style={{fontSize:18, color:'#5f5f5f'}}>{address}</Text>
                  <Text style={{fontSize:18, color:'#5f5f5f'}}>{city}</Text>
                  <Text style={{fontSize:18, color:'#5f5f5f'}}>{state}</Text>
                  <Text style={{fontSize:18, color:'#5f5f5f'}}>{zip}</Text>
                  </View>
                  
              </View>
              <View style={{flex:0.2, paddingLeft:5}}>
                  <View><Text style={{fontSize:18, color:'#5f5f5f'}}></Text></View>
                  <TouchableOpacity onPress={() => this.openModal()}>
                  <View style={{paddingTop:15}} ><Image source={pencil} style={{width:15, height:15}}/></View>
              </TouchableOpacity>
              </View>
            </View>
            
          </View>
          
        {/* <View style={{padding:10}}>
        <View style={{flexDirection: 'row', backgroundColor:'#FFF', padding:5}}>
          <View style={{flex:0.3, backgroundColor:'#35e1e1'}}>
            <Image source={banner} style={{width:80, height:80}}/>
          </View>
          <View style={{flex:0.4, paddingLeft:5}}>
              <View><Text style={{fontSize:18, color:'#5f5f5f'}}>Antminer D3</Text></View>
              <View><Text style={{fontSize:12, color:'#5f5f5f'}}>Quantity: 2 </Text></View>
              
          </View>
          <View style={{flex:0.3, paddingLeft:5}}>
              <View><Text style={{fontSize:18, color:'#5f5f5f'}}></Text></View>
             
              <View style={{paddingTop:15}}>
              <Text style={{fontSize:18, color:'#5f5f5f'}}>450 usd</Text>
              </View>
          </View>
        </View>
      </View> */}
       {cartlist}
{totalvalue}
        {/* <View style={{padding:10}}>
            <View style={{flexDirection: 'row', backgroundColor:'#FFF', padding:5}}>              
              <View style={{flex:0.7, paddingLeft:5}}>
                  <View><Text style={{fontSize:18, color:'#5f5f5f'}}>Total Price: 200 USD</Text></View>
                  
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
                    <Button  style={{flex: 0.5,backgroundColor:'#ffb345'}} onPress={() =>this.placeorder()}>
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
Checkout.propTypes = {
	auth : PropTypes.object.isRequired,
  update:PropTypes.func,
  order :PropTypes.func,
  productcart:PropTypes.func.isRequired,
 
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
      
      productcart:(user_id)=>dispatch(productcart(user_id)),
      update:(id,street_address,zip,city,state)=>dispatch(update(id,street_address,zip,city,state)),
      order:(id)=>dispatch(order(id)),
      
	  }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(Checkout);