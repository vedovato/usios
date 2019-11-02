import {Navigation} from 'react-native-navigation';
import initMenuApp from './utils/initMenuApp';
import initSingleScreenApp from './utils/initSingleScreenApp';
import registerScreens from './screens';

registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
  initSingleScreenApp();
  // initMenuApp();

  Navigation.setDefaultOptions({
    layout: {
      backgroundColor: 'red',
    },
    topBar: {
      visible: true,
      title: {alignment: 'center', fontWeight: '700'},
      subtitle: {alignment: 'center'},
    },
  });
});
