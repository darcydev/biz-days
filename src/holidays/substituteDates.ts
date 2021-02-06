import { isWeekend } from '../utils/isWeekend';

const getNextMon = (date: Date): Date => {
	// create a copy of the date object
	const subDate = new Date(+date);

	// convert subDate to next Monday
	subDate.setDate(subDate.getDate() + ((1 + 7 - subDate.getDay()) % 7));
	return subDate;
};

const getNextTue = (date: Date): Date => {
	// create a copy of the date object
	const subDate = new Date(+date);

	// convert subDate to next Tuesday
	subDate.setDate(subDate.getDate() + ((2 + 7 - subDate.getDay()) % 7));
	return subDate;
};

const getApplicableDates = (date: Date): Date[] => {
	let dates = [date];
	const weekend = isWeekend(date);

	if (weekend) {
		const nextMon = getNextMon(date);

		dates = [...dates, nextMon];
	}

	return dates;
};

export const getNewYears = (year: number): Date[] => {
	const date = new Date(`${year}-01-01T00:00:00`);
	return getApplicableDates(date);
};

export const getAusDay = (year: number): Date[] => {
	const date = new Date(`${year}-01-26T00:00:00`);
	return getApplicableDates(date);
};

export const getChristmas = (year: number): Date[] => {
	const date = new Date(`${year}-12-25T00:00:00`);
	return getApplicableDates(date);
};

export const getBoxingDay = (year: number): Date[] => {
	const date = new Date(`${year}-12-26T00:00:00`);

	// If Christmas Day is either Sat or Sun, then Boxing Day's
	// substitute day will be the Tuesday
	const christmasOnWeekend = isWeekend(new Date(`${year}-12-25T00:00:00`));

	if (christmasOnWeekend) {
		const subDate = getNextTue(date);
		return [date, subDate];
	} else {
		return getApplicableDates(date);
	}
};
