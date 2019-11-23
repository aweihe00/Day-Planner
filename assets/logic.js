// gettig current time
$("#currentDay").text(moment().format("dddd, MMMM Do"));

//adding time blocks
var hour = ["9", "10", "11", "12", "13", "14", "15", "16", "17"]

//function to loop each element and to set the classes & attribute.
hour.forEach(function(time){
    var text = $("<textarea>").attr("dataStorage", time);
    var btn = $("<button>").addClass("saveBtn fas fa-save");
    var row = $("<div>").addClass("row");
    var hours = $("<div>").addClass("hour");

// parsing hour array 
    let any = parseInt(time);

// appending each variable
    row.append(hours, text, btn);

 // appending row to container class

 $(".container").append(row);

// checking if time is greater or less than 12 and setting AM/PM

    if(any < 12){
        hours.text(time + "am");

    }else if(any > 12){
        hours.text(time - 12 + "pm");

    }else{ 
    hours.text(time + "pm");
    }

});

