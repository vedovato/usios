import React, {Component} from 'react';
import {Navigation} from 'react-native-navigation';
import {FlatList} from 'react-native';
import {pushScreen} from '../utils/navigation';
import API from '../utils/api';
import {
  Root,
  Container,
  Content,
  Text,
  Icon,
  Header,
  List,
  ListItem,
  Thumbnail,
  Left,
  Body,
  Right,
  Button,
} from 'native-base';

class ListScreen extends Component {
  state = {data: []};

  componentDidMount() {
    this.navigationEventListener = Navigation.events().bindComponent(this);

    Navigation.mergeOptions(this.props.componentId, {
      topBar: {
        title: {text: 'Lista de Usuários'},
        subtitle: {text: 'Toque para editar'},
      },
    });
  }

  componentDidAppear() {
    const acao = 'get_api_teste';
    API({acao}).then(({retorno}) => this._setData(retorno));
  }

  _setData = data => this.setState({data});

  _onPress = arg => {
    const edit = !Object.keys(arg).length;
    pushScreen({
      id: this.props.componentId,
      name: 'biobox.form',
      passProps: {...arg, edit: !edit},
      options: {
        topBar: {
          title: {text: !edit ? 'Atualizar Registro' : 'Inserir Registro'},
          subtitle: {text: 'Preencha os campos'},
        },
      },
    });
  };

  render() {
    return (
      <Root>
        <Container>
          <Content padder>
            <Button primary full onPress={() => this._onPress({})}>
              <Text>Novo</Text>
            </Button>

            <FlatList
              data={this.state.data}
              renderItem={({item}) => {
                return (
                  <List>
                    <ListItem thumbnail>
                      <Left>
                        <Text note style={{textAlign: 'center'}}>
                          {item.id}
                        </Text>
                      </Left>
                      <Body>
                        <Text>{item.nome}</Text>
                        {item.data ? (
                          <Text note numberOfLines={1}>
                            {item.data_br}: {item.mensagem}
                          </Text>
                        ) : null}
                      </Body>
                      <Right>
                        <Button transparent onPress={() => this._onPress(item)}>
                          <Text>Ver</Text>
                        </Button>
                      </Right>
                    </ListItem>
                  </List>
                );
              }}
            />
          </Content>
        </Container>
      </Root>
    );
  }
}

export default ListScreen;
