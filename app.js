const dateOfBirth = document.querySelector('#date-of-birth');
const luckyNumber = document.querySelector('#lucky-number');
const checkButton = document.querySelector('#check-button');
const errorMessage = document.querySelector('.error');
const outputMessage = document.querySelector('.output');
const emotionGif = document.querySelector('.emotion');

function replaceChar(a,b) {
    const dob=dateOfBirth.value;
    let result="";
    for(let i=0; i<dob.length; i++){
        const ch=dob.charAt(i);
        if(ch===a){
            result+=b;
        } else {
            result+=ch;
        }
    }
    return result;
}
console.log(replaceChar("-",""));

checkButton.addEventListener('click', function checkDOBLucky() {
    outputMessage.innerText = "Loading...";
    emotionGif.style.display="none";
    if (dateOfBirth.value != "" && luckyNumber.value != "") {
        errorMessage.style.display = "none";
        outputMessage.style.display = "block";
        let Dob=replaceChar("-","");
        let sumOfDigits = 0;
        for (let i = 0; i < Dob.length; i++) {
            sumOfDigits = sumOfDigits + Number(Dob.charAt(i));
        }
        if (sumOfDigits % luckyNumber.value == 0) {
            setTimeout(() => {
                window.location.href = "#result";
                outputMessage.innerText = "Your Birthday is LUCKY :)";
                emotionGif.style.display="block";
                emotionGif.innerHTML="<img src='happy.gif'>";
            },2000);
        } else {
            setTimeout(() => {
                window.location.href = "#result";
                outputMessage.innerText = "Your Birthday is NOT LUCKY :(";
                emotionGif.style.display="block";
                emotionGif.innerHTML="<img src='sad.gif'>";
            },2000);
        }
    } else {
        errorMessage.style.display = "block";
        outputMessage.style.display = "none";
        errorMessage.innerText = "Please enter both Date of Birth and Lucky Number!";
    }
});