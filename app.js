//Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the funciton doubled.
// ie [1, 2, 3] should give me [2, 4, 6]


const arr = [1, 2, 3, 4];
function doubleValues(arr){
    const doubledArr = [];
    for(let i = 0; i < arr.length; i++){
        let val = arr[i]* 2;
        
        doubledArr.push(val);
    }
    ///
    return doubledArr;
}

// Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function.
// ie [1,2,3] should give me [2]

// function onlyEvenValues(arr) {
//     const evenArr = [];
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] % 2 === 0){
//             evenArr.push(arr[i]);
//         }
        
//     }
//     return evenArr;
// }

function onlyEvenValues(arr) {
    const evenNums = arr.filter(function(val){
        return val % 2 === 0;
    });
    return evenNums;
}

function onlyEvenValues1(arr) {
    let newArr = [];
    arr.forEach(function(val) {
        if(val % 2 === 0) {
            newArr.push(val);
        }
       });
    return newArr;
}

//Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.
// ie ['hi', 'goodbye', ] should give me ['hi', 'ge']




function showFirstAndLast(arr) {
    let newArr = [];
   arr.forEach(function(val) {
    newArr.push(val[0] + val[val.length - 1]);
   });
   return newArr;
}

function showFirstAndLast1(arr) {
    let newArr = [];
    arr.forEach(val => newArr.push(val[0] + val[val.length-1]));
    return newArr;
}

// function myFilter(arr, callback) {
//     const filteredArray = [];
//     for(let i = 0; i < arr.length; i ++){
//         if(myFilter(arr[i],i, arr){
//             filteredArray.push(arr[i])
//         }
//     }
// }

// myFilter([1,2,3], function(arr, i, arr2){
//     console.log(arr)
//     if(i === 1){
//         return true;
//     }
//     return false;
// })


//Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object.

//

function addKeyAndValue(arr, key, value) {
    arr.forEach(el =>  el[key] = value);
    return arr;
}

//Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count.

function vowelCount(str) {
    let lowerCase = str.toLowerCase();

    let lowerCaseSplit = lowerCase.split("");
    const vowels = 'aeiou';
    let obj = {};

    lowerCaseSplit.forEach(function(char) {
        //if vowels.indexOf(char) === -1, it means char does not exist inside vowels
        if(vowels.indexOf(char) !== -1 ){
           if(obj[char]) {
            obj[char]++;
           }else {
            obj[char] = 1;
           }
        }
    })
    return obj;
};



//MAP

//Write a function called doubleValuesWithMap which accepts an array and returns a new array with all the values in the array passed to the function doubled

function doubleValuesWithMap(arr){
    const doubled = arr.map((val) => val * val);

    return doubled;
}

//Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.

function valTimesIndex(arr){
    const valTimesI = arr.map((val,idx) => val * idx)

    return valTimesI;
}

//Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value of that key in each object.

function extractKey(arr, key){
    return arr.map((arr) => arr.name)
}

//Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of "first" and the value of a key with the name of "last" in each object, concatenated together with a space.

function extractFullName(arr) {
    const fullName = arr.map((val) => val.first + " " + val.last);
    return fullName;
}

//Filter

//Write  a function called filterByValue which accepts an array of objects and a key and returns a new array with all the objects that contain that key.

function filterByValue(arr, key){
    return arr.filter((val) => val[key] !== undefined);
    }

//Write a function called find which accepts an array and a value and returns the first element that has the same value as the second parameter or undefined if the value is not found in the array.

// function find(arr,key) {
//     return arr.filter((val) => val === key);
    
// }

function find(arr, key) {
    return arr.filter(function(val){
        return val === key;
    })[0];
}

// Write a function called findInObj which accepts an array of objects, a key, and some value to search for and returns the first found value in the array.

function findInObj(arr, key, searchVal){
   return arr.filter(function(val){
    return val[key] === searchVal;
   })[0];
}

// Write a function called removeVowels which accepts a string and returns a new string with all of the vowels(both uppercased and lowercased) removed. Every character in the new string should be lowercased.


function removeVowels(str) {
    const vowels = "aeiou";
    return str
      .toLowerCase()
      .split("")
      .filter(function(val) {
        return vowels.indexOf(val) === -1;
      })
      .join("");
    
}
// Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled.
function doubleOddNumbers(arr){
    return arr.filter(function(val){
        return val % 2 !== 0;
    })
    .map(function(val){
        return val * 2;
    })
}