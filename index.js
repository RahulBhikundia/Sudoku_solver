var arr = [[], [], [], [], [], [], [], [], []]

for (var i = 0; i < 9; i++) {
	for (var j = 0; j < 9; j++) {
		arr[i][j] = document.getElementById(i * 9 + j);
	}
}


var board = [[], [], [], [], [], [], [], [], []]

function FillBoard(board) {
	for (var i = 0; i < 9; i++) {
		for (var j = 0; j < 9; j++) {
			if (board[i][j] != 0) {
				arr[i][j].innerText = board[i][j]
			}

			else
				arr[i][j].innerText = ''
		}
	}
}

let GetPuzzle = document.getElementById('GetPuzzle')
let SolvePuzzle = document.getElementById('SolvePuzzle')

GetPuzzle.onclick = function () {
	var xhrRequest = new XMLHttpRequest()
	xhrRequest.onload = function () {
		var response = JSON.parse(xhrRequest.response)
		console.log(response)
		board = response.board
		FillBoard(board)
	}
	xhrRequest.open('GET','https://sugoku.onrender.com/board?difficulty=easy')
	xhrRequest.send()
}

SolvePuzzle.onclick = () => {
	if(sudoku_solver(board)) {
        FillBoard(board);
    }
    else {
        console.log("Sudoku Cannot be Solved");
    }
};


function findPos(board) {
    for(let i=0; i<9; i++) {
        for(let j=0; j<9; j++) {
            if(board[i][j] == 0){
                return {row: i, col:j};
            }
        }
    }

    return {row: -1, col:-1};
}

function isValid(board,pos,num)
{
    for(let i=0; i<9; i++) {
        if(board[pos.row][i] == num){
            return false;
        }
    }    

    for(let i=0; i<9; i++) {
        if(board[i][pos.col] == num){
            return false;
        }
    }  

    let a = Math.floor(pos.row/3);
    let b = Math.floor(pos.col/3);

    for(let i=a*3; i<a*3+3; i++) {
        for(let j=b*3; j<b*3+3; j++) {
            if(board[i][j] == num){
                return false;
            }
        }
    }

    return true;
}



function sudoku_solver(board)
{
    let pos = findPos(board);
    if(pos.row == -1) {
        return true;
    }

    for(let num=1; num<10; num++) {
        if(isValid(board, pos, num)) {
            board[pos.row][pos.col] = num;
            if(sudoku_solver(board)) {
                return true;
            }
            board[pos.row][pos.col] = 0;
        }
    }

    return false;
}