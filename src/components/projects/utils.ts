export const getProjectTime = (startDate: Date, endDate?: Date): string => {
  const startYear = startDate.getFullYear();
  const startMonth = startDate.getMonth();

  if (!endDate) {
    return `Data de início no projeto: ${String(startMonth + 1).padStart(2, '0')}/${startYear}`;
  }

  if (endDate.getTime() < startDate.getTime()) {
    return 'A data final deve ser posterior à data inicial.';
  }

  const endYear = endDate.getFullYear();
  const endMonth = endDate.getMonth();

  const totalMonths = (endYear - startYear) * 12 + (endMonth - startMonth);

  if (totalMonths < 1) {
    return 'Tempo inferior a um mês';
  }

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  let result = 'Tempo no projeto: ';
  if (years > 0) result += `${years} ano${years > 1 ? 's' : ''}`;
  if (years > 0 && months > 0) result += ' e ';
  const pluralMonths = months > 1;
  if (months > 0) result += `${months} m${pluralMonths ? 'e' : 'ê'}s${pluralMonths ? 'es' : ''}`;

  return result.trim();
};
