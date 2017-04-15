function jsDropDown(imgid,newimg){
	document.getElementById(imgid).src = "./Images/" + newimg + ".png";
}

function myFunction() {
    document.getElementById("jsDropDown").classList.toggle("show");
}