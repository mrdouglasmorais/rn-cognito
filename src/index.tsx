import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/home';
import SignIn from './screens/signIn';
import SignUp from './screens/signUp';
import GoogleLogin from './screens/googleLogin';

const Stack = createStackNavigator();

const Routes = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
        />
         <Stack.Screen
          name="GoogleLogin"
          component={GoogleLogin}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes;