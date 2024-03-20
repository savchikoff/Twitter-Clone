import { getDaysInMonthArray } from './getDaysInMonthArray';

describe('getDaysInMonthArray', () => {
	it('should return an array of days for the specified month and year', () => {
		const days = getDaysInMonthArray(1, 2023);

		expect(days).toHaveLength(28);
		expect(days).toEqual([
			'1',
			'2',
			'3',
			'4',
			'5',
			'6',
			'7',
			'8',
			'9',
			'10',
			'11',
			'12',
			'13',
			'14',
			'15',
			'16',
			'17',
			'18',
			'19',
			'20',
			'21',
			'22',
			'23',
			'24',
			'25',
			'26',
			'27',
			'28',
		]);
	});

	it('should return an empty array if the month is invalid', () => {
		const days = getDaysInMonthArray(13, 2023);
		expect(days).toEqual([]);
	});

	it('should return an empty array if the year is invalid', () => {
		const days = getDaysInMonthArray(1, 20230);
		expect(days).toEqual([]);
	});
});
