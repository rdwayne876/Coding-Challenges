
/**
 * 
 * @param {String} str 
 * @returns string converted to pig latin
 */
export function pigIt(str) {
    return str.split(" ").map(word => {
        return word.match(/^[0-9a-zA-Z]+$/) ? word.split("").slice(1).join("") + word[0] + 'ay' : word
    }).join(" ")
}
