$(document).ready(
	function()
		{
			$('#begin').click(startQuiz);
		}
);



function shuffle(array)
	{
		/**
 * Randomize array element order in-place.
 * Using Durstenfeld shuffle algorithm.
 */
	    for (var i = array.length - 1; i > 0; i--) {
	        var j = Math.floor(Math.random() * (i + 1));
	        var temp = array[i];
	        array[i] = array[j];
	        array[j] = temp;
    	}
    return array;

	}


function Choice(right,wrong1,wrong2,wrong3)
	{
		this.choices = shuffle([right,wrong1,wrong2,wrong3]);
		this.answer = right;
		this.chosen = '';
	}


function FactAboutShort(before,input,after)
	{
		this.before = before;
		this.input = input;
		this.after = after;
	}

function FactAboutLong(before,input1,middle,input2,after)
	{
		this.before = before;
		this.input1 = input1;
		this.middle = middle;
		this.input2 = input2;
		this.after = after;
	}


function Problem(question,answer)
	{
		this.question = question;
		this.answer = answer;
	}

function Character(name,shortfact,longfact,image)
	{
		this.name = name;
		this.shortfact = shortfact;
		this.longfact = longfact;
		this.img = image;
	}

var characters = [];
var page = 0;
var right = 0;
var wrong = 0;
var pagesRight = 0;

/////////////////////////
var freddie = new Character('','','','Freddie');

freddie.name = new Choice('Freddie','Frederick','Stanley','Ramuel');

freddie.shortfact = new FactAboutShort('','','');
freddie.shortfact.before = ' is ';
freddie.shortfact.input = new Choice('the star of Goat Night','a huge fashion snob','a fan of black and white cinema','camera shy');
freddie.shortfact.after = '.';

freddie.longfact = new FactAboutLong('','','','','');
freddie.longfact.before = ' has a cool catchphrase: ';
freddie.longfact.input1 = new Choice('We have a great show tonight!','I have some bad news...','Hey hey hey, put your phone away!','Did you see the news today?');
freddie.longfact.middle = ' ';
freddie.longfact.input2 = new Choice('I\'m going to be here!', 'We\'re going to bring the house down! Figuratively!','I skipped League of Legends to be here!','We\'re going to talk about monopoly!');
freddie.longfact.after = '';

//console.log(freddie);
//console.log(freddie.shortfact);
//console.log(freddie.name);

characters.push(freddie);

///////////////////////

var henrietta = new Character('','','','Henrietta');

henrietta.name = new Choice('Henrietta','Penny','Brittany','Annette');

henrietta.shortfact = new FactAboutShort('','','','','');
henrietta.shortfact.before = ' is ';
henrietta.shortfact.input = new Choice('actually a penguin','spontaneous','hates Civilization','secretly an ostrich');
henrietta.shortfact.after = '.';

henrietta.longfact = new FactAboutLong('','','');
henrietta.longfact.before = ' has a favorite song: ';
henrietta.longfact.input1 = new Choice('I\'m in Antarctica.','I\'m in my Bone World.','It\'s the end of the world as we know it,','Take it to the limit');
henrietta.longfact.middle = ' ';
henrietta.longfact.input2 = new Choice('I like to slide on the ice!', 'I like to chew on my bone!','and I feel fine!','one more time!');
henrietta.longfact.after = '';

//console.log(henrietta);
//console.log(henrietta.shortfact);
//console.log(henrietta.name);

characters.push(henrietta);

//////////////////////


var ramuel = new Character('','','','Ramuel');

ramuel.name = new Choice('Ramuel','Freddie','Stanley','Frederick');

ramuel.shortfact = new FactAboutShort('','','');
ramuel.shortfact.before = ' is ';
ramuel.shortfact.input = new Choice('actually a goat','a ram, as you may have suspected from his name','courageous','from Antarctica');
ramuel.shortfact.after = '.';

ramuel.longfact = new FactAboutLong('','','','','');
ramuel.longfact.before = ' is from ';
ramuel.longfact.input1 = new Choice('Poland','Argentina','Morocco','West Virginia');
ramuel.longfact.middle = ', where he used to ';
ramuel.longfact.input2 = new Choice('read about CSS', 'headbutt other goats','frighten small children','make precarious leaps across chasms');
ramuel.longfact.after = ' for fun.';

//console.log(ramuel);
//console.log(ramuel.shortfact);
//console.log(ramuel.name);

characters.push(ramuel);

//////////////////////

var minobison = new Character('','','','Minobison');

minobison.name = new Choice('Minobison','Minotaur','Shaggy','Harry');

minobison.shortfact = new FactAboutShort('','','');
minobison.shortfact.before = ' is ';
minobison.shortfact.input = new Choice('retired','a crossing guard','a teacher','a chef');
minobison.shortfact.after = '.';

minobison.longfact = new FactAboutLong('','','','','');
minobison.longfact.before = ' likes to ';
minobison.longfact.input1 = new Choice('drink coffee','work hard','drive fast cars','program in Javascript');
minobison.longfact.middle = ' and ';
minobison.longfact.input2 = new Choice('read the New Yorker', 'earn lots of money','flirt with women','stay up late');
minobison.longfact.after = ' every day.';

//console.log(ramuel);
//console.log(ramuel.shortfact);
//console.log(ramuel.name);

characters.push(minobison);

//////////////////////

var woolman = new Character('','','','JJWoolman');

woolman.name = new Choice('J.J. Woolman','R.J. Tuskman','Arthur Tusks','Wilford Mammothson');

woolman.shortfact = new FactAboutShort('','','');
woolman.shortfact.before = ' is ';
woolman.shortfact.input = new Choice('an attourney','a lumberjack','a distinguished professor','a businessman');
woolman.shortfact.after = ' by trade.';

woolman.longfact = new FactAboutLong('','','','','');
woolman.longfact.before = ' went to ';
woolman.longfact.input1 = new Choice('law school','medical school','Pachyderm High School','a Kiss concert');
woolman.longfact.middle = ' with ';
woolman.longfact.input2 = new Choice('R.J. Tuskman', 'Arthur Tusks','J.J. Woolman','Wilford Mammothson');
woolman.longfact.after = ' back in the good old days.';

//console.log(ramuel);
//console.log(ramuel.shortfact);
//console.log(ramuel.name);

characters.push(woolman);

//////////////////////

var frederick = new Character('','','','Frederick');

frederick.name = new Choice('Frederick','Ramuel','Stanley','Robin');

frederick.shortfact = new FactAboutShort('','','');
frederick.shortfact.before = ' ';
frederick.shortfact.input = new Choice('Goatington III, Esq.','von Headbutt','McFilibuster','Johnson');
frederick.shortfact.after = ' is his full name.';

frederick.longfact = new FactAboutLong('','','','','');
frederick.longfact.before = ' loves ';
frederick.longfact.input1 = new Choice('fashion and proper grooming','fine wine','a brisk morning walk','APIs');
frederick.longfact.middle = ' almost as much as he ';
frederick.longfact.input2 = new Choice('despises ruffians', 'regrets the hangovers','misses the 70s','likes to cut a rug from time to time');
frederick.longfact.after = '.';

//console.log(ramuel);
//console.log(ramuel.shortfact);
//console.log(ramuel.name);

characters.push(frederick);

//////////////////////

var deathwing = new Character('','','','Deathwing');

deathwing.name = new Choice('Deathwing','Sparklecorn','Manebeast','Shadowdawn');

deathwing.shortfact = new FactAboutShort('','','');
deathwing.shortfact.before = ' is ';
deathwing.shortfact.input = new Choice('a void pegasus','uh, no, not this one','the other one','come on...');
deathwing.shortfact.after = '.';

deathwing.longfact = new FactAboutLong('','','','','');
deathwing.longfact.before = ' loves ';
deathwing.longfact.input1 = new Choice('the darkness','flashlights','the Simpsons','DC Comics');
deathwing.longfact.middle = ' and ';
deathwing.longfact.input2 = new Choice('anime', 'HTML','children','dogs');
deathwing.longfact.after = '.';

//console.log(ramuel);
//console.log(ramuel.shortfact);
//console.log(ramuel.name);

characters.push(deathwing);

//////////////////////

var barry = new Character('','','','Barry');

barry.name = new Choice('Barry','Sedgewick','Stanley','Blaze');

barry.shortfact = new FactAboutShort('','','');
barry.shortfact.before = ' can usually be found playing ';
barry.shortfact.input = new Choice('Monopoly','Chutes and Ladders','Bingo','the stock market');
barry.shortfact.after = '.';

barry.longfact = new FactAboutLong('','','','','');
barry.longfact.before = '\'s favorite actor is ';
barry.longfact.input1 = new Choice('Billy Crystal','Tom Hanks','Adam Sandler','Patrick Stewart');
barry.longfact.middle = ' because ';
barry.longfact.input2 = new Choice('he warms his heart and makes him laugh', 'he plays well on the silver screen and on the stage','life is like a box of chocolates','I make the hair silky and smooth');
barry.longfact.after = '.';

//console.log(ramuel);
//console.log(ramuel.shortfact);
//console.log(ramuel.name);

characters.push(barry);

//////////////////////

var cody = new Character('','','','Cody');

cody.name = new Choice('Cody','Riffs','Stanley','Ricky');

cody.shortfact = new FactAboutShort('','','');
cody.shortfact.before = ' ends music phrases with,\"';
cody.shortfact.input = new Choice('Oh, yeah','Don\'t you know','What do you know','Come on');
cody.shortfact.after = '.\"';

cody.longfact = new FactAboutLong('','','','','');
cody.longfact.before = '\'s favorite music to play is a ';
cody.longfact.input1 = new Choice('sweet, sad','hard swinging','warm country','loud, fast, and technical');
cody.longfact.middle = ' ';
cody.longfact.input2 = new Choice('blues', 'jazz standard','heavy metal lick','ballad');
cody.longfact.after = '.';

//console.log(ramuel);
//console.log(ramuel.shortfact);
//console.log(ramuel.name);

characters.push(cody);

//////////////////////

var sedgewick = new Character('','','','Sedgewick');

sedgewick.name = new Choice('Sedgewick','Ficklesworth','Walfred','Stemsby');

sedgewick.shortfact = new FactAboutShort('','','');
sedgewick.shortfact.before = ' is actually ';
sedgewick.shortfact.input = new Choice('a sentient banana','a wizard','purple on the inside','not really a banana');
sedgewick.shortfact.after = ', and his full name is:';

sedgewick.longfact = new FactAboutLong('','','','','');
sedgewick.longfact.before = ' ';
sedgewick.longfact.input1 = new Choice('Appleton','hard swinging','warm country','loud, fast, and technical');
sedgewick.longfact.middle = '. ';
sedgewick.longfact.input2 = new Choice('Delightful!', 'You ruffian!','Yes, quite.','Yes.');
sedgewick.longfact.after = '';

//console.log(ramuel);
//console.log(ramuel.shortfact);
//console.log(ramuel.name);

characters.push(sedgewick);

//////////////////////

var robin = new Character('','','','Robin');

robin.name = new Choice('Robin','Red','Black','Sparrow');

robin.shortfact = new FactAboutShort('','','');
robin.shortfact.before = ' is actually ';
robin.shortfact.input = new Choice('a red-winged blackbird','a robin','a crow','a sparrow');
robin.shortfact.after = ', and his full name is:';

robin.longfact = new FactAboutLong('','','','','');
robin.longfact.before = ' is an accomplished ';
robin.longfact.input1 = new Choice('sorcerer','artist','dragon-slayer','violinist');
robin.longfact.middle = ' which is someone who ';
robin.longfact.input2 = new Choice('sees connections in unexpected places', 'can slay with his axe in more ways than one','knows a lot about object-oriented programming','can kill with a song');
robin.longfact.after = '.';

//console.log(ramuel);
//console.log(ramuel.shortfact);
//console.log(ramuel.name);

characters.push(robin);

//////////////////////

var stanley = new Character('','','','Stanley');

stanley.name = new Choice('Stanley','Not this','...','No...');

stanley.shortfact = new FactAboutShort('','','');
stanley.shortfact.before = ' just wants you to get this one right. ';
stanley.shortfact.input = new Choice('It\'s this one.','Not this.','No.','Not this one.');
stanley.shortfact.after = '';

stanley.longfact = new FactAboutLong('','','','','');
stanley.longfact.before = ' doesn\'t really have a lot to say right now, ';
stanley.longfact.input1 = new Choice('but that\'s ok.','(not this one)','(no)','(not this one)');
stanley.longfact.middle = ' He just wanted to say hi. Can you say hi back? ';
stanley.longfact.input2 = new Choice('Hi, Stanley.', 'Hi, uh, I forget...','Um, whatever.','Um...');
stanley.longfact.after = 'Stanley is a little shy sometimes.';

//console.log(ramuel);
//console.log(ramuel.shortfact);
//console.log(ramuel.name);

characters.push(stanley);

//////////////////////

var blaze = new Character('','','','Blaze');

blaze.name = new Choice('Blaze','Huggz','Bluez','Zarrox');

blaze.shortfact = new FactAboutShort('','','');
blaze.shortfact.before = ' plays ';
blaze.shortfact.input = new Choice('heavy metal','chess','League of Legends','VHS tapes for hipster cred');
blaze.shortfact.after = '.';

blaze.longfact = new FactAboutLong('','','','','');
blaze.longfact.before = ' is going to ';
blaze.longfact.input1 = new Choice('trash his hotel room after the gig','beat a grandmaster','make the Guiness Book of World Records','climb to Diamond 2');
blaze.longfact.middle = ' by ';
blaze.longfact.input2 = new Choice('leaving unrinsed dishes in the sink', 'using an unexpected variant of the Caro-Kann defense','studying the tapes','rocking harder than ever before witnessed in history');
blaze.longfact.after = '.';

//console.log(ramuel);
//console.log(ramuel.shortfact);
//console.log(ramuel.name);

characters.push(blaze);

//////////////////////

var annette = new Character('','','','Annette');

annette.name = new Choice('Annette','Red','Penny','Henrietta');

annette.shortfact = new FactAboutShort('','','');
annette.shortfact.before = ' is ';
annette.shortfact.input = new Choice('a mummy','an anime','Ninja Turtles','bobsled');
annette.shortfact.after = ' enthusiast';

annette.longfact = new FactAboutLong('','','','','');
annette.longfact.before = ' likes to say, \"';
annette.longfact.input1 = new Choice('CURSES!','Let our powers combine!','Cowabunga, dudes!','look at the runners on that one!');
annette.longfact.middle = ' ';
annette.longfact.input2 = new Choice('CURSES ON ALL OF YOU! BLEHHHHH!', 'Surf\'s up!','Earth!','You could totally sled so fast on that!');
annette.longfact.after = '';

//console.log(ramuel);
//console.log(ramuel.shortfact);
//console.log(ramuel.name);

characters.push(annette);

//////////////////////

characters = shuffle(characters);
var char = characters[page];

function startQuiz()
	{
//		$('.inner-content').load('assets/pages/quizPage.xml').ready(formatPage);
//		console.log('Start the quiz!!!');
		$('.inner-content').load('assets/pages/quizPage.xml', formatPage);
//		$('.inner-content').load('assets/pages/quizPage.xml', function()  {formatPage(); });
		console.log('Start the quiz!!!');
//		formatPage();
	}

function formatPage()
	{
//		$('.charName.input').load('assets/pages/dropdown.xml').ready( function() {$('li').click(pickName); });
/*		$('.charName.input').load('assets/pages/dropdownName.xml').ready(
			function() 	{
				writeNameChoices();
				}
			); */
		char = characters[page];

		$('.charName.input').load('assets/pages/dropdownName.xml',
			function() 	{
				writeNameChoices();
				}
			);
		$('.factAbout1.input').load('assets/pages/dropdownFact1.xml',
			function() {
				writeFact1Choices();
				}
			);
		$('.factAbout2.input1').load('assets/pages/dropdownFact2-1.xml',
			function() {
				writeFact2aChoices();
				}
			);
		$('.factAbout2.input2').load('assets/pages/dropdownFact2-2.xml',
			function() {
				writeFact2bChoices();
				}
			); 
		$('#charImage').attr('src','assets/images/'+char.img+'.jpg');

		$('.factAbout1.before').text(char.shortfact.before);
		$('.factAbout1.after').text(char.shortfact.after);
		$('.factAbout2.prelude').text(char.longfact.before);
		$('.factAbout2.middle').text(char.longfact.middle);
		$('.factAbout2.end').text(char.longfact.after);
		if(page==0)
			{$('#confirm').click(nextPage);}
		$('#probNum').text(page+1);
		$('#right').text(right);
		$('#wrong').text(wrong);
		$('#pageRight').text(pagesRight);

//		$('.finalAnswer').click(nextPage);
//		console.log($('#confirm'));
//		nextPage();
	}

function writeNameChoices()
	{
		for(var i=0;i<4;i++)
			{	
				$('.ans'+i+'.name.txt').text(char.name.choices[i]);
			}
		$('.name').click(pickName);
	}

function writeFact1Choices()
	{
		for(var i=0;i<4;i++)
			{
				$('.ans'+i+'.fact1.txt').text(char.shortfact.input.choices[i]);
			}
		$('.fact1').click(pickFact1);
	}

function writeFact2aChoices()
	{
		for(var i=0;i<4;i++)
			{
				$('.ans'+i+'.fact2-1.txt').text(char.longfact.input1.choices[i]);
			}
		$('.fact2-1').click(pickFact2a);
	}

function writeFact2bChoices()
	{
		for(var i=0;i<4;i++)
			{
				$('.ans'+i+'.fact2-2.txt').text(char.longfact.input2.choices[i]);
//				console.log(char.longfact.input2.choices[i]);
			}
		$('.fact2-2').click(pickFact2b);
	}

function pickName(event)
	{
//		console.log(this);
//		console.log($(this).text());
		var choice = $(this).text();
//		console.log(event);
		$('.charName.repeat').html(choice);
		$('.name.drop-button').html(choice);
//		$('.charName.repeat').html(this.html);
		char.name.chosen = choice;
	}

function pickFact1(event)
	{
//		console.log(this);
//		console.log($(this).text());
		var choice = $(this).text();
		char.shortfact.input.chosen = choice;

		$('.fact1.drop-button').html(choice);
//		console.log(event);
//		$('.charName.repeat').html($(this).text());
//		$('.charName.repeat').html(this.html);
	}

function pickFact2a(event)
	{
//		console.log(this);
//		console.log($(this).text());
		var choice = $(this).text();
		char.longfact.input1.chosen = choice;
		$('.fact2-1.drop-button').html($(this).text());
//		console.log(event);
//		$('.charName.repeat').html($(this).text());
//		$('.charName.repeat').html(this.html);
	}

function pickFact2b(event)
	{
//		console.log(this);
//		console.log($(this).text());
		var choice = $(this).text();
		char.longfact.input2.chosen = choice;
		$('.fact2-2.drop-button').html(choice);
//		console.log(event);
//		$('.charName.repeat').html($(this).text());
//		$('.charName.repeat').html(this.html);
	}


function nextPage()
	{
//		console.log('Right so far:'+right+'\nPages right so far:'+pagesRight);
		var allRight = true;
		if(char.name.chosen == char.name.answer)
			{	
				right++;
			}
		else 
			{ 
				allRight = false;
				wrong++; 
			}
		if(char.shortfact.input.chosen == char.shortfact.input.answer)
			{	
				right++;
			}
		else 
			{ 
				allRight = false;
				wrong++; 
			}
		if(char.longfact.input1.chosen == char.longfact.input1.answer)
			{	
				right++;
			}
		else 
			{ 
				allRight = false;
				wrong++; 
			}
		if(char.longfact.input2.chosen == char.longfact.input2.answer)
			{	
				right++;
			}
		else
			{ 
				allRight = false;
				wrong++; 
			}
		if(allRight==true)
			{
				pagesRight++;
			}
		else {
		}
		page++;
		if(page<characters.length)
			{
				formatPage();
			}
		else
			{ 
				$('#right').text(right);
				$('#wrong').text(wrong);
				$('#pageRight').text(pagesRight);
				end(); 
			}
	}

function end()
	{
		$('#afterScore').html('<h1>The end!</h1>');
	}