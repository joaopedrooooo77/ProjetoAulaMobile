import { Button, View, StyleSheet, TextInput } from 'react-native';
import { useState } from 'react';
import { db } from '../controller';
import {collection, addDoc} from 'firebase/firestore';


export default function Cadastroproduto({navigation}) {

    const [nome,setNome] = useState ("");
    const[valor, setValor] = useState ("");
    const[imagem, setImagem] = useState ("");

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
            placeholderTextColor="black"
            value ={valor}
            onChangeText={setValor}

          />
                    <TextInput
            style={styles.input}
            placeholder="Imagem"
            placeholderTextColor="black"
            value ={imagem}
            onChangeText={setImagem}

          />
   
          <Button title="Cadastrar Produto" onPress={CadastrarProduto} color="orange"  />
        </View>
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
  formContainer: {
    width: '80%',
    backgroundColor: '#FF8C00',
    padding: 20,
    borderRadius: 10,
  },
  input: {
    height: 40,
    borderColor: '#FF8C00',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    color:'black'
  },
});