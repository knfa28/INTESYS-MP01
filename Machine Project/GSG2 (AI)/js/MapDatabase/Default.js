function Default(ListofLevels, preloader) { this.lvllayoutDefault=
	[
	[0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,3,3,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,3,3,3,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,3,5,0,0,0,0,0,0,0,0,0,0]
	];
this.mapDefault = new Map(this.lvllayoutDefault,preloader);
this.mapDefault.maplayout=this.lvllayoutDefault;
this.waypointsBot1= new Array();
this.waypointsBot2= new Array();
this.waypointsBot1.push(new Point(18,11));
this.waypointsBot1.push(new Point(5,12));
this.Bot1= new ENEMY(this.waypointsBot1[0].x,this.waypointsBot1[0].y,this.waypointsBot1,this.lvllayoutDefault,preloader);
this.mapDefault.addEnemy(this.Bot1);
this.mapDefault.name="Default";
ListofLevels.push(this.mapDefault);
console.log(ListofLevels);
console.log(this.mapDefault.enemies);
}