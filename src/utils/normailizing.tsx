export const normalizedDate = (date: string) => {
  const normDate = new Date(date)
    .toUTCString()
    .split(' ')
    .slice(1, 4);
  normDate[0] = normDate[0] + 'th';
  normDate[1] = normDate[1] + ',';

  return normDate.join(' ');
}

export const normalizedTitle = (text: string) => {
  const normTitle = text.split(' ').slice(0, 5).join(' ');

  if (normTitle.includes(',')) {
    const index = normTitle.indexOf(',');

    return normTitle.slice(0, index);
  }

  return normTitle;
}

export const normalizedDescription = (desc: string) => {
  const normDescription = desc.slice(0, 97).replace(/<\/?[^>]+(>|$)/g, "");

  return normDescription + '...';
}