let input = document.getElementById("inputbox");
let buttons = document.querySelectorAll("button");
let string = "";

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    // 'Click' -> 'click'
    let buttonText = e.target.innerHTML;

    if (buttonText == "=") {
      try {
        string = eval(string); // Safely evaluating the expression
        input.value = string;
      } catch {
        input.value = "Error"; // Display error if invalid expression
        string = "";
      }
    } else if (buttonText == "AC") {
      // Clear screen
      string = "";
      input.value = string;
    } else if (buttonText == "DEL") {
      // Delete last character
      string = string.slice(0, -1);
      input.value = string;
    } else {
      // Add number or operator to the screen
      string += buttonText;
      input.value = string;
    }
  });
});
