const React = require("react-native");

const { StyleSheet, Dimensions, Platform } = React;

const deviceHeight = Dimensions.get("window").height;

export default {
   container: {
    backgroundColor: "#f1f1f1"
  },
  imageContainer: {
    flex: 1,
    width: null,
    height: null,
    padding:10,
    alignItems: 'center'
  },
  mb15: {
    backgroundColor: "#ffb345",
    flex:1
    
  },
  
 
};
