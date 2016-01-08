var screenBack = document.getElementById("screen");



var smashClasses = ['start', 'glass-smash-1','glass-smash-2', 'glass-smashed','clear']

screenBack.addEventListener('click', function(){
	switchBackground();
});

var switchBackground = function() {
	console.log("clicked");
	var backgroundClass = screenBack.classList[0];
	var classIndex = smashClasses.indexOf(backgroundClass);
	if (classIndex === smashClasses.length - 2) {
		screenBack.removeEventListener("click", switchBackground);		
	}
	if (classIndex !== -1) {
		screenBack.classList.remove(smashClasses[classIndex]);
		screenBack.classList.add(smashClasses[classIndex+1]);
	}
};