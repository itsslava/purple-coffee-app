import { Text, View, StyleSheet, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient' 
import Button from './shared/button/button';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
      source={require('./assets/images/coffee-img.png')}
      resizeMode='cover'
      style={styles.image}
      >
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
        <Button text="Начать" />
      </View>
      </LinearGradient>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
  },
  image: {
    flex: 1,
    height: '70%',
    justifyContent: 'flex-end',
  },
  gradient: {
    height: 360,
    width: '100%',
    // justifyContent: 'flex-end',
  },
  content: {
    justifyContent: 'center',
    paddingHorizontal: 30,
    // marginBottom: 43,
    marginTop: 52,
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
});
