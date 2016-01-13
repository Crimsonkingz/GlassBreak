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
var index = -1;

blurredBG.src = "images/screen-blurred-4px.jpg";
maskedFG.src = "images/screen@2x.jpg";

blurredBG.addEventListener("load", function() {
	smashEffect.src = smashPath + effects.smash[0];
	maskedFG.setAttribute("style", "display:none;");
	smashEffect.setAttribute("style", "display:none;");

	container.addEventListener("click", function() {
		if (!lastImage) {
			maskedFG.removeAttribute("style");
			smashEffect.removeAttribute("style");
			switchImages();
		}
	});

});

var switchImages = function() {
	
	
	if (index < effects.smash.length -1) {
		smashEffect.src = smashEffect.src.replace(effects.smash[index], effects.smash[index+1]);
		maskedFG.setAttribute("style", "-webkit-mask-image: url(" + maskPath + effects.mask[index+1] + ");");	
		index++;
	}
	
	if (index >= effects.smash.length) {
		lastImage = true;
		blurredBG.setAttribute("style", "display:none;");
		smashEffect.setAttribute("style", "display:none;");
		maskedFG.setAttribute("style", "-webkit-mask-image:");
	}
};