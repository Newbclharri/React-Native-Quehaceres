import {View, Text, FlatList, StyleSheet, TextInput, TouchableOpacity, Keyboard, Pressable } from 'react-native';
import React, {useState, useEffect } from 'react';
import {firebase} from '../config';
import { FontAwesome } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
    const [todos, setTodos] =useState([]);
    const todoRef = firebase.firestore().collection('todos');
    const [addData, setAddData] = useState('');
    const navigation = useNavigation();


    // fetch data from the firestore database
    useEffect(() =>{
        todoRef
        .orderBy('createdAt', 'desc')
        .onSnapshot(
            querySnapshot => {
                const todos = []
                querySnapshot.forEach((doc) => {
                    const {heading} = doc.data()
                    todos.push({
                        id: doc.id,
                        heading,
                    })
                })
                setTodos(todos)
            }
        )
    }, []);

    const deleteTodos = async (todos) => {
        try{
            await todoRef
                .doc(todos.id)
                .delete();
            alert("Todo Deleted");
        }catch(error){
            alert(error);
        };
    };

    // add a todo
    const addTodo = async () =>{
        // check for existing todo that isn't empty string
        if(addData && addData.length > 0){
            // get timestamp
            const timestamp = firebase.firestore.FieldValue.serverTimestamp();
            const data = {
                heading: addData,
                createdAt: timestamp
            };
            try{
                await todoRef
                    .add(data)
                setAddData(''); //resets addData state
                // release Keyboard
                Keyboard.dismiss();
            }catch(error){
                alert(error);
            };
        }
    }

    return(
        <View>
            <Text>Home</Text>
        </View>
    )
};

export default Home;