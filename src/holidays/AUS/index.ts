import { getAnzacDay } from '../fixedDates';
import {
	getEaster,
	firMonMar,
	secMonMar,
	firMonMay,
	firMonJun,
	secMonJun,
	firMonAug,
	firMonOct,
	firTueOct,
	lastFriSep,
	firMonOnOrAfter27May,
} from '../fluidDates';
import {
	getNewYears,
	getAusDay,
	getChristmas,
	getBoxingDay,
} from '../substituteDates';

export const getAusHols = (year: number, territory: string): any[] => {
	const national = [
		...getNewYears(year),
		...getAusDay(year),
		...getEaster(year),
		getAnzacDay(year),
		...getChristmas(year),
		...getBoxingDay(year),
	];

	switch (territory) {
		case 'ACT':
			return [...national, secMonMar(year), firMonOnOrAfter27May(year)];
		case 'NSW':
			return [...national, firMonOct(year), secMonJun(year)];
		case 'NT':
			return [...national, firMonMay(year), firMonAug(year)];
		case 'QLD':
			return [...national, firMonMay(year), firMonOct(year)];
		case 'SA':
			return [...national, secMonMar(year), secMonJun(year), firMonOct(year)];
		case 'TAS':
			return [...national, secMonMar(year), secMonJun(year)];
		case 'VIC':
			return [
				...national,
				secMonMar(year),
				secMonJun(year),
				firTueOct(year),
				lastFriSep(year),
			];
		case 'WA':
			return [...national, firMonMar(year), firMonJun(year)];
		default:
			return [];
	}
};
