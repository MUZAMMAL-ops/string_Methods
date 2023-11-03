
//checking the length of a string
let str = 'Hello world';

const total = str.length;
console.log(total)

//replace sub-string with with another string
const replace1 = str.replace('H','B')
console.log(replace1)

//finding first occuring index of a sub-string
let indexof1 = str.indexOf('l');
console.log(indexof1)

//findind last occuring index of a sub-string
lastindex1 = "o"
const lastindex2 = str.lastIndexOf(lastindex1)
console.log(lastindex2);

//check a string if it starts with the sub-string
const starts = str.startsWith('He');
console.log(starts)

//check a string if it ends with the sub-string
const ends = str.endsWith('i');
console.log(ends)

//convert into uppercase
const toUpper = str.toUpperCase()
console.log(toUpper);

//convert into lowercase
console.log(toUpper.toLowerCase());

//check if any string includes with another string
const include1 = str.includes('z');
console.log(include1);

//returns character at specific index
const charat1 = str.charAt(2);
console.log(charat1);

//returns a specified part of the string between start and end indexes.
const substring1 = str.substring(0,3);
console.log(substring1);

//this method pads the current string with another string to the start.
const padd = str.padStart(3,"#")
console.log(padd);

//This method returns the result of matching a string against a regular expression.
const match1 = str.match('world');
console.log(match1);


// this method returns a new string with all matches of a pattern replaced by a replacement.
const repAll = str.replaceAll('l','o')
console.log(repAll);


//this method divides a string into a list of substrings and returns them as an array.
const str1 = 'Hello world';
const split1 = str1.split("");
console.log(split1[0])

//this method extracts and returns a section of a string.
const slice1 = str.slice(0,3);
console.log(slice1);



