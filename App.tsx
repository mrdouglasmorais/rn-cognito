import Routes from './src';
import { Amplify } from 'aws-amplify';
import awsmobile from './src/aws-exports';

import urlOpener from './src/utils/urlOpener';

Amplify.configure({
  ...awsmobile, 
  oauth: {
    ...awsmobile.oauth,
    urlOpener
  }
})

const App = () => {
  return <Routes />
}

export default App;