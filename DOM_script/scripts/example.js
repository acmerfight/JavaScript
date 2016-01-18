
window.onload = function() {
    var para = document.createElement("p")
    var testdiv = document.getElementById("testdiv")
    testdiv.appendChild(para)
    var txt = document.createTextNode("Hello world")
    para.appendChild(txt)
}

function addLoadEvent(func) {
    var old_load = window.onload
    if (typeof window.onload != "function") {
        window.onload = func
    } else {
        window.onload = function() {
            old_load()
            func()
        }
    }
}


function insertParagraph(text) {
    var str = "<p>"
    str += text
    str += "</p> wawa"
    document.write(str)
}

function insertAfter(newElement, targetElement) {
    var parent = targetElement.parentNode;
    if (parent.lastChild = targetElement) {
        parent.appendChild(newElement)
    } else {
        parent.insertBefore(newElement, targetElement.nextSibling)
    }
}
