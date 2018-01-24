import React, { Component } from 'react';
import { Image, View, StatusBar, TouchableOpacity,ScrollView,AsyncStorage } from "react-native";
import { Container,Spinner,Content, Card, CardItem, Text, Body, Grid, Row, Col,Thumbnail, Button ,ListItem} from 'native-base';


import styles from './styles';
const banner = require("../../../img/car.png");
const product = require("../../../img/product-1.png");
const addcart = require("../../../img/add-cart.png");
const bid = require("../../../img/bid.png");

export default class TabOne extends Component {
	constructor(props) {super(props)
		this.state = {
      visible: false,
	  productLists:'',
	  ackey:'',
	  space:''
		}
		this.serchcategory=this.serchcategory.bind(this);
    
	  }

	  serchcategory(id)
	  {
		alert(id)
		 this.ackey = id;

	  }
	
	  
	render() {

let searchListing = [];	
let categoryListing = [];
 //let ttt	  
 //let ttt2

 if(this.props.listcategory)
 {  
	 //alert(this.props.listcategory.length);
	for(let i = 0; i < this.props.listcategory.length; i++){ //alert()
		//alert(this.props.listcategory[i].name);
		
		
		categoryListing.push(
			<View  key = {i} style={{flex:1}}>
				<TouchableOpacity onPress={()=>this.serchcategory(this.props.listcategory[i].id)} style={this.ackey == this.props.listcategory[i].id ? styles.aStyle : styles.iStyle}>
				{
                this.props.listcategory[i].image != ''?(
                  <Thumbnail source={{uri: this.props.listcategory[i].image }} style={styles.cimage} />
                ):(
                  <Thumbnail source={banner} style={styles.cimage}/>
                )
              }
			  </TouchableOpacity >
			{/* <Image source={banner} /> */}
			<View><Text style={styles.text}>{this.props.listcategory[i].name}{this.ackey}</Text></View>
			
	</View>
				)
			}
 }
 else{ 
	categoryListing =  (
		<Spinner />
	  );
 }

 if(this.props.listvalue)
 {

	for(let i = 0; i < this.props.listvalue.length; i++){
//alert(this.props.listvalue[i].title);


searchListing.push(<View key = {i}  style={{flexDirection: 'row',paddingBottom:10}}>
 
 
                  
					
					<View style={styles.graybox}>							
			<View style={{flex:1}}>
			<TouchableOpacity onPress={()=>this.props.navigation.navigate("Details")}>
			  <View style={{backgroundColor: "#35e1e1",flex:1,justifyContent: 'center',alignItems: 'center',}}>	
			  {
                this.props.listvalue[i].image != ''?(
                  <Thumbnail source={{uri: this.props.listvalue[i].image }} style={styles.pimage} />
                ):(
                  <Thumbnail source={product} style={styles.pimage}/>
                )
              }
			 {/* <Text>{data.image}</Text> */}
					{/* <Image source={data.image} style={styles.pimage}/> */}
					{/* <ResponsiveImage source={{uri: product}}
					style={styles.pimage}/> */}
								
			  
			  </View>
			</TouchableOpacity>
			  <View style={{padding:5}}>								
				<View style={{flexDirection: 'row'}}>
				  <View style={{flex:0.7}}><Text>${this.props.listvalue[i].price}</Text></View>
				  <View style={{flexDirection: 'row'}}>
					<Image source={addcart} style={styles.icon}/>
					<Image source={bid} style={styles.icon}/>
				  </View>
				</View>
				<View style={{flexDirection: 'row'}}>
				  <View><Text style={styles.text}>{this.props.listvalue[i].title}</Text></View>
				  
				</View>
			  </View>
			</View>
		  
		  </View>
		  <View style={{width:10}}></View>      
                  
		  <View style={styles.graybox}>							
			<View style={{flex:1}}>
			<TouchableOpacity onPress={()=>this.props.navigation.navigate("Details")}>
			  <View style={{backgroundColor: "#35e1e1",flex:1,justifyContent: 'center',alignItems: 'center',}}>	
			 {/* <Text>{data.image}</Text> */}
			 {
                this.props.listvalue[i+1].image != ''?(
                  <Thumbnail source={{uri: this.props.listvalue[i+1].image }} style={styles.pimage} />
                ):(
                  <Thumbnail source={product} style={styles.pimage} />
                )
              }
					{/* <Image source={data.image} style={styles.pimage}/> */}
					{/* <ResponsiveImage source={{uri: product}}
					style={styles.pimage}/> */}
								
			  
			  </View>
			</TouchableOpacity>
			  <View style={{padding:5}}>								
				<View style={{flexDirection: 'row'}}>
				  <View style={{flex:0.7}}><Text>${this.props.listvalue[i+1].price}</Text></View>
				  <View style={{flexDirection: 'row'}}>
					<Image source={addcart} style={styles.icon}/>
					<Image source={bid} style={styles.icon}/>
				  </View>
				</View>
				<View style={{flexDirection: 'row'}}>
				  <View><Text style={styles.text}>{this.props.listvalue[i+1].title}</Text></View>
				  
				</View>
			  </View>
			</View>
		  </View>
		  
		  
                  
                		
				
		  
  
			

		  
		  
		  
		   </View>
		   
		)




	i = i+1;
				
			}


// 	searchListing = (
// 		this.props.listvalue.map((data,key)=>( 
//    <View avatar key={key} >
//  <Text>{key % 2}</Text>
//  {
//                   key % 2 == 0?(
					
// 					<View style={styles.graybox}>							
// 			<View style={{flex:1}}>
// 			<TouchableOpacity onPress={()=>this.props.navigation.navigate("Details")}>
// 			  <View style={{backgroundColor: "#35e1e1"}}>	
// 			  {
//                 data.image != ''?(
//                   <Thumbnail source={{uri: data.image }} style={styles.pimage} />
//                 ):(
//                   <Thumbnail source={product} style={styles.pimage}/>
//                 )
//               }
// 			 {/* <Text>{data.image}</Text> */}
// 					{/* <Image source={data.image} style={styles.pimage}/> */}
// 					{/* <ResponsiveImage source={{uri: product}}
// 					style={styles.pimage}/> */}
								
			  
// 			  </View>
// 			</TouchableOpacity>
// 			  <View style={{padding:5}}>								
// 				<View style={{flexDirection: 'row'}}>
// 				  <View style={{flex:0.7}}><Text>${data.price}</Text></View>
// 				  <View style={{flexDirection: 'row'}}>
// 					<Image source={addcart} style={styles.icon}/>
// 					<Image source={bid} style={styles.icon}/>
// 				  </View>
// 				</View>
// 				<View style={{flexDirection: 'row'}}>
// 				  <View><Text style={styles.text}>tyty{data.title}</Text></View>
				  
// 				</View>
// 			  </View>
// 			</View>
		  
// 		  </View>
//                   ):(
                  
// 		  <View style={styles.graybox}>							
// 			<View style={{flex:1}}>
// 			<TouchableOpacity onPress={()=>this.props.navigation.navigate("Details")}>
// 			  <View style={{backgroundColor: "#35e1e1"}}>	
// 			 {/* <Text>{data.image}</Text> */}
// 			 {
//                 data.image != ''?(
//                   <Thumbnail source={{uri: data.image }} style={styles.pimage} />
//                 ):(
//                   <Thumbnail source={product} style={styles.pimage} />
//                 )
//               }
// 					{/* <Image source={data.image} style={styles.pimage}/> */}
// 					{/* <ResponsiveImage source={{uri: product}}
// 					style={styles.pimage}/> */}
								
			  
// 			  </View>
// 			</TouchableOpacity>
// 			  <View style={{padding:5}}>								
// 				<View style={{flexDirection: 'row'}}>
// 				  <View style={{flex:0.7}}><Text>${data.price}</Text></View>
// 				  <View style={{flexDirection: 'row'}}>
// 					<Image source={addcart} style={styles.icon}/>
// 					<Image source={bid} style={styles.icon}/>
// 				  </View>
// 				</View>
// 				<View style={{flexDirection: 'row'}}>
// 				  <View><Text style={styles.text}>{data.title}</Text></View>
				  
// 				</View>
// 			  </View>
// 			</View>
// 		  </View>
		  
		  
//                   )
//                 }		
				
		  
  
			

		  
		  
		  
// 		   </View  >
// 		))
// 	  )
}
else{
	searchListing =  (
		<Spinner />
	  );
}


		// eslint-disable-line
		return (
			<Content>
				<View >				
					<View style={{flexDirection: 'row', justifyContent:'center', padding:10}}>
					<ScrollView horizontal={true} contentContainerStyle={{flexGrow:1}} focusableInTouchMode={false}>
						{categoryListing}
					{/* <View style={{width: 60}}>
							<Image source={banner} style={styles.cimage}/>
							<View><Text style={styles.text}>Antiminer $9</Text></View>
					</View>
					<View style={{width: 60}}>
							<Image source={banner} style={styles.cimage}/>
							<View><Text style={styles.text}>Antiminer $9</Text></View>
					</View>
					<View style={{width: 60}}>
							<Image source={banner} style={styles.cimage}/>
							<View><Text style={styles.text}>Antiminer $9</Text></View>
					</View>
					<View style={{width: 60}}>
							<Image source={banner} style={styles.cimage}/>
							<View><Text style={styles.text}>Antiminer $9</Text></View>
					</View>
					<View style={{width: 60}}>
							<Image source={banner} style={styles.cimage}/>
							<View><Text style={styles.text}>Antiminer $9</Text></View>
					</View> */}
					
					</ScrollView>	
					</View>
					
				</View>
				<View >
        
      </View>
	  
				<View style={{backgroundColor: "#F1F1F1", padding:10}}>
				{/* <View><Text>{ttt}</Text></View>
	  <View><Text>{ttt2}</Text></View> */}
				
				{searchListing}
				
				</View>
				{/* <View style={{backgroundColor: "#F1F1F1", padding:10}}>
					<View style={{flexDirection: 'row'}}>

						<View style={styles.graybox}>							
							<View style={{flex:1}}>
							<TouchableOpacity onPress={()=>this.props.navigation.navigate("Details")}>
								<View style={{backgroundColor: "#35e1e1"}}>								
								<Image source={product} style={styles.pimage}/>
								</View>
							</TouchableOpacity>
								<View style={{padding:5}}>								
									<View style={{flexDirection: 'row'}}>
										<View style={{flex:0.7}}><Text>$1528.00</Text></View>
										<View style={{flexDirection: 'row'}}>
											<Image source={addcart} style={styles.icon}/>
											<Image source={bid} style={styles.icon}/>
										</View>
									</View>
									<View style={{flexDirection: 'row'}}>
										<View><Text style={styles.text}>Product Name</Text></View>
										
									</View>
								</View>
							</View>
						</View>
						<View style={{width:10}}></View>
						<View style={styles.graybox}>							
						<View style={{flex:1}}>
						<TouchableOpacity onPress={()=>this.props.navigation.navigate("Details")}>
							<View style={{backgroundColor: "#35e1e1"}}>								
							<Image source={product} style={styles.pimage}/>
							</View>
						</TouchableOpacity>
							<View style={{padding:5}}>								
								<View style={{flexDirection: 'row'}}>
									<View style={{flex:0.7}}><Text>$1528.00</Text></View>
									<View style={{flexDirection: 'row'}}>
										<Image source={addcart} style={styles.icon}/>
										<Image source={bid} style={styles.icon}/>
									</View>
								</View>
								<View style={{flexDirection: 'row'}}>
									<View><Text style={styles.text}>Antminer D3</Text></View>
									
								</View>
							</View>
						</View>
					</View>				
					</View>
					<View style={{height:10}}></View>
					<View style={{flexDirection: 'row'}}>
						<View style={styles.graybox}>							
							<View style={{flex:1}}>
							<TouchableOpacity onPress={()=>this.props.navigation.navigate("Details")}>
								<View style={{backgroundColor: "#35e1e1"}}>								
								<Image source={product} style={styles.pimage}/>
								</View>
							</TouchableOpacity>
								<View style={{padding:5}}>								
									<View style={{flexDirection: 'row'}}>
										<View style={{flex:0.7}}><Text>$1528.00</Text></View>
										<View style={{flexDirection: 'row'}}>
											<Image source={addcart} style={styles.icon}/>
											<Image source={bid} style={styles.icon}/>
										</View>
									</View>
									<View style={{flexDirection: 'row'}}>
										<View><Text style={styles.text}>Product Name</Text></View>
										
									</View>
								</View>
							</View>
						</View>
						<View style={{width:10}}></View>
						<View style={styles.graybox}>							
						<View style={{flex:1}}>
						<TouchableOpacity onPress={()=>this.props.navigation.navigate("Details")}>
							<View style={{backgroundColor: "#35e1e1"}}>								
							<Image source={product} style={styles.pimage}/>
							</View>
						</TouchableOpacity>
							<View style={{padding:5}}>								
								<View style={{flexDirection: 'row'}}>
									<View style={{flex:0.7}}><Text>$1528.00</Text></View>
									<View style={{flexDirection: 'row'}}>
										<Image source={addcart} style={styles.icon}/>
										<Image source={bid} style={styles.icon}/>
									</View>
								</View>
								<View style={{flexDirection: 'row'}}>
									<View><Text style={styles.text}>Product Name</Text></View>
									
								</View>
							</View>
						</View>
					</View>					
					</View>
					
					
					
				</View> */}
			</Content>
		);
	}
}
