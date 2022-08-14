import React from "react";
import { Text, View, ImageBackground, StyleSheet } from "react-native";

function WelcomeScreen(props) {
    return(
        <View style={styles.container}>
            <Text>My Todos</Text>
            <ImageBackground
            style={styles.background}
            source={require("../assets/icon.png")}/>
        </View>
    )
}

const styles = StyleSheet.create({
    background:{
        flex: 0.5,
        width: '100%',
        height: '100%',
    },
    
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
    },
      
})

export default WelcomeScreen;