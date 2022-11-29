const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
      //28
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
      //49
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
      //29
    },
  ];


const findTheOldest = function(array) {
    return array.reduce((oldest, currentPerson) => {
      const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
      const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
      return oldestAge < currentAge ? currentPerson : oldest;
    })
  };
  
  const getAge = function(birth, death) {
    if (!death) {
      death = new Date().getFullYear(); //return current year if the item in the array doesnt have a yearOfDeath
    }
    return death - birth;
  };
findTheOldest(people).name
// Do not edit below this line
module.exports = findTheOldest;


// const people = [
//     {
//       name: "Carly",
//       yearOfBirth: 1942,
//       yearOfDeath: 1970,
//     },
//     {
//       name: "Ray",
//       yearOfBirth: 1962,
//       yearOfDeath: 2011,
//     },
//     {
//       name: "Jane",
//       yearOfBirth: 1912,
//       yearOfDeath: 1941,
//     },
//   ]