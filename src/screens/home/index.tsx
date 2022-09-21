import {
  View,
  Text,
  Button,
  StyleSheet
} from 'react-native';

import {
  useNavigation,
} from '@react-navigation/native'
import { useState } from 'react';
import React from 'react';


const Home = () => {
  const { navigate } = useNavigation();
  const [state, setState ] = useState<string>();

  const handleScreen = (name: string) => {
    navigate(name)
  }
  return(
    <View style={styles.container}>
      <Text
        testID='testState'
      >
        { state ?? state }
      </Text>
      <Text
      style={styles.text}
      testID="homeText"
      >
        Home
      </Text>
      <Button
        title='SignIn'
        testID='signIn'
        onPress={ () => handleScreen('SignIn')}
      />
      <Button
        title='SignUp'
        testID='signUp'
        onPress={ () => handleScreen('SignUp')}
      />
      <Button
        title='Google Login'
        testID='googleLogin'
        onPress={ () => handleScreen('GoogleLogin')}
      />
      <Button
        title='Tester'
        testID='testButton'
        onPress={ () => setState('funcionou!')}
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