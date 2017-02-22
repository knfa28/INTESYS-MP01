function Level05NotThisTime(ListofLevels, preloader) {var lvllayoutLevel05NotThisTime=[[0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,3,3,0,0,3,0,0,0,0,0,0,0,0,0],[0,0,0,3,3,3,3,3,3,0,3,0,0,0,3,0,0,0,0,3],[0,0,0,3,5,3,3,3,3,0,3,0,0,0,3,0,0,0,0,3],[0,0,0,3,0,3,0,0,0,0,3,0,0,0,3,0,0,0,0,3],[0,0,0,3,0,3,0,0,0,0,3,0,0,0,3,0,0,0,0,3],[0,0,0,3,0,3,0,0,3,3,3,0,0,0,3,0,0,0,0,3],[0,0,0,3,0,3,0,0,1,3,3,0,0,0,3,3,3,0,0,3],[0,0,0,3,0,3,3,3,3,3,0,0,0,0,0,0,3,0,0,3],[0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,3],[0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,3],[0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,3],[0,0,0,3,0,0,0,3,3,3,3,0,0,0,0,0,3,0,0,0],[0,0,0,3,3,3,3,3,0,0,0,0,0,0,0,0,3,0,0,0],[0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0],[0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0],[0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0],[0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]];
this.mapLevel05NotThisTime = new Map(lvllayoutLevel05NotThisTime,preloader);
this.waypointsBot1= new Array();
this.waypointsBot1.push(new Point(15,11));
this.waypointsBot1.push(new Point(15,15));
this.waypointsBot1.push(new Point(12,15));
this.waypointsBot1.push(new Point(12,11));
this.Bot1= new ENEMY(this.waypointsBot1[0].x,this.waypointsBot1[0].y,this.waypointsBot1,lvllayoutLevel05NotThisTime,preloader);
this.mapLevel05NotThisTime.addEnemy(this.Bot1);
this.waypointsBot2= new Array();
this.waypointsBot2.push(new Point(16,2));
this.waypointsBot2.push(new Point(4,2));
this.Bot2= new ENEMY(this.waypointsBot2[0].x,this.waypointsBot2[0].y,this.waypointsBot2,lvllayoutLevel05NotThisTime,preloader);
this.mapLevel05NotThisTime.addEnemy(this.Bot2);
ListofLevels.push(this.mapLevel05NotThisTime);}