import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  FlatList
} from 'react-native';

import Time from './time';

const times = [
  {
    escudo: 'https://logodetimes.com/times/gremio/logo-gremio-256.png',
    nomeTime: 'Grêmio',
    apelido: 'Imortal Tricolor',
    libertadores: 3,
  },

  {
    escudo:
      'https://logodetimes.com/times/internacional/logo-internacional-256.png',
    nomeTime: 'Internacional',
    apelido: 'Colorado',
    libertadores: 2,
  },

  {
    escudo: 'https://logodetimes.com/times/avai/logo-avai-256.png',
    nomeTime: 'Avaí',
    apelido: 'Leão da Ilha',
    libertadores: 0,
  },

  {
    escudo:
      'https://logodetimes.com/times/corinthians/logo-do-corinthians-256.png',
    nomeTime: 'Corinthians',
    apelido: 'Timão',
    libertadores: 1,
  },

  {
    escudo: 'https://logodetimes.com/times/flamengo/logo-flamengo-256.png',
    nomeTime: 'Flamengo',
    apelido: 'Urubu',
    libertadores: 3,
  },

  {
    escudo: 'https://logodetimes.com/times/palmeiras/logo-palmeiras-256.png',
    nomeTime: 'Palmeiras',
    apelido: 'Palestra Itália',
    libertadores: 3,
  },
];

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.legenda}>
        <Text style={styles.times}>Times de futebol</Text>
        <Text style={styles.libertadores}>Libertadores</Text>
      </View>
      <FlatList
        data={times}
        renderItem={({ item }) => (
          <Time
            escudo={item.escudo}
            nomeTime={item.nomeTime}
            apelido={item.apelido}
            libertadores={item.libertadores}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },

  legenda: {
    flexDirection: 'row',
    marginTop: 10,
  },

  times: {
    marginLeft: 18,
    fontWeight: 'bold',
    fontSize: 16,
  },

  libertadores: {
    position: 'absolute',
    right: 25,
    fontWeight: 'bold',
    color: 'rgba(0, 0, 0, 0.4)',
    fontSize: 16,
  },
});
