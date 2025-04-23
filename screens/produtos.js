import {View, Text, StyleSheet, FlatList, Image} from "react-native";
import { useState } from "react";

export default function Produtos (){
    const [produtos, setProdutos] =  useState([
        {id:1, nome: 'Camiseta do Criciúma', valor: 199.99, imagem: 'https://d9aearf180tto.cloudfront.net/Custom/Content/Products/71/22/71221_of-camisa-jogo-3-s-num-cec-adl-pr-19001-c0693_l8_638579520089570336.webp'},
        {id:2, nome: 'Bermuda Volt', valor: 99.99, imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3b141Lr3TU0FDtTbEeJwSE5UnV7bUdgwZIA&s'},
        {id:3, nome: 'Chuteira Nike', valor: 349.99, imagem: 'https://d2r9epyceweg5n.cloudfront.net/stores/002/341/698/rte/chuteira-nike-mercurial-superfly-9-elite-fg-rising-gem-%20cinza-preta.png'},
        {id:4, nome: 'Pro Socks', valor: 30.00, imagem: 'https://cdn.dooca.store/852/products/ftghfgh_640x640+fill_ffffff.png?v=1695932655&webp=0'},

    ])
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