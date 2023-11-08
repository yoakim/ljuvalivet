{
    var links = [
        ["Hem", "index.html"],
        ["Om oss", "omoss.html"],
        ["Kontakta oss", "kontakta.html"],
        ["Bli medlem", "blimedlem.html"],
        ["Logga in", "loggain.html"]
        
    ]

    var menyHtml =""
    for(var i = 0; i < links.length; i = i + 1)

    {
        
        menyHtml += "<li class="+links[i][0].replace(" ","")+"><a href='" + links[i][1] + "'>" + links[i][0] + "</a></li>"


    }

    document.getElementById("Meny").innerHTML = menyHtml

}


// Hämta <select>-elementet med id "age"
var ageSelect = document.getElementById("age");

// Loopa för att fylla <select>-elementet med åldrar från 18 till 26
for (var i = 18; i <= 89; i++) {
    var option = document.createElement("option"); // Skapa ett <option>-element
    option.value = i; // Ange värdet för <option>-elementet
    option.text = i; // Ange texten som ska visas i <option>-elementet
    ageSelect.appendChild(option); // Lägg till <option>-elementet i <select>
}



const searchIcon = document.getElementById('searchIcon');
const searchBox = document.getElementById('searchBox');
let isSearchVisible = false; 


searchIcon.addEventListener('click', function(event) {
    event.stopPropagation(); 

    console.log('testtest')
    
    if (!isSearchVisible) { 
        searchIcon.style.display = 'none';
        searchBox.style.display = 'inline-block';
        searchBox.focus();
    } else { 
        searchIcon.style.display = 'inline-block';
        searchBox.style.display = 'none';
    }
    
    isSearchVisible = !isSearchVisible; 
});

