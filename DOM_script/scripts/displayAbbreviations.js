function  displayAbbreviations() {
    var abbreviations = document.getElementsByTagName("abbr")
    if (abbreviations.length < 1) return false
    var defs = []
    for (var i=0; i<abbreviations.length; i++) {
        var current_abbr = abbreviations[i]
        var definition = current_abbr.getAttribute("title")
        var key = current_abbr.lastChild.nodeValue
        defs[key] = definition
    }
    var dlist = document.createElement("dl")
    for (key in defs) {
        var definition = defs[key]
        var dtitle = document.createElement("dt")
        var dtitle_text = document.createTextNode(key)
    }
}