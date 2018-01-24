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
    alignItems: 'center'
  },
  mb15: {
    flex:1,
    backgroundColor: "#ffb345"
  },
  profile: {    
    width: 80,
    height: 80,
    justifyContent:'center',
    marginTop:80
   
  },
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
},
searchIcon: {
    padding: 10,
},
input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#fff',
    color: '#424242',
},

 
};
