import {View, Text, FlatList, StyleSheet, TextInput, TouchableOpacity, Keyboard, Pressable } from 'react-native';
import React, {useState, useEffect } from 'react';
import {firebase} from '../config';
import { Feather } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';

export default function Home () {
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
                        heading, //if local variable and key are the same then you only have to type the key succeeded by a comma e.g. {heading,} instead of {heading: heading}
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
    const addTodo = () => {
        // check for existing todo that isn't empty string
        if(addData && addData.length > 0){
            // get timestamp
            const timestamp = firebase.firestore.FieldValue.serverTimestamp();
            const data = {
                heading: addData,
                createdAt: timestamp
            };
            todoRef
                .add(data)
                .then(() => {
                    setAddData('');
                    // release Keyboard
                    Keyboard.dismiss();
                })
                .catch((error) => {
                    alert(error);
                });
        }
    }

    return(
        <View style={{flex: 1}}>
            <View style={styles.formContainer}>
                <TextInput
                    style={styles.input}
                    placeholder='Add Todo'
                    placeholderTextColor='grey'
                    onChangeText={(text) => setAddData(text)} //update state value for setAddData to add to do
                    value={addData} //the value of the input field will be the current state of addData in setAddData
                />
                <TouchableOpacity style={styles.button} onPress={addTodo}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
            </View>
            <FlatList 
                data={todos} 
                numColumns={1}
                // renders each item from todos array in data prop
                renderItem={({item}) =>( 
                    <View>
                        <Pressable
                            style={styles.todoContainer}
                            // navigates to and passes item to the Detail screen when item is pressed
                            onPress={() => navigation.navigate('Detail', {item})}>
                                <Feather 
                                    style={styles.todoIcon}
                                    name='x-square'
                                    color='red'
                                />
                                <View style={styles.itemContainer}>
                                    <Text style={styles.itemHeading}>{item.heading[0].toUpperCase() + item.heading.slice(1)}</Text>
                                </View>
                        </Pressable>
                    </View>
                )}
            />          
        </View>
    )
};

const styles =StyleSheet.create({
    button:{
        height: 40,
        backgroundColor: 'blue',
        borderRadius: 5,
        overflow: 'hidden',
        padding: 'auto',
        marginRight:5,
        justifyContent:'center',
        alignItems: 'center',
        flex: 0.1

    },
    buttonText:{
        color: 'white',
        fontSize: 20,
    },
    formContainer:{
        flexDirection: 'row',
        height: 80,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 100,
    },
    input:{
        height: 48,
        borderRadius: 5,
        overflow:'hidden',
        backgroundColor:'white',
        flex: 1, //since formContainer flexDirection is set to 'row' (horizontal direction), a property of <flex: 1> will occupy 100% of the device screen width
        marginRight: 5,
    },
    itemContainer:{
        alignItems:'center',
        flexDirection: 'column',
        marginLeft: 20,
    },
    itemHeading:{
        fontWeight: 'bold',
        fontSize: 20,
        marginRight: 20,
    },
    todoContainer:{
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },
    todoIcon:{
        fontSize: 20,
    },
})