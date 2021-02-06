import { getAnzacDay } from './fixedDates';
import { getEaster, secMonJun, firMonOct } from './fluidDates';
import {
	getNewYears,
	getAusDay,
	getChristmas,
	getBoxingDay,
} from './substituteDates';

export const getApplicableHolidays = (year, jurisdiction) => {
	// NATIONAL
	const easter = getEaster(year);
	const anzacDay = getAnzacDay(year);
	const newYears = getNewYears(year);
	const austDay = getAusDay(year);
	const christmasDay = getChristmas(year);
	const boxDay = getBoxingDay(year);

	// NSW
	const labourDay = firMonOct(year);

	// NSW, VIC
	const queensBday = secMonJun(year);

	const national = {
		aus: [
			...newYears,
			...austDay,
			...easter,
			anzacDay,
			...christmasDay,
			...boxDay,
		],
	};

	switch (jurisdiction) {
		case 'AUS_NSW':
			return [...national.aus, queensBday, labourDay];
		case 'AUS_VIC':
			return [...national.aus, queensBday];
		default:
			break;
	}
};
