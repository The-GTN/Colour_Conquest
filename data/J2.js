var lesFleches2 = function() {
	var haut = document.createElement("button");
	haut.id = "haut_J2";
	var droite = document.createElement("button");
	droite.id = "droite_J2";
	var gauche = document.createElement("button");
	gauche.id = "gauche_J2";
	var bas = document.createElement("button");
	bas.id = "bas_J2";
	var ahahah = document.createTextNode("Deplacement Joueur 2");
	var texte1 = document.createTextNode("haut");
	var texte2 = document.createTextNode("droite");
	var texte3 = document.createTextNode("gauche");
	var texte4 = document.createTextNode("bas");
	var blocDeFleche = document.createElement("div");
	blocDeFleche.id = "bloc_J2";
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

var creerperso2 = function() {
	var perso2 = document.createElement("div");
	perso2.id = "perso2";
	var joueur = document.createElement("img");
	joueur.id = "joueur2";
	joueur.src = "./images/"+Joueur2+"_gauche.png";
	joueur.style.width = "75px";
	joueur.style.height = "75px";
	perso2.appendChild(joueur);
	var yo = document.getElementById("2-9");
	yo.appendChild(perso2);
	perso2.parentNode.style.textAlign= "center";
	perso2.parentNode.style.verticalAlign = "middle";
	perso2.parentNode.style.backgroundColor = "red";
}

var gotop2 = function() {
	var perso2 = document.getElementById("perso2");
	var joueur = document.getElementById("joueur2");
	joueur.src = "./images/"+Joueur2+"_haut.png";
	var ligne = parseInt(perso2.parentNode.id.split("-")[0]);
	var colonne = parseInt(perso2.parentNode.id.split("-")[1]);
	if ( ligne != 0 ) {
		var lignedessus = document.getElementsByTagName("tr")[ligne-1];
		var colonnedessus = lignedessus.getElementsByTagName("td")[colonne];
		if ( colonnedessus.childElementCount == 0) {
			colonnedessus.appendChild(perso2);
			colonnedessus.style.backgroundColor = "red";
			mouvement++;
			perso2.parentNode.style.textAlign= "center";
			perso2.parentNode.style.verticalAlign = "middle";
			if ( mouvement == max) {
				finDuTourJ2();
			}
		}
	}
}

var gobottom2 = function() {
	var perso2 = document.getElementById("perso2");
	var joueur = document.getElementById("joueur2");
	joueur.src = "./images/"+Joueur2+"_bas.png";
	var ligne = parseInt(perso2.parentNode.id.split("-")[0]);
	var colonne = parseInt(perso2.parentNode.id.split("-")[1]);
	var leslignes = document.getElementsByTagName("tr");
	if ( ligne != leslignes.length-1 ) {
		var lignedessous = leslignes[ligne+1];
		var colonnedessous = lignedessous.getElementsByTagName("td")[colonne];
		if (colonnedessous.childElementCount == 0) {
			colonnedessous.appendChild(perso2);
			colonnedessous.style.backgroundColor = "red";
			mouvement++;
			perso2.parentNode.style.textAlign= "center";
			perso2.parentNode.style.verticalAlign = "middle";
			if ( mouvement == max) {
				finDuTourJ2();
			}
		}
	}
}

var goright2 = function() {
	var perso2 = document.getElementById("perso2");
	var joueur = document.getElementById("joueur2");
	joueur.src = "./images/"+Joueur2+"_droite.png";
	var ligne = parseInt(perso2.parentNode.id.split("-")[0]);
	var colonne = parseInt(perso2.parentNode.id.split("-")[1]);
	var leslignes = document.getElementsByTagName("tr");
	var lescolonnes = leslignes[ligne].getElementsByTagName("td");
	if ( colonne != lescolonnes.length-1 ) {
		var colonnedroite = lescolonnes[colonne+1];
		if ( colonnedroite.childElementCount == 0) {
			colonnedroite.appendChild(perso2);
			colonnedroite.style.backgroundColor = "red";
			mouvement++;
			perso2.parentNode.style.textAlign= "center";
			perso2.parentNode.style.verticalAlign = "middle";
			if ( mouvement == max) {
				finDuTourJ2();
			}
		}
	}
}

var goleft2 = function() {
	var perso2 = document.getElementById("perso2");
	var joueur = document.getElementById("joueur2");
	joueur.src = "./images/"+Joueur2+"_gauche.png";
	var ligne = parseInt(perso2.parentNode.id.split("-")[0]);
	var colonne = parseInt(perso2.parentNode.id.split("-")[1]);
	var leslignes = document.getElementsByTagName("tr");
	var lescolonnes = leslignes[ligne].getElementsByTagName("td");
	if ( colonne != 0 ) {
		var colonnegauche = lescolonnes[colonne-1];
		if ( colonnegauche.childElementCount ==0) {
			colonnegauche.appendChild(perso2);
			colonnegauche.style.backgroundColor = "red";
			mouvement++;
			perso2.parentNode.style.textAlign= "center";
			perso2.parentNode.style.verticalAlign = "middle";
			if ( mouvement == max) {
				finDuTourJ2();
			}
		}
	}
}

var TourJ2 = function() {
	var perso = document.getElementById("perso2");
	var alorsalors = verification(perso);
	if(alorsalors == true) {
		mouvement = 0;
		var Bloc = document.getElementById("bloc_J2");
		var haut = document.getElementById("haut_J2");
		var bas = document.getElementById("bas_J2");
		var droite = document.getElementById("droite_J2");
		var gauche = document.getElementById("gauche_J2");
		var alea = Math.floor((Math.random()*6)+1);
		Bloc.style.backgroundColor = "";
		Bloc.style.color = "black";
		haut.addEventListener("click",gotop2);
		bas.addEventListener("click",gobottom2)
		droite.addEventListener("click",goright2);
		gauche.addEventListener("click",goleft2);
		var D = document.getElementById("DD");
		var div = document.getElementById("D");
		if ( alea == 1 ) {
			D.src = "./images/face 1.png";
			D.style.backgroundColor = "red";
			max = 1;
		}
		else if ( alea == 2 ) {
			D.src = "./images/face 2.png";
			D.style.backgroundColor = "red";
			max = 2;
		}
		else if ( alea == 3 ) {
			D.src = "./images/face 3.png";
			D.style.backgroundColor = "red";
			max = 3;
		}
		else if ( alea == 4 ) {
			D.src = "./images/face 4.png";
			D.style.backgroundColor = "red";
			max = 4;
		}
		else if ( alea == 5 ) {
			D.src = "./images/face 5.png";
			D.style.backgroundColor = "red";
			max = 5;
		}
		else {
			D.src = "./images/face 6.png";
			D.style.backgroundColor = "red";
			max = 6;
		}
	}
	else {
		finDuTourJ2();
	}
}

var finDuTourJ2 = function() {
	var Bloc = document.getElementById("bloc_J2");
	var haut = document.getElementById("haut_J2");
	var bas = document.getElementById("bas_J2");
	var droite = document.getElementById("droite_J2");
	var gauche = document.getElementById("gauche_J2");
	Bloc.style.backgroundColor = "black";
	Bloc.style.color = "white";
	haut.removeEventListener("click",gotop2);
	bas.removeEventListener("click",gobottom2)
	droite.removeEventListener("click",goright2);
	gauche.removeEventListener("click",goleft2);
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
		if ( nbrPerso == 2) {
			setTimeout(TourJ1,500);
		}
		else {
			setTimeout(TourJ3,500);
		}
	}
	ThatIsTheEnd();
}

var ChoixJ2 = function() {
	Joueur2 = this.id;
	for (i=0;i<8;i++) {
		var perso = document.getElementById(ListPerso[i]);
		perso.removeEventListener("click",ChoixJ2);
		if (nbrPerso > 2) {
			perso.addEventListener("click",ChoixJ3);
		}
	}
	document.getElementById("bloc_J2").style.backgroundColor = "black";
	document.getElementById("bloc_J2").style.color = "white";
	if (nbrPerso > 2) {
		document.getElementById("bloc_J3").style.backgroundColor = "";
		document.getElementById("bloc_J3").style.color = "";
		document.getElementById("menu").style.boxShadow = "0px 0px 5px 5px rgb(0, 255, 0)";
	}
	else {
		document.getElementById("menu").parentNode.removeChild(document.getElementById("menu"));
		persoChoisi = true;
		AsTuAppuye = false;
		Play();
	}
}