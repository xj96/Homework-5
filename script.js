// TO DO LIST
// ==============================================================================================================
// GIVEN I am using a daily planner to create a schedule
// 
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar

// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours

// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future

// WHEN I click into a timeblock
// THEN I can enter an event

// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage

// WHEN I refresh the page
// THEN the saved events persist




// CODE
// ==============================================================================================================

// Global Variables
const date = moment();
console.log(date.format("dddd\, MMMM Do\, YYYY"));
var timeBlock = $("time-block");
var hourEl = $("hour");
var pastEl = $("past");
var presentEl = $("present");
var futureEl = $("future");
var saveBtn = $("saveBtn");
var time = ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"];


// Reference Variables
var currentDay = $("#current-day");
console.log(currentDay)



// Functions

// Display Current Day at top of calendar
function displayDate() {
    currentDay
}
displayDate()
    // Display timeblocks 9 - 5 pm

    // Color code timeblocks by past, present, and future

    // When user clicks inside of timeblock they can input data

    // User data gets saved to local storage
    // Saved events persist
