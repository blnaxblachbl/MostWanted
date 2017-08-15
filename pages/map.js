import React, { Component } from 'react';
import {View, Text, TextInput, ScrollView, TouchableHighlight, Dimensions, StyleSheet, BackHandler} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import {observer, inject} from 'mobx-react/native';
import MapView from 'react-native-maps';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/FontAwesome';	

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height; 

@inject('store')
@observer class MapPage extends Component{
	static navigationOptions = {
	  header: null,
	}

	constructor(props) {
	  super(props);
	  const {navigate} = this.props.navigation
	  this.state = {};
	}

	componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.popy);
    }
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.popy);
    }
    popy = () =>{
    	if ((this.props.navigation) && (this.props.navigation.state.name === 'MapPage')){
    		return false
    	}else{
    	   	return true
    	}
    }
	render(){
		const {navigate} = this.props.navigation
		return(
			<View style ={styles.container}>
				<MapView style = {styles.map} initialRegion = {{
					latitude: 62.019631,
					longitude: 129.709234,
					latitudeDelta: 0.0922,
					longitudeDelta: 0.0421,
				}}>
				</MapView>
		        <ActionButton buttonColor="rgba(231,76,60,1)">
		          <ActionButton.Item buttonColor='#9b59b6' title="Выйти" onPress={()=>{this.props.navigation.goBack()}}>
		            <Icon name="reply" />
		          </ActionButton.Item>
		          <ActionButton.Item buttonColor='#3498db' title="Снаряжение" onPress={() => {navigate('ItemsPage')}}>
		            <Icon name="suitcase" />
		          </ActionButton.Item>
		          <ActionButton.Item buttonColor='#1abc9c' title="Магазин" onPress={() => {navigate('ShopPage')}}>
		            <Icon name="usd"  />
		          </ActionButton.Item>
		        </ActionButton>
			</View>
		);
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map:{
  	width: width-10,
  	height: height-10
  }
});

export default MapPage;