import React, { Component } from 'react';
import { Image, View, StatusBar, TouchableOpacity,ScrollView } from "react-native";
import { Container, Content, Card, CardItem, Text, Body, Grid, Row, Col } from 'native-base';

import styles from './styles';
const banner = require("../../../img/car.png");
export default class Test4 extends Component {
	// eslint-disable-line

	render() {
		// eslint-disable-line
		return (
			<Content padder>
				<View>
				
					<View style={{flex: 1, flexDirection: 'row'}}>
					<ScrollView horizontal={true} style={{width:200}}>
						<View style={{width: 80, height: 100}}>
								<Image source={banner} style={styles.cimage}/>
								<View><Text style={styles.text}>Antiminer $9</Text></View>
						</View>
						<View style={{width: 80, height: 100}}>
								<Image source={banner} style={styles.cimage}/>
								<View><Text style={styles.text}>Antiminer $9</Text></View>
						</View>
						<View style={{width: 80, height: 100}}>
								<Image source={banner} style={styles.cimage}/>
								<View><Text style={styles.text}>Antiminer $9</Text></View>
						</View>
						<View style={{width: 80, height: 100}}>
								<Image source={banner} style={styles.cimage}/>
								<View><Text style={styles.text}>Antiminer $9</Text></View>
						</View>
						<View style={{width: 80, height: 100}}>
								<Image source={banner} style={styles.cimage}/>
								<View><Text>Antiminer $9</Text></View>
						</View>
						<View style={{width: 80, height: 100}}>
								<Image source={banner} style={styles.cimage}/>
								<View><Text>Antiminer $9</Text></View>
						</View>
						<View style={{width: 80, height: 100}}>
								<Image source={banner} style={styles.cimage}/>
								<View><Text>Antiminer $9</Text></View>
						</View>
						<View style={{width: 80, height: 100}}>
								<Image source={banner} style={styles.cimage}/>
								<View><Text>Antiminer $9</Text></View>
						</View>
						<View style={{width: 80, height: 100}}>
								<Image source={banner} style={styles.cimage}/>
								<View><Text>Antiminer $9</Text></View>
						</View>
						</ScrollView>	
					</View>
					
				</View>
				<View style={{backgroundColor: "#EEF1F6", paddingTop:10 }}>
					<View style={{flex: 1, flexDirection: 'row',justifyContent:'center'}}>
						<View style={{width: 150, height: 180}} >
						<TouchableOpacity onPress={()=>this.props.navigation.navigate("Detail")}>
							<Image source={banner} style={styles.pimage}/>
							</TouchableOpacity>
							<View style={{padding:5}}>								
								<View style={{flexDirection: 'row'}}>
									<View style={{width:90}}><Text>$1528.00</Text></View>
									<View><Text>sadsad</Text></View>
								</View>
								<View style={{flexDirection: 'row'}}>
									<View><Text>Product Name</Text></View>
									
								</View>
							</View>
						</View>
						<View style={{width:10}}></View>
						<View style={{width: 150, height: 180}}>
							<Image source={banner} style={styles.pimage}/>
							<View style={{padding:5}}>								
							<View style={{flexDirection: 'row'}}>
								<View style={{width:90}}><Text>$1528.00</Text></View>
								<View><Text>sadsad</Text></View>
							</View>
							<View style={{flexDirection: 'row'}}>
								<View><Text>Product Name</Text></View>								
							</View>
							</View>
						</View>					
					</View>
					<View style={{flex: 1, flexDirection: 'row',justifyContent:'center'}}>
						<View style={{width: 150, height: 180}}>
							<Image source={banner} style={styles.pimage}/>
							<View style={{padding:5}}>								
								<View style={{flexDirection: 'row'}}>
									<View style={{width:90}}><Text>$1528.00</Text></View>
									<View><Text>sadsad</Text></View>
								</View>
								<View style={{flexDirection: 'row'}}>
									<View><Text>Product Name</Text></View>
									
								</View>
							</View>
						</View>
						<View style={{width:10}}></View>
						<View style={{width: 150, height: 180}}>
							<Image source={banner} style={styles.pimage}/>
							<View style={{padding:5}}>								
							<View style={{flexDirection: 'row'}}>
								<View style={{width:90}}><Text>$1528.00</Text></View>
								<View><Text>sadsad</Text></View>
							</View>
							<View style={{flexDirection: 'row'}}>
								<View><Text>Product Name</Text></View>								
							</View>
							</View>
						</View>					
					</View>
					<View style={{flex: 1, flexDirection: 'row',justifyContent:'center'}}>
						<View style={{width: 150, height: 180}}>
							<Image source={banner} style={styles.pimage}/>
							<View style={{padding:5}}>								
								<View style={{flexDirection: 'row'}}>
									<View style={{width:90}}><Text>$1528.00</Text></View>
									<View><Text>sadsad</Text></View>
								</View>
								<View style={{flexDirection: 'row'}}>
									<View><Text>Product Name</Text></View>
									
								</View>
							</View>
						</View>
						<View style={{width:10}}></View>
						<View style={{width: 150, height: 180}}>
							<Image source={banner} style={styles.pimage}/>
							<View style={{padding:5}}>								
							<View style={{flexDirection: 'row'}}>
								<View style={{width:90}}><Text>$1528.00</Text></View>
								<View><Text>sadsad</Text></View>
							</View>
							<View style={{flexDirection: 'row'}}>
								<View><Text>Product Name</Text></View>								
							</View>
							</View>
						</View>					
					</View>
				</View>
			</Content>
		);
	}
}
