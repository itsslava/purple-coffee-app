import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import { ActivityIndicator, StyleSheet, View, Text } from 'react-native';
import { useEffect } from 'react';
import {
	coffeeAtom,
	loadCoffeeAtom,
	searchAtom,
	setFilterAtom,
} from '@entities/coffee/model/coffee.state';
import { DrinkFilter } from '@entities/coffee/model/coffee.model';
import { Colors, Font } from '@tokens';
import { CoffeeCard, CoffeeFilter, CoffeeSearch } from '@widget';

export default function Home() {
	const { isLoading, coffee, filter } = useAtomValue(coffeeAtom);

	const loadCoffee = useSetAtom(loadCoffeeAtom);
	useEffect(() => {
		loadCoffee();
	}, []);

	const setFilter = useSetAtom(setFilterAtom);
	const handleFilterChange = (filter: DrinkFilter) => {
		setFilter(filter);
		loadCoffee(filter);
	};

	const [searchText, setSearchText] = useAtom(searchAtom);
	const handleSearchChange = (text: string) => {
		setSearchText(text);
	};
	const handleSearchSubmit = () => {
		loadCoffee(filter);
	};

	return (
		<>
			<View style={styles.header}>
				<CoffeeSearch
					value={searchText}
					onChangeText={handleSearchChange}
					onSubmitEditing={handleSearchSubmit}
				/>
			</View>
			<View style={styles.container}>
				<CoffeeFilter onFilterChange={handleFilterChange} currentFilter={filter ?? 'all'} />
				{isLoading && (
					<ActivityIndicator size="large" color={Colors.primary} style={styles.indicator} />
				)}
				{!isLoading && coffee?.length > 0 && (
					<View style={styles.coffeeList}>
						{coffee.map((c) => (
							<CoffeeCard key={c.id} coffee={c} onPress={() => console.log('Pressed')} />
						))}
					</View>
				)}
				{!isLoading && coffee?.length === 0 && (
					<Text style={styles.error}>Мы не нашли напитки по вашему запросу</Text>
				)}
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	header: {
		backgroundColor: Colors.black,
		height: 170,
		paddingHorizontal: 30,
	},
	container: {
		paddingHorizontal: 30,
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
	error: {
		fontFamily: Font.regular,
		fontSize: Font.f16,
		textAlign: 'center',
	},
});
