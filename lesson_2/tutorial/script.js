//
// Глобальные переменные
//
var currentX = 1;
var currentY = 1;
var matrix = null;
//
// Создание матрицы.
//
function createMatrix()
{
	var n = 20 * 20;

	for (var i = 0; i < n; i++)
	{
		var div = document.createElement('div');
		div.className = 'cell';
		matrix.appendChild(div);
	}
}
//
// Получения элемента ячейки матрицы
//
function getCell(row, col){
	// Проверка на вхождения курсора в матрице по вертикале
	if (row < 1){
		row = 1;
		currentX = 1;
	}
	else if (row > 20){
		row = 20;
		currentX = 20;
	}
	// Проверка на вхождения курсора в матрице по горизонтале
	if (col < 1){
		col = 1;
		currentY = 1;
	}
	else if (col > 20){
		col = 20;
		currentY = 20;
	}

	var index = (row - 1) * 20 + col - 1;
	return matrix.childNodes[index];
}
//
// Проверка окрашена ли ячейка матрицы.
//
function checkCell(row, col)
{
	var cell = getCell(row, col);
	if (cell.style.background == 'red'){
		alert('Вы выиграли!!!');
		cell.style.background = '';
		startGame();
	}
	else
		cell.style.background = 'blue';
}

//
// Установка ячейки матрицы.
//
function setCell(row, col, color)
{
	var cell = getCell(row, col);
	cell.style.background = color;
}
//
// Начало игры
//
function startGame(){
	var finishX = Math.floor(Math.random() * (20 - 5 + 1)) + 5;
	var finishY = Math.floor(Math.random() * (20 - 5 + 1)) + 5;
	currentX = 1;
	currentY = 1;
	setCell(finishX, finishY, 'red');
	setCell(1, 1, 'blue');
}
//
// Функция передвижения курсора
//
function movePosition(e){
	switch (e.keyCode){
		case 37:
			setCell(currentX, currentY--, '');
			break;
		case 38:
			setCell(currentX--, currentY, '');
			break;
		case 39:
			setCell(currentX, currentY++, '');
			break;
		case 40:
			setCell(currentX++, currentY, '');
			break;
	}
}
//
// Точка входа.
//
window.onload = function()
{
	matrix = document.getElementById('matrix');
	matrix.onkeydown = function(e){
		movePosition(e);
		checkCell(currentX, currentY);
	};
	matrix.focus();
	createMatrix();
	startGame();

};
