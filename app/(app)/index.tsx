import { useAtomValue, useSetAtom } from 'jotai';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { coffeeAtom, loadCoffeeAtom } from '../../entities/coffee/model/coffee.state';
import { useEffect } from 'react';
import { CoffeeCard } from '../../widget/coffee/ui/coffee-card/coffee-card';
import { Colors } from '../../shared/tokens';

export default function Home() {
	const { coffee, isLoading } = useAtomValue(coffeeAtom);
	const loadCoffee = useSetAtom(loadCoffeeAtom);

	useEffect(() => {
		loadCoffee();
	}, []);

	return (
		<View style={styles.container}>
			{isLoading && (
				<ActivityIndicator size="large" color={Colors.primary} style={styles.indicator} />
			)}
			{coffee.length > 0 && (
				<View style={styles.coffeeList}>
					{coffee.map((c) => (
						<CoffeeCard key={c.id} coffee={c} onPress={() => console.log('Pressed')} />
					))}
				</View>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 30,
	},
	coffeeList: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		rowGap: 13,
		justifyContent: 'space-between',
	},
	indicator: {
		marginTop: 30,
	},
});
