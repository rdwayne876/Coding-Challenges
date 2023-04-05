
/**
 * @param {Number} value 
 * @returns True  if number is narcissistic or False otherwise
 */

export function narcissistic(value) {
    var power = value.toString().length
    var sum = 0

    for (let i = 0; i < value.toString().length; i++) {
        sum += Number((value.toString().split(''))[i]) ** power
    }
    return sum == value
}