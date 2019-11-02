import React, {useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
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
  const [inputLogin, setInputLogin] = useState('andrei');
  const [inputSenha, setInputSenha] = useState(null);

  const _handleFormSubmit = () => {
    initMenuApp();
  };

  return (
    <Container>
      <View style={styles.wrapper}>
        <Image source={LOGO} style={styles.logo} />

        <Form style={{width: '80%'}}>
          <Item floatingLabel>
            <Label>Login</Label>
            <Input value={inputLogin} onChangeText={setInputLogin} />
          </Item>

          <Item floatingLabel last>
            <Label>Senha</Label>
            <Input
              password
              value={inputSenha}
              secureTextEntry={true}
              onChangeText={setInputSenha}
            />
          </Item>

          <Button
            primary
            full
            rounded
            style={{marginTop: 60}}
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
