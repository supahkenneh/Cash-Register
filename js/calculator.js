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
        getGif.style.display = 'none';
        getImgDiv.style.display = 'none';
        };

    //result

    var equalBut = document.getElementById('result');
    equalBut.addEventListener('click', doTheMath);
    function doTheMath(){
        var num = getScreen.innerHTML;
        if (!!toAdd){
            result = Number(toAdd) + Number(num);
            getScreen.innerHTML = result;
        }else if(!!toMin){
            result = Number(toMin) - Number(num);
            getScreen.innerHTML = result;
        }else if(!!toMult){
            result = Number(toMult) * Number(num);
            getScreen.innerHTML = result;
        }else if(!!toDiv){
            result = Number(toDiv) / Number(num);
            getScreen.innerHTML = result;
        }
        var randGif = gifArr[Math.floor(Math.random() * gifArr.length)]
        getImg.src = randGif;
        getImgDiv.style.display = 'block';
    }

    //add operation

    var addBut = document.getElementById('add');
    addBut.addEventListener('click', addition);
    function addition(){
        toAdd = getScreen.innerHTML;
        getScreen.innerHTML = null;
        var randGif = gifArr[Math.floor(Math.random() * gifArr.length)]
        getImg.src = randGif;
        getImgDiv.style.display = 'block';
    };


    //subtract operation

    var subBut = document.getElementById('subtract');
    subBut.addEventListener('click', subtract);
    function subtract(){
        toMin = getScreen.innerHTML;
        getScreen.innerHTML = null;
        var randGif = gifArr[Math.floor(Math.random() * gifArr.length)]
        getImg.src = randGif;
        getImgDiv.style.display = 'block';
    }

    //multiply operation

    var multiBut = document.getElementById('multiply');
    multiBut.addEventListener('click', multiply);
    function multiply(){
        toMult = getScreen.innerHTML;
        getScreen.innerHTML = null;
        var randGif = gifArr[Math.floor(Math.random() * gifArr.length)]
        getImg.src = randGif;
        getImgDiv.style.display = 'block';
    }

    //divide operation

    var divBut = document.getElementById('divide');
    divBut.addEventListener('click', divide);
    function divide(){
        toDiv = getScreen.innerHTML;
        getScreen.innerHTML = null;
        var randGif = gifArr[Math.floor(Math.random() * gifArr.length)]
        getImg.src = randGif;
        getImgDiv.style.display = 'block';
    }

    //exponent operation
    
    var expBut = document.getElementById('exponent');
    expBut.addEventListener('click', square);
    function square(){
        var result = Number(getScreen.innerHTML) * Number(getScreen.innerHTML);
        getScreen.innerHTML = result;
        var randGif = gifArr[Math.floor(Math.random() * gifArr.length)]
        getImg.src = randGif;
        getImgDiv.style.display = 'block';
    }

    //squareRoot operation

    var sqrBut = document.getElementById('squareroot');
    sqrBut.addEventListener('click', squareR);
    function squareR(){
        var result = Math.sqrt(Number(getScreen.innerHTML));
        getScreen.innerHTML = result;
        var randGif = gifArr[Math.floor(Math.random() * gifArr.length)]
        getImg.src = randGif;
        getImgDiv.style.display = 'block';
    }

    //cube operation
    
    var cubeBut = document.getElementById('cube');
    cubeBut.addEventListener('click', cube);
    function cube(){
        var result = Number(getScreen.innerHTML) * Number(getScreen.innerHTML) * Number(getScreen.innerHTML);
        getScreen.innerHTML = result;
        var randGif = gifArr[Math.floor(Math.random() * gifArr.length)]
        getImg.src = randGif;
        getImgDiv.style.display = 'block';
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
        function showGif(){
            var randGif = gifArr[Math.floor(Math.random() * gifArr.length)]
            getImg.src = randGif;
            getImgDiv.style.display = 'block';
        }
            for(var i = 0; i < lists.length; i++){
             lists[i].style.backgroundColor = change();
         }
    }

    var gifArr = ['https://media.giphy.com/media/msKNSs8rmJ5m/200.webp', 'https://media.giphy.com/media/l0MYw9nh8qcoIyCju/200w.webp', 'https://media.giphy.com/media/Kzvsru1JqQg4E/200w.webp', 'https://media.giphy.com/media/pNpONEEg3pLIQ/200w.webp', 'https://media.giphy.com/media/l4HodBpDmoMA5p9bG/200w.webp', 'https://media.giphy.com/media/l4HodBpDmoMA5p9bG/200w.webp', 'https://media.giphy.com/media/3og0ILzGlzG26yNINq/200.webp', 'https://media.giphy.com/media/1zSiX3p2XEZpe/giphy.webp', 'https://media.giphy.com/media/599XNNWGtWigo/200w.webp', 'https://media.giphy.com/media/5oGIdt1xapQ76/200w.webp', 'https://media3.giphy.com/media/5VKbvrjxpVJCM/200.webp', 'https://media2.giphy.com/media/vQqeT3AYg8S5O/200w.webp', 'https://media2.giphy.com/media/oYtVHSxngR3lC/200.webp', 'https://media3.giphy.com/media/2KhpwqOReXDLq/200w.webp', 'https://media0.giphy.com/media/Nm8ZPAGOwZUQM/200.webp', 'https://media3.giphy.com/media/QjrrSbYaqgi1q/giphy.webp', 'https://media2.giphy.com/media/3o72F8t9TDi2xVnxOE/200w.webp', 'https://media1.giphy.com/media/sR2YaENch4sog/giphy.webp', 'https://media3.giphy.com/media/1Zt3z4uEBPZQY/200.webp', 'https://media3.giphy.com/media/l0HU8MLXSjDXkEUGk/200.webp', 'https://media0.giphy.com/media/26CaLKiimsm3ibpE4/200.webp', 'https://media1.giphy.com/media/mxP1qg93p6vlK/200.webp', 'https://media2.giphy.com/media/YlPeYXasYEPpC/200w.webp', 'https://media1.giphy.com/media/eLFr3gpGFAiWY/200.webp', 'https://media1.giphy.com/media/wAjfQ9MLUfFjq/200.webp', 'https://media3.giphy.com/media/8xhJQUU7aNTRm/200w.webp', 'https://media1.giphy.com/media/YBSVJOp6FqYfVctxjk/200w.webp'];

    
    var getImg = document.getElementById('random-gif');
    var getImgDiv = document.getElementById('randomgif');

    for (var i = 0; i < getNumbers.length; i++){
        getNumbers[i].addEventListener('click', showGif);
    }

    function showGif(){
        var randGif = gifArr[Math.floor(Math.random() * gifArr.length)]
        getImg.src = randGif;
        getImgDiv.style.display = 'block';
    }

}());