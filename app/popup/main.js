/*jslint browser: true*/
/*global $, jQuery, console, alert, GET*/

var language = localStorage.getItem("language"), url;

if (language === "us") {

    url = 'http://en.wikipedia.org/wiki/Special:Random';

}
if (language === "pt-br") {

    url = 'http://pt.wikipedia.org/wiki/Especial:Aleat%C3%B3ria';

}
if (language === "es") {

    url = 'http://es.wikipedia.org/wiki/Especial:Aleatoria';

}
if (language === "fr") {

    url = 'http://fr.wikipedia.org/wiki/Sp%C3%A9cial:Page_au_hasard';

} else {

    url = 'http://en.wikipedia.org/wiki/Special:Random';

}

var popup = window.open(url, '_blank');

popup.focus();
