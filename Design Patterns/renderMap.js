var googleMap={
 	show:function(){
 		console.log('show google Map');
 	}
 };
 var baiduMap={
 	show:function(){
 		console.log('show baidu Map');
 	}
 };
var renderMap=function(map){
	if (map.show instanceof Function) {
		map.show();
	}
};
renderMap(baiduMap);
