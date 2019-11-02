import { Navigation } from "react-native-navigation";

export default () => {
  Navigation.setRoot({
  root: {
    stack: {
      // options: {
      //   topBar: {
      //     visible: false
      //   }
      // },
      children: [
        {
          component: {
            name: 'biobox.login',
          }
        }
      ]
    }
  }
  });

  // Navigation.setRoot({
  //   root: {
  //     component: {
  //       name: "biobox.login"
  //     }
  //   }
  // });
}
