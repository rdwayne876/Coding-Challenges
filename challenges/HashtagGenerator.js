/**
 * 
 * @param {String} str 
 * @returns Hashtag string or false if string is invalid
 */
export function generateHashtag(str) {
    var answer

    if (str.trim().length == 0) {
        return false
    } else {
        answer = "#" + str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('')
        if (answer.length > 140) {
            return false
        }
    }
    return answer
}