import React, {Component} from 'react';
import { connect } from "react-redux";

import { 
  Text,
  View,
  Image
} from 'react-native';

import { styles } from "./PreviewStyle"

class Preview extends Component {
  render() {
    console.log(this.props.avatarUri);
    return (
      <View style={styles.container}>
        <Image
          style={styles.previewImage}
          source={{uri: this.props.avatarUri}}
        />
      </View>
    )
  }
}


const mapStateToProps = state => {
  return {
    avatarUri: state.avatar.avatarUri
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Preview);
