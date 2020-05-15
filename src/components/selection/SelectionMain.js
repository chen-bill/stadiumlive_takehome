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


import { Icon } from 'react-native-elements'

import { styles } from "./SelectionMainStyle"

import SelectionButton from "./SelectionButton"

import { selectCategory, itemSelect } from "../../reducers/avatar/actions";

class SelectionMain extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.menuContainer}>
          <ScrollView 
            horizontal={true}
            style={styles.menu}>

            {this.props.avatar.avatarData.map((avatarCategory, i) => (
              <TouchableOpacity
                key={i}
                onPress={() => this.props.selectCategory(i)}>
                <Text style={
                  this.props.avatar.selected.menu.name == avatarCategory.name ?
                  styles.buttonSelected : styles.button}>{capitalize(avatarCategory.name)}</Text>
              </TouchableOpacity>
            ))}

          </ScrollView>
        </View>
        <View style={styles.avatarSelectorContainer}>
          <ScrollView 
            contentContainerStyle={styles.avatarSelector}>

            {this.props.avatar.selected.menu.items.map((buttonData, i) => (
              <TouchableOpacity 
              key={i}
              onPress={() => this.props.itemSelect(buttonData.groupId)}
              style={
                this.props.avatar.selected.menu.name in this.props.avatar.selected.items &&
                  this.props.avatar.selected.items[this.props.avatar.selected.menu.name] == buttonData.groupId ?
                  styles.styleButtonSelected : styles.styleButton}>
                  <Image
                    style={
                      styles.styleButtonImage}
                    source={{uri: `https://api.stadiumliveapp.com/avatars/preview?q=${this.props.avatar.selected.menu.name}:${buttonData.id}`}}
                  >
                  </Image>
                    {
                this.props.avatar.selected.menu.name in this.props.avatar.selected.items &&
                  this.props.avatar.selected.items[this.props.avatar.selected.menu.name] == buttonData.groupId ?
                    <View
                      style={styles.styleButtonIconContainer}
                      >
                      <Icon
                        style={styles.styleButtonIcon}
                        name='check-circle'
                        type='font-awesome'
                        color='#34D36E'
                      />
                    </View> : null
                    }
              </TouchableOpacity>
            ))}
            <Text> Made with ♥ by Bill</Text>
          </ScrollView>
        </View>
      </View>
    )
  }
}

const isItemSelected = (itemGroupId) => {
  let menuName = this.props.selected.menu.name
  if (menuName in this.props.selected.items && this.props.selected.items[menuName] == itemGroupId){
    return true
  } else {
    return false
  }
}

const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

// TODO image caching

const mapStateToProps = state => {
  return {
    avatar: state.avatar
  };
};

const mapDispatchToProps = dispatch => {
  return {
    selectCategory : (i) => dispatch(selectCategory(i)),
    itemSelect : (groupId) => dispatch(itemSelect(groupId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectionMain);
