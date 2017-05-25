
var alphabet = [];
alphabet[0] = 'QWERTYUIOP'.split('');
alphabet[1] = 'ASDFGHJKL'.split('');
alphabet[2] = 'ZXCVBNM'.split('');
var guesses = ' ';
var guessesArr = [];
var gameOver = false;
var isRight = true;
var win = false;

var dictionary = ['ability', 'able', 'about', 'above', 'accept', 'according', 'account', 'across', 'action', 'activity', 'actually', , 'address', 'administration', 'admit', 'adult', 'affect', 'after', 'again', 'against', 'agency', 'agent', 'agree', 'agreement', 'ahead', 'allow', 'almost', 'alone', 'along', 'already', 'also', 'although', 'always', 'American', 'among', 'amount', 'analysis', 'animal', 'another', 'answer', 'anyone', 'anything', 'appear', 'apply', 'approach', 'area', 'argue', 'around', 'arrive', 'article', 'artist', 'assume', 'attack', 'attention', 'attorney', 'audience', 'author', 'authority', 'available', 'avoid', 'away', 'baby', 'back', 'ball', 'bank', 'base', 'beat', 'beautiful', 'because', 'become', 'before', 'begin', 'behavior', 'behind', 'believe', 'benefit', 'best', 'better', 'between', 'beyond', 'bill', 'billion', 'black', 'blood', 'blue', 'board', 'body', 'book', 'born', 'both', 'break', 'bring', 'brother', 'budget', 'build', 'building', 'business', 'call', 'camera', 'campaign', 'cancer', 'candidate', 'capital', 'card', 'care', 'career', 'carry', 'case', 'catch', 'cause', 'cell', 'center', 'central', 'century', 'certain', 'certainly', 'chair', 'challenge', 'chance', 'change', 'character', 'charge', 'check', 'child', 'choice', 'choose', 'church', 'citizen', 'city', 'civil', 'claim', 'class', 'clear', 'clearly', 'close', 'coach', 'cold', 'collection', 'college', 'color', 'come', 'commercial', 'common', 'community', 'company', 'compare', 'computer', 'concern', 'condition', 'conference', 'Congress', 'consider', 'consumer', 'contain', 'continue', 'control', 'cost', 'could', 'country', 'couple', 'course', 'court', 'cover', 'create', 'crime', 'cultural', 'culture', 'current', 'customer', 'dark', 'data', 'daughter', 'dead', 'deal', 'death', 'debate', 'decade', 'decide', 'decision', 'deep', 'defense', 'degree', 'Democrat', 'democratic', 'describe', 'design', 'despite', 'detail', 'determine', 'develop', 'development', 'difference', 'different', 'difficult', 'dinner', 'direction', 'director', 'discover', 'discuss', 'discussion', 'disease', 'doctor', 'door', 'down', 'draw', 'dream', 'drive', 'drop', 'drug', 'during', 'each', 'early', 'east', 'easy', 'economic', 'economy', 'edge', 'education', 'effect', 'effort', 'eight', 'either', 'election', 'else', 'employee', 'end', 'energy', 'enjoy', 'enough', 'enter', 'entire', 'environment', 'environmental', 'especially', 'establish', 'even', 'evening', 'event', 'ever', 'every', 'everybody', 'everyone', 'everything', 'evidence', 'exactly', 'example', 'executive', 'exist', 'expect', 'experience', 'expert', 'explain', 'face', 'fact', 'factor', 'fail', 'fall', 'family', 'fast', 'father', 'fear', 'federal', 'feel', 'feeling', 'field', 'fight', 'figure', 'fill', 'film', 'final', 'finally', 'financial', 'find', 'fine', 'finger', 'finish', 'fire', 'firm', 'first', 'fish', 'five', 'floor', 'focus', 'follow', 'food', 'foot',  'force', 'foreign', 'forget', 'form', 'former', 'forward', 'four', 'free', 'friend', 'from', 'front', 'full', 'fund', 'future', 'game', 'garden', 'general', 'generation', 'girl', 'give', 'glass', 'goal', 'good', 'government', 'great', 'green', 'ground', 'group', 'grow', 'growth', 'guess', 'hair', 'half', 'hand', 'hang', 'happen', 'happy', 'hard', 'have', 'head', 'health', 'hear', 'heart', 'heat', 'heavy', 'help', 'here', 'herself', 'high', 'himself', 'history', 'hold', 'home', 'hope', 'hospital', 'hot', 'hotel', 'hour', 'house', 'however', 'huge', 'human', 'hundred', 'husband', 'idea', 'identify', 'image', 'imagine', 'impact', 'important', 'improve', 'in', 'include', 'including', 'increase', 'indeed', 'indicate', 'individual', 'industry', 'information', 'inside', 'instead', 'institution', 'interest', 'interesting', 'international', 'interview', 'into', 'investment', 'involve', 'issue', 'item', 'itself', 'join', 'just', 'keep', 'kill', 'kind', 'kitchen', 'know', 'knowledge', 'land', 'language', 'large', 'last', 'late', 'later', 'laugh', 'lawyer', 'lead', 'leader', 'learn', 'least', 'leave', 'left', 'legal', 'less', 'letter', 'level', 'life', 'light', 'like', 'likely', 'line', 'list', 'listen', 'little', 'live', 'local', 'long', 'look', 'lose', 'loss', 'love', 'machine', 'magazine', 'main', 'maintain', 'major', 'majority', 'make', 'manage', 'management', 'manager', 'many', 'market', 'marriage', 'material', 'matter', 'maybe', 'mean', 'measure', 'media', 'medical', 'meet', 'meeting', 'member', 'memory', 'mention', 'message', 'method', 'middle', 'might', 'military', 'million', 'mind', 'minute', 'miss', 'mission', 'model', 'modern', 'moment', 'money', 'month', 'more', 'morning', 'most', 'mother', 'mouth', 'move', 'movement', 'movie', 'much', 'music', 'must', 'myself', 'name', 'nation', 'national', 'natural', 'nature', 'near', 'nearly', 'necessary', 'need', 'network', 'never', 'news', 'newspaper', 'next', 'nice', 'night', 'none', 'north', 'note', 'nothing', 'notice', 'number', 'occur', 'offer', 'office', 'officer', 'official', 'often','once', 'only', 'onto', 'open', 'operation', 'opportunity', 'option', 'order', 'organization', 'other', 'others', 'outside', 'over', 'owner', 'page', 'pain', 'painting', 'paper', 'parent', 'part', 'participant', 'particular', 'particularly', 'partner', 'party', 'pass', 'past', 'patient', 'pattern', 'peace', 'people', 'perform', 'performance', 'perhaps', 'period', 'person', 'personal', 'phone', 'physical', 'pick', 'picture', 'piece', 'place', 'plan', 'plant', 'play', 'player', 'point', 'police', 'policy', 'political', 'politics', 'poor', 'popular', 'population', 'position', 'positive', 'possible', 'power', 'practice', 'prepare', 'present', 'president', 'pressure', 'pretty', 'prevent', 'price', 'private', 'probably', 'problem', 'process', 'produce', 'product', 'production', 'professional', 'professor', 'program', 'project', 'property', 'protect', 'prove', 'provide', 'public', 'pull', 'purpose', 'push', 'quality', 'question', 'quickly', 'quite', 'race', 'radio', 'raise', 'range', 'rate', 'rather', 'reach', 'read', 'ready', 'real', 'reality', 'realize', 'really', 'reason', 'receive', 'recent', 'recently', 'recognize', 'record', 'reduce', 'reflect', 'region', 'relate', 'relationship', 'religious', 'remain', 'remember', 'remove', 'report', 'represent', 'Republican', 'require', 'research', 'resource', 'respond', 'response', 'responsibility', 'rest', 'result', 'return', 'reveal', 'rich', 'right', 'rise', 'risk', 'road', 'rock', 'role', 'room', 'rule', 'safe', 'same', 'save', 'scene', 'school', 'science', 'scientist', 'score', 'season', 'seat', 'second', 'section', 'security', 'seek', 'seem', 'sell', 'send', 'senior', 'sense', 'series', 'serious', 'serve', 'service', 'seven', 'several', 'sexual', 'shake', 'share', 'she', 'shoot', 'short', 'shot', 'should', 'shoulder', 'show', 'side', 'sign', 'significant', 'similar', 'simple', 'simply', 'since', 'sing', 'single', 'sister', 'site', 'situation', 'size', 'skill', 'skin', 'small', 'smile', 'social', 'society', 'soldier', 'some', 'somebody', 'someone', 'something', 'sometimes', 'song', 'soon', 'sort', 'sound', 'source', 'south', 'southern', 'space', 'speak', 'special', 'specific', 'speech', 'spend', 'sport', 'spring', 'staff', 'stage', 'stand', 'standard', 'star', 'start', 'state', 'statement', 'station', 'stay', 'step', 'still', 'stock', 'stop', 'store', 'story', 'strategy', 'street', 'strong', 'structure', 'student', 'study', 'stuff', 'style', 'subject', 'success', 'successful', 'such', 'suddenly', 'suffer', 'suggest', 'summer', 'support', 'sure', 'surface', 'system', 'table', 'take', 'talk', 'task', 'teach', 'teacher', 'team', 'technology', 'television', 'tell', 'tend', 'term', 'test', 'than', 'thank', 'that', 'their', 'them', 'themselves', 'then', 'theory', 'there', 'these', 'they', 'thing', 'think', 'third', 'this', 'those', 'though', 'thought', 'thousand', 'threat', 'three', 'through', 'throughout', 'throw', 'thus', 'time', 'to', 'today', 'together', 'tonight', 'too', 'top', 'total', 'tough', 'toward', 'town', 'trade', 'traditional', 'training', 'travel', 'treat', 'treatment', 'tree', 'trial', 'trip', 'trouble', 'true', 'truth', 'turn', 'type', 'under', 'understand', 'unit', 'until', 'upon', 'usually', 'value', 'various', 'very', 'victim', 'view', 'violence', 'visit', 'voice', 'vote', 'wait', 'walk', 'wall', 'want', 'war', 'watch', 'water', 'weapon', 'wear', 'week', 'weight', 'well', 'west', 'western', 'what', 'whatever', 'when', 'where', 'whether', 'which', 'while', 'white', 'whole', 'whom', 'whose', 'wide', 'wife', 'will', 'wind', 'window', 'wish', 'with', 'within', 'without', 'woman', 'wonder', 'word', 'work', 'worker', 'world', 'worry', 'would', 'write', 'writer', 'wrong', 'yard', 'year', 'young', 'your', 'yourself'];
//http://www.ef.edu/english-resources/english-vocabulary/top-1000-words/
//Removed words shorter than 4 letters long
// Thanks to David Mansen for the link and array formatting 
//////////////////////////

// Solution is stored as an array
//////solution = 'minotaur'.toUpperCase().split('');

var rand = Math.floor(Math.random()*dictionary.length);
var solution = dictionary[rand].toUpperCase().split('');

console.log(solution);
//Cheaters can see the answer in the log!

// Progress is revealed letters so far
progress = [];
progressStr = ' ';
//

var strikes = 0;
var trackNum = 0;


var currentTrack = 'intro';
var music = document.getElementById("music");
music.src = makeTrackURL(currentTrack);
music.play(); //finish intro first
music.addEventListener('ended', endOfTrack);


// initialize progress to blanks
for(i=0; i<solution.length; i++)
	{
		progress[i]='_ ';
	}



function reset()
	{
		// Important to write the answer before it changes!!!
		// document.getElementById("answer").innerHTML = 'Previous answer: ' + dictionary[rand].toUpperCase();

		document.body.id = ('strike-0');
		strikes=0;
		trackNum=0;

		rand = Math.floor(Math.random()*dictionary.length);		
		solution = dictionary[rand].toUpperCase().split('');

		progress = [];
		progressStr = ' ';

		guessesArr = [];
		guesses = ' ';

		gameOver = false;
		win = false;

		currentTrack = 'intro';
		music.src = makeTrackURL(currentTrack);
		music.play(); //finish intro first
		music.addEventListener('ended', endOfTrack);

		for(i=0; i<solution.length; i++)
			{
				progress[i]='_ ';
			}

		document.getElementById("puzzle").innerHTML = progressStr;
		document.getElementById("guess").innerHTML = 'Guesses so far: ';
		writePuzzle();

		// Will un-darken letters
		keyboardDeploy();

	}


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
	// <button onclick="guessLetter("Q")"><div id="letterButton"></button>  (etc...)
function makeButton(letter) 
	{
		console.log('make ' + letter);
//		document.write('\<' + 'button id=\"letterButton\" onclick=\"guessLetter(\'' + letter + '\')\"\>' + letter + '\<' + '\/' + 'button' + '\>' );
//		document.getElementById("keyboard").innerHTML = '\<' + 'button id=\"letterButton\" onclick=\"guessLetter(\'' + letter + '\')\"\>' + letter + '\<' + '\/' + 'button' + '\>' ;
	}


//   '\<' + 'button id=\"letterButton\" onclick=\"guessLetter(\'' + letter + '\')\"\>' + letter + '\<' + '\/' + 'button' + '\>' 

function keyboardDeploy()
	{


	var keyboardHTML = ''; 

	//deploy three rows of keyboard buttons
		for (i=0; i<3; i++)
		{
			for (i=0; i<3; i++)
			{
				for(j=0; j<alphabet[i].length; j++)
				{
					var letter = alphabet[i][j];
		//			makeButton(alphabet[i][j]);
					console.log('make ' + letter);
					keyboardHTML += '\<' + 'button class=\"letterButton\" id=\"letter'+ letter + '\" onclick=\"guessLetter(\'' + letter + '\')\"\>' + letter + '\<' + '\/' + 'button' + '\>';
				}
						keyboardHTML += '<br>';
		//				document.write('\<br\>');
			}
		}

			keyboardHTML += '\<' + 'button class=\"letterButton\" onclick=\"reset()\"\>Reset game\<' + '\/' + 'button' + '\>'  ;
			console.log('make reset button.');

		//		document.write('\<' + 'button id=\"letterButton\" onclick=\"reset()\"\>Reset game\<' + '\/' + 'button' + '\>' );

			document.getElementById("keyboard").innerHTML = keyboardHTML;
	}


keyboardDeploy();


function guessLetter(letter)
{
//	check if already guessed or game over
	if(guessesArr.indexOf(letter)==-1 && !gameOver)
	{
		isRight = false;
		guessesArr.push(letter);
		guesses += letter.toUpperCase() + ' ';
	    document.getElementById("guess").innerHTML = 'Guesses so far: ' + guesses;
	    document.getElementById("letter"+letter).id = 'keyPressed';

	    // check for progress
	    for(i=0; i<solution.length; i++)
	    {
	    	if(letter === solution[i])
	    	{
	    		progress[i]=letter;
	    		isRight = true;
	    	}
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
				//// Answer show
				document.getElementById("answer").innerHTML = 'Previous answer: ' + dictionary[rand].toUpperCase();

			}
	}


function checkSound()
	{
		if (!isRight)
			{
				strikes += 1;
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
				//show answer
				document.getElementById("answer").innerHTML = 'Previous answer: ' + dictionary[rand].toUpperCase();

			}
	}


function endOfTrack()
	{
		if(strikes >= trackNum && trackNum < 7)
			{	
				var introDone = ((currentTrack === 'intro') || (currentTrack === 'transitionToClip4'));
				var needIntro = false;
				if (trackNum === 3)
					{
						needIntro = true;
					}
					console.log('Needs intro:' + needIntro);
					console.log('Intro done:' + introDone);

				if( (!needIntro) || introDone)
					{
						trackNum += 1;
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
						   	case 6:
						   		currentTrack = 'clip6';
						   		break;
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
