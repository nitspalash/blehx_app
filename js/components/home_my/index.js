import React, { Component } from "react";
import { Image, View, StatusBar, TouchableOpacity } from "react-native";

import { Container, Button, H3, Text, Header, Title, Body, Left, Right } from "native-base";

import styles from "./styles";
 

const homeBg = require("../../../img/splash-after-bg.png");
const logo = require("../../../img/splash-logo.png");
const facebook = require("../../../img/fb-btn.png");
const google = require("../../../img/google-btn.png");
const phone = require("../../../img/login-btn.png");
const or = require("../../../img/or.png");
const login = require("../../../img/login-btn.png");
const loginNow = require("../../../img/login-now-btn.png");


class Home extends Component {
	// eslint-disable-line

	render() {
		return (
			<Container>
				<StatusBar barStyle="light-content" />
				<Image source={homeBg} style={styles.imageContainer}>
					<View style={styles.logoContainer}>
						<Image source={logo} style={styles.logo} />
					</View>
					<View>
						<Image source={facebook} style={styles.facebook} />
					</View>
					<View>
						<Image source={google} style={styles.google} />
					</View>
					<View>
						<Image source={or} style={styles.or} />
					</View>
					<View>
					<TouchableOpacity onPress={()=>this.props.navigation.navigate("Signup")}>
						<Image source={login} style={styles.google} />
					</TouchableOpacity>
					</View>
					<View>
						<View style={styles.text}>
							<Text>Already have a email account?</Text>
						</View>
						<View>
							<Image source={loginNow} style={styles.login} />
						</View>
						<View>
						<Text style={styles.text}>By continuing you agree to our Terms & Conditions</Text> 
						</View>
					</View>		
					
				</Image>
			</Container>
		);
	}
}

export default Home;
