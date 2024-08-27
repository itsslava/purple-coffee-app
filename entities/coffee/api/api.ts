import { PREFIX } from '../../../shared/api';

export const API = {
	coffee: `${PREFIX}/coffee-api`,
	getCoffeeByType: (type: string) => `${PREFIX}/coffee-api?type=${type}`,
};
