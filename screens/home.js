import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function Home (){
  return(
    <View style={styles.container}>

      <Text style={[styles.title, styles.textCenter]}>Júlio Cocielo</Text>
      <Text style={[styles.subtitle, styles.textCenter]}>
        Já pensou em um encontro com essa lenda do entretenimento
      </Text>

      <MaterialIcons name="add-home" size={24} color="black" />
      
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
        Venha saber mais sobre o influenciador e empresário Júlio Cocielo!
      </Text>

  </View>
    )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#000000',
  },
  title:{
    fontSize:30,
    color:'#FFA500',
  },
  subtitle:{
    fontSize:20,
    color:'#FFA500',
  },
  text:{
    fontSize:15,
    color:'#FFA500',
  },
  textCenter:{
    textAlign:'center',
  },
  imgContainerEvenly:{
    flexDirection:'row',
    justifyContent:'space-evenly',
    width:'100%',
  },
  img:{
    width:150,
    height:150,
    borderRadius:10,
  }
})