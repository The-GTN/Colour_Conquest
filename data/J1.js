var lesFleches = function() {
	var haut = document.createElement("button");
	haut.id = "haut_J1";
	var droite = document.createElement("button");
	droite.id = "droite_J1";
	var gauche = document.createElement("button");
	gauche.id = "gauche_J1";
	var bas = document.createElement("button");
	bas.id = "bas_J1";
	var ahahah = document.createTextNode("Deplacement Joueur 1");
	var texte1 = document.createTextNode("haut");
	var texte2 = document.createTextNode("droite");
	var texte3 = document.createTextNode("gauche");
	var texte4 = document.createTextNode("bas");
	var blocDeFleche = document.createElement("div");
	blocDeFleche.id = "bloc_J1";
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

var creerperso = function() {
	var perso = document.createElement("div");
	perso.id = "perso";
	var joueur = document.createElement("img");
	joueur.id = "joueur1";
	joueur.style.width = "75px";
	joueur.style.height = "75px";
	joueur.src = "./images/"+Joueur1+"_droite.png";
	perso.appendChild(joueur);
	var yo = document.getElementById("2-0");
	yo.appendChild(perso);
	perso.parentNode.style.textAlign= "center";
	perso.parentNode.style.verticalAlign = "middle";
	perso.parentNode.style.backgroundColor = "blue";
}

var gotop = function() {
	var perso = document.getElementById("perso");
	var joueur = document.getElementById("joueur1");
	joueur.src = "./images/"+Joueur1+"_haut.png";
	var ligne = parseInt(perso.parentNode.id.split("-")[0]);
	var colonne = parseInt(perso.parentNode.id.split("-")[1]);
	if ( ligne != 0 ) {
		var lignedessus = document.getElementsByTagName("tr")[ligne-1];
		var colonnedessus = lignedessus.getElementsByTagName("td")[colonne];
		if ( colonnedessus.childElementCount == 0) {
			colonnedessus.appendChild(perso);
			colonnedessus.style.backgroundColor = "blue";
			mouvement++;
			perso.parentNode.style.textAlign= "center";
			perso.parentNode.style.verticalAlign = "middle";
			if ( mouvement == max) {
				finDuTourJ1();
			}
		}
	}
}

var gobottom = function() {
	var perso = document.getElementById("perso");
	var joueur = document.getElementById("joueur1");
	joueur.src = "./images/"+Joueur1+"_bas.png";
	var ligne = parseInt(perso.parentNode.id.split("-")[0]);
	var colonne = parseInt(perso.parentNode.id.split("-")[1]);
	var leslignes = document.getElementsByTagName("tr");
	if ( ligne != leslignes.length-1 ) {
		var lignedessous = leslignes[ligne+1];
		var colonnedessous = lignedessous.getElementsByTagName("td")[colonne];
		if (colonnedessous.childElementCount == 0) {
			colonnedessous.appendChild(perso);
			colonnedessous.style.backgroundColor = "blue";
			mouvement++;
			perso.parentNode.style.textAlign= "center";
			perso.parentNode.style.verticalAlign = "middle";
			if ( mouvement == max) {
				finDuTourJ1();
			}
		}
	}
}

var goright = function() {
	var perso = document.getElementById("perso");
	var joueur = document.getElementById("joueur1");
	joueur.src = "./images/"+Joueur1+"_droite.png";
	var ligne = parseInt(perso.parentNode.id.split("-")[0]);
	var colonne = parseInt(perso.parentNode.id.split("-")[1]);
	var leslignes = document.getElementsByTagName("tr");
	var lescolonnes = leslignes[ligne].getElementsByTagName("td");
	if ( colonne != lescolonnes.length-1 ) {
		var colonnedroite = lescolonnes[colonne+1];
		if ( colonnedroite.childElementCount == 0) {
			colonnedroite.appendChild(perso);
			colonnedroite.style.backgroundColor = "blue";
			mouvement++;
			perso.parentNode.style.textAlign= "center";
			perso.parentNode.style.verticalAlign = "middle";
			if ( mouvement == max) {
				finDuTourJ1();
			}
		}
	}
}

var goleft = function() {
	var perso = document.getElementById("perso");
	var joueur = document.getElementById("joueur1");
	joueur.src = "./images/"+Joueur1+"_gauche.png";
	var ligne = parseInt(perso.parentNode.id.split("-")[0]);
	var colonne = parseInt(perso.parentNode.id.split("-")[1]);
	var leslignes = document.getElementsByTagName("tr");
	var lescolonnes = leslignes[ligne].getElementsByTagName("td");
	if ( colonne != 0 ) {
		var colonnegauche = lescolonnes[colonne-1];
		if ( colonnegauche.childElementCount ==0) {
			colonnegauche.appendChild(perso);
			colonnegauche.style.backgroundColor = "blue";
			mouvement++;
			perso.parentNode.style.textAlign= "center";
			perso.parentNode.style.verticalAlign = "middle";
			if ( mouvement == max) {
				finDuTourJ1();
			}
		}
	}
}

var TourJ1 = function() {
	var perso = document.getElementById("perso");
	var alorsalors = verification(perso);
	if(alorsalors == true) {
		mouvement = 0;
		var Bloc = document.getElementById("bloc_J1");
		var haut = document.getElementById("haut_J1");
		var bas = document.getElementById("bas_J1");
		var droite = document.getElementById("droite_J1");
		var gauche = document.getElementById("gauche_J1");
		var alea = Math.floor((Math.random()*6)+1);
		Bloc.style.backgroundColor = "";
		Bloc.style.color = "black";
		haut.addEventListener("click",gotop);
		bas.addEventListener("click",gobottom);
		droite.addEventListener("click",goright);
		gauche.addEventListener("click",goleft);
		var D = document.getElementById("DD");
		var div = document.getElementById("D");
		if ( alea == 1 ) {
			D.src = "./images/face 1.png";
			D.style.backgroundColor = "blue";
			max = 1;
		}
		else if ( alea == 2 ) {
			D.src = "./images/face 2.png";
			D.style.backgroundColor = "blue";
			max = 2;
		}
		else if ( alea == 3 ) {
			D.src = "./images/face 3.png";
			D.style.backgroundColor = "blue";
			max = 3;
		}
		else if ( alea == 4 ) {
			D.src = "./images/face 4.png";
			D.style.backgroundColor = "blue";
			max = 4;
		}
		else if ( alea == 5 ) {
			D.src = "./images/face 5.png";
			D.style.backgroundColor = "blue";
			max = 5;
		}
		else {
			D.src = "./images/face 6.png";
			D.style.backgroundColor = "blue";
			max = 6;
		}
	}
	else {
		finDuTourJ1();
	}
}

var finDuTourJ1 = function() {
	var Bloc = document.getElementById("bloc_J1");
	var haut = document.getElementById("haut_J1");
	var bas = document.getElementById("bas_J1");
	var droite = document.getElementById("droite_J1");
	var gauche = document.getElementById("gauche_J1");
	Bloc.style.backgroundColor = "black";
	Bloc.style.color = "white";
	haut.removeEventListener("click",gotop);
	bas.removeEventListener("click",gobottom);
	droite.removeEventListener("click",goright);
	gauche.removeEventListener("click",goleft);
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
		setTimeout(TourJ2,500);
	}
	ThatIsTheEnd();
}

var ChoixJ1 = function() {
	Joueur1 = this.id;
	for (i=0;i<8;i++) {
		var perso = document.getElementById(ListPerso[i]);
		perso.removeEventListener("click",ChoixJ1);
		perso.addEventListener("click",ChoixJ2);
	}
	document.getElementById("bloc_J1").style.backgroundColor = "black";
	document.getElementById("bloc_J1").style.color = "white";
	document.getElementById("bloc_J2").style.backgroundColor = "";
	document.getElementById("bloc_J2").style.color = "";
	document.getElementById("menu").style.boxShadow = "0px 0px 5px 5px rgb(255, 0, 0)";
}