import { horizontalFlip } from '../index.js';
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
        const inputStr = "ABCE7";
        const actual = horizontalFlip(inputStr);
        const expected = [";", "n", ",", "i", "4"];
        expect(actual.length).toEqual(inputStr.length);
        expect(actual).toStrictEqual(expected);
    });
});

describe('utils.horizontalFlip', () => {
    it('should transform regardless of Case', () => {
        const inputStr = "AbCe0";
        const actual = horizontalFlip(inputStr);
        const expected = [";", "n", ",", "i", "1"];
        expect(actual.length).toEqual(inputStr.length);
        expect(actual).toStrictEqual(expected);
    });
});