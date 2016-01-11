addLoadEvent(prepareGallery)

function addLoadEvent(func) {
    var oldonload = window.onload
    if (typeof window.onload != "function") {
        window.onload = func
    } else {
        window.onload = function() {
            oldonload()
            func()
        }
    }
}


function prepareGallery() {
    if(!document.getElementsByTagName) return false
    if(!document.getElementById) return false
    if(!document.getElementById("gallery")) return false
    var gallery = document.getElementById("gallery")
    var links = gallery.getElementsByTagName("a")
    for(var i=0; i < links.length; i++) {
        links[i].onclick = function() {
            showPic(this)
            return false
        }
    }
}

function showPic(whichpic) {
    if (!document.getElementById("placeholder")) return false
    var source = whichpic.getAttribute("href")
    var placeholder = document.getElementById("placeholder")
    placeholder.setAttribute("src", source)
    if (document.getElementById("description")) {
        var text = whichpic.getAttribute("title")
        var description = document.getElementById("description")
        description.firstChild.nodeValue = text
    }
}


function prepareLinks() {
    var links = document.getElementsByTagName("a")
    for (var i=0; i<links.length; i++) {
        if (links[i].getAttribute("class") == "popup") {
            links[i].onclick = function() {
                popUp(this.getAttribute("href"))
                return false
            }
        }
    }
}

function popUp(winURL) {
    window.open(winURL, "popup", "width=320, height=480")
}