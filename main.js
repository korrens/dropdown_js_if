const select = document.getElementById("select"),
    arr = ["Latvian", "English", "Russian"];

for (var i = 0; i < arr.length; i++) {
    var option = document.createElement("OPTION"),
        txt = document.createTextNode(arr[i]);
    option.appendChild(txt);
    option.setAttribute("value", arr[i]);
    select.insertBefore(option, select.lastChild);
}


if (arr[0] = "Latvian") {
    document.getElementById("heading").innerHTML = "Labdien!";
}
else if (arr[1] == "English") {
    document.getElementById("heading").innerHTML = "Hello!";
}
else if (arr[2] == "Russian") {
    document.getElementById("heading").innerHTML = "Добрый день!";
}
