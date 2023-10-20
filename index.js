// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2);
    }
    
    const returnLastTwoDrivers = function(drivers){
        return drivers.slice(-2);
    }
    
    let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
    
    function createFareMultiplier(fare){
        return function(multiplier){
            return fare * multiplier;
        }
    }
    
    const fareDoubler = function(createFareMultiplier){
        return createFareMultiplier * 2;
    }
    
    const fareTripler = function(createFareMultiplier){
        return createFareMultiplier * 3;
    }
    
    function selectDifferentDrivers(drivers, selectingDrivers){
        return selectingDrivers(drivers);
    }