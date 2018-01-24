import React, { Component } from "react";
import { Image, View, StatusBar, TouchableOpacity } from "react-native";

import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Footer,
  FooterTab,
  Icon,
  Left,
  Right,
  Body,
  Text,
  Input,
  Form,
  Item,
  Label,
  Tabs, 
  Tab,
  ScrollableTab,
  Badge,
  Subtitle,
  Grid,
  Row
} from "native-base";

import TabOne from './tabOne';
import TabTwo from './tabTwo';
import TabThree from './tabThree';

import styles from "./styles";
const banner = require("../../../img/home-banner.png");
class Sale extends Component {
  // eslint-disable-line
  constructor(props) {
    super(props);
    this.state = {
      tab1: false,
      tab2: false,
      tab3: true,
      tab4: false,
      tab5: false
    };
  }

  toggleTab1() {
    this.setState({
      tab1: true,
      tab2: false,
      tab3: false,
      tab4: false,
      tab5: false
    });
  }

  toggleTab2() {
    this.setState({
      tab1: false,
      tab2: true,
      tab3: false,
      tab4: false,
      tab5: false
    });
  }

  toggleTab3() {
    this.setState({
      tab1: false,
      tab2: false,
      tab3: true,
      tab4: false,
      tab5: false
    });
  }

  toggleTab4() {
    this.setState({
      tab1: false,
      tab2: false,
      tab3: false,
      tab4: true,
      tab5: false
    });    
  }

  toggleTab5() {
    this.setState({
      tab1: false,
      tab2: false,
      tab3: false,
      tab4: false,
      tab5: true
    });    
  }
  render() {
    return (
      <Container style={styles.container}>
        <Header hasSubtitle style={{ backgroundColor: "#00000f" }}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Sale</Title>            
          </Body>
          <Right />

        </Header>
        <Content>			
          <View>
                <Image source={banner} style={styles.banner} />
          </View>
          <View>
          <Tabs renderTabBar={() => <ScrollableTab />} style={{ backgroundColor: "#00000f" }}>
              <Tab heading="Newest">
                <TabOne />
              </Tab>
              <Tab heading="Nearby">
                <TabTwo />
              </Tab>
              <Tab heading="Top 10">
                <TabThree />
              </Tab>
              <Tab heading="Trending">
                <TabOne />
              </Tab>
              <Tab heading="Service">
                <TabTwo />
              </Tab>
              <Tab heading="Products">
                <TabThree />
              </Tab>
            </Tabs>
          </View>  
          
          
        </Content>
      
        <Footer>
          <FooterTab style={{ backgroundColor: "#00000f" }}>
          <Button active={this.state.tab1} onPress={() => this.toggleTab1()} vertical badge >
          <Badge><Text>2</Text></Badge>
          <Icon active={this.state.tab1} name="home" />
          <Text>Home</Text>
        </Button>
        <Button active={this.state.tab2} onPress={() => this.toggleTab2()}>
          <Icon active={this.state.tab2} name="camera" />
          <Text>Feed</Text>
        </Button>
        <Button active={this.state.tab3} onPress={() => this.toggleTab3()} vertical badge>
          <Badge style={{ backgroundColor: "green" }}>
            <Text>51</Text>
          </Badge>
          <Icon active={this.state.tab3} name="compass" />
          <Text>Search</Text>
        </Button>
        <Button active={this.state.tab4} onPress={() => this.toggleTab4()}>
          <Icon active={this.state.tab4} name="contact" />
          <Text>Message</Text>
        </Button>
        <Button active={this.state.tab5} onPress={() => this.toggleTab5()} vertical badge>
          <Icon active={this.state.tab5} name="contact" />
          <Text>Profile</Text>
        </Button>
        
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default Sale;
