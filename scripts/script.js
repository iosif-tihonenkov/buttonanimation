function rewrite() {
    document.getElementById("button_one").style.backgroundColor = '';
    document.getElementById("button_one").style.color = '';
    document.getElementById("button_one").style.width = "100px";
    document.getElementById("button_one").style.height = "100px";
}

function colorBackground() {
    let color = document.querySelector("input[name='colorBackground']").value;
    document.getElementById("button_one").style.backgroundColor = color;
    document.querySelector("input[name='colorBackground']").value = '';
}

function colorText() {
    let color = document.querySelector("input[name='colorText']").value;
    document.getElementById("button_one").style.color = color;
    document.querySelector("input[name='colorText']").value = '';
}

function width() {
    let width = document.querySelector("input[name='width']").value;
    document.getElementById("button_one").style.width = width + 'px';
    document.querySelector("input[name='width']").value = '';
}

function height() {
    let height = document.querySelector("input[name='height']").value;
    document.getElementById("button_one").style.height = height + 'px';
    document.querySelector("input[name='height']").value = '';
}