const coursElements = document.getElementsByClassName("card");
const firstCoursElementData = coursElements[0].dataset;
const selectedCoursImage = document.getElementById("selected-cours-image");
const selectedCoursTitle = document.getElementById("selected-cours-title");
const selectedCoursDescription = document.getElementById("selected-cours-description");
const selectedCoursPrice = document.getElementById("selected-cours-price");

setSelectedCoursData(
	firstCoursElementData.imagePath, 
	firstCoursElementData.coursTitle, 
	firstCoursElementData.description,
	firstCoursElementData.price);

attachEventToCourses(coursElements, 'click', setSelectedCoursData);

function attachEventToCourses(list, eventType, handler){

	for(let cours of list){
		cours.addEventListener(eventType, event => {
			handler(
			 cours.dataset.imagePath,
			 cours.dataset.coursTitle, 
			 cours.dataset.description, 
			 cours.dataset.price);
		});
	}
}


function setSelectedCoursData(imagePath, title, description, price){
	selectedCoursImage.style.backgroundImage = `url(${imagePath})`;
	selectedCoursTitle.innerHTML = title;
   	selectedCoursDescription.innerHTML = description;
	selectedCoursPrice.innerHTML = price;
}

