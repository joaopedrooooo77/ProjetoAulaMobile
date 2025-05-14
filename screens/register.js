import { Button, View, StyleSheet, TextInput } from 'react-native';
import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Auth } from '../controller';


export default function Register({navigation}) {

    const [email,setEmail] = useState ("");
    const[senha, setSenha] = useState ("");


    const cadastroUser = () => {
      createUserWithEmailAndPassword(Auth, email,senha)
    .then((userCredential) => {
      console.log('cadastrado!', userCredential.user.email);
      navigation.navigate('login');
    })
    .catch((error) => {
      console.log('erro', error.message);
    });
  
  }
  return (

<View style={styles.container}>

        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="black"
            value ={email}
            onChangeText={setEmail}

            
          />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            secureTextEntry
            placeholderTextColor="black"
            value ={senha}
            onChangeText={setSenha}

          />
         {/*  <Button title="Logar" onPress={() => {navigation.navigate('login') }} color="#fff" style={styles.button} /> */}
          <Button title="Cadastrar" onPress={cadastroUser} color="orange"  />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
  },
  title: {
    fontSize: 36,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    color: 'black',
    marginBottom: 20,
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
    backgroundColor: 'gray',
    borderRadius: 5,
    marginBottom: 15,
    paddingLeft: 15,
    fontSize: 16,
  },
});