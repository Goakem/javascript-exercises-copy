const findTheOldest = function(arr) {
   /* The problem is to return the name of the person "object" from the person array with the oldest age 
   Step 1: Calculate the age for each person object
   Step 2: Check to see the person with the oldest age after the calculation
   Step 3: Return the person object with the oldest age
   */
  // Step 1: Calculate the age for each person
    /* To calculate the age Subtract birth Year from Death year
       i.e. age = yearOfDeath - yearOfBirth
   */
  function calcAge(object) { // This Calc the age and mutate the objects in array
   let age = object.yearOfDeath - object.yearOfBirth;
   if (object.yearOfDeath === undefined) {
      const date = new Date();
      const presentYear = date.getFullYear();
      age = presentYear - object.yearOfBirth;
   }
   return object.age = age;
  }
  const ageArray = arr.map(calcAge); // <- This is the array of age od the elements

  // Step 2: Check to see the person object with the oldest age
      /* To Check to see the person with the oldest age
         1. Find the oldest age in the array of Ages
         2. then Filter the person with the same age as the maximum age
      */
     const oldestAge = Math.max(...ageArray);  // <- This returns the oldest age of the 3
     const oldestPersonArray = arr.filter(
      function (object) {
         return object.age === oldestAge;
      }
     ); // <- This returns the array of the oldestPerson
     const oldestPerson = oldestPersonArray[0];
     return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;