function Myfunction() {
    var Slider1 = document.getElementById("VolumeGranular").value;
    Slider1.addEventListener("oninput", function(data) {
        $.post("/Users/chrisfunk/documents/new/installationserver2/server.js", {Slider1,  })
    })
}


