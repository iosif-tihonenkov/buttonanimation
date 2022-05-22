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

function fontFamily() {
    let fontFamily = document.querySelector("select[name='contentFontFamily']").value;
    document.getElementById("button_one").style.fontFamily = fontFamily;
}

function fontSize() {
    let fontSize = document.querySelector("input[name='fontSize']").value;
    document.getElementById("button_one").style.fontSize = fontSize + 'px';
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

function onInputFontSize() {
    let rng = document.querySelector("input[name='fontSize']");
    let p = document.getElementById("valueInput__fontSize");
    p.innerHTML=rng.value;
}

function test() {
    let elem = document.getElementById("button_one");
    let backgroundColor = window.getComputedStyle(elem).backgroundColor;
    let contentColor = window.getComputedStyle(elem).color;
    let buttonWidth = window.getComputedStyle(elem).width;
    let buttonHeight = window.getComputedStyle(elem).height;
    let buttonBorderRadius = window.getComputedStyle(elem).borderRadius;
    let buttonFontFamily = window.getComputedStyle(elem).fontFamily;
    let buttonFontSize = window.getComputedStyle(elem).fontSize;
    let cssCode = `button {
    background-color: ${backgroundColor};
    color: ${contentColor};
    width: ${buttonWidth};
    height: ${buttonHeight};
    border-radius: ${buttonBorderRadius};
    font-family: ${buttonFontFamily};
    font-size: ${buttonFontSize};
}`;
    let content = document.getElementById("button_one").textContent;
    let htmlCode = `<button>${content}</button>`;
    document.getElementById("cssCodeContent").textContent = cssCode;
    document.getElementById("htmlCodeContent").textContent = htmlCode;
}