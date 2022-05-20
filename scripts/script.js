

function colorBackground() {
    let color123 = document.querySelector("input[name='colorBackground']").value;
    document.getElementById("button_one").style.backgroundColor = color123;
    document.querySelector("input[name='colorBackground']").value = '';
}

function rewrite() {
    document.getElementById("button_one").style.backgroundColor = '';
}