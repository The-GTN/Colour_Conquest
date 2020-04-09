var creerTerrain = function() {
	var body = document.getElementsByTagName("body")[0]
	var game = document.createElement("table");
	game.id = "game";
	var tbody = document.createElement("tbody");
	for (ligne=0; ligne<5; ligne++) {
		var row = document.createElement("tr");
		for (colonne=0; colonne<10; colonne++) {
			var column = document.createElement("td");
			column.style.width = "100px";
			column.style.height = "100px";
			column.id = ligne+"-"+colonne;
			column.style.backgroundColor = "black";
			row.appendChild(column);
		}
		tbody.appendChild(row);
	}
	game.appendChild(tbody);
	body.appendChild(game);
}