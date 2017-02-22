function Level10IWillFollowYou(ListofLevels, preloader) {var lvllayoutLevel10IWillFollowYou=[[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],[3,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0,3],[3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,3],[3,0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0,3,0,3],[3,0,3,0,0,0,0,0,0,0,0,0,0,0,0,3,0,3,0,3],[3,0,3,0,3,3,3,3,3,3,3,3,3,3,0,3,0,3,0,3],[3,0,3,0,3,0,0,0,0,0,0,0,0,3,0,3,0,3,0,3],[3,0,3,0,3,0,3,3,3,3,3,3,0,3,0,3,0,3,0,3],[3,0,3,0,3,0,3,3,5,0,0,3,0,3,0,3,0,3,0,3],[3,0,3,0,3,0,3,3,3,3,0,3,0,3,0,3,0,3,0,3],[3,0,3,0,3,0,3,3,3,3,0,3,0,3,0,3,0,3,0,3],[3,0,3,0,3,0,3,0,0,0,0,0,0,3,0,3,0,3,0,3],[3,0,3,0,3,0,3,3,3,3,3,3,3,3,0,3,0,3,0,3],[3,0,3,0,3,0,0,0,0,0,0,0,0,0,0,3,0,3,0,3],[3,0,3,0,3,3,3,3,3,3,3,3,3,3,3,3,0,3,0,3],[3,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,3],[3,0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0,3],[3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]];
this.mapLevel10IWillFollowYou = new Map(lvllayoutLevel10IWillFollowYou,preloader);
this.waypointsBot1= new Array();
this.waypointsBot1.push(new Point(1,4));
this.waypointsBot1.push(new Point(12,7));
this.Bot1= new ENEMY(this.waypointsBot1[0].x,this.waypointsBot1[0].y,this.waypointsBot1,lvllayoutLevel10IWillFollowYou,preloader);
this.mapLevel10IWillFollowYou.addEnemy(this.Bot1);
ListofLevels.push(this.mapLevel10IWillFollowYou);}