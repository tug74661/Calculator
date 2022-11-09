"use strict";


function getColor()
{
    let choice = prompt("Which color would you like?\nFor green, press 1\nFor red, press 2\nFor blue, press 3\nfor yellow, press 4\nfor purple, press 5.\nTo rever to original, select Ok");
    if (choice.length == 0)
    {
        return 6;
    }
    return choice;
}

function colorList()
{
    const colors = ["0","#72C235","#E60000","#0892d0","#FFDF00","#9933ff","#ef6c00"];

    return colors;
}
function mapColors()
{
    let colors = colorList();
    let colorKey = new Map();
    for(let i = 0; i < colors.length; i++)
    {
        colorKey.set(i,colors[i]);
    }

    
    return colorKey;
}
$("#changeColor").click(function(){
    let choice = parseInt(getColor());
    let colorMap = mapColors();

    $('.operator, #equals').css("background-color",colorMap.get(choice));
         $('#changeColor').css("background-color",colorMap.get(choice));
});
