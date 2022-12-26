<!DOCTYPE html>
     <!-- https://demo-ojepdsgrt-ritheshiscool.vercel.app -->
<html lang="en">

    <head>
        <link rel="stylesheet" href="style.css">

        <meta charset="UTF-8">

         <title>Rithesh's Website</title>

         <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>

    <body>
        <div style="text-align: center;">
            <script src="code.js"></script>

            <button type="button" class="button" onclick="button()">Info About Website <br> Click To Learn!</button>
            <p id="buttontext"></p>

            <h1 class="text">
                <strong>My Homepage!</strong>
            </h1>

            <h2>
                <i>Have Fun</i>
            </h2>
        
            <button type="button" id="tributton" class="tricalcbutton" onclick="tristart()">Triangle Calculator</button>

            <p hidden id="buttonthing">
                <button type="button" id="closebutton" class="closebutton" onclick="closebutton()">X</button>
                <br><br>
                Height: <input type="text" id="height" />
                <br><br>
                Base: <input type="text" id="base" />
                <br><br>
                <button type="button" onclick="AreaOfTriangle()" class="tributton">Calculate</button><input type="reset" id="reset" value="Reset" onclick="clearText()" />
                <h3 id="areaoftri"></h3>
            </p>
        </div>
        <div style="text-align: center;">
            <h2>This is a <a href="https://demo-web-eight.vercel.app/">link</a> to this website!</h2>
     
            <p style="font-size:180%;">Hi! My name is <span style="font-size:25px;">RITHESH!</span></p>
     
            <h2>I can speak <span lang="en">தமிழ்</span>.</h2>

            <img id="traintrack" alt="Train Track" src="https://www.nippon.com/en/ncommon/contents/guide-to-japan/128481/128481.jpg">
        </div>
    </body>

</html>

