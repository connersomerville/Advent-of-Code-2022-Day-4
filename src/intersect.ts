type Range = {
  start: number;
  end: number;
};
type RangesInclusive = {
  rangeOne: Range;
  rangeTwo: Range;
};
export const rangesInclusive = ({ rangeOne, rangeTwo }: RangesInclusive) => {
  const rangeOneEncapsulates =
    rangeOne.start <= rangeTwo.start && rangeOne.end >= rangeTwo.end;
  const rangeTwoEncapsulates =
    rangeTwo.start <= rangeOne.start && rangeTwo.end >= rangeOne.end;

  if (rangeOneEncapsulates || rangeTwoEncapsulates) {
    return true;
  }

  return false;
};
