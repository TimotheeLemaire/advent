import { readFileSync } from "fs";

const file = readFileSync("./input.txt", "utf-8");

let sum = 0;

file.split("\n").forEach((line) => {
  if (line === "") {
    return;
  }
  const [header, data] = line.split(":");
  const [winning, playerNUmber] = data
    .split("|")
    .map((part) => part.split(" ").filter((number) => number !== ""));
  console.log(header);
  console.log(winning);
  console.log(playerNUmber);
  const matches = playerNUmber.filter((number) => winning.includes(number));
  console.log(Math.pow(2, matches.length));
  if (matches.length > 0) {
    sum += Math.pow(2, matches.length - 1);
  }
});

console.log(sum);
