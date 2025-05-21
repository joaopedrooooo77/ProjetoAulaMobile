import {View, Text, StyleSheet, FlatList, Image} from "react-native";
import { useState, useEffect } from "react";
import { db } from "../controller";
import { collection, getDocs} from 'firebase/firestore';
import Card from "../components/cards";
import { adicionarProduto, useCarrinho } from "../components/ProviderCart";


export default function Produtos () {
    const [produtos, setProdutos] =  useState([]);
    const adicionarProduto = useCarrinho();

        useEffect(() => {
            async function carregarProdutos(){
                try{
                    const querySnapshot = await getDocs (collection(db, 'produtos'));
                    const lista = [];
                    querySnapshot.forEach((doc) => {
                        lista.push({id: doc.id, ...doc.data()});
                    });
                    setProdutos(lista);
                }
                catch (error){
                    console.log('erro ao buscar produtos', error);
                }
                }
                carregarProdutos();
        }, []);
        

    return(
        <View style = {styles.container}>

            <Text style ={styles.text}>Lista de Produtos </Text>
                <FlatList
                    data = {produtos}
                    renderItem= {({item}) => (
                        <Card
                        nome = {item.nome}
                        valor = {item.valor}
                        imagem = {item.imagem}
                        comprar = {()=> {
                            adicionarProduto(item);
                            navigation.navigate('carrinho');
                        }}

                        />
                    )}
                    keyExtractor = {item => item.id}
                
            />
        </View> 
    )
}

    const styles = StyleSheet.create({
    container:{
        flex:1,
        justfyContent: 'center',
    },
    card:{
        padding:10,
        margin: 10,
        backgroundColor: '#B0E0E6',
        borderRadius:8,
        alignItems: 'center',
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
    text:{
        fontsize:50,
        color: 'black',    
        textAlign:'center',
    },
})