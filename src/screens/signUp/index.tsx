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

interface IRegisterData{
  username: string;
  email: string;
  password: string;
  phone: string
  confirmationCode?: string;
}

const SignUp = () => {
  const [ userData, setUserData ] = useState<IRegisterData>({
    username: '',
    email: '',
    password: '',
    phone: ''
  });
  const [ isConfirmCode, setIsConfirmCode ] = useState(false);

  return(
    <KeyboardAvoidingView
      behavior={ Platform.OS === 'ios' ? 'padding': 'position' }
      style={styles.container}
    >
      { !isConfirmCode ? (
          <View
          style={styles.formContent}
          >
          <Text
            style={styles.textTitle}
          >
            Cadastrar
          </Text>
          <Text>Informe seu nome de usuário</Text>
          <TextInput
            style={styles.inputText}
            placeholder='Informe seu nome de usuário'
            onChangeText={ text => setUserData({ ...userData, username: text })}
            value={userData.username}
            keyboardType='email-address'
          />
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
          <Text>Informe seu telefone</Text>
          <TextInput
            style={styles.inputText}
            placeholder='Informe seu telefone'
            onChangeText={ text => setUserData({ ...userData, phone: text })}
            value={userData.phone}
            keyboardType='numeric'
          />
          <Button
            title='Cadastrar'
            onPress={ () => setIsConfirmCode(!isConfirmCode)}
          />
        </View>
      ) : (
        <View
          style={styles.formContent}
          >
          <Text
            style={styles.textTitle}
          >
            Confirmar código
          </Text>
          <Text>Informe seu código</Text>
          <TextInput
            style={styles.inputText}
            placeholder='Informe seu código'
            onChangeText={ text => setUserData({ ...userData, confirmationCode: text })}
            value={userData.confirmationCode}
            keyboardType='numeric'
          />
          <Button
            title='Confirmar'
            onPress={ () => setIsConfirmCode(!isConfirmCode)}
          />
        </View>
      )}
      
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

export default SignUp;