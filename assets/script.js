// dont run javascript until webpage loads
$(document).ready(() => {
    
    //log date and time
    var currentDay = moment()
    console.log(currentDay.format("[Today is ] dddd, MMMM Do YYYY"))
    console.log(currentDay.format("[The time is ] LT"))

    //append date and tiem to jumbotron
    $("#currentDay").append(currentDay.format("[Today is ] dddd, MMMM Do YYYY. [The time is ] LT.")) 

    var timeNow = currentDay.format("H");
    // console.log("time = "+ time);

    var timeArray = $(".time-block");

    for (i = 0; i < timeArray.length; i++) {

        taskTime = $(timeArray[i]).attr("id");
        // console.log("taskTime = " + taskTime);

        var timeBetween = moment(taskTime, "hours").diff(moment(timeNow, "hours"), "hours");
        // console.log(timeBetween)

        if (timeBetween < 0) {
            $(timeArray[i]).addClass("past");
            $(timeArray[i]).css("color", "black");

        }
        else if (timeBetween === 0) {
            $(timeArray[i]).addClass("present");
            $(timeArray[i]).css("color", "white");
        }
        else {
            $(timeArray[i]).addClass("future");
            $(timeArray[i]).css("color", "white");
        }
    };

  //when text area clicked, lock turns to unlocked icon
  $(".time-block").on("click", "textarea", function() {
    
    $(this).siblings(".saveBtn").children("i").addClass("oi-lock-unlocked");
    $(this).siblings(".saveBtn").children("i").removeClass("oi-lock-locked");
  
    });

  $(".saveBtn").on("click", function() {
    
    var text = $(this).siblings(".description").val();
    var timeIndex = $(this).parent().attr("id");
    
    console.log("text = " + text + " index = " + timeIndex) 

    // change lock to locked
    $(this).children("i").addClass("oi-lock-locked");
    $(this).children("i").removeClass("oi-lock-unlocked");

    localStorage.setItem(timeIndex, text);
    
    });

    //get items from storage
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));
    $("#hour18 .description").val(localStorage.getItem("hour18"));
    $("#hour19 .description").val(localStorage.getItem("hour19"));
    $("#hour20 .description").val(localStorage.getItem("hour20"));


})