/**
 * 
 * @param {Number} n 
 * @returns Digital root of a given number
 */
export function digitalRoot(n) {
    while (String(n).length > 1) {
        return digitalRoot(String(n).split('').reduce((acc, cval) => acc + parseInt(cval), 0))
    }
    return n
}