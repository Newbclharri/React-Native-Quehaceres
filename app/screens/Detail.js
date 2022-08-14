import { View, Text, TextInput, StyleSheet, Pressable} from 'react-native';
import React, { useState } from 'react';
import { firebase } from '../config';
import { useNavigation } from '@react-navigation/native'

export default function Detail ({route}) {
    const navigation = useNavigation();
    const todoRef = firebase.firestore().collection('todos');
    const [textHeading, onChangeHeadingText] = useState(route.params.item);

    const updateTodo = () => {
        if (textHeading && textHeading.length > 0){
            todoRef
            .doc(route.params.item.id)
            .update({
                heading: textHeading,
            })
            .then(()=>{
                navigation.navigate('Home')
            })
            .catch(error =>{
                alert(error);
            });

        }
    }

    return(
        <View style={styles.container}>
            <TextInput
                style={styles.textField} 
                onChangeText={onChangeHeadingText}
                placeholder={textHeading.heading}
                value={textHeading.name}
                
            />
            <Pressable
                style={styles.buttonUpdate}
                onPress={()=>{updateTodo()}}>
                <Text>UPDATE</Text>
            </Pressable>
        </View>
    )
};

const styles = StyleSheet.create({
    buttonUpdate: {
        backgroundColor: 'lightgreen',
        borderRadius: 5,
        marginTop: 25,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf:'center',
        elevation: 10,
        paddingVertical: 15,
        paddingHorizontal: 20,
        width: '50%'
        
    },
    container:{
        marginTop: 80,
        marginLeft: 15,
        marginRight: 15,
    },
    textField: {
        backgroundColor: '#e0e0e0',
        borderRadius: 10,
        marginBottom: 10,
        padding: 10,
        fontSize: 15,
        color: '#000000',
    }
})