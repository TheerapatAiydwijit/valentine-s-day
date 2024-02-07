const face = document.getElementById("smileyFace");
const mouth = document.querySelector(".face__mouth");
const tongue = document.querySelector(".face__tongue");

var noButton = document.getElementById("noButton");
var yesButton = document.getElementById("yesButton");


noButton.addEventListener("mouseover", function () {
	setSad();
});
yesButton.addEventListener("mouseover", function () {
	setHappy();
});

noButton.addEventListener("mouseout", function () {
	setSadToPleading()
});
yesButton.addEventListener("mouseout", function () {
	setHappyToPleading()
});


function setHappy() {
	face.classList.remove("sad");
	face.classList.add("happy");
	mouth.style.animation = "changeMouthSmiley 3s forwards";
	tongue.style.animation = "changeTongueSmiley 3s forwards";
}

function setSad() {
	face.classList.remove("happy");
	face.classList.add("sad");
	mouth.style.animation = "changeMouthVerySad 2s forwards";
	tongue.style.animation = "changeTongueVerySad 2s forwards";
}

function setSadToPleading() {
	face.classList.remove("happy");
	face.classList.remove("sad");
	mouth.style.animation = "changeMouthSadToPleading 2s forwards";
	tongue.style.animation = "changeTongueSadToPleading 2s forwards";
}

function setHappyToPleading() {
	face.classList.remove("happy");
	face.classList.remove("sad");
	mouth.style.animation = "changeMouthHappyToPleading 2s forwards";
	tongue.style.animation = "changeTongueHappyToPleading 2s forwards";
}