function getRandomColor(){
	var hex = Math.floor(Math.random() * 0xFFFFFF);
	return "#" + ("000000" + hex.toString(16)).substr(-6);
}
function getRandomLetter(){
	var alphabet = 'йцукенгшщзхъфывапролджэ€чсмитьбю';
	return alphabet[Math.random() * alphabet.length|0];
}
//
// —оздание матрицы.
//
function createMatrix(n, m)
{
	for (var i = 0; i < n; i++) {
		var row = document.createElement('tr');

		for (var j = 0; j < m; j++) {
			var td = document.createElement('td');
			td.innerHTML = getRandomLetter();
			td.style.background = getRandomColor();
			row.appendChild(td);
		}
		matrix.appendChild(row);
	}
}

window.onload = function() {
	matrix = document.getElementById('matrix');
	createMatrix(10, 10);
};
