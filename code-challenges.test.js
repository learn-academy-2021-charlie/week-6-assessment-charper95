// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their names capitalized.

// a) Create a test with an expect statement using the variable provided.

// Describe the name of the function - sentenceFunction
describe("sentenceFunction", () => {
  // Test what the function does - returns an array with a sentence about each person with their names capitalized
          it("returns an array with a sentence about each person with their names capitalized", () => {
  // Expect the output of the function to be equal to the correct output - output of ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is a president of the galaxy.", "Arthur Dent is a radio employee."]
              expect(sentenceFunction(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is a president of the galaxy.", "Arthur Dent is a radio employee."])
          })
      })

// b) Create the function that makes the test pass.

// Create a function named sentenceFunction
// That takes an array of objects as an argument for the input
const sentenceFunction = (array) => {
// Iterate
// Make a new empty array for the output to be pushed into
  let newArray = []
// Use a for loop to iterate through the length of the array (3 values)
  for (i = 0; i < array.length; i++) {
// Isolate each object of the array - array[i] --> { name: 'ford prefect', occupation: 'hitchhiker' }
// Retrieve the name value of each object - array[i].name --> ford prefect
// Use the split method to separate each word in the name and output them in an array - array[i].name.split(" ") --> [ 'ford', 'prefect' ]
// Use the map method to iterate through the array and isolate the character at the 0th index of each value - array[i].name.split(" ").map(string => string.charAt(0)) --> [ 'f', 'p' ]
// Set the characters at the 0th index of the values to upper case - array[i].name.split(" ").map(string => string.charAt(0).toUpperCase()) --> [ 'F', 'P' ]
// Concat the Uppercased characters with the substring starting at the 1st index of the value of the array --> [ 'F', 'P' ] + [ 'ord', 'refect'] --> [ 'Ford', 'Prefect' ]
// Join the values of the array into a string using the join method --> Ford Prefect
// Declare a variable of name and assign it to the result
    let name = array[i].name.split(" ").map(string => string.charAt(0).toUpperCase() + string.substring(1)).join(" ")
// Retreive the occupation value of each object - array[i].occupation --> hitchhiker
// Declare a variable of occupation and assign it to the result
    let occupation = array[i].occupation
// String interpolate to make a sentence
// Declare a variable of sentence and assign it to the result
    let sentence = `${name} is a ${occupation}.`
// Using the push method, push the sentence into the new empty array
    newArray.push(sentence)
  }
// Return the new array
  return newArray
}

var people = [
  { name: "ford prefect", occupation: "hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "radio employee" }
]
console.log(sentenceFunction(people))
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is a president of the galaxy.", "Arthur Dent is a radio employee."]

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

// Describe the name of the function - remainderThree
describe("remainderThree", () => {
  // Test what the function does - returns an array of only the REMAINDERS of the numbers when divided by 3
          it("returns an array of only the REMAINDERS of the numbers when divided by 3", () => {
  // Expect the output of the function to be equal to the correct output - output of an array with only the REMAINDERS of the numbers when divided by 3
              expect(remainderThree(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
              expect(remainderThree(hodgepodge2)).toEqual([ 2, 1, -1 ])
          })
      })

// b) Create the function that makes the test pass.

// Create a function named remainderThree
// That takes in a mixed data array
const remainderThree = (array) => {
// Declare a variable of a new array and assign it to the result of the filter method
// Use a filter method to filter out anything of the array that is not a number
  let newArray = array.filter(value => {
// Use a conditional, if the type of the value is a number return true
    if (typeof value === "number") {
// You cannot simply return the value, because 0 in Javascript is falsy and the filter method by default excludes falsy items
      return true
    }
  })
// Declare a variable of remainder and assign it to the result of the map method
// Use a map method to return an array with the remainders of the value divided by 3
  let remainder = newArray.map(value => {
// Return the value modulo 3 to return the remainders of the numbers when divided by 3
    return value % 3
  })
// Return remainder array
  return remainder
}

var hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
console.log(remainderThree(hodgepodge1))
// Expected output: [ 2, 0, -1, 0 ]
var hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
console.log(remainderThree(hodgepodge2))
// Expected output: [ 2, 1, -1 ]

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

// Describe the name of the function - cubedSum
describe("cubedSum", () => {
// Test what the function does - returns the sum of all the numbers cubed
          it("returns the sum of all the numbers cubed", () => {
// Expect the output of the function to be equal to the correct output - output of the sum of all the numbers cubed
              expect(cubedSum(cubeAndSum1)).toEqual(99)
              expect(cubedSum(cubeAndSum2)).toEqual(1125)
          })
      })

// b) Create the function that makes the test pass.

// Create a function named cubedSum
// That takes in a array of numbers
const cubedSum = (array) => {
// Iterate through the array using the map method
// Assign the result to a variable of a new array
  var newArray = array.map(value => {
// Return the value of the array cubed mapped to a new array
    return value ** 3
  });
// Return the new array with the reduce method to calculate the sum of the values
// The reduce method takes two parameters, a call back function and an initial value
// The call back function will execute on each value of the array
// The call back function takes two parameters, accumulator and a current value
// The accumulator accumulates the return values of the callback function
// The current value is the current value being processed in the array
  return newArray.reduce((a, b) => {
    return a + b 
  })
}

var cubeAndSum1 = [2, 3, 4]
console.log(cubedSum(cubeAndSum1))
// Expected output: 99
var cubeAndSum2 = [0, 5, 10]
console.log(cubedSum(cubeAndSum2))
// Expected output: 1125