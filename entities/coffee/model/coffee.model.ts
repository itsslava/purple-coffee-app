export interface Coffee {
	id: number;
	name: string;
	subTitle: string;
	type: string;
	price: number;
	image: string;
	description: string;
	rating: number;
}

export type DrinkFilter = 'all' | 'cappuccino' | 'latte' | 'macchiato' | 'americano';

export const filterLabels: Record<DrinkFilter, string> = {
	all: 'Все',
	cappuccino: 'Капучино',
	latte: 'Латте',
	macchiato: 'Маккиато',
	americano: 'Американо',
};
