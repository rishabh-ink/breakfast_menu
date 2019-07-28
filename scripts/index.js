(function () {
    'use strict';

    function handleFileSelect(evt) {
        var files = evt.target.files;

        var reader = new FileReader();

        for (var i = 0, f; f = files[i]; i++) {
            reader.onload = (function(readFile) {
                return function(event) {
                    var parsedXML = jQuery.parseXML(event.target.result);
                    var jQParsedXML = jQuery(parsedXML);
                };

            })(f);

            reader.readAsText(f);
        }
    }

    document.getElementById('files').addEventListener('change', handleFileSelect, false);

})();
