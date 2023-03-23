import {
  Text,
  View,
  StyleSheet,
  Image
} from 'react-native';

import { FontAwesome5 } from '@expo/vector-icons';

export default function Times({ escudo, nomeTime, apelido, libertadores }) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: escudo }} style={styles.escudos} />

      <View style={styles.infosTxt}>
        <View>
          <Text style={styles.nome}>{nomeTime}</Text>

          <Text style={styles.apelido}>{apelido}</Text>
        </View>

        <Text style={styles.libertadores}>{libertadores}</Text>

        <FontAwesome5
          style={styles.iconeTrofeu}
          name="trophy"
          size={24}
          color="rgb(255,215,0)"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },

  escudos: {
    width: 50,
    height: 50,
    marginRight: 10,
    marginLeft: 15,
  },

  infosTxt: {
    flexDirection: 'row',
    width: '90%',
    alignItems: 'center',
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
    borderBottomWidth: 3,
    paddingBottom: 25,
    paddingTop: 25,
  },

  nome: {
    fontSize: 16,
  },

  apelido: {
    color: 'rgba(0, 0, 0, 0.2)',
    fontSize: 15,
  },

  libertadores: {
    position: 'absolute',
    right: 95,
    fontSize: 23,
  },

  iconeTrofeu: {
    position: 'absolute',
    right: 60,
  },
});
