import { Button, Text, View, StyleSheet, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { signInWithEmailAndPassword} from 'firebase/auth';  
import { Auth } from '../controller';

import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const ImagemFundo = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd4HScmHvgqzr65tzS1B5RFvAmKlZhu2jElg&s';

export default function Login({navigation}) {

  const [email,setEmail] = useState ("");
  const[senha, setSenha] = useState ("");

  const VerificaUser = () => {
    signInWithEmailAndPassword (Auth,email,senha).then
    (userCredential => {console.log('usúario logado', userCredential.user.email);})

  .catch((error)=>{
    console.log('erro ao logar', error.message);
  });
  }
  return (

<View style={styles.container}>
      <ImageBackground style={styles.imageBackground} source={{ uri: ImagemFundo }}>
        <Text style={[styles.title, styles.textCenter]}>Acesso Exclusivo</Text>
        <Text style={[styles.text, styles.textCenter]}>Entre agora para aproveitar o conteúdo exclusivo de Júlio Cocielo!</Text>
        
        <MaterialIcons name="login" size={40} color="black" />
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="black"

            
          />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            secureTextEntry
            placeholderTextColor="black"
          />
          {/* <{ Button title="Logar" onPress={() => {navigation.navigate('HomeTab') }} color="black" style={styles.button}  /> */}
          {/* <Button title="Cadastre-se" onPress={() => {navigation.navigate('cadastro') }} color="black" style={styles.button} /> */}
        
          <TouchableOpacity onPress={VerificaUser}>
            <Text style={styles.txtcadastlog}>Logar</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {navigation.navigate('cadastro')}}>
            <Text style={styles.txtcadastcad}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    padding: 40,
  },
  title: {
    fontSize: 36,
    color: 'orange',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    color: 'black',
    marginBottom: 40,
  },
  textCenter: {
    textAlign: 'center',
  },
  formContainer: {
    backgroundColor: 'black',
    borderRadius: 10,
    padding: 20,
    width: '100%',
    maxWidth: 350,
    alignItems: 'center',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginBottom: 15,
    paddingLeft: 15,
    fontSize: 16,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#f0a500',
    borderRadius: 5,
  },
  txtcadastcad:{
    fontSize: 15,
    color: 'orange',
  },
  txtcadastlog:{
    fontSize: 15,
    color: 'orange',
  }
});