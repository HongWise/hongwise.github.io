(function(){
	const docContainer = document.getElementsByClassName("doc-container")[0];
	if (!docContainer) {
		return;
	}
	for (let ele of docContainer.getElementsByClassName("nav-icon")) {
		ele.addEventListener("click", function(event){
			let emitter = event.currentTarget;
			if (emitter.classList.contains("nav-icon-collapse")) {
				emitter.classList.replace("nav-icon-collapse", "nav-icon-expand");
				emitter.nextElementSibling.nextElementSibling.classList.remove("hidden");
			} else if (emitter.classList.contains("nav-icon-expand")) {
				emitter.classList.replace("nav-icon-expand", "nav-icon-collapse");
				emitter.nextElementSibling.nextElementSibling.classList.add("hidden");
			}
			event.preventDefault();
			event.stopPropagation();
		});
	}
})()