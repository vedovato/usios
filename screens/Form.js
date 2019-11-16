import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {Navigation} from 'react-native-navigation';
import API from '../utils/api';
import {
  Root,
  Container,
  Button,
  Content,
  Text,
  Form,
  Item,
  Picker,
  Input,
  DatePicker,
  Textarea,
  Toast,
  Row,
  Col,
} from 'native-base';

const Separator = () => <View style={{width: '100%', height: 20}} />;

const FormScreen = props => {
  const DATA = new Date();
  const [data, setData] = useState(null);
  const [fields, setFields] = useState({
    fkcategoria_usuario: props.fkcategoria_usuario,
    nome: props.nome,
    data: props.data,
    dataBR: props.data_br,
    mensagem: props.mensagem,
  });

  useEffect(() => {
    const acao = 'get_categoria_usuario';
    API({acao}).then(({retorno}) => setData(retorno));
  }, []);

  const _setFields = (field, value) => {
    setFields({...fields, [field]: value});
  };

  const _showToast = (type, text) =>
    Toast.show({
      buttonText: 'Ok',
      position: 'top',
      duration: 3000,
      text,
      type,
      style: {
        marginHorizontal: 20,
        borderRadius: 5,
      },
    });

  const _handleFormSubmit = async () => {
    const retorno = await API({
      acao: 'api_teste',
      dados: JSON.stringify(fields),
      id: props.edit ? props.id : null,
      operacao: props.edit ? 'U' : 'I',
    });

    const JEIZAO_MAROTO = JSON.stringify(retorno, null, 2);
    retorno.status == '1' && _showToast('success', JEIZAO_MAROTO);
    retorno.status == '-1' && _showToast('danger', JEIZAO_MAROTO);
    !retorno && _showToast('danger', 'Erro no servidor');
  };

  const _handleRemoval = async () => {
    const retorno = await API({
      acao: 'api_teste',
      id: props.id,
      operacao: 'D',
    });

    retorno.status == '-1' && _showToast('danger', 'Erro ao Apagar');
    !retorno && _showToast('danger', 'Erro no servidor');

    if (retorno.status == '1') {
      _showToast('success', 'Registro Apagado!');
      setTimeout(() => {
        Navigation.pop(props.componentId);
      }, 2000);
    }
  };

  return (
    <Root>
      <Container>
        <Content padder>
          {/* <Text style={{backgroundColor: 'green'}}> */}
          {/*   {JSON.stringify(fields, null, 2)} */}
          {/* </Text> */}

          <Form style={{padding: 20}}>
            <Text style={{fontSize: 25, fontWeight: '700'}}>
              Formulário Genérico
            </Text>

            <Text
              style={{
                color: '#666',
                fontSize: 12,
                textTransform: 'uppercase',
              }}>
              Preencha os campos para continuar
            </Text>

            <Separator />
            <Separator />

            <Item regular>
              <Input
                value={fields.nome}
                onChangeText={val => _setFields('nome', val)}
                placeholder="Seu nome"
              />
            </Item>

            <Separator />

            <View style={{borderWidth: 1, borderColor: '#dedede'}}>
              <DatePicker
                defaultDate={new Date()}
                minimumDate={new Date(2018, 1, 1)}
                maximumDate={new Date(2018, 12, 31)}
                value={fields.dataBR}
                // timeZoneOffsetInMinutes={true}
                locale={'pt_BR'}
                modalTransparent={false}
                animationType={'fade'}
                placeHolderText={fields.dataBR || 'Selecione a data'}
                textStyle={{color: 'green'}}
                placeHolderTextStyle={{color: '#dedede'}}
                onDateChange={val => _setFields('data', val)}
                // disabled={false}
              />
            </View>

            <Separator />

            <View style={{borderWidth: 1, borderColor: '#dedede'}}>
              <Item picker>
                <Picker
                  mode="dropdown"
                  // style={{backgroundColor: 'gold'}}
                  placeholder="Clique aqui papai"
                  placeholderStyle={{color: '#bfc6ea'}}
                  placeholderIconColor="#007aff"
                  selectedValue={fields.fkcategoria_usuario}
                  onValueChange={val => _setFields('fkcategoria_usuario', val)}>
                  <Picker.Item label="Selecione" value={null} />
                  {data &&
                    data.map(({nome, idcategoria_usuario}, key) => (
                      <Picker.Item
                        key={key}
                        label={nome}
                        value={idcategoria_usuario}
                      />
                    ))}
                </Picker>
              </Item>
            </View>

            <Separator />

            <Textarea
              rowSpan={5}
              bordered
              value={fields.mensagem}
              onChangeText={val => _setFields('mensagem', val)}
              placeholder="Preencha aqui meu consagrado"
            />

            <Separator />
            <Separator />

            <Row>
              <Col>
                <Button
                  primary
                  block
                  rounded
                  disabled={Object.entries(fields).length ? false : true}
                  onPress={_handleFormSubmit}>
                  <Text>{props.edit ? 'Atualizar' : 'Inserir'}</Text>
                </Button>
              </Col>

              {props.id && (
                <Col style={{marginLeft: 40}}>
                  <Button danger block rounded onPress={_handleRemoval}>
                    <Text>Remover</Text>
                  </Button>
                </Col>
              )}
            </Row>
          </Form>
        </Content>
      </Container>
    </Root>
  );
};

export default FormScreen;
