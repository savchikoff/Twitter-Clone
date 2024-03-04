export function getDaysInMonthArray(month: number, year: number) {
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

    return days.filter(day => day !== '');
}



export function generateYears() {
    const currentYear = new Date().getFullYear();
    const startYear = 1900;

    const yearsArray = Array.from({ length: currentYear - startYear + 1 }, (_, index) => (currentYear - index).toString());

    return yearsArray;
}