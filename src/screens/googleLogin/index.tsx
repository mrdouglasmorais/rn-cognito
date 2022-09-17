import {
  Text,
  View,
  StyleSheet,
  Button,
  Linking
} from 'react-native';

import {
  Auth,
  Hub,
  Amplify
} from 'aws-amplify';

import InAppBrowser from 'react-native-inappbrowser-reborn';

import awsmobile from '../../aws-exports';
import { useEffect, useState } from 'react';

async function urlOpener(url: any, redirectURL: any){
  await InAppBrowser.isAvailable;

  const all = await InAppBrowser.openAuth(url, redirectURL, {
    showTitle: false,
    enableUrlBarHiding: true,
    enableDefaultShare: false,
    ephemeralWebSession: false
  })

  console.log('todos os dados', all)
  if (all.type === 'success'){
    Linking.openURL(redirectURL)
  }
}

Amplify.configure({
  ...awsmobile,
  oauth: {
    ...awsmobile.oauth,
    urlOpener
  }
})

const GoogleLogin = () => {

  const [ user, setUser ] = useState<any>();

  useEffect(() => {

  }, [])

  function getUser(){
    return Auth.currentAutenticatedUser()
      .then((userData: any) => userData)
      .catch(() => console.log('erro ao logar'))
  }

  return(
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Google Auth</Text>
        <Button
          title='Logar com google'
          onPress={ () => Auth.federatedSignIn()}
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