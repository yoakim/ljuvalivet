{
    var links = [
        ["Startsida", "index.html"],
        ["Bli medlem", "blimedlem.html"],
        ["Om oss", "omoss.html"],
        ["Kontakta oss", "kontakta.html"]
    ]

    var menyHtml =""
    for(var i = 0; i < links.length; i = i + 1)

    {
        menyHtml += "<li><a href='" + links[i][1] + "'>" + links[i][0] + "</a></li>"

    }

    document.getElementById("Meny").innerHTML = menyHtml

}
