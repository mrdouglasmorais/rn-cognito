import {
  Text,
  View,
  StyleSheet,
  Button
} from 'react-native';

const GoogleLogin = () => {
  return(
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Google Auth</Text>
        <Button
          title='Logar com google'
          onPress={ () => alert('Okay')}
        />
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
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold'
  }
})

export default GoogleLogin;