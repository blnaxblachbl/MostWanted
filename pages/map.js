import React, { Component } from 'react';
import {View, Text, TextInput, ScrollView, TouchableHighlight, Dimensions, StyleSheet} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import {observer, inject} from 'mobx-react/native';
import MapView from 'react-native-maps';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height; 

@inject('store')
@observer class HomePage extends Component{
	static navigationOptions = {
	  header: null,
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
				}}/>
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
  	width: width,
  	height: height
  }
});

export default HomePage;