var numberTofind = 0;
var attemps = 0;

function refresh(){
    
    numberTofind = parseInt(Math.random() * 100);

    console.log('oi')

}

function verifyNumber(){

    var bet = document.getElementById('bet').value;

    if(bet > 100 || bet < 1)
    {
        alert('Aposta inválida');
        return;
    }

    if(bet > numberTofind)
    {
        attemps++;
        alert('O número para ser encontrado é MENOR');
    }
    else if(bet < numberTofind)
    {
        attemps++;
        alert(' O número para ser encontrado é MAIOR')
    }
    else
    {
        alert(' PARABÉNS você acertou!! Com '+attemps+' erros');
    }

}

refresh();