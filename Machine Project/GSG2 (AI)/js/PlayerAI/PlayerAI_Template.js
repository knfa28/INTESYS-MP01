function PlayerAI_Template(playerScript){
	this.movementarray = new Array();
	playerScript.loaded = new Object();
	playerScript.loaded = true;
	playerScript.thinkAI= function(player, enemies, maplayout, end) {
			var currentqueue=this.movementarray[0];
			if(currentqueue=="Left"){
				player.MoveRight();
			}
	}	
	playerScript.initAI = function(player, enemies, maplayout, end) {
		this.movementarray.push("Left");
		this.movementarray.push("Right");
		this.movementarray.push("Up");
		this.movementarray.push("Down");
	}
	playerScript.endAI = function(){

	}
	playerScript.spottedAI= function(){
		
	}
}