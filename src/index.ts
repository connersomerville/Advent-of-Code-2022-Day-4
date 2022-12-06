import { rangesInclusive } from "./intersect.js";
import { getLineReader } from "./reader.js";

const args = process.argv.slice(2);
const filePath = args[0] || "test/fixtures/input.txt";

const lineReader = getLineReader({
  filePath,
});

let encapsulatedPairs = 0;

lineReader.on("line", (line) => {
  const [elfOneRange, elfTwoRange] = line.split(",");
  const [elfOneStart, elfOneEnd] = elfOneRange.split("-");
  const [elfTwoStart, elfTwoEnd] = elfTwoRange.split("-");

  if (
    rangesInclusive({
      rangeOne: {
        start: Number(elfOneStart),
        end: Number(elfOneEnd),
      },
      rangeTwo: {
        start: Number(elfTwoStart),
        end: Number(elfTwoEnd),
      },
    })
  ) {
    encapsulatedPairs += 1;
  }
});

lineReader.on("close", () => {
  console.log(`Found ${encapsulatedPairs} pairs that entirely overlap`);
});
