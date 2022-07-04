const operate = (x, y, opp) => {
  if (typeof opp !== "string") return "error";
  x = +x;
  y = +y;
  switch (opp) {
    case "+":
      return x + y;
    case "-":
      return x - y;
    case "×":
      return x * y;
    case "÷":
      if (y === 0) return "error";
      return x / y;
    default:
      return "Invalid opperation";
  }
};
const onKeyPress = (evt) => {
  const key = evt.currentTarget;
  if (key.textContent === "CE") {
    if (x && y) {
      y = "";
      select.style.visibility = "hidden";
    } else if (x) {
      x = "";
      select.style.visibility = "hidden";
    }
  } else if (key.textContent === "C") {
    line.style.visibility = "hidden";
    select.style.visibility = "hidden";
    x = "";
    y = "";
    curOpp = "";
  } else if (x && curOpp && y && key.textContent === "=") {
    line.textContent = `${x} ${curOpp} ${y} =`;
    select.style.visibility = "visible";
    x = operate(x, y, curOpp);
    y = "";
    select.textContent = `${x}`;
  } else if (
    isNaN(key.textContent) &&
    key.textContent !== "." &&
    key.textContent !== "=" &&
    x
  ) {
    if(y) {
      x = operate(x, y, curOpp);
      y = "";
      curOpp = key.textContent;
      line.textContent = `${x} ${curOpp} ${y}`;
      select.style.visibility = "visible";
      
    }
    else {
      curOpp = key.textContent;
      line.style.visibility = "visible";
      line.textContent = `${x} ${curOpp}`;
      select.style.visibility = "hidden";
    }
  } else if (
    key.textContent !== "=" &&
    (!isNaN(key.textContent) || key.textContent === ".")
  ) {
    select.style.visibility = "visible";
    if (curOpp) {
      y += key.textContent;
      select.textContent = `${y}`;
    } else {
      x += key.textContent;
      select.textContent = `${x}`;
    }
  } else {
    console.log("error");
    select.textContent = "Error";
    line.style.visibility = "hidden";
    x = "";
    y = "";
    curOpp = "";
  }
};
let curOpp = "";
let x = "";
let y = "";
const calculator = document.querySelector(".calculator");
const select = document.querySelector("#select");
const line = document.querySelector("#line");
calculator.querySelectorAll("button").forEach((e) => {
  e.addEventListener("click", onKeyPress);
});
line.style.visibility = "hidden";
select.style.visibility = "hidden";
