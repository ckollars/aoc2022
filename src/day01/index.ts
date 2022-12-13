import run from "aocrunner";

const parseInput = (rawInput: string) => rawInput;

const part1 = (rawInput: string) => {
    const input = parseInput(rawInput).split('\n');

    let calories: number = 0;
    const elves: Array<number> = [];

    input.forEach((elfFood) => {
        if (elfFood === '') {
            elves.push(calories);
            calories = 0;
            return;
        }

        calories += +elfFood;
    });

    return Math.max.apply(null, elves);
};

const part2 = (rawInput: string) => {
    const input = parseInput(rawInput).split('\n');

    let calories: number = 0;
    const elves: Array<number> = [];

    input.forEach((elfFood) => {
        if (elfFood === '') {
            elves.push(calories);
            calories = 0;
            return;
        }

        calories += +elfFood;
    });

    const sortedElves = elves.sort((a, b) => a > b ? -1 : 1);
    const total = sortedElves.splice(0, 3).reduce((acc, cur) => acc + cur);
    return total;
};

run({
    part1: {
        tests: [
            // {
            //   input: ``,
            //   expected: "",
            // },
        ],
        solution: part1,
    },
    part2: {
        tests: [
            // {
            //   input: ``,
            //   expected: "",
            // },
        ],
        solution: part2,
    },
    trimTestInputs: true,
    onlyTests: false,
});
