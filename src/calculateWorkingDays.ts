import { AUS_HOLIDAYS } from '../constants/holidays';

/* STEP 1 */
// calculate all days
// calculate all holidays
// minus days from holidays

const getAllDatesBetweenTwoDates = (startDate: Date, endDate: Date): any[] => {
	let dates: any[] = [];
	const start: Date = startDate;
	const end: Date = endDate;

	while (start < end) {
		dates = [...dates, new Date(start)];
		start.setDate(start.getDate() + 1);
	}

	return dates;
};

export const calculateWorkingDays = (startDate: Date, endDate: Date): any[] => {
	return getAllDatesBetweenTwoDates(startDate, endDate);
};

/* export const calculateBizDays = () => {
	return true;
}; */

/* export const calculateWorkingDays = (
	startDate: Date,
	endDate: Date
): number => {
	let totalWorkingDays: number = 0;

	let datesArr = getDatesBetweenDates(startDate, endDate);

	for (let i = 0; i < datesArr.length; i++) {
		const date = datesArr[i];
		const holiday: boolean = AUS_HOLIDAYS.includes(
			date.setUTCHours(0, 0, 0, 0)
		);
		const dayOfWeek: number = date.getDay();

		if (holiday || dayOfWeek === 5 || dayOfWeek === 6) {
			continue;
		}

		totalWorkingDays++;
	}

	return totalWorkingDays;
}; */
