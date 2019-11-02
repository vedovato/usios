import React from 'react';
import {Navigation} from 'react-native-navigation';
import {View, Text, TouchableHighlight, Alert, StyleSheet} from 'react-native';

import {pushScreen} from '../utils/navigation';

class Home extends React.Component {
  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this);
  }

  componentDidMount() {
    Navigation.mergeOptions(this.props.componentId, {
      topBar: {
        title: {text: 'Hello'},
        subtitle: {text: 'World'},
        // elevation: 0,
        // background: {
        //   color: 'transparent',
        // },
        rightButtons: [
          {
            id: 'meuBotao',
            text: 'hey',
          },
          //   {
          //     id: 'b2',
          //     text: 'Teste',
          //   },
        ],
      },
    });
  }

  navigationButtonPressed({buttonId}) {
    if (buttonId == 'meuBotao') {
      // console.warn('Hello, World');
      Navigation.mergeOptions(this.props.componentId, {
        sideMenu: {
          left: {
            visible: true,
          },
        },
      });
    }
  }

  _onPress = async () => {
    const BASE =
      'https://autorizadorbiobox.websiteseguro.com/sistema/api/gerenciador.php';
    const BASE2 = 'https://www.biobox.net.br/sistema/api/gerenciador.php';

    const SENHA = 'Usios*BioBox@2019';
    const ACAO = 'cartao';
    const OPERACAO = 'C';
    const DADOS = "{numero: '22'}";

    const URL = `${BASE}?senha=${SENHA}&acao=${ACAO}&operacao=${OPERACAO}&dados=${DADOS}`;

    const raw = await fetch(URL);
    const data = await raw.json();
    console.warn('URL', data);

    // pushScreen({
    //   id: this.props.componentId,
    //   name: 'biobox.about',
    // });
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <Text style={{fontSize: 60}}>Hello, World!</Text>

        <TouchableHighlight
          style={[styles.btnWrapper, {backgroundColor: 'yellow'}]}
          onPress={this._onPress}>
          <Text style={styles.btnText}>Click me!</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export const styles = StyleSheet.create({
  btnWrapper: {
    backgroundColor: 'cyan',
    padding: 20,
    marginHorizontal: 20,
    borderRadius: 20,
    marginTop: 20,
  },

  btnText: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
  },
});

export default Home;
