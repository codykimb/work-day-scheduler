// dont run javascript until webpage loads
$(document).ready(() => {
    
    //log date at the top 
    var currentDay = moment()
    console.log(currentDay.format("[Today is ] dddd, MMMM Do YYYY"))

    $("#currentDay").append(currentDay.format("[Today is ] dddd, MMMM Do YYYY"))

    var time = currentDay.format("H");
    // console.log("time = "+ time);

    var descriptionArray = $(".description");

    for (i = 0; i < descriptionArray.length; i++) {

        taskTime = $(descriptionArray[i]).attr("id");
        // console.log("taskTime = " + taskTime);

        var timeBetween = moment(taskTime, "hours").diff(moment(time, "hours"), "hours");
        // console.log(timeBetween)

        if (timeBetween < 0) {
            $(descriptionArray[i]).addClass("past");
            $(descriptionArray[i]).css("color", "black");

        }
        else if (timeBetween === 0) {
            $(descriptionArray[i]).addClass("present");
            $(descriptionArray[i]).css("color", "white");
        }
        else {
            $(descriptionArray[i]).addClass("future");
            $(descriptionArray[i]).css("color", "white");
        }
    };

  //when clicked, p. turns into a <textarea>
  $(".description").on("click", "p", function() {
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

  $(".description").on("blur", "textarea", function() {
    var text = $(this).val().trim();

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