const firstClause = document.querySelector("#firstClause");
const turnerButton = document.querySelector("#turnerButton");
const reverseClause = document.querySelector("#reverseClause");

turnerButton.addEventListener("click", reverseWord);
firstClause.addEventListener("keyup", enter);

function enter(event) {
  if (event.keyCode===13){
    turnerButton.click(reverseWord)
  }
};

function reverseWord() {
  if (firstClause.value === "") {
    alert("Please enter a sentence");
  }
  const reverse = firstClause.value.split(" ").reverse().join(" ");
  reverseClause.innerHTML = reverse;
  firstClause.focus();
  firstClause.value = "";
};


// function reverseSent(sentence){
//     var result = " ";
//     var splitStr = sentence.split(" ");
  
//     for (var i = splitStr.length - 1; i >= 0; i--){
//       result += splitStr[i] + " ";
//       var words = result;
//     }
//     return words;
//   }

// function myFunction() {
//     let str = "impossible. mean not does hard but hard, be to going It’s";
//     let res = str.split(/\s/).reverse().join(" ");
//     document.getElementById("demo").innerHTML = res;
//   }

