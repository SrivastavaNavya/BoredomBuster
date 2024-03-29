const hidden = document.getElementById("hidden");
const btn = document.getElementById("btn");

// btn.addEventListener("click", function () {
//     hidden.classList.remove("hidden");
// })


// API
const activity = document.getElementById("activity");
const type = document.getElementById("type");
const participants = document.getElementById("participants");
const url = "https://www.boredapi.com/api/activity/";

let removeBoredom = () => {
    fetch(url)
        .then(data => data.json())
        .then(item => {
            activity.innerHTML = `${item.activity}`,
                type.innerHTML = `${item.type}`,
                participants.innerHTML = `${item.participants}`;
        });
}

let playSound=()=>{
    const audio=new Audio('sound-effect-twinklesparkle-115095.mp3');
    audio.play();
}

btn.addEventListener("click", ()=>{
    setTimeout(() => {
        removeBoredom();
    }, 500);
    setTimeout(() => {
        hidden.classList.remove("hidden");
    }, 1000);
    playSound();
    
});

