import { 
  StyleSheet
} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '50vh',
    backgroundColor: '#FEFC03',
    alignItems: 'center',
    justifyContent: 'center',
  },

  previewImage: {
    aspectRatio: 1,
    resizeMode: "contain", // for tablet views
    width: "100%",
    height: "100%"
  }
});

