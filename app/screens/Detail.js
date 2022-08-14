import { View, Text, TextInput, StyleSheet, Pressable} from 'react-native';
import React, { useState } from 'react';
import { firebase } from '../config';
import { useNavigation } from '@react-navigation/native'

const Detail = ({route}) => {
    console.log("Item: ",route.params.item.name)
    const navigation = useNavigation();
    const todoRef = firebase.firestore().collection('todos');
    const [textHeading, onChangeHeadingText] = useState(route.params.item.name);

    const updateTodo = () => {
        
    }

    return(
        <View>
            <Text>Detail</Text>
        </View>
    )
};

export default Detail;