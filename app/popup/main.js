/*jslint browser: true*/
/*global $, jQuery, console, alert, GET*/

var language = localStorage.getItem("language"), url;

if (language === "us") {

    url = 'http://en.wikipedia.org/wiki/Special:Random';

} else if (language === "pt-br") {

    url = 'http://pt.wikipedia.org/wiki/Especial:Aleat%C3%B3ria';

} else if (language === "pl") {

    url = 'http://pl.wikipedia.org/wiki/Specjalna:Losowa_strona';

} else if (language === "nl") {

    url = 'http://nl.wikipedia.org/wiki/Speciaal:Willekeurig';

} else if (language === "es") {

    url = 'http://es.wikipedia.org/wiki/Especial:Aleatoria';

} else if (language === "de") {

    url = 'http://de.wikipedia.org/wiki/Spezial:Zuf%C3%A4llige_Seite';

} else if (language === "it") {

    url = 'http://it.wikipedia.org/wiki/Speciale:PaginaCasuale';

} else if (language === "fr") {

    url = 'http://fr.wikipedia.org/wiki/Sp%C3%A9cial:Page_au_hasard';

} else if (language === "ru") {

    url = 'https://ru.wikipedia.org/wiki/%D0%A1%D0%BB%D1%83%D0%B6%D0%B5%D0%B1%D0%BD%D0%B0%D1%8F:%D0%A1%D0%BB%D1%83%D1%87%D0%B0%D0%B9%D0%BD%D0%B0%D1%8F_%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D0%B0';

} else {

    url = 'http://en.wikipedia.org/wiki/Special:Random';

}

var popup = window.open(url, '_blank');

popup.focus();
