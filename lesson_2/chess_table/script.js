var alphabetWord = ' abcdefgh ';
var alphabetNumber = ' 87654321 ';
var lastElem = null;

function getColorChessTable(indexX, indexY){
	var colors = ['white', 'black'];
	return colors[(indexX - 1) % 2 + (indexY - 1) % 2];

}
function getCellChess(indexX, indexY, event){

	var addressCell = alphabetWord[indexX] + ' ' + alphabetNumber[indexY];
	addressCell += '\nПопробуйте передвинуть фокус стрелками.';
	document.getElementById('state-click').innerHTML = 'Адрес ячейки: ' + addressCell;
	if (lastElem)
		lastElem.style.border = null;
	event.srcElement.style.border = '5px solid red';
	lastElem = event.srcElement;
	event.preventDefault();
}
function getCellChessOnKey(indexX, indexY, event){
	switch (event.keyCode){
		case 37:
			indexX--;
			break;
		case 38:
			indexY--;
			break;
		case 39:
			indexX++;
			break;
		case 40:
			indexY++;
			break;
	}

	if (indexX < 1)
		indexX = 1;
	else if (indexX > 8)
		indexX = 8;

	if (indexY < 1)
		indexY = 1;
	else if (indexY > 8)
		indexY = 8;

	lastElem = event.srcElement;
	var td = document.getElementById('chess-table').childNodes[indexY].childNodes[indexX];
	td.focus();
	event.preventDefault();
}
//
// Создание матрицы.
//
function createChessTable(n, m)
{
	for (var i = 0; i < n+2; i++) {
		var row = document.createElement('tr');

		for (var j = 0; j < m+2; j++) {
			var td = document.createElement('td');

			if (i == 0 || i == n+1)
				td.innerHTML = alphabetWord[j];
			if(j == 0 || j == m + 1)
				td.innerHTML = alphabetNumber[i];

			if ((i !== 0 && i != n + 1) && (j !== 0 && j !== m + 1))
			{
				td.width = '100px';
				td.height = '100px';
				td.tabIndex = 0;
				td.style.background = getColorChessTable(j, i);
				td.onfocus = getCellChess.bind(null, j, i);
				td.onkeydown = getCellChessOnKey.bind(null, j, i);
			}

			row.appendChild(td);
		}
		matrix.appendChild(row);
	}
}

window.onload = function() {
	matrix = document.getElementById('chess-table');
	createChessTable(8, 8);
};
