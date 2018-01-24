const React = require("react-native");

const { StyleSheet, Dimensions, Platform } = React;

const deviceHeight = Dimensions.get("window").height;

export default {
   container: {
    backgroundColor: "#f1f1f1"
  },  
  text: {
   
    fontSize:10,
    color:"#5f5f5f"
  },
  mb: {
    marginBottom: 15
  },
  mb15:{
    width:125,
    height:30,
    justifyContent:'center',   
    backgroundColor: "#ffb248"
  },
  mb16:{
    width:125,
    height:30,
    justifyContent:'center',   
    backgroundColor: "#f1f1f1"
  },
  banner: {
    width:320,
    height:150
  },
  pimage: {
    width:100,
    height:100,
    margin:10,
    
  },
  icon: {
    width:20,
    height:20,
    
  }, 
  
  cimage: {
   flex:0.5
  },
  
  whitebox:{
    backgroundColor: "#FFFFFF",
    flex:0.5       
  },
  graybox:{    
    flex:0.5,
    padding:5,
    borderColor: '#FFF',
    borderWidth: 1,
    justifyContent:'center', 
  },
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
   },
   aStyle :{
    backgroundColor:'#ffb345'
   },
   iStyle : {
   }
  
 
};
