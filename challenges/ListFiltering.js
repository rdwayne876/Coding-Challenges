
/**
 * 
 * @param {Array} l 
 * @returns Filtered lists of integers only
 */
export function filter_list(l) {
    return l.filter(li => Number.isInteger(li) == true)
}