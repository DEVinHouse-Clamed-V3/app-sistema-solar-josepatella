import { StatusBar } from 'expo-status-bar';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { planetas } from './planetas'

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
<View style={styles.card}>
<Text style={{alignSelf: 'center', fontWeight: 'bold'}}>{planeta.nome}</Text>
<Image style={styles.imgPlaneta} source={{
          uri: planeta.img
        }} />
        <Text>{`Average Orbital Speed: ` + planeta.velocidadeOrbitalMediaKmS}</Text>
        <Text>{`Satellites: ` + planeta.quantidadeSatelites}</Text>
        <Text>{`Surface Área: ` + planeta.areaSuperficieKm2}</Text>
        <Text>{`Rotation Period: `+ planeta.periodoRotacaoDias}</Text>
</View>
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
    padding: 45
  },
  img: {
    width: 30,
    height: 30
  },
  topo: {
    flexDirection: 'row',
    gap: 10
  },
  card:{

  },
  imgPlaneta: {
    width: 300,
    height: 300,
  }
});
