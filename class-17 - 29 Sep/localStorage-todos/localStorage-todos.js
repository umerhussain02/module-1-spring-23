// localStorage.setItem('data', 'Module 1')
// localStorage.getItem
// localStorage.removeItem
// localStorage.clear

// function addTodo() {

// }

const arr = [];

const addTodo = () => {
  const textInput = document.getElementById("text-input");
  const value = textInput.value;
  console.log(value);

  arr.push(value);
  localStorage.setItem("todos", JSON.stringify(arr));
  textInput.value = "";

  const getItems = JSON.parse(localStorage.getItem("todos"));
  console.log(getItems);
};

// const onLoad = () => {
//     const textInput = document.getElementById('text-input')
//     textInput.value = localStorage.getItem('todos')
// }
// onLoad()
