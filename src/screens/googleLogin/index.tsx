import {
  Text,
  View,
  StyleSheet,
  Button,
} from 'react-native';

import {
  Auth,
  Hub
} from 'aws-amplify';

import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth'

import { useCallback, useEffect, useState } from 'react';

const GoogleLogin = () => {

  const [ user, setUser ] = useState<any>();

  useEffect(() => {
    const unsubcribe = Hub.listen('auth', ({payload: { event, data }}: any) => {
      switch (event) {
        case 'signIn':
          setUser(data);
          break;

        case  'signOut':
          setUser(null)
          break;
      
        case 'signIn_failure':
        case 'cognitoHostedUi_failure':
          console.log('Erro ao logar' ,data)
      }
    });

    Auth.currentAuthenticatedUser()
      .then( (currentUser: any) => setUser(currentUser))
      .catch( () => console.log('Erro ao logar'));

    return unsubcribe
  }, []);

  async function sigOut(){
    try {
      await Auth.signOut({ global: true})
    } catch (error) {
      console.error('Falha', error);
    }
  }

  const signIn = useCallback(() => {
    Auth.federatedSignIn({provider: CognitoHostedUIIdentityProvider.Google})
  }, [])

  return(
    <View style={styles.container}>
      <View style={styles.content}>
        {user ? (
          <>
            <Button
              title='Sair da sessão'
              onPress={ () => sigOut()}
            />
          </>
        ) : (
          <>
            <Text>Usuário não logado</Text>
          </>
        )}
        <Text style={styles.title}>Google Auth</Text>
        <Button
          title='Logar com google'
          onPress={signIn}
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