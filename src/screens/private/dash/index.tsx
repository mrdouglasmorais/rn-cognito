import {
  Text,
  View,
  StyleSheet
} from 'react-native';

const dash = () => {
  return(
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Google Auth</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  content: {
    width: '80%',
    height: '80%',
    backgroundColor: '#fff',
    borderRadius: 22
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold'
  }
})

export default dash;