// include-html.js

function includeHTML() {
    var elements, i, xhttp;
    elements = document.querySelectorAll('[include-html]');
    for (i = 0; i < elements.length; i++) {
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                elements[i].innerHTML = this.responseText;
                elements[i].removeAttribute('include-html');
                includeHTML();
            }
        };
        xhttp.open('GET', elements[i].getAttribute('include-html'), true);
        xhttp.send();
        return;
    }
}
