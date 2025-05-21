import { StyleSheet, View, Text, Image, Button } from "react-native-web";

export default function Feed (){
    return(
        <View>
            <Text style= {styles.Text}>Viva a vida</Text>
            <Text style= {styles.Text}>Erros do passado significam acertos no futuro</Text>

            <Image style={styles.Image} source={{uri: 'https://conteudo.imguol.com.br/c/esporte/f3/2021/08/11/julio-cocielo-apresenta-programa-galera-esporte-clube-na-rede-tv-1628712572627_v2_1x1.jpg'}} />
        </View>

    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'black',
    },
    Text:{
        fontSize: 20,
        color: 'black',
        textAlign: 'center',
        margin: 10,
    },
    Image:{
        alignSelf: 'center',
        width: 200,
        height: 200,
        borderRadius: 10,
        marginTop: 10,
    },
})