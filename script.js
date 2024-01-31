const slides = [

	{
		"image":"slide1.jpg",
		"tagLine1":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine2":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine3":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine4":"Autocollants <span>avec découpe laser sur mesure</span>"
	},

]

const dots = document.querySelector('.dots');
const arrow_left = document.querySelector('.arrow_left');
const arrow_right = document.querySelector('.arrow_right');


for (let i = 0; i < slides.length; i++) {
	const dot = document.createElement('div');
  
	dot.classList.add('dot');
	if (i === 0) {
	  dot.classList.add('dot_selected');
	}
  
	slides[i].dot = dot;
  
	dots.appendChild(dot);
}

let jeton = 0;

const img = document.querySelector('.banner-img');

arrow_right.addEventListener("click", function() {
	slides[jeton].dot.classList.remove("dot_selected");
  
	jeton = (jeton + 1) % slides.length;
  
	slides[jeton].dot.classList.add("dot_selected");
	img.src = "image/" + slides[jeton].image;
});


arrow_left.addEventListener("click", function() {
	slides[jeton].dot.classList.remove("dot_selected");
  
	jeton = (jeton - 1 + slides.length) % slides.length;
  
	slides[jeton].dot.classList.add("dot_selected");
	img.src = "image/" + slides[jeton].image;
});


let currentTaglineIndex = 0;
const tagline = document.querySelector('#banner p');

arrow_right.addEventListener("click", function() {
    currentTaglineIndex = (currentTaglineIndex + 1) % slides.length;
    updateSlide(currentTaglineIndex);
});

arrow_left.addEventListener("click", function() {
    currentTaglineIndex = (currentTaglineIndex - 1 + slides.length) % slides.length;
    updateSlide(currentTaglineIndex);
});

function updateSlide(index) {
    slides.forEach((slide, i) => {
        slide.dot.classList.toggle("dot_selected", i === index);
    });
    img.src = "image/" + slides[index].image;
    tagline.innerHTML = slides[index]["tagLine" + (index + 1)];
}
