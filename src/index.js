import { HOLIDAYS } from './holidays';

const generateRandomNumber = () => {
	if (HOLIDAYS.tom) {
		return Math.floor(100000 + Math.random() * 900000);
	} else {
		return 0;
	}
};

export { generateRandomNumber };
