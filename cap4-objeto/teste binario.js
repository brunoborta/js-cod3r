// const sortByBinary = (a,b) => {
//     const aBinary = a.toString(2);
//     const aNumberOnes = aBinary.match(/1/g).length;
//     const bBinary = b.toString(2);
//     const bNumberOnes = bBinary.match(/1/g).length;
//     if(aNumberOnes < bNumberOnes || (aNumberOnes === bNumberOnes && a < b)) {
//         return -1;
//     } else if(aNumberOnes > bNumberOnes || (aNumberOnes === bNumberOnes && a > b)) {
//         return 1;
//     }
// };
// const a = [5,5,3,7,10,14];
// const removeDuplicates = array => array.filter((element, index, self) => index === self.indexOf(element));
// const aWithoutDuplicates = removeDuplicates(a);

// aWithoutDuplicates.sort(sortByBinary);
// console.log(aWithoutDuplicates)

/// Write your code into this function
function Rearrange(elements) {
    // Remove the duplicates from the array and numbers lesser than 0
    const arrayWithoutDuplicates = elements.filter((element, index, self) => element > 0 && index === self.indexOf(element));
    
    // The sort function to apply to the array
    const sortByBinary = (a,b) => {
        const aBinary = a.toString(2);
        const aNumberOnes = aBinary.match(/1/g).length;
        const bBinary = b.toString(2);
        const bNumberOnes = bBinary.match(/1/g).length;
        if(aNumberOnes < bNumberOnes || (aNumberOnes === bNumberOnes && a < b)) {
            return -1;
        } else if(aNumberOnes > bNumberOnes || (aNumberOnes === bNumberOnes && a > b)) {
            return 1;
        }
        // No need to the return 0 here because there's no duplicates
    };
  
    return arrayWithoutDuplicates.sort(sortByBinary);
}
console.log(Rearrange([5,5,3,7,10,14]));