const generateNumber = (maximumSize: number): number => {
  return Math.floor(Math.random() * maximumSize);
};

const generateArray = (size: number): string[] => {
  return new Array(size).fill("");
};

const selectRandomArrayItem = (itemArray: any[]): any => {
  return itemArray[Math.floor(Math.random() * itemArray.length)];
};

export {
  generateNumber,
  generateArray,
  selectRandomArrayItem
};
