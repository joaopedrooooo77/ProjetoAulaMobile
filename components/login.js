import { Text, View, StyleSheet, ImageBackground, TextInput } from 'react-native';
import { Button } from 'react-native-web';

const ImagemFundo = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd4HScmHvgqzr65tzS1B5RFvAmKlZhu2jElg&s';

export default function Login() {
  return (

<View style={styles.container}>
      <ImageBackground style={styles.imageBackground} source={{ uri: ImagemFundo }}>
        <Text style={[styles.title, styles.textCenter]}>Acesso Exclusivo</Text>
        <Text style={[styles.text, styles.textCenter]}>Entre agora para aproveitar o conteúdo exclusivo de Júlio Cocielo!</Text>

        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#888"
          />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            secureTextEntry
            placeholderTextColor="#888"
          />
          <Button title="Logar" onPress={() => {}} color="#fff" style={styles.button} />
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
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
});