import React, { Component } from "react";
import { Image, View, StatusBar, TouchableOpacity,ScrollView,AsyncStorage } from "react-native";
import { Container,Spinner, Header,Thumbnail, Title, Button, Icon, Tabs, Tab, Right, Left, Body, Content,ListItem ,List,Text} from 'native-base';
import ResponsiveImage from 'react-native-responsive-image';

import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {productlist} from '../../actions/productActions';
import {productlist_bycategory} from '../../actions/productActions';
import {categorylist} from '../../actions/categoryActions';
//import Spinner from 'react-native-loading-spinner-overlay';
import styles from "./styles";
const logo = require("../../../img/splash-logo.png");
import TabOne from './tabOne';
import TabTwo from './tabTwo';
const addcart = require("../../../img/add-cart.png");
const bid = require("../../../img/bid.png");
const producti = require("../../../img/product-1.png");
const banner = require("../../../img/car.png");

class Sale extends Component {
  constructor(props) {super(props)
		this.state = {
      visible: false,
      productLists:'',
      categorylists:''
		}
	  
    
	  }
  // eslint-disable-line
  componentWillMount(){ 
  
  this.props.productlist('').then(res=>{
   //alert(JSON.stringify(res));
  // alert('not get');
  if(res.ack=='1'){
    //console.log(this.props.posts);
    this.setState({visible:false});
  }
  })
  
  this.props.categorylist().then(res=>{
   
    if(res.ack == '1'){
   // const category = res.category_list;
    //this.setState({categorylists:category})
    this.setState({visible:false});
    
    }
  })
  
  this.serchcategory=this.serchcategory.bind(this);
  this.productdetails=this.productdetails.bind(this);
  //this.toggleCancel = this.toggleCancel.bind(this);
 }
 

 serchcategory(id)
	  {
		
     this.ackey = id;
    // alert(id)
     this.props.productlist(id).then(res=>{
     // alert(JSON.stringify(res));
     // alert('not get');
       if(res){ 
       const product = res;
       this.setState({productLists:product})
       
       
       }
     })
    
	  }
    productdetails(id,data)
    {
      //alert(JSON.stringify(data[id-1].id));
     // alert(id)
      this.props.navigation.navigate("Details",data[id-1].id)
      
    }
  render() {
   
    


    let searchListing = [];	
    let categoryListing = [];
     //let ttt	  
     //let ttt2
    
     if(this.props.category)
     {  
       
       
      for(let i = 0; i < this.props.category.length; i++){ 
        
        
        
        categoryListing.push(
          <View  key = {i} style={{flex:1}}>
            <TouchableOpacity onPress={()=>this.serchcategory(this.props.category[i].id)} style={this.ackey == this.props.category[i].id ? styles.aStyle : styles.iStyle}>
            {
                  //  this.props.category[i].image != ''?(
                  //     <Thumbnail source={{uri: this.props.category[i].image }} style={styles.cimage} />
                  //   ):(
                      <Thumbnail source={banner} style={styles.cimage}/>
                    //)
                  }
            </TouchableOpacity >
          
          <View><Text style={styles.text}>{this.props.category[i].name}</Text></View>
          
      </View>
            )
          }
     }
     else{ 
      categoryListing =  (
        <Spinner />
        );
     }
  
     //alert(JSON.stringify(this.props.product.data));
     if(this.props.product.data)
     {
      
      for(let i = 0; i < this.props.product.data.length; i++){
   
    searchListing.push(<View key = {i}  style={{flexDirection: 'row',paddingBottom:10}}>
     
              <View style={styles.graybox}>							
          <View style={{flex:1}}>
          <TouchableOpacity onPress={()=>{this.productdetails(i,this.props.product.data)}}>
            <View style={{backgroundColor: "#35e1e1",flex:1,justifyContent: 'center',alignItems: 'center',}}>	
            {
                  //  this.props.product.data[i].image != ''?(
                  //     <Thumbnail source={{uri: this.props.product.data[i].image }} style={styles.pimage} />
                  //   ):(
                      <Thumbnail source={producti} style={styles.pimage}/>
                    //)
                  }
          
            </View>
          </TouchableOpacity>
            <View style={{padding:5}}>								
            <View style={{flexDirection: 'row'}}>
              <View style={{flex:0.7}}><Text>${this.props.product.data[i].price}</Text></View>
              <View style={{flexDirection: 'row'}}>
              <Image source={addcart} style={styles.icon}/>
              <Image source={bid} style={styles.icon}/>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View><Text style={styles.text}>{this.props.product.data[i].name}</Text></View>
              
            </View>
            </View>
          </View>
          
          </View>
          <View style={{width:10}}></View>   
          {
                    this.props.product.data.length != i+1?(
                      <View style={styles.graybox}>							
          <View style={{flex:1}}>
          <TouchableOpacity onPress={()=>{this.productdetails(i+1,this.props.product.data)}}>
            <View style={{backgroundColor: "#35e1e1",flex:1,justifyContent: 'center',alignItems: 'center',}}>	
           {
                    // this.props.product.data[i+1].image != ''?(
                    //   <Thumbnail source={{uri: this.props.product.data[i+1].image }} style={styles.pimage} />
                    // ):(
                      <Thumbnail source={producti} style={styles.pimage} />
                    //)
                  }
              
            </View>
          </TouchableOpacity>
            <View style={{padding:5}}>								
            <View style={{flexDirection: 'row'}}>
              <View style={{flex:0.7}}><Text>${this.props.product.data[i+1].price}</Text></View>
              <View style={{flexDirection: 'row'}}>
              <Image source={addcart} style={styles.icon}/>
              <Image source={bid} style={styles.icon}/>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View><Text style={styles.text}>{this.props.product.data[i+1].name}</Text></View>
              
            </View>
            </View>
          </View>
          </View>
                    ):(
                      <View style={styles.graybox}>							
          <View style={{flex:1}}>
          <TouchableOpacity >
            <View style={{backgroundColor: "#35e1e1",flex:1,justifyContent: 'center',alignItems: 'center',}}>	
        
            </View>
          </TouchableOpacity>
          </View>
          </View> 
                    )
                  }
           </View> 
        )
      i = i+1;
            
          }
    }
    else if(this.props.product.message)
    {
      searchListing =<Text style={{textAlign: 'center',fontWeight: 'bold', fontSize: 18,width: 200,}}> {this.props.product.message} </Text>
    }
    else{ //alert();
      searchListing =  (
        <Spinner />
        );
    }
    
    return (
      <Container style={styles.container}>
        <Header style={{ backgroundColor: "#112D42" }}  androidStatusBarColor="#062a3c"
          iosBarStyle="light-content">
          <Left>
          <Button
            transparent
            onPress={() => this.props.navigation.navigate("DrawerOpen")}>
            <Icon name="menu" />
          </Button>
          </Left>
          <Body>
            <Title>Home</Title>
          </Body>
          <Right />
        </Header>
        
        
        <Content >
        <View style={{flexDirection: 'row',flex:1}}>
          <View style={{flex:1}}><Button
  title="Learn More"data
  color="#000000"
  accessibilityLabel="Learn more about this purple button"
  style={{backgroundColor: "gray",borderBottomColor: '#47315a',
  borderBottomWidth: 1}}
><Text style={{color:"#FFFFFF"}}>  Product Category  </Text>
</Button>
</View>
<View style={{flex:1,width:100}}>
<Button
onPress={()=>this.props.navigation.navigate("Indexmining")}
  title="Learn More"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
  style={{backgroundColor: "#f1f1f1"}}
><Text style={{color:"#000000"}}>                Mining              </Text>
</Button>
</View>
</View>
          <View>
          <View >				
					<View style={{flexDirection: 'row', justifyContent:'center', padding:10}}>
					<ScrollView horizontal={true} contentContainerStyle={{flexGrow:1}} focusableInTouchMode={false}>
						{categoryListing}
					</ScrollView>	
					</View>
					
				</View>
				<View >
        
      </View>
	  
				<View style={{backgroundColor: "#F1F1F1", padding:10}}>
				{searchListing}
				
				</View>
            
          </View>        
          
        </Content>
        
      </Container>
    );
  }
}

//export default Sale;
Sale.propTypes = {
	auth : PropTypes.object.isRequired,
	productlist:PropTypes.func.isRequired,
	categorylist:PropTypes.func.isRequired,
  product : PropTypes.object.isRequired,
  category : PropTypes.object.isRequired
  }
  const mapStateToProps = (state)=>{ //alert(JSON.stringify(state.product.data));
	  return {
      auth:state.auth,
      product:state.product.data,
      category : state.category.data,
    }
   // alert(JSON.stringify(product))
  }
  
  const mapDispatchToProps = (dispatch)=>{
	  return {
      productlist:(id)=>dispatch(productlist(id)),
      categorylist:()=>dispatch(categorylist()),
	  
	  }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(Sale);