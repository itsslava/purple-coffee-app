import { Pressable, View, Text, PressableProps, StyleSheet } from 'react-native';
import { Colors } from '../tokens';

export default function Button ( { text, ...props}: PressableProps & {text: string}) {
  return (
    <Pressable {...props}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    height: 62,
  },
  buttonText: {
    fontWeight: '600',
    fontSize: 16,
    color: Colors.white,
  },
});
