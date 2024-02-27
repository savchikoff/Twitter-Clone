export function getDaysInMonthArray(month: number, year: number) {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    return Array.from({ length: daysInMonth }, (_, index) => (index + 1).toString());
}

export function generateYears() {
    const currentYear = new Date().getFullYear();
    const startYear = 1900;

    const yearsArray = Array.from({ length: currentYear - startYear + 1 }, (_, index) => (currentYear - index).toString());

    return yearsArray;
}