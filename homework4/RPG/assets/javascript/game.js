
$(document).ready(
	function()

	{

	startBattle();

	}

);
/////////
//   End of $(document).ready code block
/////////
/////////


function startBattle()

	{
//		$('#info').load('assets/pages/test.xml');
		$('#info').load('assets/pages/beta-sidepanel.xml');
//		console.log('testing');


		barb = new Character('amazon',0);
		barb.deployTo(1,0);

		samuel = new Character('barbarian',0);
		samuel.deployTo(0,1);

		pontificator = new Character('paladin',0);
		pontificator.deployTo(0,2);

		merlinda = new Character('sorceress',0);
		merlinda.deployTo(1,2);

		laizon = new Character('necro',0);
		laizon.deployTo(1,3);

		stabby = new Character('assassin',0);
		stabby.deployTo(0,3);

		rawr = new Character('druid',0);
		rawr.deployTo(1,1);


		grobble0 = new Character('fallen',1);
		grobble0.maxHP = 45;
		grobble0.HP = 45;
		grobble0.deployTo(0,0);
		grobble0.skillChoice = grobble0.stabObject = new Melee(grobble0);

		grobble1 = new Character('fallen',1);
		grobble1.maxHP = 45;
		grobble1.HP = 45;
		grobble1.deployTo(0,1);
		grobble1.skillChoice = grobble1.stabObject = new Melee(grobble1);

		grobble2 = new Character('fallen',1);
		grobble2.maxHP = 45;
		grobble2.HP = 45;
		grobble2.deployTo(0,2);
		grobble2.skillChoice = grobble2.stabObject = new Melee(grobble2);

		grobble3 = new Character('fallen',1);
		grobble3.maxHP = 45;
		grobble3.HP = 45;
		grobble3.deployTo(0,3);
		grobble3.skillChoice = grobble3.stabObject = new Melee(grobble3);

		shaman0 = new Character('shaman',1);
		shaman0.damageRanged = 45;
		shaman0.deployTo(1,0);
		shaman0.skillChoice = shaman0.mmObject = new MagicShoot(shaman0);

		shaman1 = new Character('shaman',1);
		shaman1.damageRanged = 45;
		shaman1.deployTo(1,1);
		shaman1.skillChoice = shaman1.mmObject = new MagicShoot(shaman1);

		shaman2 = new Character('shaman',1);
		shaman2.damageRanged = 45;
		shaman2.deployTo(1,2);
		shaman2.skillChoice = shaman2.mmObject = new MagicShoot(shaman2);

//		$.each(barb.allowedTargets('ranged'), function(index,value) {console.log('Barb can ranged-attack ' + value.image)});
//		$.each(barb.allowedTargets('melee'), function(index,value) {console.log('Barb can melee-attack ' + value.image)});
//		$.each(shaman.allowedTargets('ranged'), function(index,value) {console.log('Shaman can ranged-attack ' + value.image)});
//		$.each(grobble.allowedTargets('melee'), function(index,value) {console.log('Grobble can melee-attack ' + value.image)});

		// Not bad:
		barb.armorMult=.8;
		samuel.armorMult = .8;

		// Look at this tank!  Wow!
		pontificator.armorMult = .6;
		pontificator.cover = 2;

		// Coward, expect at cowering!  But he also spends life points to create expendable minions in the expansion.
		laizon.cover = .5;
		laizon.mresMult = .5;

		// Homing attacks do less damage.  If only this iteration included mana points, maybe Merlinda would have more powerful options...
		merlinda.damageRanged = 12;
		merlinda.mresMult = .5;

		// One day, he will get bonus damage based on minions
		laizon.damageRanged = 8;

			/////////
			//  'this' keyword acts not as expected if the below is used.  Avoid for now (or rewrite 'shoot' to call shootObject.shoot from inside a function)?
			//barb.shoot = barb.shootObject.execute;
			////////

		samuel.skillChoice = samuel.axeObj = new Melee(samuel);
		stabby.skillChoice = stabby.axeObj = new Melee(stabby);
		barb.skillChoice = barb.shootObject = new Shoot(barb);
		rawr.skillChoice = rawr.shootObject = new Shoot(rawr);
		pontificator.skillChoice = pontificator.swordObject = new Melee(pontificator);
		merlinda.skillChoice = merlinda.mmObject = new MagicShoot(merlinda);
		laizon.skillChoice = laizon.shootObject = new MagicShoot(laizon);

		//barb.takeDamage(40,'physical');
		//samuel.takeDamage(40,'physical');
		//shaman.takeDamage(80,'physical');

				
		//$('.char').click( function() {console.log(this,'was clicked')});
		//$('.char').click( function() {console.log(divToChar(this),'was clicked')});
		//$('.char').click( function() {divToChar(this).takeDamage(10,'phyiscal')});

		//$('.char').click( function() {barb.shootObject.execute(divToChar(this))} );

		$('.char.player').click( function ()
			{	
				if(allPlayers().indexOf(divToChar(this))!=-1)
					{hasFocus = divToChar(this); }

			}
		);

		$('.char.cpu').click( function() 
			{

				if (hasFocus.movesLeft>0)
					{
						hasFocus.skillChoice.execute(divToChar(this));

						if(allCPU().length==0)
							{	
								alert('You win!');
							}
						else if(cpuMovesLeft() > 0)
							{
								cpuGo();
							}

							// not an 'else'.  CPU might get to take the last turn.

								//Logic check moved to cpuGo()
						/*if(allPlayers().length==0)
							{
								alert('You lose!');
							}   */

						if(allMovesLeft()==0)
							{	
								newRound();
							}
					}
			}
		);

	}

function cpuGo()
	{
		// cpuArr:  which cpu units still has moves?
		var cpuArr = allCPU().filter( function(item) { return item.movesLeft>0; } );

		// Pick one...
		var cpuFocus = cpuArr[ Math.floor(Math.random()*cpuArr.length) ];
		console.log(cpuFocus,'will go now.');

		var targets = allPlayers();
		console.log(targets);
		targets = targets.filter(
						function(target)
							{
								console.log('Can I target',target,":",cpuFocus.skillChoiceCanTarget(target));
								return cpuFocus.skillChoiceCanTarget(target);
							}
					);
		console.log('Possible targets of CPU attack: ',targets,'targets[0]=',targets[0]);
		var target = targets[ Math.floor(targets.length*Math.random()) ];
		console.log('CPU chose:', target);
		cpuFocus.skillChoice.execute(target);

		if(allPlayers().length==0)
			{
				alert('You lose!');	
			}

		else if(playerMovesLeft()==0 && cpuMovesLeft()>0)
			{
				cpuGo();
			}
		else if(playerMovesLeft()==0 && cpuMovesLeft()==0)
			{	
				newRound();
			}
	}


function cpuMovesLeft()
	
	{
		var cpuMovesLeft = 0;
		allCPU().forEach( function(item) {cpuMovesLeft += item.movesLeft;} );
		console.log(cpuMovesLeft,'moves left for computer.');
		return cpuMovesLeft;
	}


function playerMovesLeft()
	
	{
		var playerMovesLeft = 0;
		allPlayers().forEach( function(item) {playerMovesLeft += item.movesLeft;} );
		console.log(playerMovesLeft,'moves left for player.');
		return playerMovesLeft;
	}


function allMovesLeft()
	
	{
		var totalMovesLeft = 0;
		(allPlayers().concat(allCPU())).forEach( function(item) {totalMovesLeft += item.movesLeft;} );
		console.log(totalMovesLeft,'moves left globally.');
		return totalMovesLeft;
	}

function newRound()

	{
		var all = allPlayers().concat(allCPU());
		// Each character resets their turn counter.
		all.forEach( function(item) {item.movesLeft = item.maxMoves;} );
		all.forEach( function(item) {item.updateStatbox();} );

		round++;
	}


		// Battlefield model.  Array of characters. Empty string represents null.
		var playerRow = [];
		var CPURow = [];
		resetBattlefield();
		var hasFocus = '';
		var round = 0;


function resetBattlefield()
	{
		playerRow[0] = ['','','',''];
		playerRow[1] = ['','','',''];
		CPURow[0] = ['','','',''];
		CPURow[1] = ['','','',''];
	}

// Returns the character deployed to $('.char')
function divToChar(div)
	{
		var all = allChar();
//		console.log(all);
//		console.log(all.length);
//		console.log('$(div)=',$(div)[0]);
		for (var i=0; i<all.length; i++)
			{
				if($(div)[0] == all[i].divTag[0])
					{	
//						console.log(all[i], 'was found!');
						return all[i];
					}
				else
					{	
//						console.log('Skipped',all[i].divTag[0]);
					}
			}
	}

function Character(portrait,side)
	{
		// 0=player, 1=CPU
		this.side = side;
		this.name = portrait;
		this.image = 'assets/images/' + portrait + '.png';
		this.imageTag = $('<img>').attr('src',this.image).attr('alt',portrait).attr('class','img-fluid').attr('class','center-block');
		this.divTag = '';

		this.maxHP = 100;
		this.HP = 100;
		this.cover = 1;		// Higher values make character more likely to take ranged attacks in place of covered allies

		this.damageMelee = 20;
		this.damageRanged = 20;

			// Default:  Character can move once per global turn, alternating player/CPU until neither side has turns left
		this.maxMoves = 1;
		this.movesLeft = 1;

		this.armorMult = 1;  // Incoming physical damage multiplier
		this.mresMult = 1; // Incoming magic damage multiplier

		// not deployed
		this.row = -1;
		this.col = -1;

		// Will be able to choose between multiple skills from the side panel eventually...
		this.skillChoice ='';

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


function SingleAttackSkill(owner,rangeType,damageType)
	{
		this.owner = owner;
		this.rangeType = rangeType;
		this.damageType = damageType;
		this.damage = 0;
//		this.targetRule = owner.allowedTargets;

		if(rangeType == 'melee')
			{
				this.damage = owner.damageMelee;
			}
		else if(rangeType == 'ranged' || rangeType == 'homing')
			{	
				this.damage = owner.damageRanged;
			}

		this.canTarget = function(target)
			{
				if(owner.allowedTargets(this.rangeType).indexOf(target) != -1)
					{
						return true;
					}
				else { return false; }
			};

		this.retarget = function(target)
			{
				if (rangeType == 'ranged')
					//  Ranged attacks have are redirected to a target or its covers with chance determined relative to the cover ratings of the target and its covers
					{
						var covers = [target].concat(target.coveredBy());
//						console.log('Target of ranged attack is covered by',covers);
						var coverTotal = 0;
						for(var i=0; i<covers.length; i++)
							{
								coverTotal += covers[i].cover;
							}
//						console.log('Total of cover ratings is',coverTotal);
						var rand = Math.random();
						var coverSum = 0;
						for(var j=0; j<covers.length; j++)
							{	
								coverSum += covers[j].cover;
								if(rand*coverTotal<coverSum)
									{
										return covers[j];
									}

							}
						console.log('retarget algorithm did not return as expected...');
									{
										return(target);
									}	
					}

					// Homing and melee attacks do not suffer a redirect after a legal target is chosen.
				else if (rangeType == 'melee' || rangeType == 'homing')
					{	
						return target;
					}
			};

		this.execute = function(target)
			{
//				if(owner.allowedTargets(this.rangeType).indexOf(target) != -1)
//				console.log('this is',this);
				if (this.canTarget(target))
					{	
						console.log(owner,'performed attack of type',rangeType,damageType,'against',target);
						this.retarget(target).takeDamage(this.damage,this.damageType);
						owner.movesLeft -=1;
						owner.updateStatbox();
					}
				else {console.log('Not a legal target...');  }
			};

	}

function Shoot(owner)
	{
		SingleAttackSkill.call(this,owner,'ranged','physical');
	}

function MagicShoot(owner)
	{
		SingleAttackSkill.call(this,owner,'homing','magic');
	}

function Melee(owner)
	{
		SingleAttackSkill.call(this,owner,'melee','physical');
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
//				$('.player.char-f'+col).append(this.imageTag);
				this.divTag = $('.player.char-f'+col);
				$('.player.char-f'+col).html(this.imageTag);
			}
		else if (row==1 && this.side==0)
			{
//				$('.player.char-b'+col).append(this.imageTag);
				this.divTag = $('.player.char-b'+col);
				$('.player.char-b'+col).html(this.imageTag);
			}
		else if (row==0 && this.side==1)
			{
//				$('.cpu.char-f'+col).append(this.imageTag);
				this.divTag = $('.cpu.char-f'+col);
				$('.cpu.char-f'+col).html(this.imageTag);
			}
		else if (row==1 && this.side==1)
			{
//				$('.cpu.char-b'+col).append(this.imageTag);
				this.divTag = $('.cpu.char-b'+col);
				$('.cpu.char-b'+col).html(this.imageTag);
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

		damageTaken = Math.floor(damageTaken);

		if(damageTaken >= this.HP)
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

//		console.log(str);
//	Remove image from square
		$(str).html('');

// Remove divTag
		this.divTag = '';

// Remove statbox under character
		if(this.side==0)
			{
				$('.statbox-p'+this.row+this.col).html(''); //('HP: ' + this.HP + '/' + this.maxHP);
			}

		if(this.side==1)
			{	
				$('.statbox-c'+this.row+this.col).html(''); //('HP: ' + this.HP + '/' + this.maxHP);
			}

		console.log(this,'was removed from the field.');
//		console.log(allCPU().length, 'computer characters logged');
//		console.log(allPlayers().length, 'player characters logged');
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


function allChar()
{
	return allPlayers().concat(allCPU());
}




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
		if(attackType == 'ranged' || attackType == 'homing')
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


Character.prototype.skillChoiceCanTarget = function(target)
	{
		console.log(this);
		if(this.skillChoice.canTarget(target))
			{
				return true;
			}
		else return false;
	}	