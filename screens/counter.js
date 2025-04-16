import { StyleSheet, View, Text, Button, TouchableOpacity, TextInput } from "react-native-web";
import { useState } from "react";

export default function Counter (){
    const [contador, setContador] = useState(0);

    function Aumentar (){

        setContador(contador + 1)
    }
    function Diminuir (){
        if (contador > 0){
        setContador(contador - 1)
        }


    }
    return(
        <View style = {styles.container}>
            <Text style= {styles.Text}>Contador do JP</Text>
            <Text style= {styles.Text}>Contador: {contador}</Text>
  
                <View style={styles.row}>

                    <TouchableOpacity style = {styles.botao} onPress= {Aumentar}>
                    <Text style= {styles.txtBotao} >+</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.botao} onPress= {Diminuir}>
                    <Text style= {styles.txtBotao} >-</Text>
                    </TouchableOpacity>

                </View>
                <View style = {styles.TextInput}>
                    <TextInput 
                    placeholder="Nome"
                    placeholderTextColor={'#87CEEB'}
                    style={styles.TextInput}
                    />

                    <TextInput 
                    placeholder="Email"
                    placeholderTextColor={'#87CEEB'}
                    style={styles.TextInput}
                    />
                </View>
        </View>

    )
}

const styles =StyleSheet.create({

    container:{
        flex : 1,
        justifyContent : 'space-evenly' ,
        algniItems: 'center' ,
        padding: 40,
        backgroundColor: '#A9A9A9',

    },
    Text:{
        fontSize: 30,
        algniItems: 'center' ,
        padding: 40,
    },
    row:{
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    botao:{
        width: '35%',
        borderRadius: '20%',
        backgroundColor: '#B0E0E6',
    },
    txtBotao:{
        textAlign: 'center',
        fontSize: 150,
        color: '#1C1C1C',
    },
    TextInput:{
        textAlign: 'center',
        fontSize: 30,
        color: '#1C1C1C',
        height: '20%',
        justifyContent: 'space-around',
        borderRadius: '20%',
    }

})