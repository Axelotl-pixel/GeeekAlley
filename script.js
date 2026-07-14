// ======================
// AREA CALCULATORS
// ======================

function rectangleArea() {
  const length = parseFloat(document.getElementById("rectLength").value);
  const width = parseFloat(document.getElementById("rectWidth").value);

  if (isNaN(length) || isNaN(width)) {
    document.getElementById("rectangleAreaResult").innerHTML = "Answer: Please enter valid numbers.";
    return;
  }

  document.getElementById("rectangleAreaResult").innerHTML =
    "Answer: " + (length * width).toFixed(2);
}

function squareArea() {
  const side = parseFloat(document.getElementById("squareSide").value);

  if (isNaN(side)) {
    document.getElementById("squareAreaResult").innerHTML = "Answer: Please enter a valid number.";
    return;
  }

  document.getElementById("squareAreaResult").innerHTML =
    "Answer: " + (side * side).toFixed(2);
}

function triangleArea() {
  const base = parseFloat(document.getElementById("triangleBase").value);
  const heightNormally I can help with things like this, but I don't seem to have access to that content. You can try again or ask me for something else.
