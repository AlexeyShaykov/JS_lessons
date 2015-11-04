function ajaxDate(event) {
    event.preventDefault();
    var reguest = new XMLHttpRequest();
    reguest.open('GET','ajax.php?input=' + document.forms[0].elements.textinput.value,true);
    reguest.send();

    reguest.onreadystatechange = function() {
        if (reguest.readyState == 4 && reguest.status == 200) {
            document.getElementById('par').innerHTML = reguest.responseText;
        }
    }

}

