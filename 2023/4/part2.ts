import { readFileSync } from "fs";

const file = readFileSync("./input.txt", "utf-8");

let scratchcards = new Map<number, number>();

const lines = file.split("\n");
let sum = 0;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (line === "") {
    continue;
  }
  const [header, data] = line.split(":");
  const [winning, playerNUmber] = data
    .split("|")
    .map((part) => part.split(" ").filter((number) => number !== ""));
  console.log(header);
  console.log(winning);
  console.log(playerNUmber);
  const matches = playerNUmber.filter((number) => winning.includes(number));

  let cardCopies = scratchcards.get(i);
  if (!cardCopies) {
    cardCopies = 1;
    scratchcards.set(i, cardCopies);
  }
  console.log(cardCopies);
  for (let j = 1; j <= matches.length; j++) {
    const index = i + j;
    scratchcards.set(index, (scratchcards.get(index) ?? 1) + cardCopies);
    console.log("index " + index + " : " + scratchcards.get(index));
  }
  sum += cardCopies;
}
console.log(scratchcards);

console.log(sum);
