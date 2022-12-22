var removeFromArray = function(...args) {  
    const nums = args[0];
    // let newStr = [];
    // for(const item of nums){
    //     if(!args.includes(item)){
    //         newStr.push(item);
    //     }
    // }
    // return newStr;
    //filter function filters out items from a string, in this case,
    // it filters val such that val is not part of args.
    return nums.filter(val => !args.includes(val));
}
// Do not edit below this line
module.exports = removeFromArray;
function returnVal(val){
    return !args.includes(val);
}
