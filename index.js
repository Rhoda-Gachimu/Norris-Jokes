// SUBSCRIBE

const subButton=document.getElementById("subscribe")
const email=document.getElementById("email")

subButton.addEventListener("click",function (){
    email.value="";
    const paragraph=document.getElementById("thank")
    paragraph.textContent="Thank you for subscribing!"
    })


    