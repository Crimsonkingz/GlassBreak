var blurredBG = document.getElementById("blurredBG");
var smashEffect = document.getElementById("smashEffect");
var maskedFG = document.getElementById("maskedFG");
var container = document.getElementById("container");

var lastImage = false;

var smashPath = "images/glass/";
var maskPath = "images/masks/";

var effects = {
	smash: ["white-smash-1@2x.png","smash-2-edit-white.png","smash-3-edit-white.png"],
	mask: ["mask-1-alpha.png","mask-2-alpha.png","mask-3-alpha.png"]
};

// Keep track of which smash and masks are shown, start at -1 so that the first click shows the first mask and smash effect -1 -> 0
var index = -1;

// Blurred background image
blurredBG.src = "images/screen-blurred-4px.jpg";

// Clear background image to be masked into the correct shape, fully revealed after last smash
maskedFG.src = "images/screen@2x.jpg";


blurredBG.addEventListener("load", function() {
	// Initial smash effect, hidden initially, replaced later due to the weird way src works
	smashEffect.src = smashPath + effects.smash[0];
	smashEffect.setAttribute("style", "display:none;");

	// Hide clear image initially so that only the blurred "glassy" image is visible
	maskedFG.setAttribute("style", "display:none;");
	

	container.addEventListener("click", function() {
		if (!lastImage) {
			// Show mask and smash effect on click
			maskedFG.removeAttribute("style");
			smashEffect.removeAttribute("style");
			switchImages();
		}
	});

});

var switchImages = function() {
	
	
	if (index < effects.smash.length -1) {

		//////////////	Hit animation   /////////////////////
		// To restart the hitting animation remove the class, change a property, then re-add the class
		// thanks to css-tricks.com
		smashEffect.classList.remove("hit");
		maskedFG.classList.remove("hit");

		smashEffect.width = smashEffect.width;
		maskedFG.width = maskedFG.width;

		
		smashEffect.classList.add("hit");
		maskedFG.classList.add("hit");
		///////////////////////////////////////////////

		// I think there's an easier/cleaner way than this, but it works
		// Change smash effect and mask effect
		smashEffect.src = smashEffect.src.replace(effects.smash[index], effects.smash[index+1]);
		maskedFG.setAttribute("style", "-webkit-mask-image: url(" + maskPath + effects.mask[index+1] + ");");	

		index++;
	}
	// Once on final screen stop clicking and remove blurred image, smash effect, and remove mask from clear image
	if (index >= effects.smash.length) {
		lastImage = true;
		blurredBG.setAttribute("style", "display:none;");
		smashEffect.setAttribute("style", "display:none;");
		maskedFG.setAttribute("style", "-webkit-mask-image:");
	}
};