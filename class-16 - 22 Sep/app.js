
// function timer() {
//     console.log("Running...2")
// }

// let interval =  setInterval(function () {              //function , time
//     console.log("Running...")
// } , 1000);                      


// setTimeout(function () {
//     clearInterval(interval)
// } , 3000);

// --------------------------------------
// let milliSeconds = 0;
// let seconds = 0;
// let minutes = 0;

// let minHeading = document.getElementById("minutes");
// let secHeading = document.getElementById("seconds");
// let mSecHeading = document.getElementById("milliSeconds");

// let interval;

// function timer() {
//     milliSeconds++;
//     mSecHeading.innerText = milliSeconds;

//     if (milliSeconds >= 99) {
//         milliSeconds = 0;
//         seconds++;
//         secHeading.innerText = seconds;
//     } else if (seconds >= 5) {
//         seconds = 0;
//         minutes++;
//         minHeading.innerText = minutes;
//     }
// }

// function start() {
//     clearInterval(interval);
//     interval = setInterval(timer, 10);
// }

// function stop() {
//     clearInterval(interval);
// }

// function reset() {
//     minutes = 0;
//     seconds = 0;
//     milliSeconds = 0;

//     minHeading.innerText = minutes;
//     secHeading.innerText = seconds;
//     mSecHeading.innerText = milliSeconds;

//     clearInterval(interval);
// }

// ------------------------------------------------

// let list = [1, "One", true]
// console.log(list)


// let stuOne = {
//     name: "Rafy",
//     age: 12,
//     module: 1,
// };

// stuOne.address = "xyz";
// console.log(stuOne)
// console.log(stuOne.name)
// console.log(stuOne.age)
// console.log(stuOne.module)

// stuOne.detail = [3, , 4, 5]
// console.log(stuOne)
// console.log(stuOne.detail[2])

// delete stuOne.detail;
// console.log(stuOne)


// 3 inputs with id
// button onclick getData()


let obj = {};
console.log(obj)

function getData() {
    let name = document.getElementById("name")
    let email = document.getElementById("email")
    let module = document.getElementById("module")

    obj.name = name.value
    obj.email = email.value
    obj.module = module.value

    console.log(obj)
}


