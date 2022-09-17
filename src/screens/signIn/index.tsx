import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Platform
} from 'react-native';

import { useState } from 'react'

interface IUserData{
  email: string;
  password: string;
}

const SignIn = () => {
  const [ userData, setUserData ] = useState<IUserData>({
    email: '',
    password: ''
  });

  return(
    <KeyboardAvoidingView
      behavior={ Platform.OS === 'ios' ? 'padding': 'position'}
      style={styles.container}
    >
      <View
        style={styles.formContent}
        >
        <Text
          style={styles.textTitle}
        >
          Logar
        </Text>
        <Text>Informe seu email</Text>
        <TextInput
          style={styles.inputText}
          placeholder='Informe seu email'
          onChangeText={ text => setUserData({ ...userData, email: text })}
          value={userData.email}
          keyboardType='email-address'
        />
        <Text>Informe sua senha</Text>
        <TextInput
          style={styles.inputText}
          placeholder='Informe sua senha'
          onChangeText={ text => setUserData({ ...userData, password: text })}
          value={userData.password}
          secureTextEntry={true}
        />
        <Button
          title='Entrar'
          onPress={ () => alert('okay')}
        />
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 22
  },
  formContent: {
    backgroundColor: '#fff',
    width: '70%',
    height: '60%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputText: {
    backgroundColor: '#f0f0f0',
    width: '90%',
    height: 25,
    margin: 10,
    borderRadius: 22,
    textAlign: 'center'
  },
})

export default SignIn;