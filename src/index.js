import { getApplicableHolidays } from './holidays';
import { isHoliday } from './utils/isHoliday';

const getArrayOfDatesBetweenTwoDates = (startDate, endDate) => {
	let dates = [];

	const theDate = startDate;

	while (theDate < endDate) {
		dates = [...dates, new Date(theDate)];
		theDate.setDate(theDate.getDate() + 1);
	}

	return [...dates, endDate];
};

const getBizDays = (startDate = new Date(), endDate, jurisdictionCode) => {
	const datesArray = getArrayOfDatesBetweenTwoDates(startDate, endDate);
	const totalDays = datesArray.length;
	const holidays = getApplicableHolidays(
		startDate.getFullYear(),
		jurisdictionCode
	);

	let holidayCount = 0;

	console.log('holidays :>> ', holidays);

	for (let i = 0; i < totalDays; i++) {
		const holiday = isHoliday(holidays, datesArray[i]);

		if (holiday) {
			holidayCount++;
		}
	}

	return totalDays - holidayCount;
};

export { getBizDays };
