const findTheOldest = function(arr) {
    /*
    The problem is to get the person with the oldest age using the information that has been provided in the person object in the array

    // The first subproblem is to find the age of the people and return the person with the oldest age 
    // After their ages has been calculated their age should be compared and return as the final answer
    */
   let ageArr = [];
   let result;
   for (let i = 0; i < arr.length; i++){
    arr[i].age = arr[i].yearOfDeath - arr[i].yearOfBirth;
   }

   for (i = 0; i < arr.length; i++) {
    ageArr.push(arr[i].age);
   }
   console.log(ageArr);
   const oldestAge = Math.max(...ageArr);
   console.log("This is the oldest of them all", oldestAge);

   result = arr.filter( (element) => element.age === oldestAge);
   return result;
};
const people = [
    {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
    },
    {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
    },
    {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
    },
]

console.log(findTheOldest(people));
// Do not edit below this line
// module.exports = findTheOldest;
