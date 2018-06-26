var getScreen = document.getElementById('screen');
var depositAmt;
var currBal = 0;
var newBal;
var toAdd;
var result;
var toMin;
 

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

    var withBut = document.getElementById('withdraw');
    withBut.addEventListener('click', withdrawBal);
    function withdrawBal(){
        if (currBal >= 0){
            newBal = Number(currBal) - Number(getScreen.innerHTML);
            // currBal = getScreen.innerHTML;
            if (newBal < 0){
                getScreen.innerHTML = 'Need More Money';
            }else{
                getScreen.innerHTML = newBal;
            }
        }
    };





