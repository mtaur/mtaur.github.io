	// <button onclick="guessLetter("Q")"><div id="Q"></button>

	// id = letterButton???

var alphabet = [];
//alphabet = 'qwertyuiop'.split();
alphabet[0] = [];
alphabet[1] = [];
alphabet[2] = [];
alphabet[0] = 'QWERTYUIOP'.split('');
alphabet[1] = 'ASDFGHJKL'.split('');
alphabet[2] = 'ZXCVBNM'.split('');
guesses = ' ';
guessesArr = [];
var gameOver = false;
var isRight = true;
var win = false;

// Solution is stored as an array
solution = 'minotaur'.toUpperCase().split('');
// Progress is revealed letters so far
progress = [];
progressStr = ' ';
//

var strikes = 0;
var trackNum = 1;


var currentTrack = 'clip1';
var music = document.getElementById("music");
music.play();

music.addEventListener('ended', endOfTrack);


/*
var count = 1
document.getElementById('beep').addEventListener('ended', function(){
   this.currentTime = 0;
   if(count <= 3){
      this.play();
   }
   count++;
}, false);
*/

// initialize progress to blanks
for(i=0; i<solution.length; i++)
	{
		progress[i]='_ ';
	}

// console.log(progress);


document.getElementById("puzzle").innerHTML = progressStr;

document.getElementById("guess").innerHTML = 'Guesses so far: ';

function writePuzzle()
	{
		progressStr = ' ';

	    for(i=0; i<solution.length; i++)
	    {
	    	progressStr += progress[i];
	    }
		document.getElementById("puzzle").innerHTML = progressStr;
	}

writePuzzle();

// Deploy one button to the virtual keyboard
function makeButton(letter) 
	{
		console.log('make ' + letter);
		document.write('\<' + 'button id=\"letterButton\" onclick=\"guessLetter(\'' + letter + '\')\"\>' + letter + '\<' + '\/' + 'button' + '\>' );
	}


//for(i=0; i<3; i++)
//{
//	console.log('Test loop '+i);
//}


//deploy three rows of keyboard buttons
for (i=0; i<3; i++)
{
	for (i=0; i<3; i++)
	{
		for(j=0; j<alphabet[i].length; j++)
		{
			makeButton(alphabet[i][j]);
		}
		if(i<2)
			{
				document.write('\<br\>');
			}
	}
}


function guessLetter(letter)
{
//	check if already guessed
	if(guessesArr.indexOf(letter)==-1 && !gameOver)
	{
		isRight = false;
		guessesArr.push(letter);
		guesses += letter.toUpperCase() + ' ';
	    document.getElementById("guess").innerHTML = 'Guesses so far: ' + guesses;
//	    progressStr='';

	    // check for progress
	    for(i=0; i<solution.length; i++)
	    {
	    	if(letter === solution[i])
	    	{
	    		progress[i]=letter;
	    		isRight = true;
	    	}

//	    	progressStr += progress[i];
//			document.getElementById("puzzle").innerHTML = progressStr;
	    }

	writePuzzle();

	checkPuzzle();

	checkSound();
	}	
}

function checkPuzzle()
	{
		win = true;
		for (i=0; i<solution.length; i++)
			{
				if(progress[i] != solution[i])
					{
						win = false;
					}
			}
		console.log('Win: ' + win);
		if (win === true)
			{
				gameOver = true;
				currentTrack = 'victory';
				music.src = makeTrackURL(currentTrack);
				music.play();
				console.log('You won!');
				music.removeEventListener('ended',endOfTrack);
				document.body.id = ('win');
			}
	}


function checkSound()
	{
		if (!isRight)
			{
				strikes += 1;
//			switch(strikes)
//				{
//					case 1:
//
//			        music.src = "assets/sound/clip2.mp3";
//
//        var source = document.getElementById('oggSource');
//        source.src='audio/ogg/' + this.parentElement.getAttribute('data-value');
//
//        audio.load(); //call this to just preload the audio without playing
//        audio.play(); //call this to play the song right away
		console.log('That\'s ' + strikes + ' wrong so far...');
		document.body.id = ('strike-' + strikes);
			}

		if (strikes === 6)
			{
				currentTrack='failure';
				music.src = makeTrackURL(currentTrack);
				music.play();
				console.log('You lost...');
				gameOver = true;
				music.removeEventListener('ended',endOfTrack);
			}
	}


function endOfTrack()
	{
		if(strikes >= trackNum && trackNum < 6)
			{	
				var introDone = ((currentTrack === 'transitionToClip3') || (currentTrack === 'transitionToClip4'));
				var needIntro = false;
				if (trackNum === 2 || trackNum === 3)
					{
						needIntro = true;
					}
					console.log('Needs intro:' + needIntro);
					console.log('Intro done:' + introDone);

				if( (!needIntro) || introDone)
					{
						trackNum += 1;
					}
				else if (trackNum === 2)
					{
						currentTrack = 'transitionToClip3';
					}
				else if (trackNum === 3)
					{
						currentTrack = 'transitionToClip4';
					}
			}

				if( (!needIntro) || introDone)
				{
					switch(trackNum)
						{
							case 1:
								currentTrack = 'clip1';
								break;
							case 2:
				
			//			        music.src = makeTrackURL('clip2');
								currentTrack = 'clip2';
						        break;
						    case 3:
						    	currentTrack = 'clip3';
						    	break;
						    case 4:
						    	currentTrack = 'clip4';
						    	break;
						    case 5:
						    	currentTrack = 'clip5';
						    	break;
				//		Too long, must break manually
//						   	case 6:
//						   		currentTrack = 'defeat';
//						   		break;

			//        var source = document.getElementById('oggSource');
			//        source.src='audio/ogg/' + this.parentElement.getAttribute('data-value');
			//
			//        audio.load(); //call this to just preload the audio without playing
			//        audio.play(); //call this to play the song right away
			 			}
			 	}
		music.src = makeTrackURL(currentTrack);
		music.play();
		console.log('Track number: '+trackNum);
		console.log('Track: ' + currentTrack)
	}


	function makeTrackURL(track)
	{
		return 'assets/sound/' + track + '.mp3';
	}
