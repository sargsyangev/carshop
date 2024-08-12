
export const modifiPrice = (numb: number) => {
  const modified = numb
    .toString()
    .split("")
    .reverse()
    .reduce((acc, current, index) => {
      if (index % 3 === 0) {
        acc.push(" ", current);
      } else {
        acc.push(current);
      }
      return acc;
    }, [] as string[]);
  return modified.reverse().join("");
};
