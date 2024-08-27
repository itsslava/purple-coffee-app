import React from 'react';
import { View, Pressable, Text, StyleSheet } from 'react-native';
import { Colors, Font, Radius } from '@tokens';
import { DrinkFilter, filterLabels } from '@entities/coffee/model/coffee.model';

interface DrinkFilterComponentProps {
	onFilterChange: (filter: DrinkFilter) => void;
	currentFilter: DrinkFilter;
}

export function CoffeeFilter({ onFilterChange, currentFilter }: DrinkFilterComponentProps) {
	const filters: DrinkFilter[] = ['all', 'cappuccino', 'latte', 'macchiato', 'americano'];

	return (
		<View style={styles.container}>
			{filters.map((filter) => {
				const isSelected = filter === currentFilter;
				return (
					<Pressable
						key={filter}
						onPress={() => onFilterChange(filter)}
						style={[styles.tab, isSelected && styles.selectedTab]}
					>
						<Text style={[styles.tabText, isSelected && styles.selectedTabText]}>
							{filterLabels[filter]}
						</Text>
					</Pressable>
				);
			})}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		columnGap: 8,
		paddingVertical: 28,
	},
	tab: {
		backgroundColor: Colors.white,
		paddingHorizontal: 11,
		paddingVertical: 10,
		borderRadius: Radius.r12,
		flexGrow: 1,
	},
	tabText: {
		fontSize: Font.f14,
		fontFamily: Font.regular,
		color: Colors.deepGreen,
		textAlign: 'center',
	},
	selectedTab: {
		backgroundColor: Colors.primary,
	},
	selectedTabText: {
		fontSize: Font.f14,
		fontFamily: Font.semibold,
		color: Colors.white,
		textAlign: 'center',
	},
});
