const products = [
	{
		id: "fc-1888",
		name: "flux capacitor",
		averagerating: 4.5,
	},
	{
		id: "fc-2050",
		name: "power laces",
		averagerating: 4.7,
	},
	{
		id: "fs-1987",
		name: "time circuits",
		averagerating: 3.5,
	},
	{
		id: "ac-2000",
		name: "low voltage reactor",
		averagerating: 3.9,
	},
	{
		id: "jj-1969",
		name: "warp equalizer",
		averagerating: 5.0,
	},
];
let select = document.getElementById("product");
let submitButton = document.getElementById("submit");
let formSubmits = localStorage.getItem("formSubmitCount");
let count = 0;

for (let i = 0; i < products.length; i++) {
	let option = document.createElement("option");
	option.text = products[i].name;
	option.value = products[i].id;
	select.appendChild(option);
}

submitButton.addEventListener("click", function(event) {
    event.preventDefault();
    count++
    localStorage.setItem("formSubmitCount", count);
    console.log(formSubmits)
})