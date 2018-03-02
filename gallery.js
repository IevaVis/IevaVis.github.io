const closeButton = document.querySelector('.lightbox-close');
const lightBox = document.querySelector('.lightbox');
const galleryItems = document.querySelectorAll('.gallery-item');
const lightboxImage = document.querySelector('.lightbox-image');
const nextButton = document.querySelector('.lightbox-next');
const previousButton = document.querySelector('.lightbox-prev');

let currentImageId;

function showImage(event) {
	currentImageId = event.target.id
	if (event.target.tagName == "IMG") {
	//show lightbox
	lightBox.classList.remove('hidden');

	//get current galleryItem
	const elementClickedOn = event.target;
	

	
		const galleryItemParent = elementClickedOn.parentElement;
		lightboxImage.innerHTML = galleryItemParent.innerHTML;

	
	} else if (event.target.tagName == "LI" ){

		lightBox.classList.remove('hidden');
		
	const elementClickedOn = event.target;
	
		lightboxImage.innerHTML = elementClickedOn.innerHTML;
		console.log(event.target.tagName);
		console.log(elementClickedOn.innerHTML);

	}
}

	


function hideImage(event) {
	event.preventDefault(); 
	lightBox.classList.add('hidden');
}

// hide lightbox when close button is clicked
closeButton.onclick = hideImage;
	
// for every gallery item, set onclick handler to show image


for(let i = 0; i < galleryItems.length; i++){
	let item = galleryItems[i];
	
	item.onclick = showImage;
	
}

//show next image with next button

function nextImage(event) {
	currentImageId++
	console.log(currentImageId)
	if (currentImageId < galleryItems.length + 1) {
		lightboxImage.innerHTML = galleryItems[currentImageId - 1].innerHTML
	} else {
		alert('No more images for now')
	}
}

nextButton.onclick = nextImage;

// show previous image with previous button

function prevImage(event) {
	currentImageId--
	console.log(currentImageId)
	if (currentImageId > 0) {
		lightboxImage.innerHTML = galleryItems[currentImageId - 1].innerHTML
	} else {
		alert('Please press button Next')
	}
}

previousButton.onclick = prevImage;


