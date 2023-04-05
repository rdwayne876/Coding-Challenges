/**
 * 
 * @param {String} morseCode String in morse code
 * @returns decoded string
 */
export function decodeMorse(morseCode) {
    return morseCode.trim().split("  ").map((word) => {
        return word.trim().split(" ").map(letter => MORSE_CODE[letter]).join("")
    }).join(" ")
}