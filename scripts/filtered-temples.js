const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");
const body = document.querySelector("body");
const temples = [
	{
		templeName: "Aba Nigeria",
		location: "Aba, Nigeria",
		dedicated: "2005, August, 7",
		year: 2005,
		area: 11500,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
	},
	{
		templeName: "Manti Utah",
		location: "Manti, Utah, United States",
		dedicated: "1888, May, 21",
		year: 1888,
		area: 74792,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
	},
	{
		templeName: "Payson Utah",
		location: "Payson, Utah, United States",
		dedicated: "2015, June, 7",
		year: 2015,
		area: 96630,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
	},
	{
		templeName: "Yigo Guam",
		location: "Yigo, Guam",
		dedicated: "2020, May, 2",
		year: 2020,
		area: 6861,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
	},
	{
		templeName: "Washington D.C.",
		location: "Kensington, Maryland, United States",
		dedicated: "1974, November, 19",
		year: 1974,
		area: 156558,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
	},
	{
		templeName: "Lima Perú",
		location: "Lima, Perú",
		dedicated: "1986, January, 10",
		year: 1986,
		area: 9600,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
	},
	{
		templeName: "Mexico City Mexico",
		location: "Mexico City, Mexico",
		dedicated: "1983, December, 2",
		year: 1983,
		area: 116642,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
	},
	{
		templeName: "Gilbert Arizona",
		location: "Gilbert, Arizona, United States",
		dedicated: "2014, March, 2",
		year: 2014,
		area: 85326,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/gilbert-arizona/800x500/gilbert-arizona-lds-temple-1172166-wallpaper.jpg",
	},
	{
		templeName: "Atlanta Georgia",
		location: "Sandy Springs, Georgia, United States",
		dedicated: "1983, June, 1",
		year: 1983,
		area: 34500,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/atlanta-georgia/800x500/atlanta-georgia-mormon-temple-900182-wallpaper.jpg",
	},
	{
		templeName: "Fort Lauderdale Florida",
		location: "Davie, Florida, United States",
		dedicated: "2014, May, 4",
		year: 2014,
		area: 30500,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/fort-lauderdale-florida/800x500/fort-lauderdale-florida-temple-1220610-wallpaper.jpg",
	},
];

hamButton.addEventListener("click", () => {
	navigation.classList.toggle("open");
	hamButton.classList.toggle("open");
});

const homeLink = document.querySelector("#hometemp");
const oldLink = document.querySelector("#oldtemp");
const newLink = document.querySelector("#newtemp");
const largeLink = document.querySelector("#largetemp");
const smallLink = document.querySelector("#smalltemp");

homeLink.addEventListener("click", () => {
	createTempleCard(temples);
});

oldLink.addEventListener("click", () => {
	createTempleCard(temples.filter((temple) => temple.year < 1900));
});

newLink.addEventListener("click", () => {
	createTempleCard(temples.filter((temple) => temple.year > 1900));
});

largeLink.addEventListener("click", () => {
	createTempleCard(temples.filter((temple) => temple.area > 90000));
});

smallLink.addEventListener("click", () => {
	createTempleCard(temples.filter((temple) => temple.area < 90000));
});

function createTempleCard(filteredTemples) {
	document.querySelector(".temple-section").innerHTML = "";
	filteredTemples.forEach((temple) => {
		let card = document.createElement("section");
		let name = document.createElement("h3");
		let location = document.createElement("p");
		let dedication = document.createElement("p");
		let area = document.createElement("p");
		let img = document.createElement("img");

		name.textContent = temple.templeName;
		location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
		dedication.innerHTML = `<span class="label">Dedication:</span> ${temple.dedicated}`;
		area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq/ft`;
		img.setAttribute("src", temple.imageUrl);
		img.setAttribute("alt", `${temple.templeName} Temple`);
		img.setAttribute("loading", "lazy");

		card.appendChild(name);
		card.appendChild(location);
		card.appendChild(dedication);
		card.appendChild(area);
		card.appendChild(img);

		document.querySelector(".temple-section").appendChild(card);
	});
}

createTempleCard(temples);
