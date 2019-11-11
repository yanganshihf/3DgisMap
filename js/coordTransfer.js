//经纬度转墨卡托  
function lonlat2mercator(lonlat){  
	var mercator={x:0,y:0};  
	var x = lonlat.x *20037508.34/180;  
	var y = Math.log(Math.tan((90+lonlat.y)*Math.PI/360))/(Math.PI/180);  
	y = y *20037508.34/180;  
	mercator.x = x;  
	mercator.y = y;  
	return mercator ;  
} 

// 经度转摩卡托
function longt2mercator(longt){  
	var x = longt *20037508.34/180;  
	return x ;  
}
// 纬度转摩卡托
function lat2mercator(lat){  
	var y = Math.log(Math.tan((90+lat)*Math.PI/360))/(Math.PI/180);  
	y = y *20037508.34/180;    
	return y ;  
}

//墨卡托转经纬度  
function mercator2lonlat(mercator){  
	var lonlat={x:0,y:0};  
	var x = mercator.x/20037508.34*180;  
	var y = mercator.y/20037508.34*180;  
	y= 180/Math.PI*(2*Math.atan(Math.exp(y*Math.PI/180))-Math.PI/2);  
	lonlat.x = x;  
	lonlat.y = y;  
	return lonlat;  
}  

// 墨卡托转精度
function mercator2lon(x){
	var longt = x/20037508.34*180; 
	return longt;
}

// 墨卡托转维度
function mercator2lat(y){
	var lat = y/20037508.34*180;  
	lat= 180/Math.PI*(2*Math.atan(Math.exp(lat*Math.PI/180))-Math.PI/2);  
	return lat;
}