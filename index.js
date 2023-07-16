// code your solution here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

const newActivity = "go swimming";
console.log(saturdayFun(newActivity));
console.log(saturdayFun());

function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
}

const newMonday = "work from home";
console.log(mondayWork(newMonday));
console.log(mondayWork());

function wrapAdjective(symbol = "*") {
    return function(y = "special") {
        return `You are ${symbol}${y}${symbol}!`;
    }
}
