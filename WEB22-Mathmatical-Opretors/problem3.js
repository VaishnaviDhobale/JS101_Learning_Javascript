// - You have to take five numbers, stored in variables with the following names
//      one, two, three, four, five, six
// The value stored in the variable`two, five, six`has been doubled, such that if initially the value was 3, it has become 6

// The value stored in the variable`three, four`has been increased three times, such that if initially it was 3, it has become 9

// The value stored in the variable `one` has not been changed.

// Find the sum of the updated values stored in`one, two, three, four, five, six`

let one = 1, two =2, three = 3, four = 4, five = 5, six = 6;
let double=(two*2)+(five*2)+(six*2);
let triple=(three*3)+(four*3);
console.log(one+double+triple);