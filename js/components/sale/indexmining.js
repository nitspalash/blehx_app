import React, { Component } from "react";
import { Image, View, StatusBar, TouchableOpacity,ScrollView,AsyncStorage } from "react-native";
import { Container, Header,Thumbnail, Title, Button, Icon, Tabs, Tab, Right, Left, Body, Content,ListItem ,List,Text} from 'native-base';
import ResponsiveImage from 'react-native-responsive-image';

import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {productlist} from '../../actions/productActions';
import {productlist_bycategory} from '../../actions/productActions';
import {categorylist} from '../../actions/categoryActions';
import Spinner from 'react-native-loading-spinner-overlay';
import styles from "./styles";
const logo = require("../../../img/splash-logo.png");
import TabOne from './tabOne';
import TabTwo from './tabTwo';
const addcart = require("../../../img/add-cart.png");
const bid = require("../../../img/bid.png");
const product = require("../../../img/product-1.png");
const banner = require("../../../img/car.png");

class Sale extends Component {
  constructor(props) {super(props)
		this.state = {
      visible: false,
      categorylists:''
		}
	  
    
	  }
 
  componentWillMount(){ 
  
  this.props.categorylist().then(res=>{
   
    if(res.ack == '1'){
    const category = res.category_list;
    this.setState({categorylists:category})
    
    
    }
  })
  
  this.serchcategory=this.serchcategory.bind(this);
  //this.toggleCancel = this.toggleCancel.bind(this);
 }
 

 serchcategory(id)
	  {
		
     this.ackey = id;
     
    
    
	  }

  render() {
   
    


    let searchListing = [];	
    let categoryListing = [];
     //let ttt	  
     //let ttt2
    
     if(this.props.category.category_list)
     {  
       //alert(this.props.listcategory.length);
      for(let i = 0; i < this.props.category.category_list.length; i++){ //alert()
        //alert(this.props.listcategory[i].name);
        
        
        categoryListing.push(
          <View  key = {i} style={{flex:1}}>
            <TouchableOpacity onPress={()=>this.serchcategory(this.props.category.category_list[i].id)} style={this.ackey == this.props.category.category_list[i].id ? styles.aStyle : styles.iStyle}>
            {
                   this.props.category.category_list[i].image != ''?(
                      <Thumbnail source={{uri: this.props.category.category_listy[i].image }} style={styles.cimage} />
                    ):(
                      <Thumbnail source={banner} style={styles.cimage}/>
                    )
                  }
            </TouchableOpacity >
          {/* <Image source={banner} /> */}
          <View><Text style={styles.text}>{this.props.category.category_list[i].name}</Text></View>
          
      </View>
            )
          }
     }
     else{ 
      categoryListing =  (
        <Spinner />
        );
     }
   
    //  if(this.props.product.productlist)
    //  {
    
    //   for(let i = 0; i < this.props.product.productlist.length; i++){
    // //alert(this.props.listvalue[i].title);
    
    
    // searchListing.push(
            
    //     )
    
    //   i = i+1;
            
    //       }
    
    // }
    // else{
    //   searchListing =  (
    //     <Spinner />
    //     );
    // }
    
		
		
		
			
		
		
		  if(this.state){  
        //alert(JSON.stringify(this.props.product));
		//alert('get');
		   // alert(searchListing)
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
        

        <Content>
          <View style={{flexDirection: 'row',flex:1}}>
          <View style={{flex:1}}>
          <Button
          onPress={() => this.props.navigation.navigate("Sale")}
  title="Learn More"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
  style={{backgroundColor: "#f1f1f1"}}
><Text style={{color:"#000000"}}>  Product Category  </Text>
</Button>
</View>
<View style={{flex:1,width:100}}>
<Button
  title="Learn More"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
  style={{backgroundColor: "gray",borderBottomColor: '#47315a',
  borderBottomWidth: 1}}
><Text style={{color:"#FFFFFF"}}>                Mining              </Text>
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
        <View style={{backgroundColor: "#F1F1F1", padding:10}}>
					<View style={{flexDirection: 'row'}}>
						<View style={styles.whitebox}>
							
							<View style={{margin:5}}>								
								<View style={{flexDirection: 'row', justifyContent:'center'}}>
									<Text style={{fontSize:18, color:"#0d3145"}}>Blaine</Text>									
								</View>
								<View style={{flexDirection: 'row', justifyContent:'center'}}>									
									<Text style={{fontSize:12, color:"#515151"}}>Starter</Text>
								</View>
								<View style={{flexDirection: 'row', justifyContent:'center', paddingTop:20, paddingBottom:20}}>
									<View><Text style={{color:"#ffb249", fontSize:22}}>$83000</Text></View>									
								</View>
								
								<View style={{flexDirection: 'row', justifyContent:'center'}}>
									<View><Text style={{fontSize:18, color:"#0d3145"}}>$1000 H/s</Text></View>									
								</View>
								<View style={{flexDirection: 'row', justifyContent:'center', paddingTop:10, paddingBottom:10}}>
									<View><Text style={{fontSize:14, color:"#515151"}}>Monero mining 2 Year contract</Text></View>									
								</View>
								
								<View style={{flexDirection: 'row', justifyContent:'center', padding:10}}>
									<View><Button light style={styles.mb15}><Text style={{color:"#FFFFFF", fontSize:12}}>Purchase</Text></Button></View>									
								</View>
								<View style={{flexDirection: 'row', justifyContent:'center'}}>
									<View><Button light style={styles.mb16}><Text style={{color:"#695555", fontSize:12}}>Plan Details</Text></Button></View>									
								</View>
								<View style={{flexDirection: 'row', justifyContent:'center'}}>
									<View><Text style={{color:"#ffb248", fontSize:12}}>4.81 stars, based on 1844 reviews</Text></View>									
								</View>
							</View>
						</View>
						<View style={{width:10}}></View>
						<View style={styles.whitebox}>
						
						<View style={{margin:5}}>								
							<View style={{flexDirection: 'row', justifyContent:'center'}}>
								<Text style={{fontSize:18, color:"#0d3145"}}>Blaine</Text>									
							</View>
							<View style={{flexDirection: 'row', justifyContent:'center'}}>									
								<Text style={{fontSize:12, color:"#515151"}}>Starter</Text>
							</View>
							<View style={{flexDirection: 'row', justifyContent:'center', paddingTop:20, paddingBottom:20}}>
								<View><Text style={{color:"#ffb249", fontSize:22}}>$83000</Text></View>									
							</View>
							
							<View style={{flexDirection: 'row', justifyContent:'center'}}>
								<View><Text style={{fontSize:18, color:"#0d3145"}}>$1000 H/s</Text></View>									
							</View>
							<View style={{flexDirection: 'row', justifyContent:'center', paddingTop:10, paddingBottom:10}}>
								<View><Text style={{fontSize:14, color:"#515151"}}>Monero mining 2 Year contract</Text></View>									
							</View>
							
							<View style={{flexDirection: 'row', justifyContent:'center', padding:10}}>
								<View><Button light style={styles.mb15}><Text style={{color:"#FFFFFF", fontSize:12}}>Purchase</Text></Button></View>									
							</View>
							<View style={{flexDirection: 'row', justifyContent:'center'}}>
								<View><Button light style={styles.mb16}><Text style={{color:"#695555", fontSize:12}}>Plan Details</Text></Button></View>									
							</View>
							<View style={{flexDirection: 'row', justifyContent:'center'}}>
								<View><Text style={{color:"#ffb248", fontSize:12}}>4.81 stars, based on 1844 reviews</Text></View>									
							</View>
						</View>
					</View>					
					</View>
					<View style={{height:10}}></View>
					<View style={{ flexDirection: 'row'}}>
						<View style={styles.whitebox}>
							
							<View style={{margin:5}}>								
								<View style={{flexDirection: 'row', justifyContent:'center'}}>
									<Text style={{fontSize:18, color:"#0d3145"}}>Blaine</Text>									
								</View>
								<View style={{flexDirection: 'row', justifyContent:'center'}}>									
									<Text style={{fontSize:12, color:"#515151"}}>Starter</Text>
								</View>
								<View style={{flexDirection: 'row', justifyContent:'center', paddingTop:20, paddingBottom:20}}>
									<View><Text style={{color:"#ffb249", fontSize:22}}>$83000</Text></View>									
								</View>
								
								<View style={{flexDirection: 'row', justifyContent:'center'}}>
									<View><Text style={{fontSize:18, color:"#0d3145"}}>$1000 H/s</Text></View>									
								</View>
								<View style={{flexDirection: 'row', justifyContent:'center', paddingTop:10, paddingBottom:10}}>
									<View><Text style={{fontSize:14, color:"#515151"}}>Monero mining 2 Year contract</Text></View>									
								</View>
								
								<View style={{flexDirection: 'row', justifyContent:'center', padding:10}}>
									<View><Button light style={styles.mb15}><Text style={{color:"#FFFFFF", fontSize:12}}>Purchase</Text></Button></View>									
								</View>
								<View style={{flexDirection: 'row', justifyContent:'center'}}>
									<View><Button light style={styles.mb16}><Text style={{color:"#695555", fontSize:12}}>Plan Details</Text></Button></View>									
								</View>
								<View style={{flexDirection: 'row', justifyContent:'center'}}>
									<View><Text style={{color:"#ffb248", fontSize:12}}>4.81 stars, based on 1844 reviews</Text></View>									
								</View>
							</View>
						</View>
						<View style={{width:10}}></View>
						<View style={styles.whitebox}>
						
						<View style={{margin:5}}>								
							<View style={{flexDirection: 'row', justifyContent:'center'}}>
								<Text style={{fontSize:18, color:"#0d3145"}}>Blaine</Text>									
							</View>
							<View style={{flexDirection: 'row', justifyContent:'center'}}>									
								<Text style={{fontSize:12, color:"#515151"}}>Starter</Text>
							</View>
							<View style={{flexDirection: 'row', justifyContent:'center', paddingTop:20, paddingBottom:20}}>
								<View><Text style={{color:"#ffb249", fontSize:22}}>$83000</Text></View>									
							</View>
							
							<View style={{flexDirection: 'row', justifyContent:'center'}}>
								<View><Text style={{fontSize:18, color:"#0d3145"}}>$1000 H/s</Text></View>									
							</View>
							<View style={{flexDirection: 'row', justifyContent:'center', paddingTop:10, paddingBottom:10}}>
								<View><Text style={{fontSize:14, color:"#515151"}}>Monero mining 2 Year contract</Text></View>									
							</View>
							
							<View style={{flexDirection: 'row', justifyContent:'center', padding:10}}>
								<View><Button light style={styles.mb15}><Text style={{color:"#FFFFFF", fontSize:12}}>Purchase</Text></Button></View>									
							</View>
							<View style={{flexDirection: 'row', justifyContent:'center'}}>
								<View><Button light style={styles.mb16}><Text style={{color:"#695555", fontSize:12}}>Plan Details</Text></Button></View>									
							</View>
							<View style={{flexDirection: 'row', justifyContent:'center'}}>
								<View><Text style={{color:"#ffb248", fontSize:12}}>4.81 stars, based on 1844 reviews</Text></View>									
							</View>
						</View>
					</View>					
					</View>
					
					
				</View>
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
  category : PropTypes.object.isRequired
  }
  const mapStateToProps = (state)=>{ //alert(JSON.stringify(state.product.data));
	  return {
      auth:state.auth,
      category : state.category.data,
    }
   // alert(JSON.stringify(product))
  }
  
  const mapDispatchToProps = (dispatch)=>{
	  return {
      
      categorylist:()=>dispatch(categorylist()),
	  
	  }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(Sale);