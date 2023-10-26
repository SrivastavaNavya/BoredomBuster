const hidden=document.getElementById("hidden");
const btn = document.getElementById("btn");

btn.addEventListener("click",function(){
    hidden.classList.remove("hidden");
})


// API
const activity = document.getElementById("activity");
const type = document.getElementById("type");
const participants = document.getElementById("participants");
const url = "http://www.boredapi.com/api/activity/";

let removeBoredom = () => {
    fetch(url)
        .then(data => data.json())
        .then(item =>{
            activity.innerHTML = `${item.activity}`,
            type.innerHTML = `${item.type}`,
            participants.innerHTML = `${item.participants}`;
        });
}

// btn.addEventListener("click", removeBoredom);

