export const isWeekend = (date: Date): boolean => {
	const day = date.getDay();

	return day === 6 || day === 0;
};
