import React, { Component } from 'react';
import {View, Text, InputText, ScrollView} from 'react-native';

class HomePage extends Component{
	render(){
		return(
			<View style ={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyouContent: 'center'}}>
				<Text> this is home page </Text>
			</View>
		);
	}
}

export default HomePage;