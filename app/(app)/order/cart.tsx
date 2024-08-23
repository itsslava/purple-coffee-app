import { router } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { CustomButton } from '../../../shared/custom-button/custom-button';

export default function Cart() {
	return (
		<View style={styles.container}>
			<Text>Корзина</Text>
			<CustomButton text="Заказать" onPress={() => router.replace('/order/success')} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		marginTop: 250,
	},
});
