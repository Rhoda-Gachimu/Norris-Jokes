// SUBSCRIBE

const subButton=document.getElementById("subscribe")
const email=document.getElementById("email")

subButton.addEventListener("click",function (){
    email.value="";
    const paragraph=document.getElementById("thank")
    paragraph.textContent="Thank you for subscribing!"
    })


    // API

const joke= document.getElementById("viewjokes")
const jokeContent = document.getElementById("in")


joke.addEventListener("click", function() {
    callApi()
})

function callApi() {
    fetch('https://api.chucknorris.io/jokes/random')
      .then((response) => response.json())
      .then((data) => {
        console.log(data.value);
       jokeContent.value = data.value
      })
}