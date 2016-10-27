import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

export default class FirstApp extends Component {
  constructor(props) {
    super(props);
    appComponent = this;
    this.state = {
      message: 'Hello, ',
      name: 'World',
      image: "http://innocentdrinks.typepad.com/.a/6a00d83451ba8c69e2016762c7e21a970b-800wi",
      imageWidth: 0,
      imageHeight: 0
    };
  }

  
  onNameChanged(event) {
    appComponent.setState({name: event});
  }
  
  findSpiritAnimal(event){
     appComponent.setState({image: "https://media.giphy.com/media/3oEduFsHnm570eb3G0/giphy.gif"});
     appComponent.setState({imageHeight: 400});
     appComponent.setState({imageWidth: 400});
     appComponent.setState({message: "Here is your spirit animal, "});
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Image source={{uri: this.state.image}} style={{width: this.state.imageWidth, height: this.state.imageHeight}}/>
        <TextInput
          style={styles.nameInput}
          onChangeText={this.onNameChanged}
          placeholder='Who is the spirit animal for?'
          onEndEditing={this.findSpiritAnimal}/>
        <Text style={styles.welcome}>
               {this.state.message}{this.state.name}!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  instructions: {
    fontSize: 16,
    textAlign: 'center',
    margin: 15,
  },
  nameInput: {
    height: 36,
    padding: 4,
    margin: 24,
    fontSize: 18,
    borderWidth: 1
  }
});

AppRegistry.registerComponent('FirstApp', () => FirstApp);