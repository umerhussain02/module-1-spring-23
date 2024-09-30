function getNumber(num) {
  let result = document.getElementById("display");
  result.value += num;
}

function clearResult() {
  let result = document.getElementById("display");
  result.value = "";
}

function getResult() {
  let result = document.getElementById("display");

  if (result.value === "") {
    return alert("Enter values");
  } else if (
    result.value.includes("**") ||
    result.value.includes("//") ||
    result.value.includes("++") ||
    result.value.includes("--")
  ) {
    alert("syntax wrong")
  } else {
    result.value = eval(result.value);
  }
}
