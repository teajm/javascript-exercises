const findTheOldest = function(people) {
    return people.reduce((oldest,currentPerson) =>{
        const oldestAge  = getAge(oldest.yearOfBirth, oldest.yearOfDeath)
        const nextGuy = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
        return oldestAge < nextGuy ? currentPerson : oldest;
    });
};

const getAge = function(birth, death) {
    if (!death) {
      death = new Date().getFullYear();
    }
    return death - birth;
  };
// Do not edit below this line
module.exports = findTheOldest;
