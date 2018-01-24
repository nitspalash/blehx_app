import React, { Component } from 'react';
import { Image, View, StatusBar, TouchableOpacity,ScrollView } from "react-native";
import { Container, Content, Card, CardItem, Text, Body, Grid, Row, Col, Button } from 'native-base';

import styles from './styles';
const banner = require("../../../img/car.png");
const product = require("../../../img/product-1.png");
const addcart = require("../../../img/add-cart.png");
const bid = require("../../../img/bid.png");
export default class TabOne extends Component {
	// eslint-disable-line

	render() {
		// eslint-disable-line
		return (
			<Content>
				<View>				
					<View style={{flexDirection: 'row', justifyContent:'center', padding:10}}>
					<ScrollView horizontal={true} style={{width:200}}>
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
					</View>
					<View style={{width: 60}}>
							<Image source={banner} style={styles.cimage}/>
							<View><Text style={styles.text}>Antiminer $9</Text></View>
					</View>
					
					</ScrollView>	
					</View>
					
				</View>
				<View style={{backgroundColor: "#F1F1F1", padding:10}}>
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
					
					
					
				</View>
			</Content>
		);
	}
}
