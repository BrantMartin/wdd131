let nesGamesList = [
	{
		gameName: "Super Mario Bros. 3",
		imageName: "supermariobros3.png",
	},
	{
		gameName: "The Legend of Zelda",
		imageName: "thelegendofzelda.png",
	},
	{
		gameName: "Super Mario Bros",
		imageName: "supermariobros.png",
	},
	{
		gameName: "Mega Man 2",
		imageName: "megaman2.png",
	},
	{
		gameName: "Castlevania III: Dracula's Curse",
		imageName: "castlevania3.png",
	},
	{
		gameName: "Metroid",
		imageName: "metroid.png",
	},
	{
		gameName: "Mike Tyson's Punch-Out!!",
		imageName: "punchout.png",
	},
	{
		gameName: "Dragon Warrior (Dragon Quest)",
		imageName: "dragonwarrior.png",
	},
	{
		gameName: "Bionic Commando",
		imageName: "bioniccommando.png",
	},
	{
		gameName: "Final Fantasy",
		imageName: "finalfantasy.png",
	},
];

let snesGamesList = [
	{
		gameName: "The Legend of Zelda: A Link to the Past",
		imageName: "alinktothepast.png",
	},
	{
		gameName: "Chrono Trigger",
		imageName: "chronotrigger.png",
	},
	{
		gameName: "Super Metroid",
		imageName: "supermetroid.png",
	},
	{
		gameName: "Final Fantasy VI",
		imageName: "finalfantasy6.png",
	},
	{
		gameName: "Super Mario World",
		imageName: "supermarioworld.png",
	},
	{
		gameName: "Street Fighter II Turbo",
		imageName: "streetfighter2turbo.png",
	},
	{
		gameName: "Super Mario World 2: Yoshi's Island",
		imageName: "yoshisisland.png",
	},
	{
		gameName: "Super Mario Kart",
		imageName: "supermariokart.png",
	},
	{
		gameName: "Star Fox",
		imageName: "starfox.png",
	},
	{
		gameName: "Super Mario RPG: Legend of Seven Stars",
		imageName: "mariorpg.png",
	},
];

let viewButton = document.querySelector("#viewlist");
let hideButton = document.querySelector("#hidelist");
let main = document.querySelector("#main");
let title = document.title;
let viewCount = parseInt(localStorage.getItem("viewCount")) || 0;
let hideCount = parseInt(localStorage.getItem("hideCount")) || 0;

if (title == "NES List") {
	viewButton.addEventListener("click", () => {
		createListCards(nesGamesList);
		viewCount++;
		localStorage.setItem("viewCount", viewCount);
		console.log(
			`You have clicked to view ${parseInt(localStorage.getItem("viewCount"))} times`,
		);
	});
} else {
	viewButton.addEventListener("click", () => {
		createListCards(snesGamesList);
		viewCount++;
		localStorage.setItem("viewCount", viewCount);
		console.log(
			`You have viewCount to view ${parseInt(localStorage.getItem("viewCount"))} times`,
		);
	});
}

hideButton.addEventListener("click", () => {
	let hideDivs = document.getElementsByClassName("gamecard");
	for (let i = 0; i < hideDivs.length; i++) {
		hideDivs[i].style.visibility = "hidden";
	}
	hideCount++;
	localStorage.setItem("hideCount", hideCount);
	console.log(
		`You have clicked to hide ${parseInt(localStorage.getItem("hideCount"))} times`,
	);
});

function createListCards(gameList) {
	let gameCards = document.getElementsByClassName("gamecard");
	let count = 0;
	if (gameCards.length < 10) {
		gameList.forEach((game) => {
			count++;
			let card = document.createElement("section");
			let image = document.createElement("img");
			let h2 = document.createElement("h2");

			card.setAttribute("class", "gamecard");
			image.setAttribute("src", `images/${game.imageName}`);
			image.setAttribute("alt", `${game.gameName}`);
			image.setAttribute("loading", "lazy");
			h2.innerHTML = `${count}. ${game.gameName}`;

			card.appendChild(image);
			card.appendChild(h2);
			main.appendChild(card);
		});
	} else {
		for (let i = 0; i < gameCards.length; i++) {
			gameCards[i].style.visibility = "visible";
		}
	}
}
