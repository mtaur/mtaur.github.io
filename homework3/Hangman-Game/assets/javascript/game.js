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
guesses = '';
guessesArr = [];

// Solution is stored as an array
solution = 'minotaur'.toUpperCase().split('');
// Progress is revealed letters so far
progress = [];
progressStr = ' ';
//

// initialize progress to blanks
for(i=0; i<solution.length; i++)
	{
		progress[i]='_ ';
	}

console.log(progress);


document.getElementById("puzzle").innerHTML = progressStr;


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


function makeButton(letter) 
	{
		console.log('make ' + letter);
//		document.write('\<' + 'button onclick=' + '\'' + 'guessLetter(\'' + letter + '\')' + '\>\<' + 'div id=\'' + letter + '\'\>\<' + '\/' + 'button' + '\>' );
		document.write('\<' + 'button id=\"letterButton\" onclick=\"guessLetter(\'' + letter + '\')\"\>' + letter + '\<' + '\/' + 'button' + '\>' );
	}

for(i=0; i<3; i++)
{
	console.log('Test loop '+i);
}

for (i=0; i<3; i++)
{
	console.log(i);


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
	if(guessesArr.indexOf(letter)==-1)
	{
		guessesArr.push(letter);
		guesses += letter.toUpperCase() + ' ';
	    document.getElementById("guess").innerHTML = guesses;
	    progressStr='';

	    // check for progress
	    for(i=0; i<solution.length; i++)
	    {
	    	if(letter === solution[i])
	    	{
	    		progress[i]=letter;
	    	}

	    	progressStr += progress[i];

			document.getElementById("puzzle").innerHTML = progressStr;

	    }

	}	
}


