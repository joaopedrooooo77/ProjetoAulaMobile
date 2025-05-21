import {View, Text, StyleSheet,Image} from 'react-native';
import { Button } from 'react-native-web';

export default function Card(imagem,nome,valor,comprar){
    return(
        <View style={StyleSheet.card}>
            <Image style= {styles.imagem}
                source={{uri:imagem}}>
            </Image>
            <Text style = {styles.txtprod}>R${nome}</Text>
            <Text style = {styles.txtprod}>R${valor}</Text>
            <Button title = 'Comprar' onPress = {comprar} color = 'black'></Button>

        </View>
    )
}

const styles = StyleSheet.create({
    card:{
        padding:10,
        margin: 10,
        backgroundColor: '#B0E0E6',
        borderRadius:8,
        alignItems: 'center',
        flexDirection: 'row',
    },
    imagem:{
        width:100,
        height: 100,
        borderRadius:6,
    },
    text:{
        fontsize:30,
        color: '#87CEEB',
    },
    txtprod:{
        fontsize:30,
        color: '#87CEEB',    
    },
})
 