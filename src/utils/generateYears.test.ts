import { generateYears } from './generateYears';

describe('generateYears', () => {
	it('should generate an array of years from current year to 1990', () => {
		const currentYear = new Date().getFullYear();
		const yearsArray = generateYears();

		expect(yearsArray).toHaveLength(currentYear - 1900 + 1);
		expect(yearsArray).toEqual(
			Array.from({ length: currentYear - 1900 + 1 }, (_, index) =>
				(currentYear - index).toString()
			)
		);
	});
});
