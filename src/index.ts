import { getApplicableHolidays } from './holidays';
import { isHoliday } from './utils/isHoliday';
import { getDatesArray } from './utils/datesArray';

export const getBizDays = (
	startDate: Date,
	endDate: Date,
	jurisdiction: string[]
): number => {
	const datesArray = getDatesArray(startDate, endDate);
	const totalDays = datesArray.length;

	const holidays = getApplicableHolidays(startDate.getFullYear(), jurisdiction);

	let holidayCount = 0;

	for (let i = 0; i < totalDays; i++) {
		const holiday = isHoliday(holidays, datesArray[i]);

		if (holiday) {
			holidayCount++;
		}
	}

	return totalDays - holidayCount;
};
