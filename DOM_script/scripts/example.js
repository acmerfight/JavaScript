
window.onload = function() {
    var para = document.createElement("p")
    var info = "nodeName: "
    info += para.nodeName
    info += " nodeType: "
    info += para.nodeType
    alert(info)
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
