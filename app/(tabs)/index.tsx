import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function Home() {
	return (
		<View style={styles.container}>
			<Text>Каталог</Text>
			<Link href={'./latte'}>
				<Text>Латте</Text>
			</Link>
			<Link href={'./cappuchino'}>
				<Text>Каппучино</Text>
			</Link>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		marginTop: 250,
	},
});