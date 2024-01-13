/*Shree Ganeshaye Namah*/
const jarea = document.getElementById("clock"),
btn=document.getElementsByClassName("button"),
jset=document.getElementById("joke"),
url="https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,racist,sexist,explicit&type=single";

let jget = () => {
    jset.classList.remove("fade");
    fetch(url)
    .then(data => data.json())
    .then(item => {
        jset.textContent =`${item.joke}`;
        jset.classList.add("fade");
    });
    
}

//btn.addEventListener("click" , jget);
jget();
