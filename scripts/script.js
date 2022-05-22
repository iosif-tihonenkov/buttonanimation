function rewrite() {
    document.getElementById("button_one").style.backgroundColor = '';
    document.getElementById("button_one").style.color = '';
    document.getElementById("button_one").style.width = '';
    document.getElementById("button_one").style.height = '';
    document.getElementById("button_one").textContent = '';
    document.getElementById("colorBackgroundCode").textContent = '';
    document.getElementById("colorTextCode").textContent = '';
    document.getElementById("widthCode").textContent = '';
    document.getElementById("heightCode").textContent = '';

}

function colorBackground() {
    let color = document.querySelector("input[name='colorBackground']").value;
    document.getElementById("button_one").style.backgroundColor = color;
    document.getElementById("colorBackgroundCode").textContent = "background-color: " + color + ";";
}

function colorText() {
    let color = document.querySelector("input[name='colorText']").value;
    document.getElementById("button_one").style.color = color;
    document.getElementById("colorTextCode").textContent = "color: " + color + ";";
}

function width() {
    let width = document.querySelector("input[name='width']").value;
    document.getElementById("button_one").style.width = width + 'px';  
    document.getElementById("widthCode").textContent = "     width: " + width + ";";
}

function height() {
    let height = document.querySelector("input[name='height']").value;
    document.getElementById("button_one").style.height = height + 'px';
    document.getElementById("heightCode").textContent = "height: " + height + ";";
}

function content() {
    let content = document.querySelector("input[name='content']").value;
    document.getElementById("button_one").textContent = content;
    document.querySelector("input[name='content']").value = '';
    
}

function circle() {
    let circle = document.querySelector("input[name='circle']").value;
    document.getElementById("button_one").style.borderRadius = circle + 'px';
    document.getElementById("heightCode").textContent = "height: " + height + ";";
}

function onInputWidth() {
    let rng = document.querySelector("input[name='width']");
    let p = document.getElementById("valueInput__width");
    p.innerHTML=rng.value;
}

function onInputHeight() {
    let rng = document.querySelector("input[name='height']");
    let p = document.getElementById("valueInput__height");
    p.innerHTML=rng.value;
}

function onInputCircle() {
    let rng = document.querySelector("input[name='circle']");
    let p = document.getElementById("valueInput__circle");
    p.innerHTML=rng.value;
}