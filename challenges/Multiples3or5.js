
/**
 * 
 * @param {Number} number 
 * @returns Sum of all multiples of 3 or 5
 */
export function solution(number) {
    var sum = 0;
    for (let i = 0; i < number; i++) {
        if (i % 5 === 0 || i % 3 === 0) {
            sum += i;
        }
    }
    return sum;
}