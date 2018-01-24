import React, { Component } from 'react';
import { Image, View, StatusBar, TouchableOpacity,ScrollView } from "react-native";
import { Container, Content, Card, CardItem, Text, Body, Grid, Row, Col, Button } from 'native-base';

import styles from './styles';
const banner = require("../../../img/car.png");
export default class TabTwo extends Component {
	// eslint-disable-line

	render() {
		// eslint-disable-line
		return (
			<Content>
				<View style={{alignItems:'center'}}>				
					<View style={{flexDirection: 'row', padding:10, alignItems:'center'}}>
					<ScrollView horizontal={true}>
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
			</Content>
		);
	}
}
