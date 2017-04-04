function Myfunction() {
    var Slider1 = document.getElementsById("VolumeGranular");
    Slider1.addEventListener("oninput", function() {
        $.post('/Users/chrisfunk/documents/new/installationserver2/server.js', {Slider1,  })
    })
}

