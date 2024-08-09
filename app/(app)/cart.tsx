import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function Cart() {
	return (
		<View style={styles.container}>
			<Text>Корзина</Text>
			<Link href={'./success'}>
				<Text>Заказать</Text>
			</Link>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		marginTop: 250,
	},
});
