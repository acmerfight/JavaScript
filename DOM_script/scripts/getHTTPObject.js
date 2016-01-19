
function getHTTPObject() {
    return new XMLHttpRequest()
}

function getNewContent() {
    var request = getHTTPObject()
    if(request) {
        request.open("GET", "example.js", true)
        request.onreadystatechange = function() {
            if (request.readyState == 4) {
                var para = document.createElement("p")
                var txt = document.createTextNode(request.responseText)
                para.appendChild(txt)
                document.getElementById("new").appendChild(para)
            }
        }
        request.send(null)
    } else {
        alert("Sorry, your browser doesn't support ajax!")
    }
}