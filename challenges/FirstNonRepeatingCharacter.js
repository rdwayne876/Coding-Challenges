/**
 * 
 * @param {String} s 
 * @returns First character in the string that is not repeated or blank string
 */
export function firstNonRepeatingLetter(s) {
    stringArray = s.toLowerCase().split("")
  
    for (i = 0; i < stringArray.length; i++) {
      count = 0
      for (x = 0; x < stringArray.length; x++) {
        if (stringArray[i] == stringArray[x]) {   
          count++
        }
      }
  
      if (count == 1) {
        console.log(stringArray[i]);
        return s.charAt(i)
      }
    }
    
    return ''
  }