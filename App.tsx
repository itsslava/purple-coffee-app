import { Button, Text, View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient' 

export default function App() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.9)', '#000']}
        locations={[0, 0.2, 0.3]}
        style={styles.gradient}
      >
        <View style={styles.content}>
          <Text style={styles.title}>Один из самых вкусных кофе в городе!</Text>
          <Text style={styles.subtitle}>
            Свежие зерна, настоящая арабика и бережная обжарка
          </Text>
          <Button title="Начать" />
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  content: {
    marginTop: 52,
    alignItems: 'center',
    paddingHorizontal: 30,
    // marginBottom: 43,
  },
  title: {
    fontSize: 34,
    fontWeight: '600',
    color: '#fff',
    textAlign: 'center',
    paddingBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    paddingBottom: 24,
    color: '#a9a9a9',
  },
  gradient: {
    height: 362,
    width: '100%',
  },
});

