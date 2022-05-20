function colorBackground() {
    let color = document.querySelector("input[name='colorBackground']").value;
    document.getElementById("button_one").style.backgroundColor = color;
    document.querySelector("input[name='colorBackground']").value = '';
}

function rewrite() {
    document.getElementById("button_one").style.backgroundColor = '';
    document.getElementById("button_one").style.color = '';
}

function colorText() {
    let color = document.querySelector("input[name='colorText']").value;
    document.getElementById("button_one").style.color = color;
    document.querySelector("input[name='colorText']").value = '';
}