import {View, Text, StyleSheet,Image} from 'react-native';

export default function Card(){
    return(
        <View style={StyleSheet.card}>
            <Image> style= {style.imagem}
                source={{uri:imagem}}
            </Image>
            <Text style = {StyleSheet.txtprod}>R${nome}</Text>
            <Text style = {StyleSheet.txtprod}>R${valor}</Text>
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