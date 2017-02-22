function Level09BeenSearchingForSoLong(ListofLevels, preloader) {var lvllayoutLevel09BeenSearchingForSoLong=[[0,3,3,0,0,0,0,0,0,0,0,3,3,3,1,0,0,0,0,0],[3,0,3,0,0,0,0,0,0,0,0,3,0,3,0,0,0,0,0,0],[3,0,3,0,0,0,3,3,3,0,0,3,0,3,3,3,3,0,0,0],[0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,3,0,0,0],[0,0,0,0,0,0,3,0,0,0,3,0,0,0,3,3,3,0,0,0],[0,0,0,0,0,3,3,3,3,3,3,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,3,0,0,0,0,0,0,3,3,3,0,0,0],[0,0,0,3,0,0,0,3,0,0,0,0,0,0,3,0,0,0,0,0],[0,0,0,3,0,0,3,3,3,0,0,0,0,0,3,3,3,3,3,3],[0,3,3,3,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0,3],[0,0,0,3,0,0,3,3,3,0,0,0,3,3,3,3,3,3,3,3],[0,0,0,3,0,0,0,3,0,0,0,0,3,5,0,0,0,0,0,0],[0,0,0,3,0,0,0,3,3,3,3,3,3,3,3,3,0,0,0,0],[0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,3,0,0,0,0],[0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,3,0,0,0,0],[0,0,0,0,0,3,3,3,0,0,0,0,0,0,3,3,0,0,0,0],[3,3,3,0,0,3,0,0,0,0,3,3,3,0,0,0,0,0,0,0],[3,0,0,0,0,3,0,0,0,0,0,0,3,0,0,0,0,0,0,0],[3,3,3,0,0,3,0,0,0,0,3,3,3,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]];
this.mapLevel09BeenSearchingForSoLong = new Map(lvllayoutLevel09BeenSearchingForSoLong,preloader);
this.waypointsBot1= new Array();
this.waypointsBot1.push(new Point(5,16));
this.waypointsBot1.push(new Point(11,15));
this.Bot1= new ENEMY(this.waypointsBot1[0].x,this.waypointsBot1[0].y,this.waypointsBot1,lvllayoutLevel09BeenSearchingForSoLong,preloader);
this.mapLevel09BeenSearchingForSoLong.addEnemy(this.Bot1);
this.waypointsBot2= new Array();
this.waypointsBot2.push(new Point(9,16));
this.waypointsBot2.push(new Point(17,11));
this.Bot2= new ENEMY(this.waypointsBot2[0].x,this.waypointsBot2[0].y,this.waypointsBot2,lvllayoutLevel09BeenSearchingForSoLong,preloader);
this.mapLevel09BeenSearchingForSoLong.addEnemy(this.Bot2);
this.waypointsBot3= new Array();
this.waypointsBot3.push(new Point(1,1));
this.waypointsBot3.push(new Point(9,7));
this.Bot3= new ENEMY(this.waypointsBot3[0].x,this.waypointsBot3[0].y,this.waypointsBot3,lvllayoutLevel09BeenSearchingForSoLong,preloader);
this.mapLevel09BeenSearchingForSoLong.addEnemy(this.Bot3);
ListofLevels.push(this.mapLevel09BeenSearchingForSoLong);}