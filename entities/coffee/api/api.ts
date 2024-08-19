import { PREFIX } from '../../../shared/api';

export const API = {
	coffee: `${PREFIX}/coffee-api`,
	filter: (type: string) => `${PREFIX}/coffee-api?type=${type}`,
};
