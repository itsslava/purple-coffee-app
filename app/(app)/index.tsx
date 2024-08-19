import { useAtomValue, useSetAtom } from 'jotai';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import {
	coffeeAtom,
	loadCoffeeAtom,
	setFilterAtom,
} from '../../entities/coffee/model/coffee.state';
import { useEffect } from 'react';
import { CoffeeCard } from '../../widget/coffee/ui/coffee-card/coffee-card';
import { Colors } from '../../shared/tokens';
import { CoffeeFilter } from '../../widget/coffee/ui/coffee-filter/coffee-filter';
import { DrinkFilter } from '../../entities/coffee/model/coffee.model';

export default function Home() {
	const { isLoading, coffee, filter } = useAtomValue(coffeeAtom);
	const loadCoffee = useSetAtom(loadCoffeeAtom);
	const setFilter = useSetAtom(setFilterAtom);

	useEffect(() => {
		loadCoffee();
	}, []);

	const handleFilterChange = (filter: DrinkFilter) => {
		setFilter(filter);
		loadCoffee(filter);
	};

	return (
		<View style={styles.container}>
			<CoffeeFilter onFilterChange={handleFilterChange} currentFilter={filter ?? 'all'} />
			{isLoading && (
				<ActivityIndicator size="large" color={Colors.primary} style={styles.indicator} />
			)}
			{!isLoading && coffee.length > 0 && (
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
