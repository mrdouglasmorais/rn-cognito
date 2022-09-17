import {
  View,
  Text,
  Button,
  StyleSheet
} from 'react-native';

import {
  useNavigation,
} from '@react-navigation/native'


const Home = () => {
  const { navigate } = useNavigation();

  const handleScreen = (name: string) => {
    navigate(name)
  }
  return(
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
      <Button
        title='SignIn'
        onPress={ () => handleScreen('SignIn')}
      />
      <Button
        title='SignUp'
        onPress={ () => handleScreen('SignUp')}
      />
      <Button
        title='Google Login'
        onPress={ () => handleScreen('GoogleLogin')}
      />
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
  text: {
    fontSize: 22
  }
})

export default Home;