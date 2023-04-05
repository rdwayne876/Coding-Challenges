/**
 * 
 * @param {String} start Starting IP Address
 * @param {String} end  Ending IP Address
 * @returns Number of IP address between the start and end Ip addresses
 */
export function ipsBetween(start, end) {

    startArr = start.split(".").map(e => parseInt(e))
    endArr = end.split(".").map(e => parseInt(e))
    counter = 0

    counter += (endArr[0] * 256 ** 3) - (startArr[0] * 256 ** 3)
    counter += (endArr[1] * 256 ** 2) - (startArr[1] * 256 ** 2)
    counter += (endArr[2] * 256) - (startArr[2] * 256)
    counter += endArr[3] - startArr[3]

    console.log(counter);
    return counter
}