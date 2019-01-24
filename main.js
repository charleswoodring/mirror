let outputElLeft = document.getElementById("pLeft")
let outputElRight = document.getElementById("pRight")
let message = document.getElementById("keypress-input")

message.addEventListener("keyup", function (event) {
    outputElLeft.innerHTML = event.target.value
    outputElRight.innerHTML = event.target.value
})