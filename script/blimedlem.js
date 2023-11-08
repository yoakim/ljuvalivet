// Hämta <select>-elementet med id "age"
var ageSelect = document.getElementById('age');

// Loopa för att fylla <select>-elementet med åldrar från 18 till 26
for (var i = 18; i <= 89; i++) {
  var option = document.createElement('option'); // Skapa ett <option>-element
  option.value = i; // Ange värdet för <option>-elementet
  option.text = i; // Ange texten som ska visas i <option>-elementet
  ageSelect.appendChild(option); // Lägg till <option>-elementet i <select>
}
