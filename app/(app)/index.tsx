import { useAtomValue, useSetAtom } from 'jotai';
import { StyleSheet, View } from 'react-native';
import { coffeeAtom, loadCoffeeAtom } from '../../entities/coffee/model/coffee.state';
import { useEffect } from 'react';
import { CoffeeCard } from '../../widget/coffee/ui/coffee-card/coffee-card';

export default function Home() {
	const { coffee } = useAtomValue(coffeeAtom);
	const loadCoffee = useSetAtom(loadCoffeeAtom);

	useEffect(() => {
		loadCoffee();
	}, []);

	return (
		<View style={styles.container}>
			{coffee.length > 0 && (
				<View>
					{coffee.map((c) => (
						<CoffeeCard key={c.id} coffee={c} onPress={() => console.log('pressed')} />
					))}
				</View>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		marginTop: 250,
	},
});
