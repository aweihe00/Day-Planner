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

// checking if time is > or < than twelve and setting AM/PM

    if(any < 12){
        hours.text(time + "am");

    }else if(any > 12){
        hours.text(time - 12 + "pm");

    }else{ 
    hours.text(time + "pm");
    }

});

// waiting to perform functions until entire page is loaded.

$(document).ready( () => {

// creating save button to go to local storage on click -- selecting previous index of the button

    $(".saveBtn").on("click", function(){
        localStorage.setItem($(this).prev("textarea").attr("dataStorage"),$(this).prev("textarea").val());
    });

// grabbing everything within the data attr -- returns from local storage.

$("*[dataStorage]").each(function(){
    $(this).val(localStorage.getItem($(this).attr("dataStorage"))
)});
});

// getting new date and times

var newDate = new Date()
    var newHour = newDate.getHours();
    console.log(newHour);

    $("*[dataStorage").each(function(){
        if (parseInt($(this).attr("dataStorage")) === newHour){

            $(this).addClass("present").removeClass("past future");

        }else if(parseInt($(this).attr("dataStorage")) < newHour){
            $(this).addClass("past").removeClass("present future");

        }else{
            $(this).addClass("future").removeClass("past present");
        };
    });

    console.log(parseInt("dataStorage"));
    console.log(newHour);