import React, { Component } from 'react';
import {View, Text, InputText, ScrollView, TouchableHighlight, Dimensions} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import {observer, inject} from 'mobx-react/native';
import { Button } from 'react-native-elements'

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height; 

@inject('store')
@observer class HomePage extends Component{
	static navigationOptions = {
	  title: 'this is home page',
	}
	render(){
		const {navigate} = this.props.navigation
		return(
			<View style ={{flex: 1, alignItems: 'center', justifyContent : 'center'}}>
				<Button buttonStyle = {{width: width - 150, height: 50}} title = 'Start' onPress = {()=>{navigate('MapPage')}}/>
			</View>
		);
	}
}

export default HomePage;