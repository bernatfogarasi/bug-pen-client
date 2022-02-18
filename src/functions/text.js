export const titleFont = (text) => text[0].toUpperCase() + text.substring(1);

export const extractTime = (timeString) => [
  timeString.substring(0, 10),
  timeString.substring(11, 19),
];

export const fileSize = (bytes, base = 1000) => {
  // https://stackoverflow.com/a/41402498/15371114
  var u = 0;
  while (bytes >= base || -bytes >= base) {
    bytes /= base;
    u++;
  }
  return (u ? bytes.toFixed(1) + " " : bytes) + " kMGTPEZY"[u] + "B";
};
