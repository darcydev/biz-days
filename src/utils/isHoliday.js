import { isWeekend } from './isWeekend';

export const isHoliday = (holidays, date) => {
	if (isWeekend(date)) {
		return true;
	}

	// convert holidays into epochTime
	const holidaysEpoch = holidays.map((holiday) => holiday.getTime());
	const dateEpoch = date.getTime();

	return holidaysEpoch.includes(dateEpoch);
};
