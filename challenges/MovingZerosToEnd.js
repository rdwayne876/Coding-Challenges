/**
 * 
 * @param {Array} arr 
 * @returns Given array with all instances of 0 moved to the end
 */
export function moveZeros(arr) {
    return [...arr.filter(value => value !== 0), ...arr.filter(value => value === 0)]
}