const findTheOldest = function(arr) {

  function calcAge(object) { 
   let age = object.yearOfDeath - object.yearOfBirth;
   if (object.yearOfDeath === undefined) {
      const date = new Date();
      const presentYear = date.getFullYear();
      age = presentYear - object.yearOfBirth;
   }
   return object.age = age;
  }
  const ageArray = arr.map(calcAge); 

  
   const oldestAge = Math.max(...ageArray);
   const oldestPersonArray = arr.filter(
   function (object) {
      return object.age === oldestAge;
   }
   ); 
   const oldestPerson = oldestPersonArray[0];
   return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;