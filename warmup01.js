
/**
 * 1-Given an array of integers and an integer n.
 * find all occurrences of n in the given array and return another array containing all the index positions of n in the given array.
 * If n is not in the given array, return an empty array [].
 * Assume that n and all values in the given array will always be integers.
 * Example:
 * findAll([6, 9, 3, 4, 3, 82, 11], 3) => [2, 4]
 *
 * @param {Array} array
 * @param {number} n
 * @return {Array}
 */
let findAll = function (array, n) {
    let result =[]
    if(array.includes(n)){
        for (let i=0;i<=array.length;i++){
          if(array[i]===n) result.unshift(i)

    

    return new
}
}
  else{
    return new 
  }

  
};


// 2. write a function that takes a string as an argument
// and returns the string reversed word by word
// Example : reverseWord("hi there how is the weather today") ==>> "today weather the is how there hi"
//
//
// Note : you can`t use any built-in functions .

let reverseWord=(string) => {
        let reversed = "";
        let k = string.length - 1;
      
        while (k >= 0) {
          reversed += string[i];
          k--;
        }
      
        return reversed;
      }




/**
 * 3 - write a function called (sameLength) that takes array of strings and returns an array of the strings that have the same length
 * example :  ['hi','hello','welcome','hy'] ==> ["hi","hy"]
 *
 * @param {Array<string>} array
 * @return {Array<string>}
 */

let sameLength=(array) => {
    let result=[]
    for(let i=0;i<=array.length;i++){
        if(array[i].length===array[i+1].length){
            result .unshift(array[i])
        }
        return result

    }

}

  
function sameLength(array) {
  
}
