const React = require("react-native");

const { StyleSheet, Dimensions, Platform } = React;

const deviceHeight = Dimensions.get("window").height;

export default {
   container: {
    backgroundColor: "#FFF",
  },  
  text: {
   
    fontSize:10
  },
  mb: {
    marginBottom: 15
  },
  banner: {
    width:320,
    height:150
  },
  pimage: {
    width:150,
    height:125
  }, 
  
  cimage: {
    width:50,
    height:50
  } 
 ,
 content1:{
  flex: 1,
   flexDirection: 'column',
   //alignItems: 'center'
   marginLeft:20
 },
 content1text : {
  fontWeight: 'bold',
  fontSize:20,
  color: 'gray'
 },
 content2text : {
  fontWeight: 'bold',
  fontSize:20,
  color: '#ffb345',
  marginLeft:40
 }
};
