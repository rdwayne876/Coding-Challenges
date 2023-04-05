/**
 * 
 * @param {Array} a 
 * @param {Array} b 
 * @returns  Array a with elements of b removed
 */
export function arrayDiff(a, b) {
    return a.filter(element => !b.includes(element))
}
