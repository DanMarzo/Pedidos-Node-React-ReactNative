import React, { useContext, useState } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { Toast } from '../../shared/toast/toast';
import { AuthContext } from '../../context/AuthContext';

const SignIn = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { signIn } = useContext(AuthContext);
  async function handleLogin() {
    if (email === '' || password === '') {
      Toast.exibirToast('Digite o email/senha');
    } else {
      await signIn({ email, password });
    }
  }
  return (
    <View style={estilo.container}>
      <Image style={estilo.logo} source={require('../../assets/logo.png')} />
      <View style={estilo.inputContainer}>
        <TextInput
          placeholderTextColor="#f0f0f0"
          style={estilo.input}
          placeholder="Digite seu email"
          onChange={(text) => setEmail(text.nativeEvent.text)}
        />
        <TextInput
          placeholderTextColor="#f0f0f0"
          style={estilo.input}
          placeholder="Sua senha"
          secureTextEntry={true}
          onChange={(text) => setPassword(text.nativeEvent.text)}
        />
        <TouchableOpacity style={estilo.button} onPress={handleLogin}>
          <Text style={estilo.buttonText}>Acessar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignIn;

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1d1d2e',
  },
  logo: {
    marginBottom: 18,
  },
  inputContainer: {
    width: '95%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 32,
    paddingHorizontal: 14,
  },
  input: {
    width: '95%',
    height: 40,
    backgroundColor: '#101026',
    marginBottom: 12,
    borderRadius: 4,
    paddingHorizontal: 8,
    color: 'white',
  },
  button: {
    width: '95%',
    height: 40,
    backgroundColor: '#3fffa3',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#101026',
  },
});
