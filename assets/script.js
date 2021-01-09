// dont run javascript until webpage loads
$(document).ready(() => {
    
    //log date at the top 
    var currentDay = moment()
    console.log(currentDay.format("[Today is ] dddd, MMMM Do YYYY"))

    $("#currentDay").append(currentDay.format("[Today is ] dddd, MMMM Do YYYY"))

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

  //when clicked, p. turns into a <textarea>
  $(".time-block").on("click", "p", function() {
    var text = $(this).text().trim();
    //   console.log(text);

    var textInput = $("<textarea>")
      .addClass("form-control")
      .val(text);
    
    $(this).replaceWith(textInput);

    textInput.trigger("focus");

    // change icon to open lock
    $("#lock").addClass("oi-lock-unlocked");
    $("#lock").removeClass("oi-lock-locked");
  });

  $(".time-block").on("click", ".saveBtn", function() {
    var text = $(this).closest(".time-block").find("description").find("p").text();
    console.log(text)

    var blankText = "                           ";

    if (!text) {
      
      // recreate p element
      var taskP = $("<p>").text(blankText)
      .removeClass("form-control");

      // replace textarea with p element
      $(this).replaceWith(taskP);

      //change icon to open lock
      $("#lock").removeClass("oi-lock-unlocked");
      $("#lock").addClass("oi-lock-locked");

    }
    else {
      // recreate p element
      var taskP = $("<p>").text(text)
        .removeClass("form-control");

      // replace textarea with p element
      $(this).replaceWith(taskP);
    }
    
    });
})