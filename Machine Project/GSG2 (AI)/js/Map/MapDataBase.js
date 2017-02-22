var ListofLevels;
var fileloadingcounter=0;
function MapDataBase(preloader)
{
	fileloadingcounter=0;

	this.boxwitdh=48;
	this.boxheight=34.4;
	this.mapx=20;
	this.mapy=20;
	this.doneloading = false;
	ListofLevels = new Array();
	this.queue= new Array();
	var lvllayout1= new Array(this.mapx);
	var i=0;
	for(i=0;i<this.mapx;i++)
	{
	 lvllayout1[i]=new Array(this.mapy);
	}
	this.creatingArray = function(x,y)
	{
	var i=0;
	var b=0;
	var something= new Array(x);
	for(i=0;i<x;i++)
	{
	 for(b=0;b<y;b++)
	 {
	  something[i]  = new Array(y);
	 }
	}
	
	return something;
	}
	//Exam100(this.ListofLevels,preloader);
	this.getLevel = function(num)
	{
	return ListofLevels[num];
	}
	this.getLength = function()
	{
	return ListofLevels.length;
	}
	
	
	
	this.init = function(){
		this.queue = new Array();
		this.queue.push("js/MapDatabase/Level01EasyPeasy.js");
		this.queue.push("js/MapDatabase/Level02WhichWayOut.js");
		this.queue.push("js/MapDatabase/Level03DontMindMe.js");
		this.queue.push("js/MapDatabase/Level04HeadForTheExit.js");
		this.queue.push("js/MapDatabase/Level05NotThisTime.js");	
		this.queue.push("js/MapDatabase/Level06ALittleSecret.js");
		this.queue.push("js/MapDatabase/Level07DoMeAFavor.js");
		this.queue.push("js/MapDatabase/Level08Trapped.js");
		this.queue.push("js/MapDatabase/Level09BeenSearchingForSoLong.js");
		this.queue.push("js/MapDatabase/Level10IWillFollowYou.js");
		this.queue.push("js/MapDatabase/Level11DoYouSeeWhatISee.js");
		this.queue.push("js/MapDatabase/Level12Outgunned.js");
		this.queue.push("js/MapDatabase/Level13AreYouForReal.js");
		this.queue.push("js/MapDatabase/Level14GiveMeAMoment.js");
		this.queue.push("js/MapDatabase/Level15IsThisTheEnd.js");
	
		this.loadqueue();
		this.checkIfDoneLoading();
	}

	this.loadqueue= function(){
		for(var i=0;i<this.queue.length;i++){
			this.addScript(this.queue[i]);
		}
	}
	this.checkIfDoneLoading= function(){
		if(this.queue.length==fileloadingcounter){
			this.doneloading=true;
		}
		
	}
	this.addScript = function(src){
	 var node = document.getElementsByTagName("head")[0]||document.body;
	 var script = document.createElement("script");
	 script.type="text/javascript";
	 script.src=src;
	 script.onload =  function(){
	 	var classname = src.split("/");
		classname=classname[classname.length-1];
		classname=classname.split(".");
		classname=classname[0];
		//classname+="(this.ListofLevels,preloader);";
		console.log(classname);
		eval(classname)(ListofLevels,preloader);
		fileloadingcounter++;
	 }
	 node.appendChild(script);
	}

}

