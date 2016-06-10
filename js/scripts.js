//business logic
var pingpong = function (inputN) {
  var arrayOfN = [];
  for (i = 0; i < inputN; i++) {
    arrayOfN [i] = i + 1;
  }
  
  for  (var i = 0; i < arrayOfN.length; i++) {
    if (arrayOfN [i] % 15 === 0){
      arrayOfN [i] = "pingpong";
    } else if (arrayOfN [i] % 5 === 0) {
      arrayOfN [i] = "pong";
    } else if (arrayOfN [i] % 3 === 0) {
      arrayOfN [i] = "ping";
    }
  }
  return arrayOfN;
};

// user interface logic
$(document).ready(function() {
  $("form#inputForm").submit(function() {
    event.preventDefault();
    var inputN = parseInt($("input#inputNumber").val());

    if (inputN < 15) {
      alert ("Please enter a number equal or bigger than 15")
    } else {

      var resultArray = pingpong (inputN);
      $("ul#listOfNumbers").empty();

      for (i = 0; i < resultArray.length; i++) {
        $("ul#listOfNumbers").append("<li>" + resultArray[i] + "</li>");
      }
    }
  });
});
