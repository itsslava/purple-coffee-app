import { useLocalSearchParams } from 'expo-router';
import { View, StyleSheet, Text } from 'react-native';

export default function CatalogItem() {
	const { alias } = useLocalSearchParams();
	return (
		<View style={styles.container}>
			<Text>Страница напитка {alias}</Text>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		marginTop: 250,
	},
});
