import { atom } from 'jotai';
import { Coffee } from './coffee.model';
import axios, { AxiosError } from 'axios';
import { API } from '../api/api';

export const coffeeAtom = atom<CoffeeState>({
	coffee: [],
	isLoading: false,
	error: null,
});

export const loadCoffeeAtom = atom(
	(get) => {
		return get(coffeeAtom);
	},
	async (get, set) => {
		set(coffeeAtom, {
			coffee: [],
			isLoading: true,
			error: null,
		});
		try {
			const { data } = await axios.get<Coffee[]>(API.coffee);

			set(coffeeAtom, {
				coffee: data,
				isLoading: false,
				error: null,
			});
		} catch (error) {
			if (error instanceof AxiosError) {
				set(coffeeAtom, {
					coffee: [],
					isLoading: false,
					error: error.response?.data.message,
				});
			}
		}
	},
);

export interface CoffeeState {
	coffee: Coffee[];
	isLoading: boolean;
	error: string | null;
}
