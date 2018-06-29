var getScreen = document.getElementById('screen');
var depositAmt;
var currBal = 0;
var newBal;
 

    //balance

    var balanceBut = document.getElementById('balance');
    balanceBut.addEventListener('click', showBalance);
    function showBalance(){
         getScreen.innerHTML = Number(currBal);
    };

    //deposit

    var depositBut = document.getElementById('deposit');
    depositBut.addEventListener('click', depositScreen);
    function depositScreen(){
        depositAmt = getScreen.innerHTML;
        currBal = Number(depositAmt) + Number(currBal);
        getScreen.innerHTML = null;
    };

    //withdraw

    var getGif = document.getElementById('gif');
    var withBut = document.getElementById('withdraw');
    var getImg = document.getElementById('random-gif');
    var getImgDiv = document.getElementById('randomgif');
    withBut.addEventListener('click', withdrawBal);
    function withdrawBal(){
        if (currBal >= 0){
            newBal = Number(currBal) - Number(getScreen.innerHTML);
            if (newBal < 0){
                getScreen.innerHTML = 'Need More Money';
                getGif.style.display = 'block';
                getImgDiv.style.display = 'none';
            }else{
                getScreen.innerHTML = newBal;
            }
        }
    };
