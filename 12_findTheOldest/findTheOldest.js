


const findTheOldest = function(arr) {
    let oldestPerson = arr[0]; //Assume the first person is oldest 

    for (let i = 1; i < arr.length; i++) {
        const currentPerson = arr[i];

        //Calculate the age of the current person
        const currentAge = calculateAge(currentPerson);

        //Calculate the age of the oldest person
        const oldestAge = calculateAge(oldestPerson);

        //If the current person's age is greater than the oldest person's age, update the oldestPerson variable. 
        if (currentAge > oldestAge) {
            oldestPerson = currentPerson;
        }
    }

    return oldestPerson;
};

//Helper function to calculate the age of a person
function calculateAge(person) {
    if (!person.yearOfDeath) {
        //If yearOfDeath is not provided, assume the person is still alive 
        const currentYear = new Date().getFullYear();
        return currentYear - person.yearOfBirth;
    }
    return person.yearOfDeath - person.yearOfBirth;
}


// Do not edit below this line
module.exports = findTheOldest;
