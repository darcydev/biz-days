/**
 * The array of dates between two dates (including the end date)
 * @param startDate
 * @param endDate
 */
export const getDatesArray = (startDate: Date, endDate: Date): Date[] => {
	let dates = [endDate];

	const theDate = startDate;

	while (theDate < endDate) {
		dates = [...dates, new Date(theDate)];
		theDate.setDate(theDate.getDate() + 1);
	}

	return dates;
};
