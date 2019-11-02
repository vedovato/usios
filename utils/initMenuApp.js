import { Navigation } from "react-native-navigation";

export default () => {
  Navigation.setRoot({
    root: {
      sideMenu: {
        // left: {
        //   component: {
        //     name: 'biobox.home',
        //     passProps: {
        //       text: 'This is a left side menu screen'
        //     }
        //   }
        // },

        center: {
          stack: {
            children: [
              {
                component: {
                  name: "biobox.home"
                }
              }
            ]
          }
        },

      }
    }
  });
}
