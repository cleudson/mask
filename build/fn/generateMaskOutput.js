/* eslint-disable max-len */
import { patterns } from '../constants';
import fillMaskGaps from './fillMaskGaps';
const generateMaskOutput = (inputWithoutSeparators, maskObject) => {
    const { cleanedMask } = maskObject;
    const inputString = [...inputWithoutSeparators].reduce((acc, char, i, arr) => {
        const currentRegex = patterns[cleanedMask[i]];
        const nextRegex = patterns[cleanedMask[i + 1]];
        if (!nextRegex || !currentRegex) {
            arr.splice(0);
        }
        if (!currentRegex) {
            return acc;
        }
        if (currentRegex.test(char)) {
            return acc + char;
        }
        return acc;
    }, '');
    return fillMaskGaps(inputString, maskObject);
};
export default generateMaskOutput;
