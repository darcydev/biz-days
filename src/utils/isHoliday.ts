import { isWeekend } from './isWeekend';

export const isHoliday = (holidays: Date[], date: Date): boolean => {
	if (isWeekend(date)) {
		return true;
	}

	// convert holidays into epochTime
	const holidaysEpoch = holidays.map((holiday) => holiday.getTime());
	const dateEpoch = date.getTime();

	return holidaysEpoch.includes(dateEpoch);
};
