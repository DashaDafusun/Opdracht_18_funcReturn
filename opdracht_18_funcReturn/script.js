'use strict'

        // DEEL 1

let findNum = function(num) {

    if (num > 100) {
        return true;

    } else if (num < 100) {
        return false;
    }
};

console.log(findNum(105));
console.log(findNum(55));
console.log(findNum(66));
console.log(findNum(185));




            // DEEL 2

let checkPeople = function(maxAmount, amount, age) {

    if (maxAmount == amount || maxAmount < amount) {
        return 'Sorry, Come later'

    } else if (amount < maxAmount && age >= 18) {
            return 'Come in' 

    } else if (amount < maxAmount && age < 18) {
            return 'Only for adults'
       
    }
}
  
console.log(checkPeople(500, 501, 18));
console.log(checkPeople(500, 500, 18));
console.log(checkPeople(500, 499, 18));
console.log(checkPeople(500, 501, 17));
console.log(checkPeople(500, 500, 17));
console.log(checkPeople(500, 499, 17));





         // DEEL 3

let getAverage = function(nums) {
    let result = nums.reduce((total, n) => (total += n));
    return Math.round(result/nums.length)
}


console.log(getAverage([5, 3, 4, 9, 54]));
console.log(getAverage([345, 7573, 48, 19, 7]));
console.log(getAverage([15, 13, 14, 19, 154]));
