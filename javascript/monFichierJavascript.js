var abonnements = function(){
	document.getElementById("boutMin").addEventListener("click",minMaj);

} 

window.addEventListener("load", abonnements);

var minMaj = function(){
	an = document.getElementById("reel").value;
	age = 2019 - an;
	prenom =document.getElementById("nom").value;
	homme= document.getElementById("homme").checked
	femme= document.getElementById("femme").checked
		
	if (homme == true){
		reponse = ""
	 }
	else {
		reponse = "e" }
	
	if (age >= 18) {
		document.getElementById("minMaj").innerHTML = "Salut " + prenom + " tu seras  majeur"+ reponse +" en 2019 et tu aura " +age +"ans" ;
		} 
	else {
		document.getElementById("minMaj").innerHTML = "Salut " + prenom + " tu seras encore mineur"+ reponse +" en 2019 car tu n'auras que " +age +"ans";
		}
}

var boutonradio = document.forms[0].elements["boite"];
	for (var i=0;i<boite.length;i++){
	boite[i].checked = false;
}




