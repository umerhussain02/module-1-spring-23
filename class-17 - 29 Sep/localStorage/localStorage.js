


// localStorage.setItem('data', 'Module 1')
// localStorage.getItem
// localStorage.removeItem
// localStorage.clear

// function addTodo() {

// }

const addTodo = () => {
    const textInput = document.getElementById('text-input')
    const value = textInput.value
    console.log(value)

    localStorage.setItem('todos', value)
}

const onLoad = () => {
    const textInput = document.getElementById('text-input')
    textInput.value = localStorage.getItem('todos')
}
onLoad()