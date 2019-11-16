import {Navigation} from 'react-native-navigation';

export const pushScreen = ({id, name, passProps = {}, options = {}}) => {
  Navigation.push(id, {
    component: {
      name,
      passProps,
      options,
    },
  });
};
