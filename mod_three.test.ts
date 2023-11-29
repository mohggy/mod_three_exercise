import modThree from "./mod_three";
import { expect } from '@jest/globals';

describe('modThree function tests', () => {

    test('modulo 110 results in 0', () => {
        const result: number = modThree('110');
        expect(result).toBe(0);
    });

    test('modulo 1010 results in 1', () => {
        const result: number = modThree('1010');
        expect(result).toBe(1);
    });

    test('modulo 1101 results in 1', () => {
        const result: number = modThree('1101');
        expect(result).toBe(1);
    })

    test('modulo 1110 results in 2', () => {
        const result: number = modThree('1110');
        expect(result).toBe(2);
    })

    test('modulo 1111 results in 0', () => {
        const result: number = modThree('1111');
        expect(result).toBe(0);
    })
    
    //2 divide by 3 remainder 2
    test('modulo 10 results in 2', () => {
        const result: number = modThree('10');
        expect(result).toBe(2);
    });

    //3 divide by 3 remainder 0
    test('modulo 11 results in 0', () => {
        const result: number = modThree('11');
        expect(result).toBe(0);
    })

    // 1 divide by 3 remainder 1
    test('modulo 1 results in 1', () => {
        const result: number = modThree('1');
        expect(result).toBe(1);
    });

    // 0 divided 3 is 0
    test('modulo 0 results in 0', () => {
        const result: number = modThree('0');
        expect(result).toBe(0);
    });

    // large binary string, but still 0 divide 3 is 0
    test('modulo 000000000000 results in 0', () => {
        const result: number = modThree('000000000000');
        expect(result).toBe(0);
    })

    // large binary string, but only 1 divide by 3 remainder 1
    test('modulo 000000000001 results in 1', () => {
        const result: number = modThree('000000000001');
        expect(result).toBe(1);
    })

    // large binary string, 2 divide by 3 remainder 2
    test('modulo 000000000010 results in 2', () => {
        const result: number = modThree('000000000010');
        expect(result).toBe(2);
    })

    // very large binary string: 1234567890
    test('modulo 1001001100101100000001011010010 results in 0', () => {
        const result: number = modThree('1001001100101100000001011010010');
        expect(result).toBe(0);
    })

    // even larger binary string: 15921354984015374
    test('modulo 111000100100000110001101010100001010100100011000001110 results in 2', () => {
        const result: number = modThree('111000100100000110001101010100001010100100011000001110');
        expect(result).toBe(2);
    })
});
