import { atom } from 'jotai';
import { Coffee, DrinkFilter } from './coffee.model';
import axios, { AxiosError } from 'axios';
import { API } from '../api/api';

export const coffeeAtom = atom<CoffeeState>({
	coffee: [],
	isLoading: false,
	error: null,
	filter: 'all',
});

export const loadCoffeeAtom = atom(
	(get) => {
		return get(coffeeAtom);
	},
	async (get, set, filter?: DrinkFilter) => {
		set(coffeeAtom, {
			...get(coffeeAtom),
			coffee: [],
			isLoading: true,
			error: null,
		});

		try {
			const url = filter && filter !== 'all' ? API.filter(filter.toLowerCase()) : API.coffee;
			const { data } = await axios.get<Coffee[]>(url);

			set(coffeeAtom, {
				...get(coffeeAtom),
				coffee: data,
				isLoading: false,
				error: null,
			});
		} catch (error) {
			if (error instanceof AxiosError) {
				set(coffeeAtom, {
					...get(coffeeAtom),
					coffee: [],
					isLoading: false,
					error: error.response?.data.message,
				});
			}
		}
	},
);

export const setFilterAtom = atom(null, (get, set, newFilter: DrinkFilter) => {
	set(coffeeAtom, {
		...get(coffeeAtom),
		filter: newFilter,
	});
});

export interface CoffeeState {
	coffee: Coffee[];
	isLoading: boolean;
	error: string | null;
	filter?: DrinkFilter;
}
