function Level12Outgunned(ListofLevels, preloader) {var lvllayoutLevel12Outgunned=[[0,0,3,0,0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],[0,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,3,3,0,0,0,3,3,3,3,0,0,0,0,0,0],[0,0,0,0,0,3,0,0,0,3,5,0,0,3,3,3,3,0,0,0],[0,0,0,0,3,3,3,0,0,3,0,0,0,0,0,0,3,3,0,0],[1,0,0,0,3,0,0,0,0,3,0,0,0,0,0,0,0,3,0,0],[3,3,3,3,3,0,0,0,0,0,3,3,3,3,3,0,0,3,0,0],[0,0,0,0,0,0,0,0,0,3,3,0,0,0,0,0,0,3,0,0],[0,3,0,0,0,0,0,0,0,3,0,0,0,0,0,0,3,3,0,0],[0,3,3,0,0,0,0,0,0,3,0,0,0,3,3,3,3,3,0,0],[0,0,3,0,0,0,0,0,0,3,3,3,0,0,0,0,0,3,0,0],[0,0,3,0,0,0,0,3,3,3,0,0,0,0,0,0,0,3,0,0],[0,0,3,0,0,0,3,3,0,0,0,0,0,0,3,0,0,3,3,0],[0,0,3,3,0,0,0,0,0,0,0,0,0,3,0,0,0,3,3,0],[0,0,0,3,0,0,0,0,0,0,0,3,3,0,0,0,0,3,0,0],[0,0,0,3,3,0,0,0,3,3,3,3,0,0,0,0,3,3,0,0],[0,0,0,0,3,3,0,0,3,3,0,0,0,0,0,3,3,0,0,0],[0,0,0,0,0,3,3,0,0,0,0,0,0,0,3,3,3,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]];
this.mapLevel12Outgunned = new Map(lvllayoutLevel12Outgunned,preloader);
this.waypointsBot1= new Array();
this.waypointsBot1.push(new Point(1,5));
this.waypointsBot1.push(new Point(1,14));
this.Bot1= new ENEMY(this.waypointsBot1[0].x,this.waypointsBot1[0].y,this.waypointsBot1,lvllayoutLevel12Outgunned,preloader);
this.mapLevel12Outgunned.addEnemy(this.Bot1);
this.waypointsBot2= new Array();
this.waypointsBot2.push(new Point(6,9));
this.waypointsBot2.push(new Point(6,5));
this.Bot2= new ENEMY(this.waypointsBot2[0].x,this.waypointsBot2[0].y,this.waypointsBot2,lvllayoutLevel12Outgunned,preloader);
this.mapLevel12Outgunned.addEnemy(this.Bot2);
this.waypointsBot3= new Array();
this.waypointsBot3.push(new Point(14,4));
this.waypointsBot3.push(new Point(8,4));
this.Bot3= new ENEMY(this.waypointsBot3[0].x,this.waypointsBot3[0].y,this.waypointsBot3,lvllayoutLevel12Outgunned,preloader);
this.mapLevel12Outgunned.addEnemy(this.Bot3);
this.waypointsBot4= new Array();
this.waypointsBot4.push(new Point(13,10));
this.waypointsBot4.push(new Point(13,6));
this.Bot4= new ENEMY(this.waypointsBot4[0].x,this.waypointsBot4[0].y,this.waypointsBot4,lvllayoutLevel12Outgunned,preloader);
this.mapLevel12Outgunned.addEnemy(this.Bot4);
this.waypointsBot5= new Array();
this.waypointsBot5.push(new Point(10,1));
this.waypointsBot5.push(new Point(19,1));
this.Bot5= new ENEMY(this.waypointsBot5[0].x,this.waypointsBot5[0].y,this.waypointsBot5,lvllayoutLevel12Outgunned,preloader);
this.mapLevel12Outgunned.addEnemy(this.Bot5);
this.waypointsBot6= new Array();
this.waypointsBot6.push(new Point(18,13));
this.waypointsBot6.push(new Point(18,6));
this.Bot6= new ENEMY(this.waypointsBot6[0].x,this.waypointsBot6[0].y,this.waypointsBot6,lvllayoutLevel12Outgunned,preloader);
this.mapLevel12Outgunned.addEnemy(this.Bot6);
this.waypointsBot7= new Array();
this.waypointsBot7.push(new Point(18,19));
this.waypointsBot7.push(new Point(6,19));
this.Bot7= new ENEMY(this.waypointsBot7[0].x,this.waypointsBot7[0].y,this.waypointsBot7,lvllayoutLevel12Outgunned,preloader);
this.mapLevel12Outgunned.addEnemy(this.Bot7);
this.waypointsBot8= new Array();
this.waypointsBot8.push(new Point(5,10));
this.waypointsBot8.push(new Point(5,15));
this.Bot8= new ENEMY(this.waypointsBot8[0].x,this.waypointsBot8[0].y,this.waypointsBot8,lvllayoutLevel12Outgunned,preloader);
this.mapLevel12Outgunned.addEnemy(this.Bot8);
this.waypointsBot9= new Array();
this.waypointsBot9.push(new Point(0,1));
this.waypointsBot9.push(new Point(2,4));
this.Bot9= new ENEMY(this.waypointsBot9[0].x,this.waypointsBot9[0].y,this.waypointsBot9,lvllayoutLevel12Outgunned,preloader);
this.mapLevel12Outgunned.addEnemy(this.Bot9);
ListofLevels.push(this.mapLevel12Outgunned);}