{
  var links = [
    ['Hem', 'index.html'],
    ['Om oss', 'omoss.html'],
    ['Kontakta oss', 'kontakta.html'],
    ['Bli medlem', 'blimedlem.html'],
    ['Logga in', 'loggain.html'],
  ];

  var menyHtml = '';
  for (var i = 0; i < links.length; i = i + 1) {
    menyHtml +=
      '<li class=' +
      links[i][0].replace(' ', '') +
      "><a href='" +
      links[i][1] +
      "'>" +
      links[i][0] +
      '</a></li>';
  }

  document.getElementById('Meny').innerHTML = menyHtml;
}

const searchIcon = document.getElementById('searchIcon');
const searchBox = document.getElementById('searchBox');
let isSearchVisible = false;

searchIcon.addEventListener('click', function (event) {
  event.stopPropagation();

  console.log('testtest');

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
