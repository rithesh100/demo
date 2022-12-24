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