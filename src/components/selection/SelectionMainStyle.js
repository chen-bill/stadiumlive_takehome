import { 
  StyleSheet,
  TouchableOpacity
} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    height: '50vh',
    justifyContent: 'flex-start',
  },

  menuContainer: {
    height: 40,
    width: '100%',
  },

  menu: {
    flexDirection: 'row',
    backgroundColor: 'white',
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },

  button: {
    padding: 0,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 10,
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    borderBottomStyle: "solid",
    height: 30,
    backgroundColor: '#FFF',
    fontWeight: 'bold',
    fontSize: 15,
    color: 'gray',
    // TODO change this to stop error
    textAlign: 'center',
  },

  buttonSelected: {
    padding: 0,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 10,
    borderBottomColor: "black",
    borderBottomWidth: 3,
    borderBottomStyle: "solid",
    height: 30,
    backgroundColor: '#FFF',
    fontWeight: 'bold',
    fontSize: 15,
    color: 'black',
    // TODO change this to stop error
    textAlign: 'center',
  },

  avatarSelectorContainer: {
    //height: '85%',
    flex: 1,
    width: '100%',
    alignSelf: 'stretch',
    overflow: 'hidden',
    backgroundColor: 'white',
  },

  avatarSelector: {
    flexDirection: 'row',
    // TODO edge case with 1,2 items 
    justifyContent: 'space-around',
    //alignItems: 'flex-start',
    flexWrap: 'wrap'
  },

  styleButtonSelected: {
    width: 100,
    height: 100,
    padding: 0,
    margin: 10,
    borderColor: "#34D36E",
    borderWidth: 3,
    borderStyle: "solid",
    borderRadius: 15,
  },

  styleButton: {
    width: 100,
    height: 100,
    padding: 0,
    margin: 10,
    borderColor: "black",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 15,
  },

  styleButtonImageContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
  },

  styleButtonImage: {
    flex: 1,
    // TODO zoom into image
    width: "100%",
    height: "100%",
  },

  styleButtonIconContainer: {
    width: 25,
    height: 25,
    position: 'absolute',
    right: 5,
    top: 5,
  },
});
