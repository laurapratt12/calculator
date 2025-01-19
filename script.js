let output = document.querySelector(".output"); //to get the element not the array
let clear = document.getElementById("clear");
let deleteKey = document.getElementById("delete");
//const buttonNumbers = Array.from(document.getElementsByClassName("number")); // array and click function
const buttonNumbers = Array.from(document.querySelectorAll(".number"));
let enter = document.getElementById("enter");
let operators = Array.from(document.querySelectorAll("#operator")); //we need more operators with this id
console.log(buttonNumbers, operators);

buttonNumbers.forEach((i) => {
  i.addEventListener("click", () => {
    console.log(i);
    //arrow function
    // output.innerText += i (increment, we don't remove the previous one)
    if (output.innerText === "invalide value") {
      clearEnter();
    } else {
      output.innerText += i.innerText;
    }
  });
});

operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    if (output.innerText === "") {
      //=== comparison
      if ((operator.innerText === "-") | (operator.innerText === ".")) {
        //check on operators
        output.innerText += operator.innerText;
      } else {
        return; //do not do anything
      }
    } else if (output.innerText === "invalide value") {
      clearEnter();
    } else {
      if (operator.innerText === "x") {
        output.innerText += "*";
        //operator.innerText = "x";
        console.log(operator.innerText);
        return;
      }
      output.innerText += operator.innerText;
    }
  });
});

function clearEnter() {
  output.innerText = "";
}

clear.addEventListener("click", () => {
  clearEnter();
});

deleteKey.addEventListener("click", () => {});
//output.innerText = eval (evaluateing the expression to calculate the function)
//index -= 1 (excluding the last index, so - 1)
//slice - delete last number digited, last index
//

//if we click enter that should be error or give the eval (=)
