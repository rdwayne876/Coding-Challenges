/**
 * @param {String} word 
 * @returns Encoded string
 */
export function duplicateEncode(word) {
    return word.split('').map(
        c => word.split('').filter(x => x.toLowerCase() == c.toLowerCase()).length > 1 ? ")" : "("
    ).join("")
}