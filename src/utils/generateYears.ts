export function generateYears() {
    const currentYear = new Date().getFullYear();
    const startYear = 1900;

    const yearsArray = Array.from({ length: currentYear - startYear + 1 }, (_, index) => (currentYear - index).toString());

    return yearsArray;
}