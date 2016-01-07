
function prepareGallery() {
    if(!document.getElementsByTagName) return false
    if(!document.getElementById) return false
}

function showPic(whichpic) {
    var source = whichpic.getAttribute("href")
    var placeholder = document.getElementById("placeholder")
    placeholder.setAttribute("src", source)
    var text = whichpic.getAttribute("title")
    var description = document.getElementById("description")
    description.firstChild.nodeValue = text
}


window.onload = prepareLinks
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