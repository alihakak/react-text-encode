import { horizontalFlip, verticalFlip, shiftBy } from '../index.js';
/**
 * Unit tests for Horizontal transformation.
 */
describe('utils.horizontalFlip', () => {
    it('should swap one charater to the end of the line', () => {
        const inputStr = "1";
        const actual = horizontalFlip(inputStr);
        const expected = ["0"];
        expect(actual.length).toEqual(inputStr.length);
        expect(actual).toStrictEqual(expected);
    });
});

describe('utils.horizontalFlip', () => {
    it('should swap a string', () => {
        const inputStr = "123";
        const actual = horizontalFlip(inputStr);
        const expected = ["0", "9", "8"];
        expect(actual.length).toEqual(inputStr.length);
        expect(actual).toStrictEqual(expected);
    });
});

describe('utils.horizontalFlip', () => {
    it('should transform from any row', () => {
        const inputStr = "ABCE7".toLowerCase();
        const actual = horizontalFlip(inputStr);
        const expected = [";", "n", ",", "i", "4"];
        expect(actual.length).toEqual(inputStr.length);
        expect(actual).toStrictEqual(expected);
    });
});

/**
 * Unit tests for Vertical transformation.
 */
describe('utils.verticalFlip', () => {
    it('should swap one charater from Row 1 to Row 4', () => {
        const inputStr = "1";
        const actual = verticalFlip(inputStr);
        const expected = ["z"];
        expect(actual.length).toEqual(inputStr.length);
        expect(actual).toStrictEqual(expected);
    });
});

describe('utils.verticalFlip', () => {
    it('should swap string in all rows', () => {
        const inputStr = "1qaz";
        const actual = verticalFlip(inputStr);
        const expected = ["z","a","q","1"];
        expect(actual.length).toEqual(inputStr.length);
        expect(actual).toStrictEqual(expected);
    });
});
describe('utils.verticalFlip', () => {
    it('should transform string case insensitive', () => {
        const inputStr = "AE$C".toLowerCase();
        const actual = verticalFlip(inputStr);
        const expected = ["q","d","$","3"];
        expect(actual.length).toEqual(inputStr.length);
        expect(actual).toStrictEqual(expected);
    });
});

/**
 * Unit tests for shift by value +/-
 */
describe('utils.shiftBy', () => {
    it('should shift by # in same row', () => {
        const inputStr = "a";
        const actual = shiftBy(inputStr, 1);
        const expected = ["s"];
        expect(actual.length).toEqual(inputStr.length);
        expect(actual).toStrictEqual(expected);
    });
});

describe('utils.shiftBy', () => {
    it('should move to next row if at end', () => {
        const inputStr = "0";
        const actual = shiftBy(inputStr, 1);
        const expected = ["q"];
        expect(actual.length).toEqual(inputStr.length);
        expect(actual).toStrictEqual(expected);
    });
});

describe('utils.shiftBy', () => {
    it('should shift string case insensitive', () => {
        const inputStr = "ABcE6".toLowerCase();
        const actual = shiftBy(inputStr, 4);
        const expected = ["g",".","m", "u", "0"];
        expect(actual.length).toEqual(inputStr.length);
        expect(actual).toStrictEqual(expected);
    });
});