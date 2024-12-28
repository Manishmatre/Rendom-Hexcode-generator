

function randomNumber(){

    const randomNum = Math.floor(Math.random()* 16777215 );
    // console.log(randomNum);

    const randomCode = "#" + randomNum.toString(16);

    // console.log(randomCode);

    document.body.style.backgroundColor = randomCode ;

   document.getElementById("hexcode").innerText  = `Hexcode is :- ${randomCode}`;

   document.getElementById("generate").style.backgroundColor = randomCode;


   navigator.clipboard.writeText(randomCode)

}


randomNumber()
