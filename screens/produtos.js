import {View, Text, StyleSheet, FlatList, Image} from "react-native";
import { useState, useEffect } from "react";
import { db } from "../controller";
import { collection, getDocs} from 'firebase/firestore';

export default function Produtos () {
    const [produtos, setProdutos] =  useState([]);

        useEffect(() => {
            async function carregarProdutos(){
                try{
                    const querySnapshot = await getDocs (collection(db, 'produtos'));
                    const lista = [];
                    querySnapshot.forEach((doc) => {
                        list.push({id: doc.id, ...doc.data()});
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
            {/* ARRAY COM MAP <Text style ={styles.text}>
                Produtos
            </Text>
            {produtos.map((item) => ( //item é tipo o id
                <Text> style ={styles.txtprod}
                    {item.nome} - r$ {item.valor}
                </Text>
            ))} */}

            <Text style ={styles.text}>Lista de Produtos </Text>
                <FlatList>
                    data = {produtos}
                    renderItem= {({item}) => (
                        <View style = {styles.card}>
                            <Image style = {styles.imagem} source={{uri: item.imagem}} ></Image>
                            <Text>{item.nome}</Text>
                            <Text>{item.valor}</Text>
                        </View>
                    )}
                    keyExtractor={item => item.id}
                </FlatList>
            
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
        fontsize:30,
        color: '#87CEEB',    
    },
})