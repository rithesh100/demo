function button(){
    var options = [
        'this is a website'
        ,'you are clicking this button'
        ,'hola'
        ,'this website is cool'
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