// Your code here
function createEmployeeRecord(employee){
    return{
        firstName: employee [0],
        familyName: employee [1],
        title: employee [2],
        payPerHour: employee [3],
        timeInEvents: [],
        timeOutEvents:  []
    }
}

function createEmployeeRecords(employees){
    return employees.map(employee => createEmployeeRecord(employee))
}

function createTimeInEvent( e){
    let [date, hour] = e.toString().split(" ")
    let eventObj = {
        type: "Time In",
        hour: parseInt (hour, 10),
        date,

    }
    this.timeInEvents.push (eventObj, createEmployeeRecord)
    return this
}

function createTimeOutEvent (e){
    let [date, hour] = e.toString().split(" ")
    let eventObj = {
        type: "Time Out",
        hour: parseInt (hour, 10),
        date,

    }
    this.timeOutEvents.push (eventObj)
    return this
}
    
    
/* firstName
familyName
title
payPerHour
timeInEvents
timeOutEvents*/

