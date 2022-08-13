import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  let x = 1;
  console.log('App executed');
  function handlePress(){
    console.log("Text 1 pressed");
  };

  handlePress();
  return (
    <View style={styles.container}>
      <Text onPress={handlePress}>Finally, it works, again!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
