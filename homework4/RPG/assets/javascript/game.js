
$(document).ready(
	function()

	{
		$('#info').load('assets/pages/test.xml');
		console.log('testing');


		barb = new Character('amazon',0);
		barb.deployTo(1,0);

		samuel = new Character('barbarian',0);
		samuel.deployTo(0,1);

		pontificator = new Character('paladin',0);
		pontificator.deployTo(0,2);

		merlinda = new Character('sorceress',0);
		merlinda.deployTo(1,2);

		laizon = new Character('necro',0);
		laizon.deployTo(1,1);

		grobble = new Character('fallen',1);
		grobble.deployTo(0,2);

		shaman = new Character('shaman',1);
		shaman.deployTo(1,2);

		$.each(barb.allowedTargets('ranged'), function(index,value) {console.log('Barb can ranged-attack ' + value.image)});
		$.each(barb.allowedTargets('melee'), function(index,value) {console.log('Barb can melee-attack ' + value.image)});
		$.each(shaman.allowedTargets('ranged'), function(index,value) {console.log('Shaman can ranged-attack ' + value.image)});
		$.each(grobble.allowedTargets('melee'), function(index,value) {console.log('Grobble can melee-attack ' + value.image)});

barb.armorMult=.8;
samuel.mresMult=.7;

barb.takeDamage(40,'physical');
samuel.takeDamage(40,'physical');
shaman.takeDamage(80,'physical');

	}

);

		// Battlefield model.  Array of characters. Empty string represents null.
		var playerRow = [];
		var CPURow = [];
		resetBattlefield();


function resetBattlefield()
	{
		playerRow[0] = ['','','',''];
		playerRow[1] = ['','','',''];
		CPURow[0] = ['','','',''];
		CPURow[1] = ['','','',''];
	}


function Character(portrait,side)
	{
		// 0=player, 1=CPU
		this.side = side;
		this.name = portrait;
		this.image = 'assets/images/' + portrait + '.png';
		this.imageTag = $('<img>').attr('src',this.image).attr('alt',portrait).attr('class','img-fluid').attr('class','center-block');

		this.maxHP = 50;
		this.HP = 50;
		this.cover = 1;		// Higher values make character more likely to take ranged attacks in place of covered allies

			// Default:  Character can move once per global turn, alternating player/CPU until neither side has turns left
		this.maxMoves = 1;
		this.movesLeft = 1;

		this.armorMult = 1;  // Incoming physical damage multiplier
		this.mresMult = 1; // Incoming magic damage multiplier

		// not deployed
		this.row = -1;
		this.col = -1;


//		this.targetsOfType = targetsOfType;
//		this.allowedTargets = allowedTargets;


/*		// Blocks all melee and some ranged attacks for allies behind in same col or in col++
			// boolean
		this.isCovering = isCovering;
			// array
		this.coveringChars = coveringChars;
		this.isCoveredBy = isCoveredBy;
		this.coveredBy = coveredBy;
		this.isCovered = isCovered;


		// deploy(i,j) deploys unit to row i, column j of its side
		this.deployTo = deployTo;
		this.updateStatbox = updateStatbox;
		*/
	}

// Filters out empty cells from array
function fullCells(arr)
	{
		var occupied = [];
		for(var i=0; i<arr.length; i++)
			{
				if(arr[i] != '')
					{
						occupied.push(arr[i]);
					}
			}
		return occupied;
	}

function emptyCells(arr)
	{
		var empty = [];
		for(var i=0; i<arr.length; i++)
			{
				if(arr[i] == '')
					{
						empty.push(arr[i]);
					}
			}
		return empty;
	}

Character.prototype.deployTo = function(row,col)
//function deployTo(row,col)
	{
		if(this.side == 0 && playerRow[row][col] == '')
			{
				playerRow[row][col] = this;
				this.row = row;
				this.col = col;
			}
		else if(this.side == 1 && CPURow[row][col] == '')
			{
				CPURow[row][col] = this;
				this.row = row;
				this.col = col;
			}
		////////
		//   Make visible/interactive...
		////////
		if (row==0 && this.side==0)
			{
				$('.player.char-f'+col).append(this.imageTag);
			}
		else if (row==1 && this.side==0)
			{
				$('.player.char-b'+col).append(this.imageTag);
			}
		else if (row==0 && this.side==1)
			{
				$('.cpu.char-f'+col).append(this.imageTag);
			}
		else if (row==1 && this.side==1)
			{
				$('.cpu.char-b'+col).append(this.imageTag);
			}
		this.updateStatbox();
	}

Character.prototype.takeDamage = function(damage,type)
	{
		var damageTaken = damage;
		if(type = 'physical')
			{
				damageTaken *= this.armorMult;
			} 
		if(type = 'magic')
			{	
				damageTaken *= this.mresMult;
			}

		if(damageTaken > this.HP)
			{	
				console.log(this,'died!!!!');
				this.undeploy();
			}
		else
			{	
				this.HP -= damageTaken;
				console.log('I took',damageTaken,'damage! Ow!');
				this.updateStatbox();
			}
	}


Character.prototype.undeploy = function()
	{
		var str = '.';
		if(this.side == 0)
			{
				playerRow[this.row][this.col] = '';
				str += 'player.char-';
			}
		else if(this.side == 1)
			{	
				CPURow[this.row][this.col] = '';
				str += 'cpu.char-';
			}

		if(this.row == 0)
			{	
				str += 'f'+this.col;
			}
		else if(this.row == 1)
			{	
				str += 'b'+this.col;
			}

		console.log(str);
//	Remove image from square
		$(str).html('');

// Remove statbox under character
		if(this.side==0)
			{
				$('.statbox-p'+this.row+this.col).html(''); //('HP: ' + this.HP + '/' + this.maxHP);
			}

		if(this.side==1)
			{	
				$('.statbox-c'+this.row+this.col).html(''); //('HP: ' + this.HP + '/' + this.maxHP);
			}

		console.log(this,'was removed');
		console.log(allCPU().length, 'computer characters logged');
		console.log(allPlayers().length, 'player characters logged');
	}






Character.prototype.updateStatbox = function()
//function updateStatbox()
	{	
		var boxStr = this.name;
		boxStr += '<br/>HP: ' + this.HP + '/' + this.maxHP;
		boxStr += '<br/>Moves left: '+this.movesLeft;
		if(this.side==0)
			{
				$('.statbox-p'+this.row+this.col).html(boxStr); //('HP: ' + this.HP + '/' + this.maxHP);
			}

		if(this.side==1)
			{	
				$('.statbox-c'+this.row+this.col).html(boxStr); //('HP: ' + this.HP + '/' + this.maxHP);
			}
	}



//////////////////
/// Return array of players in front row, back row, or the union, resp.
function playersFront()
	{
		targets = [];
		for(var i=0;i<4;i++)
		{
			targets.push(playerRow[0][i]);
		}
		return fullCells(targets);
	}

function playersBack()
	{
		targets = [];
		for(var i=0;i<4;i++)
		{
			targets.push(playerRow[1][i]);
		}
		return fullCells(targets);
	}

function allPlayers()
	{
		return [].concat(playersFront(),playersBack());
	}
//////////////////

//////////////////
/// Return array of enemies in front row, back row, or the union, resp.
function CPUFront()
	{
		targets = [];
		for(var i=0;i<4;i++)
		{
			targets.push(CPURow[0][i]);
		}
		return fullCells(targets);
	}

function CPUBack()
	{
		targets = [];
		for(var i=0;i<4;i++)
		{
			targets.push(CPURow[1][i]);
		}
		return fullCells(targets);
	}

function allCPU()
	{
		return [].concat(CPUFront(),CPUBack());
	}
//////////////////




// All enemies or allies in front, back, or all ranks
// From CPU or player POV
// side=0: player,  side=1: enemy
function allEnemies(side)
	{
		if(side==0)
			{
				return allCPU();
			}
		if(side==1)
			{
				return allPlayers();
			}
	}

function allAllies(side)
	{
		// The enemy of my enemy is my ally...
		return allEnemies(1-side);
	}

function enemiesFront(side)
	{
		if(side==0)
			{
				return CPUFront();
			}
		if(side==1)
			{	
				return playersFront();
			}
	}

function enemiesBack(side)
	{
		if(side==0)
			{
				return CPUBack();
			}
		if(side==1)
			{	
				return playersBack();
			}
	}

function alliesFront(side)
	{
		return enemiesFront(1-side);
	}

function alliesBack(side)
	{
		return enemiesBack(1-side);
	}
////////////////////////

///////////////////////

//  Am I covering for char?
Character.prototype.isCovering = function(char)
//function isCovering(char)
	{
		if(this.row == 0 && char.row == 1 && this.side == char.side && (char.col == this.col || char.col == this.col + 1) )
			{
				return true;
			}
		else return false;
	}

//  Which characters (if any) am I covering?
Character.prototype.coveringChars = function()
//function coveringChars()
	{
		return allAllies(this.side).filter(this.isCovering);
	}

	// Am I covered by (char)?
Character.prototype.isCoveredBy = function(char)
//function isCoveredBy(char)
	{
		if (char.isCovering(this))
			{
			return true;
			}
		else {return false;}
	}

	// Which characters (if any) am I covered by?
Character.prototype.coveredBy = function()
//function coveredBy()
	{
		var covers = [];
		var frontRow = alliesFront(this.side);
		for (var i=0; i<frontRow.length; i++)
			{
				if (this.isCoveredBy(frontRow[i]))
					{
						covers.push(frontRow[i]);
					}
			}
		return covers;
	}

	// Am I covered at all?
Character.prototype.isCovered = function()
//function isCovered()
	{
		if(this.coveredBy().length > 0)
			{
			return true;
			}
		else return false;
	}

////////////////////////



//  Use string in case we want to add more targetType values to code.
Character.prototype.targetsOfType = function(targetSide,targetRank)
//function targetsOfType(targetSide,targetRank)
	{
		//targetType = enemey
		if(targetSide == 'enemy' && targetRank =='all')
			{
				return allEnemies(this.side);
			}
		else if(targetType == 'ally' && targetRank =='all')
			{
				return allAllies(this.side);
			}
		else if(targetType == 'enemy' && targetRank =='front')
			{
				return enemiesFront(this.side);
			}
		else if(targetType == 'enemy' && targetRank =='back')
			{
				return enemiesBack(this.side);
			}
		else if(targetType == 'ally' && targetRank =='front')
			{
				return alliesFront(this.side);
			}
		else if(targetType == 'ally' && targetRank =='back')
			{
				return alliesesBack(this.side);
			}
	}

Character.prototype.allowedTargets = function(attackType)
//function allowedTargets(attackType)
	{
		var backRow = enemiesBack(this.side);
		var frontRow = enemiesFront(this.side);
		if(attackType == 'melee')
			{
				var targets = [];
				for (var i=0; i<backRow.length; i++)
					{
						if((backRow[i].isCovered()) != true)
							{
								targets.push(backRow[i]);
							}
					}
				targets = targets.concat(frontRow);
				return targets;
			}
		if(attackType == 'ranged')
			{	
				return allEnemies(this.side);
			}
	}


// ?????
function meleeAttack(target)
	{
		this.attackType = 'melee';
		this.damageType = 'physical';
	}



