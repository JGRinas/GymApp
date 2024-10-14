export function addDaysToDate(days?: number): Date | null {
  if (!days) return null;
  const result = new Date();
  result.setDate(result.getDate() + days);
  return result;
}

export function isDateBeforeToday(date?: Date | null): boolean | null {
  if (!date) return null;
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return date < today;
}

export const formatDate = (date?: Date | null): string | null => {
  if (!date) return null;
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};
