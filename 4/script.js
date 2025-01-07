const buttonContainer = document.getElementById("buttonContainer");
const buttonChildContainer = document.getElementById("buttonChildContainer");

buttonContainer.addEventListener("click", (event) => {
  alert("Container clicked!");
});

buttonChildContainer.addEventListener("click", (event) => {
  alert("Child container clicked!");
});

// I have the code below this line for the assignment 4 , I used DOM level 0 event handler.

let btn2 = document.getElementById("button2");
btn2.onclick = function () {
  console.log(this.id);
};

// I used DOM level 2 event handler

let btn3 = document.getElementById("button3");
btn3.addEventListener(
  "click",
  function () {
    console.log(this.id);
  },
  false
);

btn3.addEventListener(
  "click",
  function () {
    console.log("Hello world!");
  },
  false
);

// I used Event Delegation and I used buttonChildContainer as parents

document
  .getElementById("buttonChildContainer")
  .addEventListener("click", function (e) {
    if (e.target && e.target.nodeName == "BUTTON") {
      console.log("Button", e.target.id, "was clicked!");
    }
  });

// I used preventDefault and stopPropagation

let btn4 = document.getElementById("button4");
btn4.onclick = function (event) {
  event.preventDefault();
};

let btn5 = document.getElementById("button5");
btn5.onclick = function (event) {
  console.log("Clicked");
  event.stopPropagation();
};
