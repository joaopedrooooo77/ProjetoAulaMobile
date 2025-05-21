import {View, Text, Imagem,StyleSheet,FlatList} from 'react-native';
import { useCarrinho } from '../components/ProviderCart';

export default function Carrinho (){
    const {carrinho} = useCarrinho();

    return(
        <View style = {styles.container}>
            <Text style = {styles.card}>Produtos no Carrinho</Text>
            <FlatList
                data = {carrinho}
                renderItem = {({item}) => (
                    <View>
                        <Image style = {styles.img}>
                            source= {{uri:item.
                            imagem}} /></Image>
                    <Text style = {styles.txtprod}>R${item.nome}</Text>
                    <Text style = {styles.txtprod}>R${item.valor}</Text>
                            
                    />
                )}
            />
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