import { Link } from 'expo-router';
import { Text, View, StyleSheet } from 'react-native';

export default function Success() {
	return (
		<View style={styles.container}>
			<Text>Успешный заказ</Text>
			<Link href={'./'}>
				<Text>На главную</Text>
			</Link>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		marginTop: 250,
	},
});
