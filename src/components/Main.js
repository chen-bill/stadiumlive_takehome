import React, {Component} from 'react';
import { connect } from "react-redux";

import { 
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import { styles } from "./MainStyle"

import Preview from "./Preview"
import SelectionMain from "./selection/SelectionMain"

import { fetchAvatarItems } from "../reducers/avatar/actions";

class Main extends Component {

  componentDidMount() {
    this.props.fetchAvatarItems();
  }

  render() {
    return (
      <View style={styles.container}>
        <Preview/>
        <SelectionMain/>
      </View>
    )
  }
}


const mapStateToProps = state => {
  return {
    avatar: state.avatar
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAvatarItems : () => dispatch(fetchAvatarItems())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
