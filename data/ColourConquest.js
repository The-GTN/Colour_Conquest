var SetupListeners = function() {
	play = false;
	end = false;
	persoChoisi = false;
	AsTuAppuye = false;
	mouvement = 0;
	nbrPerso = 0;
	BoutonPlay();
	creerTerrain();
}

window.addEventListener("load",SetupListeners);

var BoutonPlay = function() {
	var bouton = document.createElement("button");
	bouton.id= "play";
	var texte = document.createTextNode("Play");
	bouton.appendChild(texte);
	var body = document.getElementsByTagName("body")[0];
	body.appendChild(bouton);
	bouton.addEventListener("click",Play);
}

var Play = function() {
	if ( AsTuAppuye == false) {
		AsTuAppuye = true;
		if (play == false) {
			if ( persoChoisi == false) {
				CreerDes();
				choix = window.prompt("2, 3 ou 4 joueurs ?");
				if (choix != "2" && choix != "3" && choix != "4") {
					while (choix != "2" && choix != "3" && choix != "4") {
						choix = window.prompt("Répondre 2 pour 2 joueurs, 3 pour 3 joueurs et 4 pour 4 joueurs.");
					}
				}
				if (choix == "2") {
					nbrPerso = 2;
					lesFleches();
					lesFleches2();
					ChoixDesPerso();
				}
				if (choix == "3") {
					nbrPerso = 3;
					lesFleches();
					lesFleches2();
					lesFleches3();
					ChoixDesPerso();
				}
				if (choix == "4") {
					nbrPerso = 4;
					lesFleches();
					lesFleches2();
					lesFleches3();
					lesFleches4();
					ChoixDesPerso();
				}
			}
			else {
				AsTuAppuye = false;
				var turn = Math.random();
				if ( nbrPerso == 2) {
					creerperso();
					creerperso2();
					if ( turn > 0.5 ) {
					TourJ1();
					}
					else {
						TourJ2();
					}
				}
				else if ( nbrPerso == 3) {
					creerperso();
					creerperso2();
					creerperso3();
					if (turn < 0.33) {
						TourJ1();
					}
					else if (turn > 0.66) {
						TourJ2();
					}
					else {
						TourJ3();
					}
				}
				else {
					creerperso();
					creerperso2();
					creerperso3();
					creerperso4();
					if (turn < 0.25) {
						TourJ1();
					}
					else if (turn > 0.25 && turn < 0.5) {
						TourJ2();
					}
					else if (turn > 0.5 && turn <0.75) {
						TourJ3();
					}
					else {
						TourJ4();
					}
				}
				play = true;
			}
		}
		else {
			var ask = window.prompt("Quitter la partie en cours ?");
			ask = ask.toLowerCase();
			if (ask == "yes" || ask == "oui" || ask == "si" || ask == "da") {
				var body = document.getElementsByTagName("body")[0]
				var game = document.getElementById("game");
				body.removeChild(game);
				creerTerrain();
				play = false;
				end = false;
				persoChoisi = false;
				AsTuAppuye = false;
				var Bloc = document.getElementById("bloc_J1");
				var Bloc2 = document.getElementById("bloc_J2");
				body.removeChild(Bloc);
				body.removeChild(Bloc2);
				if ( document.getElementsByTagName("div").length == 2) {
					var Bloc3 = document.getElementById("bloc_J3");
					body.removeChild(Bloc3);
				}
				else if ( document.getElementsByTagName("div").length == 3) {
					var Bloc3 = document.getElementById("bloc_J3");
					body.removeChild(Bloc3);
					var Bloc4 = document.getElementById("bloc_J4");
					body.removeChild(Bloc4);
				}
				SupprimerDes();
				Play();
			}
		}
	}
	else {
		var ask = window.prompt("Quitter la partie en cours ?");
		ask = ask.toLowerCase();
		if (ask == "yes" || ask == "oui" || ask == "si" || ask == "da") {
			var body = document.getElementsByTagName("body")[0]
			var game = document.getElementById("game");
			body.removeChild(game);
			creerTerrain();
			play = false;
			end = false;
			persoChoisi = false;
			AsTuAppuye = false;
			var Bloc = document.getElementById("bloc_J1");
			var Bloc2 = document.getElementById("bloc_J2");
			body.removeChild(Bloc);
			body.removeChild(Bloc2);
			if ( document.getElementsByTagName("div").length == 3) {
				var Bloc3 = document.getElementById("bloc_J3");
				body.removeChild(Bloc3);
			}
			else if ( document.getElementsByTagName("div").length == 4) {
				var Bloc3 = document.getElementById("bloc_J3");
				body.removeChild(Bloc3);
				var Bloc4 = document.getElementById("bloc_J4");
				body.removeChild(Bloc4);
			}
			document.getElementById("menu").parentNode.removeChild(document.getElementById("menu"));
			SupprimerDes();
			Play();
		}
	}
}

var FinPartie = function() {
	window.alert("La partie est fini !");
	window.alert("Qui a donc gagné ?");
	window.alert("... *roulement de tambour* ...");
	if ( nbrPerso == 2) {
		var scoreJ1 = 0;
		var scoreJ2 = 0;
		var lescases = document.getElementsByTagName("td");
		for (i=0; i<lescases.length; i++) {
			if (lescases[i].style.backgroundColor == "blue") {
				scoreJ1++;
			}
			else {
				scoreJ2++;
			}
		}
		AnnonceGagnant(scoreJ1,scoreJ2);
		var body = document.getElementsByTagName("body")[0]
		var game = document.getElementById("game");
		var bloc = document.getElementById("bloc_J1");
		var bloc2 = document.getElementById("bloc_J2");
		body.removeChild(bloc);
		body.removeChild(bloc2);
		body.removeChild(game);
	}
	else if (nbrPerso == 3) {
		var scoreJ1 = 0;
		var scoreJ2 = 0;
		var scoreJ3 = 0;
		var lescases = document.getElementsByTagName("td");
		for (i=0; i<lescases.length; i++) {
			if (lescases[i].style.backgroundColor == "blue") {
				scoreJ1++;
			}
			else if (lescases[i].style.backgroundColor == "green") {
				scoreJ3++;
			}
			else {
				scoreJ2++;
			}
		}
		AnnonceGagnant(scoreJ1,scoreJ2,scoreJ3);
		var body = document.getElementsByTagName("body")[0]
		var game = document.getElementById("game");
		var bloc = document.getElementById("bloc_J1");
		var bloc2 = document.getElementById("bloc_J2");
		var bloc3 = document.getElementById("bloc_J3");
		body.removeChild(bloc);
		body.removeChild(bloc2);
		body.removeChild(bloc3);
		body.removeChild(game);
	}
	else {
		var scoreJ1 = 0;
		var scoreJ2 = 0;
		var scoreJ3 = 0;
		var scoreJ4 = 0;
		var lescases = document.getElementsByTagName("td");
		for (i=0; i<lescases.length; i++) {
			if (lescases[i].style.backgroundColor == "blue") {
				scoreJ1++;
			}
			else if (lescases[i].style.backgroundColor == "green") {
				scoreJ3++;
			}
			else if (lescases[i].style.backgroundColor == "red") {
				scoreJ2++;
			}
			else {
				scoreJ4++;
			}
		}
		AnnonceGagnant(scoreJ1,scoreJ2,scoreJ3,scoreJ4);
		var body = document.getElementsByTagName("body")[0]
		var game = document.getElementById("game");
		var bloc = document.getElementById("bloc_J1");
		var bloc2 = document.getElementById("bloc_J2");
		var bloc3 = document.getElementById("bloc_J3");
		var bloc4 = document.getElementById("bloc_J4");
		body.removeChild(bloc);
		body.removeChild(bloc2);
		body.removeChild(bloc3);
		body.removeChild(bloc4);
		body.removeChild(game);
	}
	creerTerrain();
	SupprimerDes();
	play = false;
	persoChoisi = false;
	end = false;
	AsTuAppuye = false;
}

var ThatIsTheEnd = function() {
	if ( end == true ) {
		setTimeout(FinPartie,1000);
	}
}

var AnnonceGagnant = function(scoreJ1,scoreJ2,scoreJ3=0,scoreJ4=0) {
	if (scoreJ3 != 0) {
		if (scoreJ4 != 0) {
			window.alert("Joueur1 : "+scoreJ1+" pts \nJoueur2 : "+scoreJ2+" pts \nJoueur3 : "+scoreJ3+" pts \nJoueur4 : "+scoreJ4+" pts");
		}
		else {
			window.alert("Joueur1 : "+scoreJ1+" pts \nJoueur2 : "+scoreJ2+" pts \nJoueur3 : "+scoreJ3+" pts");
		}
	}
	else {
		window.alert("Joueur1 : "+scoreJ1+" pts \nJoueur2 : "+scoreJ2+" pts");
	}
	// list.push(a+"-Joueur 1",z+"-Joueur 2");
	// if(e!=0){
		// list.push(e+"-Joueur 3");
		// if(r!=0) {
			// list.push(r+"-Joueur 4");
		// }
	// }
	// list.sort();
	// if(nbrPerso == 2) {
		// if(list[1].split("-")[0] == list[0].split("-")[0]) {
			// window.alert("WHOAAAW LES "+nbrPerso+" JOUEURS ONT "+list[0].split("-")[0]+" POINTS !!!");
		// }
		// else {
			// window.alert("1er : "+list[1].split("-")[1]+"   "+list[1].split("-")[0]+"pts \n2e  : "+list[0].split("-")[1]+"   "+list[0].split("-")[0]+"pts");
		// }
	// }
	// else if(nbrPerso == 3) {
		// if(list[2].split("-")[0] == list[1].split("-")[0]) {
			// if(list[1].split("-")[0] == list[0].split("-")[0]) {
				// window.alert("WHOAAAW LES "+nbrPerso+" JOUEURS ONT "+list[0].split("-")[0]+" POINTS !!!");
			// }
			// else {
				// window.alert("1er : "+list[2].split("-")[1]+" et "+list[1].split("-")[1]+"   "+list[1].split("-")[0]+"pts \n2e  : "+list[0].split("-")[1]+"   "+list[0].split("-")[0]+"pts");
			// }
		// }
		// else if(list[1].split("-")[0] == list[0].split("-")[0]) {
			// window.alert("1er : "+list[2].split("-")[1]+"   "+list[2].split("-")[0]+"pts \n2e  : "+list[0].split("-")[1]+" et "+list[1].split("-")[1]+"   "+list[1].split("-")[0]+"pts");
		// }
		// else {
			// window.alert("1er : "+list[2].split("-")[1]+"   "+list[2].split("-")[0]+"pts \n2e  : "+list[1].split("-")[1]+"   "+list[1].split("-")[0]+"pts \n3e  : "+list[0].split("-")[1]+"   "+list[0].split("-")[0]+"pts");
		// }
	// }
	// else {
		// if(list[3].split("-")[0] == list[2].split("-")[0]) {
			// if(list[2].split("-")[0] == list[1].split("-")[0]) {
				// if(list[1].split("-")[0] == list[0].split("-")[0]) {
					// window.alert("WHOAAAW LES "+nbrPerso+" JOUEURS ONT "+list[0].split("-")[0]+" POINTS !!!");
				// }
				// else {
					// window.alert("1er : "+list[3].split("-")[1]+" et "+list[2].split("-")[1]+" et "+list[1].split("-")[1]+"   "+list[1].split("-")[0]+"pts \n2e  : "+list[0].split("-")[1]+"   "+list[0].split("-")[0]+"pts");
				// }
			// }
			// else {
				// if(list[1].split("-")[0] == list[0].split("-")[0]) {
					// window.alert("1er : "+list[3].split("-")[1]+" et "+list[2].split("-")[1]+"   "+list[3].split("-")[0]+"pts \n2e  : "+list[1].split("-")[1]+" et "+list[0].split("-")[1]+"   "+list[1].split("-")[0]+"pts");
				// }
				// else {
					// window.alert("1er : "+list[3].split("-")[1]+" et "+list[2].split("-")[1]+"   "+list[3].split("-")[0]+"pts \n2e  : "+list[1].split("-")[1]+"   "+list[1].split("-")[0]+"pts \n3e  : "+list[0].split("-")[1]+"   "+list[0].split("-")[0]+"pts");
				// }
			// }
		// }
		// else {
			// if(list[2].split("-")[0] == list[1].split("-")[0]) {
				// if(list[1].split("-")[0] == list[0].split("-")[0]) {
					// window.alert("1er : "+list[3].split("-")[1]+"   "+list[3].split("-")[0]+"pts \n2e  : "+list[2].split("-")[1]+" et "+list[1].split("-")[1]+" et "+list[0].split("-")[1]+"   "+list[2].split("-")[0]+"pts");
				// }
				// else {
					// window.alert("1er : "+list[3].split("-")[1]+"   "+list[3].split("-")[0]+"pts \n2e  : "+list[2].split("-")[1]+" et "+list[1].split("-")[1]+"   "+list[2].split("-")[0]+"pts \n3e  : "+list[0].split("-")[1]+"   "+list[0].split("-")[0]+"pts");
				// }
			// }
			// else {
				// if(list[1].split("-")[0] == list[0].split("-")[0]) {
					// window.alert("1er : "+list[3].split("-")[1]+"   "+list[3].split("-")[0]+"pts \n2e  : "+list[2].split("-")[1]+"   "+list[2].split("-")[0]+"pts \n3e  : "+list[1].split("-")[1]+" et "+list[0].split("-")[1]+"   "+list[1].split("-")[0]+"pts");
				// }
				// else {
					// window.alert("1er : "+list[3].split("-")[1]+"   "+list[3].split("-")[0]+"pts \n2e  : "+list[2].split("-")[1]+"   "+list[2].split("-")[0]+"pts \n3e  : "+list[1].split("-")[1]+"   "+list[1].split("-")[0]+"pts \n4e  : "+list[0].split("-")[1]+"   "+list[0].split("-")[0]+"pts");
				// }
			// }
		// }
	// }
}
				

var touche = function(e) {
	var touche = event.keyCode;
	var nom = String.fromCharCode(touche);
	var go = document.getElementById("play");
	if (nom == " ") {
		go.click();
	}
	else if ( play == true ) {
		var Bloc = document.getElementById("bloc_J1");
		var haut = document.getElementById("haut_J1");
		var bas = document.getElementById("bas_J1");
		var droite = document.getElementById("droite_J1");
		var gauche = document.getElementById("gauche_J1");
		var Bloc2 = document.getElementById("bloc_J2");
		var haut2 = document.getElementById("haut_J2");
		var bas2 = document.getElementById("bas_J2");
		var droite2 = document.getElementById("droite_J2");
		var gauche2 = document.getElementById("gauche_J2");
		if (Bloc.style.backgroundColor == "") {
			if(nom == "&") {
				haut.click();
			}
			else if( nom == "(" ) {
				bas.click();
			}
			else if (nom == "%") {
				gauche.click();
			}
			else if (nom == "'") {
				droite.click();
			}
		}
		else if (Bloc2.style.backgroundColor == "") {
			if(nom == "&") {
				haut2.click();
			}
			else if( nom == "(" ) {
				bas2.click();
			}
			else if (nom == "%") {
				gauche2.click();
			}
			else if (nom == "'") {
				droite2.click();
			}
		}
		else if (nbrPerso > 2) {
			var Bloc3 = document.getElementById("bloc_J3");
			var haut3 = document.getElementById("haut_J3");
			var bas3 = document.getElementById("bas_J3");
			var droite3 = document.getElementById("droite_J3");
			var gauche3 = document.getElementById("gauche_J3");
			if (Bloc3.style.backgroundColor == "") {
				if(nom == "&") {
					haut3.click();
				}
				else if( nom == "(" ) {
					bas3.click();
				}
				else if (nom == "%") {
					gauche3.click();
				}
				else if (nom == "'") {
					droite3.click();
				}
			}
			else if (nbrPerso == 4) {
				var Bloc4 = document.getElementById("bloc_J4");
				var haut4 = document.getElementById("haut_J4");
				var bas4 = document.getElementById("bas_J4");
				var droite4 = document.getElementById("droite_J4");
				var gauche4 = document.getElementById("gauche_J4");
				if (Bloc4.style.backgroundColor == "") {
					if(nom == "&") {
						haut4.click();
					}
					else if( nom == "(" ) {
						bas4.click();
					}
					else if (nom == "%") {
						gauche4.click();
					}
					else if (nom == "'") {
						droite4.click();
					}
				}
			}
		}
	}
}

var verification = function(perso) {
	var ligne = parseInt(perso.parentNode.id.split("-")[0]);
	var colonne = parseInt(perso.parentNode.id.split("-")[1]);
	var leslignes = document.getElementsByTagName("tr");
	var lescolonnes = leslignes[ligne].getElementsByTagName("td");
	if (ligne == 0) {
		var colonneDessous = leslignes[ligne+1].getElementsByTagName("td")[colonne];
		if (colonne == 0) {
			var colonneDroite = lescolonnes[colonne+1];
			if (colonneDroite.childElementCount == 0 || colonneDessous.childElementCount == 0) {
				return true;
			}
			else {
				return false;
			}
		}
		else if (colonne == lescolonnes.length - 1) {
			var colonneGauche = lescolonnes[colonne-1];
			if (colonneGauche.childElementCount == 0 || colonneDessous.childElementCount == 0) {
				return true;
			}
			else {
				return false;
			}
		}
		else {
			var colonneDroite = lescolonnes[colonne+1];
			var colonneGauche = lescolonnes[colonne-1];
			if (colonneDroite.childElementCount == 0 || colonneGauche.childElementCount == 0 || colonneDessous.childElementCount == 0) {
				return true;
			}
			else {
				return false;
			}
		}
	}
	else if (ligne == leslignes.length - 1) {
		var colonneDessus = leslignes[ligne-1].getElementsByTagName("td")[colonne];
		if (colonne == 0) {
			var colonneDroite = lescolonnes[colonne+1];
			if (colonneDroite.childElementCount == 0 || colonneDessus.childElementCount == 0) {
				return true;
			}
			else {
				return false;
			}
		}
		else if (colonne == lescolonnes.length - 1) {
			var colonneGauche = lescolonnes[colonne-1];
			if (colonneGauche.childElementCount == 0 || colonneDessus.childElementCount == 0) {
				return true;
			}
			else {
				return false;
			}
		}
		else {
			var colonneDroite = lescolonnes[colonne+1];
			var colonneGauche = lescolonnes[colonne-1];
			if (colonneDroite.childElementCount == 0 || colonneGauche.childElementCount == 0 || colonneDessus.childElementCount == 0) {
				return true;
			}
			else {
				return false;
			}
		}
	}
	else if (colonne == 0) {
		var colonneDessus = leslignes[ligne-1].getElementsByTagName("td")[colonne];
		var colonneDessous = leslignes[ligne+1].getElementsByTagName("td")[colonne];
		var colonneDroite = lescolonnes[colonne+1];
		if ( colonneDessous.childElementCount == 0 || colonneDessus.childElementCount == 0 || colonneDroite.childElementCount == 0) {
			return true;
		}
		else {
			return false;
		}
	}
	else if ( colonne == lescolonnes.length - 1) {
		var colonneDessus = leslignes[ligne-1].getElementsByTagName("td")[colonne];
		var colonneDessous = leslignes[ligne+1].getElementsByTagName("td")[colonne];
		var colonneGauche = lescolonnes[colonne-1];
		if ( colonneDessous.childElementCount == 0 || colonneDessus.childElementCount == 0 || colonneGauche.childElementCount == 0) {
			return true;
		}
		else {
			return false;
		}
	}
	else {
		var colonneDessus = leslignes[ligne-1].getElementsByTagName("td")[colonne];
		var colonneDessous = leslignes[ligne+1].getElementsByTagName("td")[colonne];
		var colonneGauche = lescolonnes[colonne-1];
		var colonneDroite = lescolonnes[colonne+1];
		if ( colonneDessous.childElementCount == 0 || colonneDessus.childElementCount == 0 || colonneGauche.childElementCount == 0 || colonneDroite.childElementCount == 0) {
			return true;
		}
		else {
			return false;
		}
	}
}


var CreerDes = function() {
	var div = document.createElement("div");
	div.id = "D";
	var leD = document.createElement("img");
	leD.id = "DD";
	leD.style.width = "50px";
	div.style.height = "50px";
	leD.style.height = "50px";
	div.style.width = "50px";
	div.appendChild(leD);
	leD.src = "./images/face 1.png";
	var body = document.getElementsByTagName("body")[0];
	body.appendChild(div);
	div.style.position = "absolute";
	div.style.border = "solid 2px black";
	div.style.top = "600px";
	div.style.right = "200px";
	div.style.backgroundColor = "white";
}

var SupprimerDes = function() {
	var D = document.getElementById("D");
	var DD = document.getElementById("DD");
	var body = document.getElementsByTagName("body")[0];
	D.removeChild(DD);
	body.removeChild(D);
}

var ChoixDesPerso = function() {
	var menu = document.createElement("div");
	menu.id = "menu";
	menu.style.position = "absolute";
	menu.style.transform = "translateX(-50%)"
	menu.style.marginTop = "20px";
	menu.style.left = "50%";
	menu.style.border = "solid 2px white";
	menu.style.backgroundColor = "black";
	SrcPerso = ["./images/dragon_bas.png","./images/minautor_bas.png","./images/chocobo_bas.png","./images/sakura_bas.png","./images/demon_bas.png","./images/gorille_bas.png","./images/garou_bas.png","./images/86_bas.png"];
	ListPerso = ["dragon","minautor","chocobo","sakura","demon","gorille","garou","86"];
	for(i=0;i<8;i++) {
		var perso = document.createElement("img");
		perso.style.position = "relative";
		perso.style.display = "inline";
		perso.id = ListPerso[i];
		perso.src = SrcPerso[i];
		perso.style.width = "75px";
		perso.style.height = "75px";
		menu.appendChild(perso);
		perso.addEventListener("click",ChoixJ1);
	}
	document.getElementsByTagName("body")[0].appendChild(menu);
	menu.style.boxShadow = "0px 0px 5px 5px rgb(0, 0, 255)";
	document.getElementById("bloc_J1").style.backgroundColor = "";
	document.getElementById("bloc_J1").style.color = "";
}
	