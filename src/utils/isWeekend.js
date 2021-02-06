export const isWeekend = (date) => {
	const day = date.getDay();

	return day === 6 || day === 0 ? true : false;
};
