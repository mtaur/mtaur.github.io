const request = require('request');
const fs = require('fs');
var fileArr = [];

var keys = require('./keys.js');
var userInput = [''];  // Default string prevents undefined
if(process.argv.length>2) {userInput = process.argv.slice(2);}
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var goatNight = new Twitter(keys.twitter);
var spotify = new Spotify(keys.spotify);


var query = '';

if(userInput.length > 1)
	{
		query = userInput[1];
	}

//console.log(keys);
//console.log(keys.consumer_key);

// require is good enough for our own server...
/*request('keys.js', (error,response,body)
	=>{
		if(error)
			{console.log(error);}
		else
			{keys = JSON.parse(response);}
	}) */

const commands = ['help','quit','my-tweets','movie-this','spotify-this-song','do-what-it-says','twitter','omdb','twitter-long','goat-night','spotify-full'];

function help ()
	{
		console.log('Commands in descending order of priority. [parameter] (note):');
		console.log('help (this already runs by default, but in principle we could make this an Inquirer app)');
		console.log('quit');
		console.log('my-tweets (20 most recent tweets, @GoatNight1');
		console.log('movie-this "[movie tite]" (omdb search)');
		console.log('spotify-this-song "[song name]" (spotify search)');
		console.log('do-what-it-says (reads command from random.txt)');
		console.log('twitter (same as my-tweets)');
		console.log('omdb "[movie title]" (omdb search)');
		console.log('twitter-long (return as much as API will provide)');
		console.log('goat-night (same as twitter-long)');
		console.log('spotify-full "[song name]" (gives more than one result');
	}

help();

console.log(' ');
console.log(' ');
console.log(' ');
console.log('User inputs received:',userInput);

function parseCommand(input)
	{
//		var commandFcn = '';
		for(var i=0;i<commands.length;i++)
			{	
//				console.log('Checking:',commands[i].slice(0,input.length));
				// Return when highest-priority match is found 
				if (input == commands[i].slice(0,input.length))
				{
					console.log('Command interpreted as:'+ commands[i]);
					return commands[i];
					break;
				}
			}
		console.log('Not a valid command.');		
	}

var command = parseCommand(userInput[0]);

doCommand();

function doCommand()
{
	if(command=='do-what-it-says')
		{
			fs.readFile('random.txt','utf8', function(err,data)
				{
					if(err)
					{	console.log(err); }
					else if (command=='do-what-it-says')
					{	
						fileArr = data.split(','); 
						console.log(fileArr);
			//			doCommand();
						userInput = fileArr;
						command = fileArr[0];
						if(userInput.length > 1)
							{
								query = userInput[1];
							}
						console.log(' ');
						console.log(' ');
						console.log(' ');
						console.log('User inputs received:',userInput);
						doCommand();
					}
				}
				);
		}

	if(command=='my-tweets' || command == 'twitter')
		{	
			console.log('***********************');
			console.log('Retrieving text of @GoatNight1:');
			console.log('***********************');
			goatNight.get('statuses/user_timeline', {count:20, screen_name:'GoatNight1'}, function (error,tweets,response)
				{
	//				console.log(error);
	//				console.log(tweets.forEach());
	//				console.log(response);
	//				tweets.forEach((tweet)=>{console.log(tweet.text);})
					for(var i=0; i<tweets.length; i++)
						{
							console.log(tweets[tweets.length-i-1].text);
						}
					console.log('***********************');
				}
			);
		}

	if(command=='twitter-long' || command=='goat-night')
		{	
			console.log('***********************');
			console.log('Retrieving text of @GoatNight1:');
			console.log('***********************');
			goatNight.get('statuses/user_timeline', {screen_name:'GoatNight1'}, function (error,tweets,response)
				{
	//				console.log(error);
	//				console.log(tweets.forEach());
	//				console.log(response);
	//				tweets.forEach((tweet)=>{console.log(tweet.text);})
					for(var i=0; i<tweets.length; i++)
						{
							console.log(tweets[tweets.length-i-1].text);
						}
					console.log('***********************');
				}
			);
		}

	if(command=='quit')
		{	
			console.log('What is this, 1984? Who uses command lines? Bye.');
			// [Close inquirer]
		}

	if(command=='spotify-this-song')
		{	
	//		spotify({ type: 'artist OR album OR track', query: 'My search query', limit: 20 }, callback)
			spotify.search({ type: 'track', query: query, limit: 20 }, function(err,data)
					{
									console.log("1st artist:",data.tracks.items[0].album.artists[0].name);
									console.log("Song title:",data.tracks.items[0].name);
									console.log("Preview:",data.tracks.items[0].preview_url);
									console.log("Album:",data.tracks.items[0].album.name);
									console.log('*****************************');
					}
				);  
		}

	if(command=='spotify-full')
		{	
	//		spotify({ type: 'artist OR album OR track', query: 'My search query', limit: 20 }, callback)
			spotify.search({ type: 'track', query: query, limit: 20 }, function(err,data)
					{
	//					console.log(data.tracks.items[0]);
						data.tracks.items.forEach(function(item)
								{
									console.log("1st artist:",item.album.artists[0].name);
									console.log("Song title:",item.name);
									console.log("Preview:",item.preview_url);
									console.log("Album:",item.album.name);
									console.log('*****************************');
								}  
							);  
					}
				);  
		}

	if(command=='movie-this' || command=='omdb')
		{
			request('http://omdbapi.com/?apikey='+keys.omdb.api+'&t='+query,
				function(err,response,body)
					{
						if(err) { console.log(err);}
						else {
								var obj = JSON.parse(body);
								console.log(obj);
							}
					}
				);
		}
}