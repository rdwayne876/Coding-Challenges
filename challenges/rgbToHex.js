const hexMap = new Map([
    [0, '0'],
    [1, '1'],
    [2, '2'],
    [3, '3'],
    [4, '4'],
    [5, '5'],
    [6, '6'],
    [7, '7'],
    [8, '8'],
    [9, '9'],
    [10, 'A'],
    [11, 'B'],
    [12, 'C'],
    [13, 'D'],
    [14, 'E'],
    [15, 'F'],
]);

/**
 * 
 * @param {Number} r Red
 * @param {Number} g Green
 * @param {Number} b Blue
 * @returns Converted HEX code for color
 */
export function rgb(r, g, b) {
    
    return new Array(r, g, b).map((value) => {
        if (value < 0) {
            return "00"
        }
        if (value > 255) {
            return ("FF")
        }
        let a = value / 16
        let b = (a - Math.floor(a)) * 16
        return `${hexMap.get(Math.floor(a))}${hexMap.get(Math.floor(b))}`
    }).join("")
}

