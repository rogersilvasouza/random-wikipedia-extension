/*jslint browser: true*/
/*global $, jQuery, console, alert, GET, chrome, language*/

if (Storage === "undefined") {

    console.log('Local Storage Not Suported');

} else {

    console.log('Local Storage Suport');

}

var saveButton = document.getElementById('save'), language;

function restoreLanguage() {

    "use strict";

    language = localStorage.getItem("language");

    if(language) {

        document.getElementById("language").value = language;

    }

}

function saveLanguage() {

    "use strict";

    localStorage.setItem("language", document.getElementById("language").value);

}

saveButton.addEventListener('click', function () {

    "use strict";

    saveLanguage();

});

document.addEventListener("DOMContentLoaded", function () {

    "use strict";

    restoreLanguage();

});
