export const titleFont = (text) => text[0].toUpperCase() + text.substring(1);

export const extractTime = (timeString) => [
  timeString.substring(0, 10),
  timeString.substring(11, 19),
];
