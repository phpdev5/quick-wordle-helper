const words = require("./words.json");

const giveList = () => {
  const excludedLetters = ["l", "f", "s"];
  const maybeLetters = [{ char: "e", not: [1, 0] }];
  const yesLetters = [{ char: "y", pos: 4 }];

  return words.reduce((acc, curr) => {
    const currArr = curr.split("");

    if (
      yesLetters.length &&
      yesLetters.filter(({ char, pos }) => currArr[pos] === char).length <
        yesLetters.length
    ) {
      return acc;
    }

    if (currArr.filter((l) => excludedLetters.includes(l)).length > 0) {
      return acc;
    }

    if (
      maybeLetters.filter(
        ({ char, not }) =>
          currArr.includes(char) &&
          not.filter((pos) => currArr[pos] !== char).length === not.length
      ).length === maybeLetters.length
    ) {
      acc.push(curr);
    }

    return acc;
  }, []);
};

console.log(giveList());
