import { Text, View, StyleSheet, Image } from 'react-native';
import { router } from 'expo-router';
import { CustomButton } from '@shared';
import { Font, Colors } from '@tokens';

export default function Success() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Заказ оформлен!</Text>
			<Image
				source={require('../../../assets/success.png')}
				resizeMode="cover"
				style={styles.image}
			/>
			<CustomButton text="На главную" onPress={() => router.replace('/(app)')} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		marginTop: 16,
		paddingHorizontal: 30,
	},
	title: {
		fontSize: Font.f18,
		fontFamily: Font.semibold,
		color: Colors.blackLight,
		marginBottom: 140,
		textAlign: 'center',
	},
	image: {
		marginBottom: 200,
		alignSelf: 'center',
	},
});
