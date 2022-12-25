function button(){
    var options = [
        'Creator: Rithesh'
        ,'This is a basic website'
        ,'This website has random stuff'
        ,'This website is cool'
        ,'Look around and have fun'
        ,'This website has no main purpose'
        ,'There is more to come'
        ,'Keep clicking the button!'
    ];
    var randOptionNum = Math.floor(Math.random() * options.length);
    
    document.getElementById('buttontext').innerHTML = '';
    document.getElementById('buttontext').innerHTML = options[randOptionNum];
}

function tristart() {
    document.getElementById("buttonthing").removeAttribute('hidden')
}

var AreaOfTriangle = function() {
    var base = parseFloat(document.getElementById('base').value);
    var height = parseFloat(document.getElementById('height').value);

    var areaoftri = document.getElementById('areaoftri');

    var area = base * height * (1/2);
    areaoftri.textContent = "Area = " + area;
    document.getElementById("areaoftri").reset()
    autocomplete="off"
};

function clearText() {
    document.getElementById('height').value = "";
    document.getElementById('base').value = "";
    document.getElementById('areaoftri').value = "";
} 