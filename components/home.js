//import ImagemFundo from "projetox/assets/ImagemFundo";
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';


export default function Home (){
  return(
    <View style={styles.container}>


      <Text style={[styles.title, styles.textCenter]}>JÚLIO COCIELO</Text>
      <Text style={[styles.subtitle, styles.textCenter]}>
        Já pensou em um encontro com essa lenda do entretenimento?
      </Text>

      <View style={styles.imgContainerEvenly}>
        <Image 
          style={styles.img} 
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9leJzUFbSQvJcChWyK95XAjQsMl8wGoKVmw&s' }} 
        />
        <Image 
          style={styles.img} 
          source={{ uri: 'https://f.i.uol.com.br/fotografia/2023/05/21/1684694856646a6748a4bbe_1684694856_3x2_md.jpg' }} 
        />
      </View>
      <View style={styles.imgContainerEvenly}>
        <Image 
          style={styles.img} 
          source={{ uri: 'https://www.portalolavodutra.com.br/uploads/65980a3a755b2.jpg' }} 
        />
        <Image 
          style={styles.img} 
          source={{ uri: 'https://uploads.metroimg.com/wp-content/uploads/2024/01/04115723/Julio-Cocielo-1.jpg' }} 
        />
      </View>

      <Text style={[styles.text, styles.textCenter]}>
        Venha saber mais sobre o influenciador e empresário Júlio Cocielo, uma pessoa que transformou sua vida, divertindo pessoas!
      </Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Logar</Text>
      </TouchableOpacity>

  </View>
    )
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
    fontSize: 38,
    fontWeight: 'bold',
    color: '#FF6347',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 20,
    color: 'white',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#FF6347',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  textCenter: {
    textAlign: 'center',
  },
  img: {
    width: 130,
    height: 130,
    borderRadius: 10,
    marginBottom: 10,
  },
  imgContainerEvenly: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
    paddingLeft: 15,
    fontSize: 16,
    color: '#333',
  },
});