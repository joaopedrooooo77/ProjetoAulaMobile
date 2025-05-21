import { Button, Text, View, StyleSheet, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { signInWithEmailAndPassword} from 'firebase/auth';  
import { Auth } from '../controller';

export default function Login({navigation}) {

  const [email,setEmail] = useState ("");
  const[senha, setSenha] = useState ("");

  const VerificaUser = () => {
    signInWithEmailAndPassword (Auth,email,senha).then
    (userCredential => {console.log('usúario logado', userCredential.user.email);
      navigation.navigate('HomeTab');
    })

  .catch((error)=>{
    console.log('erro ao logar', error.message);
  });
  }
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Login Usúario</Text>

        <View style={styles.txtcadastcad}>
            <TextInput style={styles.input}
                placeholder="Login"
                value={email}
                onChangeText={setEmail}

            />
            <TextInput style={styles.txtcadastcad}
                placeholder="Senha"
                value={senha}
                onChangeText={setSenha}
                secureTextEntry={true}
            />
        </View>

        <TouchableOpacity onPress={VerificaUser}>
            <Text style={styles.txtcadastcad}>Logar</Text>
        </TouchableOpacity>

        <TouchableOpacity>
            <Text style={styles.txtcadastcad} onPress={() => navigation.navigate('register')}>Cadastre-se</Text>
        </TouchableOpacity>
    </View>
);
}

const styles =  StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000',
    },
    title: {
        fontSize: 30,
        color: '#FFA500',
        marginBottom: 20,
    },
    input: {
        width: 300,
        height: 40,
        borderColor: '#FFA500',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        color:'#FFA500'
    },
    txtcadastcad:{
      color:'#FFA500'
    }
});