function Level15IsThisTheEnd(ListofLevels, preloader) {var lvllayoutLevel15IsThisTheEnd=[[0,3,5,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,3,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,3,0,0,0,3,0,0,0,0,0,0,0,3,3,3,3,0],[0,3,3,3,0,0,0,3,3,3,0,0,0,0,0,3,0,0,0,0],[0,3,0,3,0,0,0,3,5,5,3,3,0,0,3,0,0,0,0,0],[0,0,3,3,0,3,3,3,0,0,3,0,0,0,3,0,0,0,0,0],[0,0,0,3,3,3,0,0,0,0,3,0,0,3,3,3,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,3,0,3,3,5,3,3,0,0,0],[0,0,0,0,0,0,0,0,0,3,0,0,3,0,0,0,3,0,0,0],[0,0,3,3,3,0,0,0,3,0,0,0,3,0,0,0,3,0,0,0],[0,0,3,1,3,3,3,3,3,0,0,0,3,0,0,0,3,0,0,0],[0,0,3,0,0,0,0,0,0,0,0,0,3,0,0,0,3,0,0,0],[0,0,3,0,0,0,0,0,0,0,0,0,3,0,0,0,3,0,0,0],[0,0,3,3,3,3,0,0,0,0,0,0,3,0,0,0,3,0,0,0],[0,0,0,0,0,0,3,3,3,3,3,3,0,0,0,0,3,0,0,0],[0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,0,0,0],[0,3,0,0,0,3,3,3,3,0,0,0,0,0,3,3,0,0,0,0],[0,3,3,3,3,3,0,0,3,3,3,3,3,3,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]];
this.mapLevel15IsThisTheEnd = new Map(lvllayoutLevel15IsThisTheEnd,preloader);
this.waypointsBot1= new Array();
this.waypointsBot1.push(new Point(9,11));
this.waypointsBot1.push(new Point(13,11));
this.waypointsBot1.push(new Point(12,6));
this.Bot1= new ENEMY(this.waypointsBot1[0].x,this.waypointsBot1[0].y,this.waypointsBot1,lvllayoutLevel15IsThisTheEnd,preloader);
this.mapLevel15IsThisTheEnd.addEnemy(this.Bot1);
this.waypointsBot2= new Array();
this.waypointsBot2.push(new Point(13,7));
this.waypointsBot2.push(new Point(11,7));
this.Bot2= new ENEMY(this.waypointsBot2[0].x,this.waypointsBot2[0].y,this.waypointsBot2,lvllayoutLevel15IsThisTheEnd,preloader);
this.mapLevel15IsThisTheEnd.addEnemy(this.Bot2);
this.waypointsBot3= new Array();
this.waypointsBot3.push(new Point(2,8));
this.waypointsBot3.push(new Point(5,13));
this.Bot3= new ENEMY(this.waypointsBot3[0].x,this.waypointsBot3[0].y,this.waypointsBot3,lvllayoutLevel15IsThisTheEnd,preloader);
this.mapLevel15IsThisTheEnd.addEnemy(this.Bot3);
this.waypointsBot4= new Array();
this.waypointsBot4.push(new Point(4,6));
this.waypointsBot4.push(new Point(0,6));
this.waypointsBot4.push(new Point(3,4));
this.Bot4= new ENEMY(this.waypointsBot4[0].x,this.waypointsBot4[0].y,this.waypointsBot4,lvllayoutLevel15IsThisTheEnd,preloader);
this.mapLevel15IsThisTheEnd.addEnemy(this.Bot4);
this.waypointsBot5= new Array();
this.waypointsBot5.push(new Point(0,15));
this.waypointsBot5.push(new Point(3,16));
this.waypointsBot5.push(new Point(6,16));
this.waypointsBot5.push(new Point(15,17));
this.Bot5= new ENEMY(this.waypointsBot5[0].x,this.waypointsBot5[0].y,this.waypointsBot5,lvllayoutLevel15IsThisTheEnd,preloader);
this.mapLevel15IsThisTheEnd.addEnemy(this.Bot5);
this.waypointsBot6= new Array();
this.waypointsBot6.push(new Point(17,14));
this.waypointsBot6.push(new Point(17,19));
this.Bot6= new ENEMY(this.waypointsBot6[0].x,this.waypointsBot6[0].y,this.waypointsBot6,lvllayoutLevel15IsThisTheEnd,preloader);
this.mapLevel15IsThisTheEnd.addEnemy(this.Bot6);
this.waypointsBot7= new Array();
this.waypointsBot7.push(new Point(18,0));
this.waypointsBot7.push(new Point(18,19));
this.waypointsBot7.push(new Point(19,19));
this.waypointsBot7.push(new Point(19,0));
this.Bot7= new ENEMY(this.waypointsBot7[0].x,this.waypointsBot7[0].y,this.waypointsBot7,lvllayoutLevel15IsThisTheEnd,preloader);
this.mapLevel15IsThisTheEnd.addEnemy(this.Bot7);
this.waypointsBot8= new Array();
this.waypointsBot8.push(new Point(15,14));
this.waypointsBot8.push(new Point(15,2));
this.Bot8= new ENEMY(this.waypointsBot8[0].x,this.waypointsBot8[0].y,this.waypointsBot8,lvllayoutLevel15IsThisTheEnd,preloader);
this.mapLevel15IsThisTheEnd.addEnemy(this.Bot8);
this.waypointsBot9= new Array();
this.waypointsBot9.push(new Point(8,13));
this.waypointsBot9.push(new Point(14,13));
this.Bot9= new ENEMY(this.waypointsBot9[0].x,this.waypointsBot9[0].y,this.waypointsBot9,lvllayoutLevel15IsThisTheEnd,preloader);
this.mapLevel15IsThisTheEnd.addEnemy(this.Bot9);
this.waypointsBot10= new Array();
this.waypointsBot10.push(new Point(8,15));
this.waypointsBot10.push(new Point(14,15));
this.Bot10= new ENEMY(this.waypointsBot10[0].x,this.waypointsBot10[0].y,this.waypointsBot10,lvllayoutLevel15IsThisTheEnd,preloader);
this.mapLevel15IsThisTheEnd.addEnemy(this.Bot10);
this.waypointsBot11= new Array();
this.waypointsBot11.push(new Point(6,6));
this.waypointsBot11.push(new Point(6,9));
this.Bot11= new ENEMY(this.waypointsBot11[0].x,this.waypointsBot11[0].y,this.waypointsBot11,lvllayoutLevel15IsThisTheEnd,preloader);
this.mapLevel15IsThisTheEnd.addEnemy(this.Bot11);
this.waypointsBot12= new Array();
this.waypointsBot12.push(new Point(7,3));
this.waypointsBot12.push(new Point(7,9));
this.Bot12= new ENEMY(this.waypointsBot12[0].x,this.waypointsBot12[0].y,this.waypointsBot12,lvllayoutLevel15IsThisTheEnd,preloader);
this.mapLevel15IsThisTheEnd.addEnemy(this.Bot12);
this.waypointsBot13= new Array();
this.waypointsBot13.push(new Point(8,2));
this.waypointsBot13.push(new Point(8,8));
this.Bot13= new ENEMY(this.waypointsBot13[0].x,this.waypointsBot13[0].y,this.waypointsBot13,lvllayoutLevel15IsThisTheEnd,preloader);
this.mapLevel15IsThisTheEnd.addEnemy(this.Bot13);
this.waypointsBot14= new Array();
this.waypointsBot14.push(new Point(14,1));
this.waypointsBot14.push(new Point(7,2));
this.Bot14= new ENEMY(this.waypointsBot14[0].x,this.waypointsBot14[0].y,this.waypointsBot14,lvllayoutLevel15IsThisTheEnd,preloader);
this.mapLevel15IsThisTheEnd.addEnemy(this.Bot14);
this.waypointsBot15= new Array();
this.waypointsBot15.push(new Point(2,2));
this.waypointsBot15.push(new Point(0,0));
this.Bot15= new ENEMY(this.waypointsBot15[0].x,this.waypointsBot15[0].y,this.waypointsBot15,lvllayoutLevel15IsThisTheEnd,preloader);
this.mapLevel15IsThisTheEnd.addEnemy(this.Bot15);
ListofLevels.push(this.mapLevel15IsThisTheEnd);}