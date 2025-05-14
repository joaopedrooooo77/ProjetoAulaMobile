import { Button, View, StyleSheet, TextInput } from 'react-native';
import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Auth } from '../controller';
import {collection, addDoc} from 'firebase/firestore';


export default function cadastroproduto({navigation}) {

    const [nome,setNome] = useState ("");
    const[valor, setValor] = useState ("");
    const[imagem, setIMagem] = useState ("");

    const CadastrarProduto = async () => {
      try{
        await addDoc (collection(db, 'produtos'),{
          nome,
          valor: parseFloat(valor),
          imagem,
        });
        setNome('');
        setValor(''),
        setImagem('')
      }
      catch(error){
        console.log('erro no cadastro do produto', error)
    }
    }

  return (

<View style={styles.container}>

        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Nome do produto"
            placeholderTextColor="black"
            value ={nome}
            onChangeText={setNome}

            
          />
          <TextInput
            style={styles.input}
            placeholder="Preco"
            secureTextEntry
            placeholderTextColor="black"
            value ={valor}
            onChangeText={setValor}

          />
                    <TextInput
            style={styles.input}
            placeholder="Imagem"
            secureTextEntry
            placeholderTextColor="black"
            value ={imagem}
            onChangeText={setIMagem}

          />
   
          <Button title="Cadastrar Produto" onPress={cadastroproduto} color="#fff"  />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    padding: 40,
  },
  title: {
    fontSize: 36,
    color: '#f0a500',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    color: 'white',
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
    backgroundColor: 'orange',
    borderRadius: 5,
    marginBottom: 15,
    paddingLeft: 15,
    fontSize: 16,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: 'orange',
    borderRadius: 5,
  },
});