import Routes from './src';
import { Amplify } from 'aws-amplify';
import awsmobile from './src/aws-exports'

Amplify.configure(awsmobile)

const App = () => {
  return <Routes />
}

export default App;