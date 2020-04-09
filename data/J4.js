var lesFleches4 = function() {
	var haut = document.createElement("button");
	haut.id = "haut_J4";
	var droite = document.createElement("button");
	droite.id = "droite_J4";
	var gauche = document.createElement("button");
	gauche.id = "gauche_J4";
	var bas = document.createElement("button");
	bas.id = "bas_J4";
	var ahahah = document.createTextNode("Deplacement Joueur 4");
	var texte1 = document.createTextNode("haut");
	var texte2 = document.createTextNode("droite");
	var texte3 = document.createTextNode("gauche");
	var texte4 = document.createTextNode("bas");
	var blocDeFleche = document.createElement("div");
	blocDeFleche.id = "bloc_J4";
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

var creerperso4 = function() {
	var perso4 = document.createElement("div");
	perso4.id = "perso4";
	var sakura = document.createElement("img");
	sakura.id = "sakura";
	sakura.src = "./images/"+Joueur4+"_haut.png";
	sakura.style.width = "75px";
	sakura.style.height = "75px";
	perso4.appendChild(sakura);
	var yo = document.getElementById("4-4");
	yo.appendChild(perso4);
	perso4.parentNode.style.textAlign= "center";
	perso4.parentNode.style.verticalAlign = "middle";
	perso4.parentNode.style.backgroundColor = "pink";
}

var gotop4 = function() {
	var perso4 = document.getElementById("perso4");
	var sakura = document.getElementById("sakura");
	sakura.src = "./images/"+Joueur4+"_haut.png";
	var ligne = parseInt(perso4.parentNode.id.split("-")[0]);
	var colonne = parseInt(perso4.parentNode.id.split("-")[1]);
	if ( ligne != 0 ) {
		var lignedessus = document.getElementsByTagName("tr")[ligne-1];
		var colonnedessus = lignedessus.getElementsByTagName("td")[colonne];
		if ( colonnedessus.childElementCount == 0) {
			colonnedessus.appendChild(perso4);
			colonnedessus.style.backgroundColor = "pink";
			mouvement++;
			perso4.parentNode.style.textAlign= "center";
			perso4.parentNode.style.verticalAlign = "middle";
			if ( mouvement == max) {
				finDuTourJ4();
			}
		}
	}
}

var gobottom4 = function() {
	var perso4 = document.getElementById("perso4");
	var sakura = document.getElementById("sakura");
	sakura.src = "./images/"+Joueur4+"_bas.png";
	var ligne = parseInt(perso4.parentNode.id.split("-")[0]);
	var colonne = parseInt(perso4.parentNode.id.split("-")[1]);
	var leslignes = document.getElementsByTagName("tr");
	if ( ligne != leslignes.length-1 ) {
		var lignedessous = leslignes[ligne+1];
		var colonnedessous = lignedessous.getElementsByTagName("td")[colonne];
		if (colonnedessous.childElementCount == 0) {
			colonnedessous.appendChild(perso4);
			colonnedessous.style.backgroundColor = "pink";
			mouvement++;
			perso4.parentNode.style.textAlign= "center";
			perso4.parentNode.style.verticalAlign = "middle";
			if ( mouvement == max) {
				finDuTourJ4();
			}
		}
	}
}

var goright4 = function() {
	var perso4 = document.getElementById("perso4");
	var sakura = document.getElementById("sakura");
	sakura.src = "./images/"+Joueur4+"_droite.png";
	var ligne = parseInt(perso4.parentNode.id.split("-")[0]);
	var colonne = parseInt(perso4.parentNode.id.split("-")[1]);
	var leslignes = document.getElementsByTagName("tr");
	var lescolonnes = leslignes[ligne].getElementsByTagName("td");
	if ( colonne != lescolonnes.length-1 ) {
		var colonnedroite = lescolonnes[colonne+1];
		if ( colonnedroite.childElementCount == 0) {
			colonnedroite.appendChild(perso4);
			colonnedroite.style.backgroundColor = "pink";
			mouvement++;
			perso4.parentNode.style.textAlign= "center";
			perso4.parentNode.style.verticalAlign = "middle";
			if ( mouvement == max) {
				finDuTourJ4();
			}
		}
	}
}

var goleft4 = function() {
	var perso4 = document.getElementById("perso4");
	var sakura = document.getElementById("sakura");
	sakura.src = "./images/"+Joueur4+"_gauche.png";
	var ligne = parseInt(perso4.parentNode.id.split("-")[0]);
	var colonne = parseInt(perso4.parentNode.id.split("-")[1]);
	var leslignes = document.getElementsByTagName("tr");
	var lescolonnes = leslignes[ligne].getElementsByTagName("td");
	if ( colonne != 0 ) {
		var colonnegauche = lescolonnes[colonne-1];
		if ( colonnegauche.childElementCount ==0) {
			colonnegauche.appendChild(perso4);
			colonnegauche.style.backgroundColor = "pink";
			mouvement++;
			perso4.parentNode.style.textAlign= "center";
			perso4.parentNode.style.verticalAlign = "middle";
			if ( mouvement == max) {
				finDuTourJ4();
			}
		}
	}
}

var TourJ4 = function() {
	var perso = document.getElementById("perso4");
	var alorsalors = verification(perso);
	if(alorsalors == true) {
		mouvement = 0;
		var Bloc = document.getElementById("bloc_J4");
		var haut = document.getElementById("haut_J4");
		var bas = document.getElementById("bas_J4");
		var droite = document.getElementById("droite_J4");
		var gauche = document.getElementById("gauche_J4");
		Bloc.style.backgroundColor = "";
		Bloc.style.color = "black";
		haut.addEventListener("click",gotop4);
		bas.addEventListener("click",gobottom4)
		droite.addEventListener("click",goright4);
		gauche.addEventListener("click",goleft4);
		var alea = Math.floor((Math.random()*6)+1);
		var D = document.getElementById("DD");
		var div = document.getElementById("D");
		if ( alea == 1 ) {
			D.src = "./images/face 1.png";
			D.style.backgroundColor = "pink";
			max = 1;
		}
		else if ( alea == 2 ) {
			D.src = "./images/face 2.png";
			D.style.backgroundColor = "pink";
			max = 2;
		}
		else if ( alea == 3 ) {
			D.src = "./images/face 3.png";
			D.style.backgroundColor = "pink";
			max = 3;
		}
		else if ( alea == 4 ) {
			D.src = "./images/face 4.png";
			D.style.backgroundColor = "pink";
			max = 4;
		}
		else if ( alea == 5 ) {
			D.src = "./images/face 5.png";
			D.style.backgroundColor = "pink";
			max = 5;
		}
		else {
			D.src = "./images/face 6.png";
			D.style.backgroundColor = "pink";
			max = 6;
		}
	}
	else {
		finDuTourJ4();
	}
}

var finDuTourJ4 = function() {
	var Bloc = document.getElementById("bloc_J4");
	var haut = document.getElementById("haut_J4");
	var bas = document.getElementById("bas_J4");
	var droite = document.getElementById("droite_J4");
	var gauche = document.getElementById("gauche_J4");
	Bloc.style.backgroundColor = "black";
	Bloc.style.color = "white";
	haut.removeEventListener("click",gotop4);
	bas.removeEventListener("click",gobottom4)
	droite.removeEventListener("click",goright4);
	gauche.removeEventListener("click",goleft4);
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
		setTimeout(TourJ1,500);
	}
	ThatIsTheEnd();
}

var ChoixJ4 = function() {
	Joueur4 = this.id;
	for (i=0;i<8;i++) {
		var perso = document.getElementById(ListPerso[i]);
		perso.removeEventListener("click",ChoixJ4);
	}
	document.getElementById("bloc_J4").style.backgroundColor = "black";
	document.getElementById("bloc_J4").style.color = "white";
	document.getElementById("menu").parentNode.removeChild(document.getElementById("menu"));
	persoChoisi = true;
	AsTuAppuye = false;
	Play();
}