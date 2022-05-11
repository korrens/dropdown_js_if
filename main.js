const countries = ['English', 'Latvian', 'Russian'],
    select = document.getElementById('countries');

for (country in countries) {

    select.add(new Option(countries[country]));

};

function display() {
    const e = document.getElementById("countries");
    const index = e.selectedIndex;
    if (index == 0) {
        document.getElementById("eng").style.display = 'block'
        document.getElementById("lv").style.display = 'none'
        document.getElementById("ru").style.display = 'none'
    }
    else if (index == 1) {
        document.getElementById("eng").style.display = 'none'
        document.getElementById("lv").style.display = 'block'
        document.getElementById("ru").style.display = 'none'
    }
    else if (index == 2) {
        document.getElementById("eng").style.display = 'none'
        document.getElementById("lv").style.display = 'none'
        document.getElementById("ru").style.display = 'block'
    }
}