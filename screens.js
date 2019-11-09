import { Navigation } from 'react-native-navigation';

import Login from './screens/Login';
import Home from './screens/Home';
import About from './screens/About';
import Contact from './screens/Contact';

import FormScreen from './screens/Form'

const SCREENS = [
  { name: 'biobox.login', render: Login },
  { name: 'biobox.home', render: Home },
  { name: 'biobox.about', render: About },
  { name: 'biobox.contact', render: Contact },
  { name: 'biobox.form', render: FormScreen },
];

export default () =>
  SCREENS.map(({ name, render }) =>
    Navigation.registerComponent(name, () => render),
  );
