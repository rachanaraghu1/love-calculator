

document.querySelector("button").addEventListener("click", function () {
    // Get the input values inside the event listener
    const inputOneUser = document.getElementById("box1").value;
    const inputTwoUser = document.getElementById("box2").value;

    if (inputOneUser === "" || inputTwoUser === "") {
        alert("Enter the names");
    } else {
        var n = Math.floor(Math.random() *(100 - 50 + 1)) + 50;
        document.getElementById("texting").innerHTML = `YOUR PERCENTAGE IS: ${n}%`;
       
    }
});







