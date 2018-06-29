(function (){
    var test = 'Hello World';
    console.log(test);

    var getNumbers = document.getElementsByClassName('numbers'); 
    var getScreen = document.getElementById('screen');
    var toAdd;
    var result;
    var toMin;
    var toMult;
    var toDiv;
 


    for (var i = 0; i < getNumbers.length; i++){                    //add click function to all numbers
        getNumbers[i].addEventListener('click', numToScreen);
    };

    function numToScreen(){                              //takes pressed button and puts it on screen
        getScreen.innerHTML += this.innerHTML;
    };

    //clear

    var clearBut = document.getElementById('clear')
    clearBut.addEventListener('click', clearScreen);
    function clearScreen(){
        getScreen.innerHTML = null;
        result = undefined;
        toDiv = undefined;
        toAdd = undefined;
        toMult = undefined;
        toMin = undefined;
        };

    //result

    var equalBut = document.getElementById('result');
    equalBut.addEventListener('click', doTheMath);
    function doTheMath(){
        var num = getScreen.innerHTML;
        if (!!toAdd){
            result = Number(toAdd) + Number(num);
            getScreen.innerHTML = result;
            // console.log(result);
        }else if(!!toMin){
            result = Number(toMin) - Number(num);
            getScreen.innerHTML = result;
            // console.log(result);
        }else if(!!toMult){
            result = Number(toMult) * Number(num);
            getScreen.innerHTML = result;
            // console.log(result);
        }else if(!!toDiv){
            result = Number(toDiv) / Number(num);
            getScreen.innerHTML = result;
            // console.log(result);
        }
    }

    //add operation

    var addBut = document.getElementById('add');
    addBut.addEventListener('click', addition);
    function addition(){
        toAdd = getScreen.innerHTML;
        getScreen.innerHTML = null;
    };


    //subtract operation

    var subBut = document.getElementById('subtract');
    subBut.addEventListener('click', subtract);
    function subtract(){
        toMin = getScreen.innerHTML;
        getScreen.innerHTML = null;
    }

    //multiply operation

    var multiBut = document.getElementById('multiply');
    multiBut.addEventListener('click', multiply);
    function multiply(){
        toMult = getScreen.innerHTML;
        getScreen.innerHTML = null;
    }

    //divide operation

    var divBut = document.getElementById('divide');
    divBut.addEventListener('click', divide);
    function divide(){
        toDiv = getScreen.innerHTML;
        getScreen.innerHTML = null;
    }

    //exponent operation
    
    var expBut = document.getElementById('exponent');
    expBut.addEventListener('click', square);
    function square(){
        var result = Number(getScreen.innerHTML) * Number(getScreen.innerHTML);
        getScreen.innerHTML = result;
    }

    //squareRoot operation

    var sqrBut = document.getElementById('squareroot');
    sqrBut.addEventListener('click', squareR);
    function squareR(){
        var result = Math.sqrt(Number(getScreen.innerHTML));
        getScreen.innerHTML = result;
    }

    //cube operation
    
    var cubeBut = document.getElementById('cube');
    cubeBut.addEventListener('click', cube);
    function cube(){
        var result = Number(getScreen.innerHTML) * Number(getScreen.innerHTML) * Number(getScreen.innerHTML);
        getScreen.innerHTML = result;
    }

    function change(){
        var letters = '0123456789ABCDEF';
        var hex = '#';
        for(var i = 0; i < 6; i++){
            hex += letters[Math.floor(Math.random()*16)]
        }
        return hex;
    }
    var randBut = document.getElementById('bored');
    randBut.addEventListener('click', timeForChange);
        function timeForChange(){
        var calcBody = document.getElementById('calc-body');
        var lists = document.getElementsByTagName('li');
        getScreen.style.backgroundColor = change();
        calcBody.style.backgroundColor = change();
            for(var i = 0; i < lists.length; i++){
             lists[i].style.backgroundColor = change();
         }
        var getDance = document.getElementById('dance');
        getDance.style.display = 'none';
            if (getDance.style.display === 'none'){
            getDance.style.display = 'block';
            }else{
            getDance.style.display = 'none';
         }
    }

   

}());