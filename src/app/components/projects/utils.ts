type ProjectTimeParams = {
  initialDate: Date;
  finalDate?: Date;
  lang: 'en' | 'pt-BR';
};

export const getProjectTime = ({ initialDate, finalDate, lang }: ProjectTimeParams): string => {
  const startYear = initialDate.getFullYear();
  const startMonth = initialDate.getMonth();
  if (!finalDate) {
    return lang === 'en'
      ? `Project start date: ${String(startMonth + 1).padStart(2, '0')}/${startYear}`
      : `Data de início no projeto: ${String(startMonth + 1).padStart(2, '0')}/${startYear}`;
  }

  if (finalDate.getTime() < initialDate.getTime()) {
    return lang === 'en'
      ? 'The end date must be later than the start date.'
      : 'A data final deve ser posterior à data inicial.';
  }

  const endYear = finalDate.getFullYear();
  const endMonth = finalDate.getMonth();

  const totalMonths = (endYear - startYear) * 12 + (endMonth - startMonth);

  if (totalMonths < 1) {
    return lang === 'en' ? 'Less than a month' : 'Tempo inferior a um mês';
  }

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  const projectDurationText = lang === 'en' ? 'Project duration: ' : 'Tempo no projeto: ';
  const yearText = years === 1 ? (lang === 'en' ? 'year' : 'ano') : lang === 'en' ? 'years' : 'anos';
  const monthText = months === 1 ? (lang === 'en' ? 'month' : 'mês') : lang === 'en' ? 'months' : 'meses';

  let result = `${projectDurationText}`;
  if (years > 0) result += `${years} ${yearText}`;
  if (years > 0 && months > 0) result += lang === 'en' ? ' and ' : ' e ';
  if (months > 0) result += `${months} ${monthText}`;

  return result.trim();
};
