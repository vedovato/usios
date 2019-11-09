import React, { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
// import {pushScreen} from '../utils/navigation';
import initMenuApp from '../utils/initMenuApp';
import {
  Container,
  Content,
  Button,
  Form,
  Item,
  Input,
  Label,
} from 'native-base';

const LOGO = require('../images/logo.png');

const LoginScreen = props => {
  const [fields, setFields] = useState({})

  const _setFields = (field, value) => {
    setFields({ ...fields, [field]: value })
  }

  const _handleFormSubmit = () => {
    // console.warn('INPUTS', inputLogin, inputSenha);
    initMenuApp();
  };

  return (
    <Container>
      <View style={styles.wrapper}>
        <Image source={LOGO} style={styles.logo} />

        <Text>
          {JSON.stringify(fields)}
        </Text>

        <Form style={{ width: '80%' }}>
          <Item>
            <Label>Login</Label>
            <Input value={fields.login} onChangeText={res => _setFields('login', res)} />
          </Item>

          <Item>
            <Label>Senha</Label>
            <Input
              password
              value={fields.senha}
              secureTextEntry={true}
              onChangeText={res => _setFields('senha', res)}
            />
          </Item>

          <Button
            primary
            full
            rounded
            style={{ marginTop: 60 }}
            onPress={_handleFormSubmit}>
            <Text style={styles.btnLoginText}>Prosseguir</Text>
          </Button>
        </Form>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    width: '80%',
    height: 90,
    marginBottom: 20,
    resizeMode: 'contain',
  },

  btnLoginText: {
    color: 'white',
    fontSize: 14,
    textTransform: 'uppercase',
    fontWeight: '700',
  },
});

export default LoginScreen;
