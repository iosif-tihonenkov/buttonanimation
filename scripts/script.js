function rewrite() {
    document.getElementById("button_one").style.backgroundColor = '';
    document.getElementById("button_one").style.color = '';
    document.getElementById("button_one").style.width = "100px";
    document.getElementById("button_one").style.height = "100px";
    document.getElementById("button_one").textContent = '';
    document.getElementById("colorBackgroundCode").textContent = '';
    document.getElementById("colorTextCode").textContent = '';
    document.getElementById("widthCode").textContent = '';
    document.getElementById("heightCode").textContent = '';

}

function colorBackground() {
    let color = document.querySelector("input[name='colorBackground']").value;
    document.getElementById("button_one").style.backgroundColor = color;
    document.querySelector("input[name='colorBackground']").value = '';
    document.getElementById("colorBackgroundCode").textContent = "background-color: " + color + ";";
}

function colorText() {
    let color = document.querySelector("input[name='colorText']").value;
    document.getElementById("button_one").style.color = color;
    document.querySelector("input[name='colorText']").value = '';
    document.getElementById("colorTextCode").textContent = "color: " + color + ";";
}

function width() {
    let width = document.querySelector("input[name='width']").value;
    document.getElementById("button_one").style.width = width + 'px';
    document.querySelector("input[name='width']").value = '';
    document.getElementById("widthCode").textContent = "     width: " + width + ";";
}

function height() {
    let height = document.querySelector("input[name='height']").value;
    document.getElementById("button_one").style.height = height + 'px';
    document.querySelector("input[name='height']").value = '';
    document.getElementById("heightCode").textContent = "height: " + height + ";";
}

function content() {
    let content = document.querySelector("input[name='content']").value;
    document.getElementById("button_one").textContent = content;
    document.querySelector("input[name='content']").value = '';
    
}