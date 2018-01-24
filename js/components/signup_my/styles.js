const React = require("react-native");

const { StyleSheet, Dimensions, Platform } = React;

const deviceHeight = Dimensions.get("window").height;

export default {
   container: {
    backgroundColor: "#FFF"
  },
  imageContainer: {
    flex: 1,
    width: null,
    height: null,
    padding:10,
    alignItems: 'center'
  },
  mb15: {
    marginTop: 100
  },
  
 
};
