import { StatusBar } from 'expo-status-bar';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { planetas } from './planetas'
import { Planeta } from './Planeta'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={"#247BA0"} />
      <View style={styles.topo}>
        <Text>Vamos explorar!</Text>
        <Image style={styles.img} source={{
          uri: 'https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL291dGVyLXNwYWNlLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6ODI4fX19',
        }} />
      </View>
      <ScrollView>
        {
          planetas.map((planeta) => (
            <Planeta planeta={planeta}></Planeta>
          ))
        }
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8F1F2',
    alignItems: 'center',
    marginTop: 50
  },
  img: {
    width: 30,
    height: 30
  },
  topo: {
    flexDirection: 'row',
    gap: 10
  },
});
