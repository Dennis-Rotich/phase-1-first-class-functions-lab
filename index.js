const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = function(){
    let firstTwoDrivers = drivers.slice(0,2);
    return firstTwoDrivers;
}
const returnLastTwoDrivers = function(){
    let lastTwoDrivers = drivers.slice(2);
    return lastTwoDrivers;
}
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];
function createFareMultiplier(int){
    function fareMultiplier(fare){
        return fare * int;
    }
    return fareMultiplier;
}
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
function selectDifferentDrivers(drivers,selection){
    let result = selection(drivers);
    return result;
}

// Code your solution in this file!
