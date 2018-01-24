const React = require("react-native");

const { StyleSheet, Dimensions, Platform } = React;

const deviceHeight = Dimensions.get("window").height;

export default {
  imageContainer: {
    flex: 1,
    width: null,
    height: null,
    padding:10,
    alignItems: 'center'
  },
  logoContainer: {
    
    marginTop: deviceHeight / 12,
    marginBottom: 10
  },
  logo: {    
    width: 100,
    height: 100     
   
  },
  facebook: {
    width:300,
   height:50
  },
  google: {
    width:300,
   height:50
  },
  or: {
  width:50,
   height:50,
   marginTop:5,
   marginBottom:5
  },
  login: {
    width:300,
   height:50,
   marginTop:5,
   marginBottom:5
  },
  text:{
    alignItems: 'center'    
  }
 
};
