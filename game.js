
//buttons//
const buttonPlayWith = document.getElementById("buttonPlayWith");
const buttonFeed = document.getElementById("buttonFeed");
const buttonWater = document.getElementById("buttonWater");
const buttonWalk = document.getElementById("buttonWalk");
const buttonKillPet = document.getElementById("buttonKillPet");
//get progress bars by ID//
const objectLvlPlay = document.getElementById("objectLvlPlay");
const objectLvlHunger = document.getElementById("objectLvlHunger");
const objectLvlThirst = document.getElementById("objectLvlThirst");
const objectLvlWalks = document.getElementById("objectLvlWalks");
const petBoxSingular = document.getElementById("petBoxSingular");
const buttonRevivePet = document.getElementById("buttonRevivePet");

// Audio
var audio = new Audio("cartoon-kitty-begging-meow.wav");
audio.volume = 0.07; //Changes the volume of the MEOW


//petIcon//
document.getElementById("petIcon").src="porygon.png";


//Interacting with Pet//
buttonPlayWith.addEventListener("click", ()=>{ //increases value of play level when clicked//
    audio.play();
    audio.currentTime = 0;
    objectLvlPlay.value+=20;
})

buttonPlayWith.addEventListener("mouseup", ()=>{ //returns cat to neutral state on mouse release//
    petIcon.src="porygon.png";
})
buttonFeed.addEventListener("click", ()=>{ //increases value of hunger level when clicked//
    audio.play();
    audio.currentTime = 0;
    objectLvlHunger.value+=20;
})
buttonFeed.addEventListener("mousedown", ()=>{
    petIcon.src="porygon.png";
})
buttonFeed.addEventListener("mouseup", ()=>{
    petIcon.src="porygon.png";
})
buttonWater.addEventListener("click", ()=>{//increases value of thirst level when clicked//
    audio.play();
    audio.currentTime = 0;
    objectLvlThirst.value+=20;
})
buttonWater.addEventListener("mousedown", ()=>{
    petIcon.src="porygon.png";
})
buttonWater.addEventListener("mouseup", ()=>{
    petIcon.src="porygon.png";
})
buttonWalk.addEventListener("click", ()=>{//increases value of walks level when clicked//
    audio.play();
    audio.currentTime = 0;
    objectLvlWalks.value+=20;
})
buttonWalk.addEventListener("mousedown", ()=>{
    petIcon.src="porygon.png";
})
buttonWalk.addEventListener("mouseup", ()=>{
    petIcon.src="porygon.png";
})
buttonKillPet.addEventListener("click", () => { //to make pet dead//
    objectLvlPlay.value=0;
    objectLvlHunger.value=0;
    objectLvlThirst.value=0;
    objectLvlWalks.value=0;
    petIcon.src="porygon.png";
    petBoxSingular.style.background = "grey";
    buttonKillPet.style.display = "none";
    buttonRevivePet.style.display = "block";
    alert("you are gonna regret that!")
})
buttonRevivePet.addEventListener("click", () => { //to revive cat//
    audio.play();
    objectLvlPlay.value=1000;
    objectLvlHunger.value=100;
    objectLvlThirst.value=100;
    objectLvlWalks.value=100;
    petIcon.src="porygon.png";
    petBoxSingular.style.background = " #F4CEC7";
    buttonKillPet.style.display = "block";
    buttonRevivePet.style.display = "none";
})

objectLvlPlay.value = 100;
objectLvlHunger.value = 100;
objectLvlThirst.value = 100;
objectLvlWalks.value = 100;

let play = setInterval(() => {
    objectLvlPlay.value--;
}, 200); 
let hunger = setInterval(() => {
    objectLvlHunger.value--;
}, 100); 
let thirst = setInterval(() => {
    objectLvlThirst.value--;
}, 1200); 
let walks = setInterval(() => {
    objectLvlWalks.value--;
}, 1800); 

 