import { getAusHols } from './AUS';

export const getApplicableHolidays = (
	year: number,
	jurisdiction: string[]
): Date[] => {
	const country = jurisdiction[0];
	const territory = jurisdiction[1];

	switch (country) {
		case 'AUS':
			return getAusHols(year, territory);
		default:
			return getAusHols(year, territory);
	}
};
