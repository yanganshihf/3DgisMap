// 定位点图层
var mark_locate;

function init() {
	// 初始化内容
	require(["esri/Map", "esri/views/SceneView", "esri/Graphic", "esri/layers/GraphicsLayer", "esri/symbols/PictureMarkerSymbol"], function(
		Map,
		SceneView,
		Graphic,
		GraphicsLayer,
		PictureMarkerSymbol
	) {
		mark_locate = new GraphicsLayer();
		mark_locate.title = "定位图层";
		mark_locate.listMode = "hide";
		map.add(mark_locate);
	});
}

function mark_point(longt, lat, imgUrl) {
	init();
	require(["esri/Map", "esri/Camera", "esri/views/SceneView", "esri/geometry/Point", "esri/Graphic", "esri/layers/GraphicsLayer", "esri/symbols/PictureMarkerSymbol"], function(
		Map, Camera,
		SceneView,
		Point,
		Graphic,
		GraphicsLayer,
		PictureMarkerSymbol
	) {
		// 自定义标记图标
		var markerSymbol = {
			type: "picture-marker", // autocasts as new
			// PictureMarkerSymbol()
			url: imgUrl,
			width: 30,
			height: 25,
			xoffset: 0,
			yoffset: 8
		};
		
		// 利用经纬度信息创建巡护人员坐标点
		var pt = new Point(longt, lat);

		// 利用经纬度及符号画出巡护人员点
		var graphic = new Graphic({
			geometry: pt,
			symbol: markerSymbol
		});
		// debugger;
		mark_locate.removeAll();
		mark_locate.add(graphic);

		view.goTo(pt);
	});
}

