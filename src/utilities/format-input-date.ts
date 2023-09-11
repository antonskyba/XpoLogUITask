/**
 * Formats a JavaScript Date object into a string in the 'YYYY-MM-DD' format.
 *
 * @param date - The Date object to be formatted.
 * @returns A string representing the formatted date in 'YYYY-MM-DD' format.
 */
export function formatInputDate(date: Date): string {
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // Month is zero-based, so add 1
  const day = date.getDate();

  return `${year}-${month < 10 ? '0' : ''}${month}-${
    day < 10 ? '0' : ''
  }${day}`;
}
