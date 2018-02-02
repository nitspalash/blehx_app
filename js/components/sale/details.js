import React, { Component } from "react";
import { Image, View, StatusBar, TouchableOpacity } from "react-native";
import { Container,Footer,Spinner, Header,ListView, Title, Button, Icon, Tabs, Tab, Right, Left, Body, Content ,Text ,ImageHeader} from 'native-base';
import ImageSlider from 'react-native-image-slider';
//import { Button1 } from 'react-native-elements'
import styles from "./styles";
import Icon2 from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {productdetail} from '../../actions/productdetailsActions';



class Details extends Component {
  // eslint-disable-line
  constructor(props) {super(props)
		this.state = {
      visible: false,
      productdetails:'',
      product_id:'',
      
		}
	  
    
	  }
 

   
    
  componentWillMount(){ 
    this.go_cart=this.go_cart.bind(this);
    const navigate = this.props.navigation;
    //alert(this.props.navigation.state.params)
    //alert(this.props.navigation.state.params.id);
   // this.setState({product_details:this.props.navigation.state.params.id})
    //alert('here')
    this.incrementFunc=this.incrementFunc.bind(this);
   
   this.props.productdetail(this.props.navigation.state.params).then(res=>{

     this.setState({visible:false});
   
   })
  
  }

  
   incrementFunc(){

    //alert("here");
  }
  go_cart(){
    //alert(this.product_id)
    this.props.navigation.navigate("Cart",this.product_id)
  }
  render() {
    let detailsval= '';
    if(this.props.productdetails.data)
    {  
      this.product_id = this.props.productdetails.data.id;
      detailsval = (
        <View>
  <View style={{flex: 1, flexDirection: 'row',marginTop:20}}>
          <View  style={styles.content1}>
          <Text style={styles.content1text}> {this.props.productdetails.data.name}</Text>
          </View>
          <View style={styles.content1} >
          <Text style={styles.content2text}>{this.props.productdetails.data.price} USD</Text>			
        </View>
        </View>
        <View style={{flex: 1, flexDirection: 'row',marginTop:20}}>
          <View style={{flex: 1,flexDirection: 'column',marginLeft:20}}>
                <Text style={{fontSize:15,color:'gray'}}>Shipping  :  20-30 Nov    Weight  : 5.5Kg</Text>
                <Text style={{fontSize:15,color:'gray'}}>Quantity  :     </Text> 
               
        </View>
        </View>
       </View>
     );
    }
    else{
       detailsval = (
        <Spinner />
        );
    }

    const banner = require("../../../img/product-1.png");
    // eslint-disable-line
    return (
      <Container>
      <Header style={{ backgroundColor: "#112D42" }}  androidStatusBarColor="#112D42"
          iosBarStyle="light-content">
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Details</Title>
          </Body>
          <Right />
        </Header>
      <Content style={styles.container}>
      <View>

      <ImageSlider images={[
      banner,
      banner,
      banner
  ]}/>
      {detailsval}
      </View>
        <View>
       
 <Tabs style={{flex: 1,marginTop:30}}>
              <Tab heading="Notes" >
              <View title="NATIVE" style={styles.content}>
            <Text style={styles.header}>
              Notes
            </Text>
            <Text style={styles.text}>
              Components you define will end up rendering as native platform widgets
            </Text>
          </View>
              </Tab>
              <Tab heading="Payment"  >
              <Text style={styles.header}>
              Payments
            </Text>
            <Text style={styles.text}>
              Components you define will end up rendering as native platform widgets
            </Text>
              </Tab>
              <Tab heading="Warranty"  >
              <Text style={styles.header}>
              Warrenty
            </Text>
            <Text style={styles.text}>
              Components you define will end up rendering as native platform widgets
            </Text>
                </Tab>
                <Tab heading="Discount"  >
                <Text style={styles.header}>
              Discount
            </Text>
            <Text style={styles.text}>
              Components you define will end up rendering as native platform widgets
            </Text>
              </Tab>
          </Tabs>
          </View>
         
      </Content>
      <Footer transparent>
      <View style={{flex: 1, flexDirection: 'row'}}>
      <View style={{flex: 0.5}}>
      <Button style={{flex: 0.5,backgroundColor:'#ede9d5',alignContent:'center'}}>
      <Text style={{flex: 1,color:'#ffb345',fontSize:20}}>Bid</Text>
                    </Button>
                       </View>
                    
<View style={{flex: 0.5,alignItems: 'center'}}>
                    <Button  style={{flex: 0.5,backgroundColor:'#ffb345'}} onPress={()=>this.go_cart()}>
                    <Text style={{flex: 1,color:'#ede9d5',fontSize:20}}>Add To Cart </Text> 
                    </Button>
                    </View>
            </View>
  </Footer>
  </Container>
    );
  }
}
//export default Details;
//export default Sale;
Details.propTypes = {
	auth : PropTypes.object.isRequired,
	productdetail:PropTypes.func.isRequired,
  productdetails : PropTypes.object.isRequired,
  }
  const mapStateToProps = (state)=>{ //alert(JSON.stringify(state));
	  return {
      auth:state.auth,
      productdetails:state.productdetails.data,
    }
   // alert(JSON.stringify(product))
  }
  
  const mapDispatchToProps = (dispatch)=>{
	  return {
      productdetail:(id)=>dispatch(productdetail(id)),
	  
	  }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(Details);