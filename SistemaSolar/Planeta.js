import { View , StyleSheet, Image, Text} from "react-native";

export function Planeta({planeta}) {

    return(
<View style={styles.card}>
              <Text style={{ alignSelf: 'center', fontWeight: 'bold' }}>{planeta.nome}</Text>
              <Image style={styles.imgPlaneta} source={{
                uri: planeta.img
              }} />
              <Text>{`Average Orbital Speed: ` + planeta.velocidadeOrbitalMediaKmS}</Text>
              <Text>{`Satellites: ` + planeta.quantidadeSatelites}</Text>
              <Text>{`Surface Área: ` + planeta.areaSuperficieKm2}</Text>
              <Text>{`Rotation Period: ` + planeta.periodoRotacaoDias}</Text>
            </View>
    )
}

const styles = StyleSheet.create({
    card: {
      backgroundColor: '#247BA0',
      width: 360,
      marginBottom: 20,
      borderRadius: 20,
      padding: 10
    },
    imgPlaneta: {
      width: 300,
      height: 300,
      alignSelf: 'center'
    }
  });