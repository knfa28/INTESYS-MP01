function Level2(ListofLevels,preloader) {var lvllayout2=[
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,3,3,3,3,3,3,3,3,3,3,3,3,0,0,0,0],
[0,0,0,0,3,1,0,0,0,0,0,0,0,0,0,3,0,0,0,0],
[0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0],
[0,0,0,0,3,3,3,3,0,0,0,3,3,3,3,3,0,0,0,0],
[0,0,0,0,0,0,0,3,0,0,0,3,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,3,0,0,0,3,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,3,0,0,0,3,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,3,0,0,0,3,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,3,0,0,0,3,0,0,0,0,0,0,0,0],
[0,0,0,0,3,3,3,3,0,0,0,3,3,3,3,3,0,0,0,0],
[0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0],
[0,0,0,0,3,0,0,0,0,0,0,0,0,0,5,3,0,0,0,0],
[0,0,0,0,3,3,3,3,3,3,3,3,3,3,3,3,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

];
var map2 = new Map(lvllayout2,preloader);
ListofLevels.push(map2);

 var waypoint10039 = new Array();
 waypoint10039.push(new Point(6,8));
 waypoint10039.push(new Point(12,8));
 waypoint10039.push(new Point(12,10));
 waypoint10039.push(new Point(6,10));
 var enemy10039 = new ENEMY(6,8,waypoint10039,lvllayout2,preloader);
 map2.addEnemy(enemy10039);
 }