// if you want to change something on a DIFFERENT element, you have to call it by name (it's "id")
// https://www.w3schools.com/jsref/met_document_getelementbyid.asp

// "el" stands for the "element" that was just clicked
function allOpaque(el){
	document.getElementById("opacity-pats").classList.add("opaque");
	document.getElementById("opacity-rams").classList.add("opaque");
}

// "el" stands for the "element" that was just clicked
function removeColor(el){
	document.getElementById("rams-column").classList.remove("rams-blue");
	document.getElementById("pats-column").classList.remove("pats-silver");


}

function showTrophy(el){
		document.getElementById("opacity-rams").src = "images/lombardi_trophy.png";
		document.getElementById("mid-column").src = "images/lombardi_trophy.png";
		document.getElementById("opacity-pats").src = "images/lombardi_trophy.png";
}
