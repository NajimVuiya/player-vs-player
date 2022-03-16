'use strict';


(function() 
{

const winScoreElm = document.querySelector('#winngScore');
const p1ScoreElm = document.querySelector('#p1Score');
const p2ScoreElm = document.querySelector('#p2Score');
//int select 
const inputElm = document.querySelector('#inputElm');
// button select
const submitBtn = document.querySelector('#submitBtn');
const p1BtnElm = document.querySelector('#p1Btn');
const p2BtnElm = document.querySelector('#p2Btn');
const reset = document.querySelector('#reset');
const formElm = document.querySelector('form');

// data layer start here
let winngScore = 10;
let p1Score = 0;
let p2Score = 0;
let turn = 'player1';

winScoreElm.textContent = winngScore;
p1ScoreElm.textContent = p1Score;
p2ScoreElm.textContent = p2Score;

function randomNum(max)
{
	return Math.floor(Math.random() * max + 1);
}


submitBtn.addEventListener('click', (e) => 
{
	e.preventDefault();
	
	let inputVal = inputElm.value;
	if(inputVal === '' || inputVal < 1)
	{
		if(!document.querySelector('.invalid-input'))
		{
			formElm.insertAdjacentHTML('beforebegin', '<p class ="invalid-input">Enter valid input</p>');
		}else{
			if(document.querySelector('.invalid-input'))
			{
				document.querySelector('.invalid-input').remove();
			}
		}
	}

    winngScore = Number(inputElm.value);
	winScoreElm.textContent = winngScore;
	inputElm.value = '';
	initalPlayingStart()
});

p1BtnElm.addEventListener('click', (e) => 
{
	e.preventDefault();
	if(turn === 'player1')
	{
		p1Score = randomNum(winngScore);
		p1ScoreElm.textContent = p1Score;
		turn = 'player2'
		p1BtnElm.setAttribute('disabled','disabled');
		p2BtnElm.removeAttribute('disabled');
	}

/* it's writen another way 
	if(winngScore === p1Score)
	{
		p1BtnElm.setAttribute('disabled','disabled');
		p2BtnElm.setAttribute('disabled','disabled');
	}
*/
	winnScoreMetchingWithPlayer();
});



p2BtnElm.addEventListener('click', (e) => 
{
	e.preventDefault();
	if(turn === 'player2')
	{
		p2Score = randomNum(winngScore);
		p2ScoreElm.textContent = p2Score;
		turn = 'player1';
		p2BtnElm.setAttribute('disabled','disabled');
		p1BtnElm.removeAttribute('disabled');
	}

/* this code writen another way 
	if(winngScore === p1Score)
	{
		p1BtnElm.setAttribute('disabled','disabled');
		p2BtnElm.setAttribute('disabled','disabled');
	}
*/
});

function winnScoreMetchingWithPlayer()
{
	
/*
	if(winngScore === p1Score || winngScore === p2Score)
	{
		p1BtnElm.setAttribute('disabled','disabled');
		p2BtnElm.setAttribute('disabled','disabled');
	}
*/

// it another way 

	let isP1Win = winngScore === p1Score;
	let isP2Win = winngScore === p2Score;
	console.log(isP1Win,isP2Win);
	if(isP1Win || isP2Win)
	{
		p1BtnElm.setAttribute('disabled','disabled');
		p2BtnElm.setAttribute('disabled','disabled');
	}
	winnerMessage(isP1Win,isP2Win);
}

function winnerMessage(p1Winner,p2Winner)
{
	if(p1Winner)
	{
		formElm.insertAdjacentHTML('beforebegin', '<p class ="invalid">Player1 is winner</p>');
	}else if(p2Winner){
		formElm.insertAdjacentHTML('beforebegin', '<p class ="invalid">Player2 is winner</p>')
	}
}

// reset button start here 
reset.addEventListener('click', (e) => 
{
	e.preventDefault();
	winngScore = 10;
	initalPlayingStart()


	if(document.querySelector('.invalid-input'))
	{
		document.querySelector('.invalid-input').remove();
	}
	
});

function initalPlayingStart()
{
	p1Score = 0;
	p2Score = 0;
	turn = 'player1';

	winScoreElm.textContent = winngScore;
	p1ScoreElm.textContent = p1Score;
	p2ScoreElm.textContent = p2Score;
	p1BtnElm.removeAttribute('disabled');
	p2BtnElm.removeAttribute('disabled');

	if(document.querySelector('.invalid'))
	{
		document.querySelector('.invalid').remove();
	}
}
})();