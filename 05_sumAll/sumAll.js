const sumAll = function(a,b) {
    let sum = 0;
    if (a > b){
        let temp = a;
        a = b;
        b = temp;
    }
    if(typeof a != "number" || typeof b != "number" || a < 0 || b < 0){
        return 'ERROR';
    }
    for(let i = a; i <= b; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
