export const addSeparator = (string: string, separator = ' ') => {
  return String(string).split('').join(separator);
};
