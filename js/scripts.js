$(document).ready(function() {
  $("form#inputForm").submit(function() {
    event.preventDefault();

    var inputN = $("input#inputNumber").val();
    var arrayOfN = [];
    for (i = 0; i < inputN; i++) {
      arrayOfN [i] = i + 1;
    }
    for  (var i = 1; i <= inputN; i++) {
      if (arrayOfN [i] % 15 === 0){
        arrayOfN [i] = "PING-PONG";
      } else if (arrayOfN [i] % 5 === 0) {
        arrayOfN [i] = "pong";
      } else if (arrayOfN [i] % 3 === 0) {
        arrayOfN [i] = "ping";
      } else {
      }
    }
    var indexNum = 0;
    var unorderedList = document.getElementById("listOfNumbers");
    var myElement;

    function write_letters(){
      for (i = 0; i < arrayOfN.length; i++ ) {
        myElement = document.createElement("LI");
        myElement.innerHTML = arrayOfN[indexNum++];
        unorderedList.appendChild(myElement);
      }
    }
    write_letters();
  });
});
