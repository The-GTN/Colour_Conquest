var lesFleches3 = function() {
	var haut = document.createElement("button");
	haut.id = "haut_J3";
	var droite = document.createElement("button");
	droite.id = "droite_J3";
	var gauche = document.createElement("button");
	gauche.id = "gauche_J3";
	var bas = document.createElement("button");
	bas.id = "bas_J3";
	var ahahah = document.createTextNode("Deplacement Joueur 3");
	var texte1 = document.createTextNode("haut");
	var texte2 = document.createTextNode("droite");
	var texte3 = document.createTextNode("gauche");
	var texte4 = document.createTextNode("bas");
	var blocDeFleche = document.createElement("div");
	blocDeFleche.id = "bloc_J3";
	haut.appendChild(texte1);
	droite.appendChild(texte2);
	gauche.appendChild(texte3);
	bas.appendChild(texte4);
	blocDeFleche.appendChild(haut);
	blocDeFleche.appendChild(droite);
	blocDeFleche.appendChild(gauche);
	blocDeFleche.appendChild(bas);
	blocDeFleche.appendChild(ahahah);
	blocDeFleche.style.backgroundColor = "black";
	blocDeFleche.style.color = "white";
	document.getElementsByTagName("body")[0].appendChild(blocDeFleche);
}

var creerperso3 = function() {
	var perso3 = document.createElement("div");
	perso3.id = "perso3";
	var chocobo = document.createElement("img");
	chocobo.id = "chocobo";
	chocobo.src = "./images/"+Joueur3+"_bas.png";
	chocobo.style.width = "75px";
	chocobo.style.height = "75px";
	perso3.appendChild(chocobo);
	var yo = document.getElementById("0-5");
	yo.appendChild(perso3);
	perso3.parentNode.style.textAlign= "center";
	perso3.parentNode.style.verticalAlign = "middle";
	perso3.parentNode.style.backgroundColor = "green";
}

var gotop3 = function() {
	var perso3 = document.getElementById("perso3");
	var chocobo = document.getElementById("chocobo");
	chocobo.src = "./images/"+Joueur3+"_haut.png";
	var ligne = parseInt(perso3.parentNode.id.split("-")[0]);
	var colonne = parseInt(perso3.parentNode.id.split("-")[1]);
	if ( ligne != 0 ) {
		var lignedessus = document.getElementsByTagName("tr")[ligne-1];
		var colonnedessus = lignedessus.getElementsByTagName("td")[colonne];
		if ( colonnedessus.childElementCount == 0) {
			colonnedessus.appendChild(perso3);
			colonnedessus.style.backgroundColor = "green";
			mouvement++;
			perso3.parentNode.style.textAlign= "center";
			perso3.parentNode.style.verticalAlign = "middle";
			if ( mouvement == max) {
				finDuTourJ3();
			}
		}
	}
}

var gobottom3 = function() {
	var perso3 = document.getElementById("perso3");
	var chocobo = document.getElementById("chocobo");
	chocobo.src = "./images/"+Joueur3+"_bas.png";
	var ligne = parseInt(perso3.parentNode.id.split("-")[0]);
	var colonne = parseInt(perso3.parentNode.id.split("-")[1]);
	var leslignes = document.getElementsByTagName("tr");
	if ( ligne != leslignes.length-1 ) {
		var lignedessous = leslignes[ligne+1];
		var colonnedessous = lignedessous.getElementsByTagName("td")[colonne];
		if (colonnedessous.childElementCount == 0) {
			colonnedessous.appendChild(perso3);
			colonnedessous.style.backgroundColor = "green";
			mouvement++;
			perso3.parentNode.style.textAlign= "center";
			perso3.parentNode.style.verticalAlign = "middle";
			if ( mouvement == max) {
				finDuTourJ3();
			}
		}
	}
}

var goright3 = function() {
	var perso3 = document.getElementById("perso3");
	var chocobo = document.getElementById("chocobo");
	chocobo.src = "./images/"+Joueur3+"_droite.png";
	var ligne = parseInt(perso3.parentNode.id.split("-")[0]);
	var colonne = parseInt(perso3.parentNode.id.split("-")[1]);
	var leslignes = document.getElementsByTagName("tr");
	var lescolonnes = leslignes[ligne].getElementsByTagName("td");
	if ( colonne != lescolonnes.length-1 ) {
		var colonnedroite = lescolonnes[colonne+1];
		if ( colonnedroite.childElementCount == 0) {
			colonnedroite.appendChild(perso3);
			colonnedroite.style.backgroundColor = "green";
			mouvement++;
			perso3.parentNode.style.textAlign= "center";
			perso3.parentNode.style.verticalAlign = "middle";
			if ( mouvement == max) {
				finDuTourJ3();
			}
		}
	}
}

var goleft3 = function() {
	var perso3 = document.getElementById("perso3");
	var chocobo = document.getElementById("chocobo");
	chocobo.src = "./images/"+Joueur3+"_gauche.png";
	var ligne = parseInt(perso3.parentNode.id.split("-")[0]);
	var colonne = parseInt(perso3.parentNode.id.split("-")[1]);
	var leslignes = document.getElementsByTagName("tr");
	var lescolonnes = leslignes[ligne].getElementsByTagName("td");
	if ( colonne != 0 ) {
		var colonnegauche = lescolonnes[colonne-1];
		if ( colonnegauche.childElementCount ==0) {
			colonnegauche.appendChild(perso3);
			colonnegauche.style.backgroundColor = "green";
			mouvement++;
			perso3.parentNode.style.textAlign= "center";
			perso3.parentNode.style.verticalAlign = "middle";
			if ( mouvement == max) {
				finDuTourJ3();
			}
		}
	}
}

var TourJ3 = function() {
	var perso = document.getElementById("perso3");
	var alorsalors = verification(perso);
	if(alorsalors == true) {
		mouvement = 0;
		var Bloc = document.getElementById("bloc_J3");
		var haut = document.getElementById("haut_J3");
		var bas = document.getElementById("bas_J3");
		var droite = document.getElementById("droite_J3");
		var gauche = document.getElementById("gauche_J3");
		Bloc.style.backgroundColor = "";
		Bloc.style.color = "black";
		haut.addEventListener("click",gotop3);
		bas.addEventListener("click",gobottom3)
		droite.addEventListener("click",goright3);
		gauche.addEventListener("click",goleft3);
		var alea = Math.floor((Math.random()*6)+1);
		var D = document.getElementById("DD");
		var div = document.getElementById("D");
		if ( alea == 1 ) {
			D.src = "./images/face 1.png";
			D.style.backgroundColor = "green";
			max = 1;
		}
		else if ( alea == 2 ) {
			D.src = "./images/face 2.png";
			D.style.backgroundColor = "green";
			max = 2;
		}
		else if ( alea == 3 ) {
			D.src = "./images/face 3.png";
			D.style.backgroundColor = "green";
			max = 3;
		}
		else if ( alea == 4 ) {
			D.src = "./images/face 4.png";
			D.style.backgroundColor = "green";
			max = 4;
		}
		else if ( alea == 5 ) {
			D.src = "./images/face 5.png";
			D.style.backgroundColor = "green";
			max = 5;
		}
		else {
			D.src = "./images/face 6.png";
			D.style.backgroundColor = "green";
			max = 6;
		}
	}
	else {
		finDuTourJ3();
	}
}

var finDuTourJ3 = function() {
	var Bloc = document.getElementById("bloc_J3");
	var haut = document.getElementById("haut_J3");
	var bas = document.getElementById("bas_J3");
	var droite = document.getElementById("droite_J3");
	var gauche = document.getElementById("gauche_J3");
	Bloc.style.backgroundColor = "black";
	Bloc.style.color = "white";
	haut.removeEventListener("click",gotop3);
	bas.removeEventListener("click",gobottom3)
	droite.removeEventListener("click",goright3);
	gauche.removeEventListener("click",goleft3);
	var lescases = document.getElementsByTagName("td");
	var yeah = 0;
	for (i=0; i < lescases.length;i++) {
		if (lescases[i].style.backgroundColor != "black") {
			yeah++;
		}
	}
	if (yeah == lescases.length) {
		end = true;
	}
	else {
		if (nbrPerso == 3) {
			setTimeout(TourJ1,500);
		}
		else {
			setTimeout(TourJ4,500);
		}
	}
	ThatIsTheEnd();
}

var ChoixJ3 = function() {
	Joueur3 = this.id;
	for (i=0;i<8;i++) {
		var perso = document.getElementById(ListPerso[i]);
		perso.removeEventListener("click",ChoixJ3);
		if ( nbrPerso == 4) {
			perso.addEventListener("click",ChoixJ4);
		}
	}
	document.getElementById("bloc_J3").style.backgroundColor = "black";
	document.getElementById("bloc_J3").style.color = "white";
	if ( nbrPerso == 4) {
		document.getElementById("bloc_J4").style.backgroundColor = "";
		document.getElementById("bloc_J4").style.color = "";
		document.getElementById("menu").style.boxShadow = "0px 0px 5px 5px rgb(255, 192, 203)";
	}
	else {
		document.getElementById("menu").parentNode.removeChild(document.getElementById("menu"));
		persoChoisi = true;
		AsTuAppuye = false;
		Play();
	}
}