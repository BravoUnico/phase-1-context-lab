/* Your Code Here */
function createEmployeeRecord(record) {
    const employeeRecords = {
    firstName: record[0],
    familyName:record[1],
    title: record[2],
    payPerHour: record[3],
    timeInEvents: [],
    timeOutEvents: []
}
    return employeeRecords
}
function createEmployeeRecords(employee) {
    return employee.map(employee => createEmployeeRecord(employee))
}

function createTimeInEvent(staff) {
    let [date, hour] = staff.split(" ")
    let eventObj = {
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date 
    }

        this.timeInEvents.push(eventObj)
        return this
}

function createTimeOutEvent(event) {
    let [ date, hour] = event.split(" ")
    let eventObj = {
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date
    }
        this.timeOutEvents.push(eventObj)
        return this
}

function hoursWorkedOnDate(date) {
    const timeIn = this.timeInEvents.find(staff => staff.date === date)
    const timeOut = this.timeOutEvents.find(staff => staff.date === date)
    
    return (timeOut.hour - timeIn.hour)/100

}

function wagesEarnedOnDate(date) {
    const hours = hoursWorkedOnDate.call(this, date)
    return this.payPerHour*hours
}

function calculatePayroll(employeeRecords) {
   // const record = createEmployeeRecords.map(employee => allWagesFor.bind(employee))

    return employeeRecords.reduce(( currentValue, current) => currentValue + allWagesFor.call(current), 0)
}

function findEmployeeByFirstName(employeeRecord, firstName) {
    console.log(employeeRecord)

    return employeeRecord.find(rec => rec.firstName === firstName)
}



//function findEmployeeByFirstName(collection, firstNameString) {
   // return this.firstName.find( collection => {}
//}



/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */



const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

