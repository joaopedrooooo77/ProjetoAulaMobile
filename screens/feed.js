import { StyleSheet, View, Text, Image, Button } from "react-native-web";

export default function Feed (){
    return(
        <View>
            <Text style= {styles.Text}>Viva a vida</Text>
            <Text style= {styles.Text}>Erros do passado significam acertos no futuro</Text>

            <Image style={styles.Image} source={{uri: 'https://conteudo.imguol.com.br/c/esporte/f3/2021/08/11/julio-cocielo-apresenta-programa-galera-esporte-clube-na-rede-tv-1628712572627_v2_1x1.jpg'}} />
        
        <Button
        title= 'saiba mais'
        color= '#0000FF'
        />

            
        </View>

    )

}

const styles =StyleSheet.create({
    container:{
        flex : 1,
        justifyContent : 'space-evenly' ,
        algniItems: 'center' ,

    },
    Image:{

    width: 450,
    height: 450,

    },
    Text:{
        fontSize: 50,
    }
})