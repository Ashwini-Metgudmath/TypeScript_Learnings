import {Age} from './age.enum'

function totalAge(age1:Age , age2:Age){
    return age1 + age2;
}

console.log(totalAge(Age.Ashwini, Age.Eva));