import React, {Component} from 'react';
import { connect } from "react-redux";

import { 
  Text,
  View,
  ScrollView,
  Button,
  TouchableOpacity,
  Image
} from 'react-native';

import { styles } from "./SelectionButtonStyle"

class SelectionButton extends Component {
  render() {
    console.log(this.props.buttonData);
    return (
      <TouchableOpacity style={styles.container}>
        <Image
          style={styles.image}
          source={{uri: `https://api.stadiumliveapp.com/avatars/preview?q=top:male_anorak1`}}
        />
      </TouchableOpacity>
    )
  }
}
//
          //<TouchableOpacity onPress={() => this.props.fetchAvatarItems()}>
            //<Text>Increas</Text>
          //</TouchableOpacity>
          //<Text>{this.props.avatar.testing}</Text>
          //<TouchableOpacity onPress={() => this.decreaseCounter()}>
            //<Text>Decrease</Text>
          //</TouchableOpacity>


const mapStateToProps = state => {
  return {
    avatar: state.avatar
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectionButton);

