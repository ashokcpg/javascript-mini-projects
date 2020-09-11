const reviews = [
	{
		id: 1,
		name: "Maththew Wiebe",
		job: "Web Developer",
		img: "https://picsum.photos/id/1005/300/300",
		text:
			"I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
	},
	{
		id: 2,
		name: "Danka johnson",
		job: "Software engineer",
		img: "https://picsum.photos/id/177/300/300",
		text:
			"Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
	},
	{
		id: 3,
		name: "Roksolana Zasiadko",
		job: "Intern",
		img: "https://picsum.photos/id/1027/300/300",
		text:
			"Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
	},
	{
		id: 4,
		name: "bill anderson",
		job: "Civil Engineer",
		img: "https://picsum.photos/id/1011/300/300",
		text:
			"Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
	},
];

//   Select Items

const reviewImg = document.getElementById("person-img");
const author = document.getElementById("person-author");
const job = document.getElementById("person-job");
const info = document.getElementById("person-info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// Set starting item
let currentItem = 0;

// load initial item

window.addEventListener("DOMContentLoaded", function () {
	showPerson();
});

// Showing Person based on item...

function showPerson() {
	const item = reviews[currentItem];
	// console.log(item);

	// setting source image

	reviewImg.src = item.img;
	author.textContent = item.name;
	job.textContent = item.job;
	info.textContent = item.text;
}

// Showing next person
nextBtn.addEventListener("click", function () {
	currentItem++;
	if (currentItem > reviews.length - 1) {
		currentItem = 0;
	}
	showPerson(currentItem);
});

// Showing Previous person...
prevBtn.addEventListener("click", function () {
	currentItem--;
	if (currentItem < 0) {
		currentItem = reviews.length - 1;
	}
	showPerson(currentItem);
});

// Setting up random functionality...

randomBtn.addEventListener("click", function () {
	currentItem = Math.floor(Math.random() * reviews.length);
	console.log(currentItem);
	showPerson(currentItem);
});
