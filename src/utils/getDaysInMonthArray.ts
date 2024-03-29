export function getDaysInMonthArray(month: number, year: number) {
	if (year < 1 || year > 9999 || month < 0 || month > 11) {
		return [];
	}

	const currentDate = new Date();
	const currentYear = currentDate.getFullYear();
	const currentMonth = currentDate.getMonth();
	const currentDay = currentDate.getDate();

	const daysInMonth = new Date(year, month + 1, 0).getDate();

	const days = Array.from({ length: daysInMonth }, (_, index) => {
		const day = index + 1;
		if (year === currentYear && month === currentMonth && day > currentDay) {
			return '';
		}
		return day.toString();
	});

	return days.filter((day) => day !== '');
}
