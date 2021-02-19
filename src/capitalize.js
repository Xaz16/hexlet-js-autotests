export const capitalize = (string) => {
  const firstChar = string[0];
  if (!firstChar) {
    return string;
  }

  return `${firstChar.toUpperCase()}${string.slice(1)}`;
};
