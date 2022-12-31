const fibonacci = function(n) {
    n = Number(n);
    let runningTotal = 1;
    let prevNumber = 0;
    let temp = 0;
    if (n <= 0){
        return "OOPS";
    }
    for (i = 1; i < n; i++){
        temp = runningTotal;
        runningTotal += prevNumber;
        prevNumber = temp;
    }
    return runningTotal;
};

// Do not edit below this line
module.exports = fibonacci;
