import React, { Dispatch, SetStateAction } from "react";

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

export const highlightText = (text: string, higlight: string) => {
  const parts = text.split(new RegExp(`(${higlight})`, "gi"));

  return parts.map((part: string, index) => (
    <React.Fragment key={index}>
      {part.toLowerCase() === higlight.toLowerCase() ? (
        <span style={{ backgroundColor: "#FFFF00" }}>{part}</span>
      ) : (
        part
      )}
    </React.Fragment>
  ));
}

export const debounce = (f: Dispatch<SetStateAction<string>>, delay: number) => {
  let timerId: number;

  return (...args: string[]) => {
    clearTimeout(timerId);

    timerId = setTimeout(f, delay, ...args)
  }
}
