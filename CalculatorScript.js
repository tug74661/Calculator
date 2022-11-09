"use strict";

/*
//Stack Object to handle order of operations
class Stack{
    constructor(){
        this.data = [];
    }

    push(val){
        this.data.push(val);
    }
    pop(){
        return this.data.pop();
    }
}

//Create a Stack to fill with operands
function fillStack()
{
    let operators = ["(",")","*","/","+","-"];
    let nums = new Stack();

    for(let i = 0; i < operators.length; i++)
    {
        nums.push(operators[i]);
        
    }
   
    return nums;
}

function isOperator(symbol)
{
    let operatorStack = fillStack();

        if(operatorStack.data.indexOf(symbol) === -1)
        {
            return false;
        }

        return true;
}


function calculateExpression(expression)
{
   
    let calculation = eval(expression.replace(/[^-()\d/*+.]/g, ''));
    
    for(let i = 0; i < expression.length; i++)
    {
        if(isOperator(expression.charAt(i)))
        {

        }
    }
   /*for(let i = 0; i < expression.length; i++)
   {
       calculation[i] = expression.charAt(i);

       if(isOperator(expression.charAt(i)))
       {
          // calculation[i] = expression.split(expression.charAt(i));
           left += expression.substring(0,i);
           operand+= expression.charAt(i);
           right += expression.substring(i+1,expression.length);
       }
   }
   

   return calculation;
}
*/


//Need to sort expression
//Example: 5+5/4 should become (5/4)+5
//Example 2: 5+5*5 should be 5*5+5
/*
function sortOperators(ops)
{
    let opSorted = [];
    let opStack = fillStack();

    for(let i = 0; i < ops.length; i++)
    {
        if(isOperator(ops.charAt(i)))
        {

        }
    }
    return opSorted;
}
function sortExpression(param)
{
    let sorted = [];
    for(let i = 0; i < param.length; i++)
    {
 

    return sorted.toString();
}

function getInput(input)
{
    

    if(input.includes(".")){
        let decimal = parseFloat(input);
        return decimal;
    }
    else if(isNaN(input))
    {
        return "NaN";
    }
    else
    {
        let wholeNumber = parseInt(input);
        return wholeNumber;
    }
}*/
/*
$(".number").click(function(){
    let number = parseInt(this.value);

    $('#textEntered').html(number);
});*/

/*button click handlers
const numberButtons = $(".number");
const operatorButtons = $(".operator");
const decimalButton = $(".dot");
const posNegButton = $(".edit");
const percent = $(".percent");


numberButtons.each(function(){
    let currentNumber = $(this);
    let numberValue = currentNumber.val();
   
    currentNumber.click(function(){
        $("#textEntered").val(numberValue);
    });
});

operatorButtons.each(function(){
    let currentOperator = $(this);
    let operator = currentOperator.val();

    console.log(operator);
    currentOperator.click(function(){
        $("#textEntered").val(operator);
    });

});
*/



/*
function calculateExpression(expression)
{
    let calculation = eval(expression.replace(/[^-()\d/*+.]/g, ''));
    
    for(let i = 0; i < expression.length; i++)
    {
        if(isOperator(expression.charAt(i)))
        {

        }
    }
   
   return calculation;
}

function concatenateExpression(num)
{
    let str = "";
    str+= num;

    return str;
}
function getExpression(numOperator)
{
    let number = numOperator;

    return number;
}

//document.getElementById("one").addEventListener("click", getExpression(button));
let expression = "";

function calculateExpression(expression)
{
    let calculation = eval(expression.replace(/[^-()\d/*+.]/g, ''));
    
    for(let i = 0; i < expression.length; i++)
    {
        if(isOperator(expression.charAt(i)))
        {

        }
    }
   
   return calculation;
}
*/
/*$("#one").click(function(){
    let one = $("one").val();
    //expression += one;
    $("#textEntered").val(one);
});
/*
$("#two").click(function(){
    let two = $("two").val();
    expression += two;
});

$("#three").click(function(){
    let three = $("three").val();
    expression += three;
});

$("#four").click(function(){
    let four = $("four").val();
    expression += four;
});

$("#five").click(function(){
    let five = $("five").val();
    expression += five;
});

$("#six").click(function(){
    let six = $("six").val();
    expression += six;
});

$("#seven").click(function(){
    let seven = $("seven").val();
    expression += seven;
});

$("#eight").click(function(){
    let eight = $("eight").val();
    expression += eight;
});

$("#nine").click(function(){
    let nine = $("nine").val();
    expression += nine;
});

$("#zero").click(function(){
    let zero = $("zero").val();
    expression += zero;
});

$("#equals").click(function(){
    //let statement = $("#textEntered").val();
  // $("#textEntered").val(calculateExpression(expression));
  let expressionValue = calculateExpression(expression);
  $("#textEntered").html(expressionValue);
   console.log(expressionValue);
});

$("#clear").click(function(){
    $("#textEntered").val("");
});
*/
//$("#textEntered").html(expression);

/*let numbers = document.querySelectorAll(".number");
let equation = document.querySelector("#textEntered");
let clear = document.querySelector("#clear");

clear.addEventListener("click", clearAll);

for(var num of numbers){
    num.addEventListener("click", displayInput);
}
function displayInput(){
    equation.textContent = this.value;
    console.log(this.value);
}
function clearAll(){
    window.location.reload();
}*/

$(document).ready(function(){
    let old = 0;
    let operation = "";

    $('.number').click(function(){
        $('#textEntered').val($('#textEntered').val() + $(this).val());
    });
    $('.operator').click(function(){
        if($(this).val == "+"){
            if (operation == "+"){
                old = parseInt(old) + parseInt($('#textEntered').val());
            }
            else{
                if(operation == "+"){
                    old = parseInt(old) + parseInt($('#textEntered').val());
                }
                else{
                    old = parseInt($('#textEntered').val());
                   $('#textEntered').val(old);
                }
            }
        }
    })
    $('#equals').click(function(){
        console.log(operation);
    })
})


/*$(document).ready(function(){
    let old = 0;
    
    let operation = "";
    let calculation = 0;
    let clear = "";

    $('.number, .operator').click(function(){
        $('#textEntered').val($('#textEntered').val() + $(this).val());
        operation = $("textEntered").val();
        console.log(operation);
    }); 
    $(".edit").click(function(){
        
        
    });
    $("#equals").click(function(){
        
        $("textEntered").val(eval($("textEntered").val()));
    });
    $("#clear").click(function(){
        $('#textEntered').val(clear); 
    });
});*/
