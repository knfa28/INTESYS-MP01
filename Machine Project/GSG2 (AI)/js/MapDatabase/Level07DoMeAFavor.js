function Level07DoMeAFavor(ListofLevels, preloader) {var lvllayoutLevel07DoMeAFavor=[[5,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],[0,3,0,0,0,3,0,0,0,3,3,3,0,0,0,3,0,0,0,3],[0,3,1,0,0,3,0,0,0,0,0,3,3,0,0,3,0,0,0,3],[0,3,3,0,0,3,0,0,0,0,0,0,3,0,0,3,3,0,0,3],[0,0,3,0,0,3,0,0,0,0,0,0,3,3,0,0,3,3,0,3],[0,0,3,3,3,3,0,0,0,0,0,0,0,3,0,0,0,3,3,3],[0,0,0,0,0,0,3,3,3,3,3,3,3,3,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0],[3,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0],[3,3,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0],[0,3,0,0,0,0,0,0,3,0,0,0,0,3,0,0,0,0,0,0],[0,3,0,0,0,0,0,0,3,0,0,0,0,3,0,0,0,0,0,0],[0,3,0,0,0,3,3,3,3,0,0,0,3,3,0,0,0,0,0,0],[0,3,0,0,0,3,0,0,0,0,0,3,3,0,0,0,0,0,0,0],[0,3,0,0,3,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0],[3,0,0,0,3,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0],[3,0,0,3,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0],[3,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[3,0,5,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]];
this.mapLevel07DoMeAFavor = new Map(lvllayoutLevel07DoMeAFavor,preloader);
this.waypointsBot1= new Array();
this.waypointsBot1.push(new Point(6,19));
this.waypointsBot1.push(new Point(15,16));
this.waypointsBot1.push(new Point(14,15));
this.waypointsBot1.push(new Point(18,15));
this.Bot1= new ENEMY(this.waypointsBot1[0].x,this.waypointsBot1[0].y,this.waypointsBot1,lvllayoutLevel07DoMeAFavor,preloader);
this.mapLevel07DoMeAFavor.addEnemy(this.Bot1);
this.waypointsBot2= new Array();
this.waypointsBot2.push(new Point(7,6));
this.waypointsBot2.push(new Point(10,12));
this.Bot2= new ENEMY(this.waypointsBot2[0].x,this.waypointsBot2[0].y,this.waypointsBot2,lvllayoutLevel07DoMeAFavor,preloader);
this.mapLevel07DoMeAFavor.addEnemy(this.Bot2);
this.waypointsBot3= new Array();
this.waypointsBot3.push(new Point(13,4));
this.waypointsBot3.push(new Point(10,2));
this.Bot3= new ENEMY(this.waypointsBot3[0].x,this.waypointsBot3[0].y,this.waypointsBot3,lvllayoutLevel07DoMeAFavor,preloader);
this.mapLevel07DoMeAFavor.addEnemy(this.Bot3);
ListofLevels.push(this.mapLevel07DoMeAFavor);}