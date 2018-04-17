var tsCharts = echarts.init(document.getElementById('taishi'));

defaultGlobalColor = ['#be22ff', '#1b54fa', '#00d1ea', '#00b4e5'],
	defaultShadowColor = 'rgba(204, 214, 235, 0.5)';
tsoption = {

	color: defaultGlobalColor, // 调色盘颜色列表。
	textStyle: { // 全局字体样式
		color: '#fff',
		fontSize: 16
	},

	tooltip: { // 提示框组件
		trigger: 'item', // 触发类型 可选为：'axis' | 'item' | 'none'
		axisPointer: { // 坐标轴指示器，坐标轴触发有效
			type: 'line', // 默认为直线，可选为：'line' | 'shadow'
			shadowStyle: {
				color: defaultShadowColor
			}
		}
	},
	radar: {
		// shape: 'circle',
		radius: '65%',
		center: ['50%', '60%'],
		splitLine: {
			lineStyle: {
				color: ['#fff', '#fff', '#fff', '#fff', '#fff']
			}
		},
		axisLine: {
			lineStyle: {
				color: '#fff',
				type: 'dashed'
			}
		},
		splitLine: {
			lineStyle: {
				color: 'transparent'

			},

		},
		splitArea: {
			areaStyle: {
				color: ['transparent', 'transparent', 'transparent', 'transparent', 'transparent'],
			}
		},
		indicator: [
			//		      {
			//          name: '治安',
			//          max: 30
			//      }, {
			//          name: '举报',
			//          max: 10
			//      }, {
			//          name: '求助',
			//          max: 7
			//      }, {
			//          name: '刑事',
			//          max: 10
			//      }, {
			//          name: '事故',
			//          max: 10
			//		      }
		]
	},
	series: [{

		type: 'radar',
		symbol: 'none',
		areaStyle: {
			normal: {
				opacity: .4
			}
		},
		itemStyle: {
			normal: {
				lineStyle: {
					width: 2
				}
			},
			emphasis: {
				areaStyle: {
					opacity: .3
				}
			}
		},
		data: [
			//		{
			//          value: [17.2, 7.9, 5.6, 6.8, 0.8],
			//        
			//          z: 3
			//      }, {
			//          value: [5.4, 2.6, 1.2, 1.0, 5.5],
			//          
			//          z: 1
			//      }, {
			//          value: [8.0, 8.4, 6.1, 1.9, 0.8],
			//          
			//          z: 5
			//      }, {
			//          value: [6.3, 5.0, 4.5, 8.7, 1.3],
			//          
			//          z: 4
			//      }, {
			//          value: [5.2, 2.9, 3.6, 1.4, 0.2],
			//        
			//          z: 2
			//      }
		]
	}]

};

/*$.ajax({
	type: "get",
	url: `${YZ.ajaxURL}getJHFKJQTSFL`,
	async: true,
	success: function(data) {
		//console.log(data);
		var jqtypes = [];
		var maxnum = [];
		for(var i = data.length - 1; i > -1; i--) {
			var max = [];
			for(var j = data[i].length - 1; j > -1; j--) {
				max.push(data[i][j].NUM);
			}
			maxnum.push(max);
		}
		var maxmax = Math.max.apply(null, maxnum);
		for(var i = data[0].length - 1, data0 = data[0]; i > -1; i--) {
			jqtypes.push(data0[i].TYPE);
		}
		for(var i = jqtypes.length - 1; i > -1; i--) {
			tsoption.radar.indicator.push({
				name: jqtypes[i],
				max: maxmax
			});
		}
		for(var i = data.length - 1; i > -1; i--) {
			var numdata = [];
			for(var j = data[i].length - 1, data1 = data[i]; j > -1; j--) {
				numdata.push(data1[j].NUM);
			}
			tsoption.series[0].data.push({
				value: numdata,
				z: i
			});
		}
		tsCharts.setOption(tsoption);
	},
	error: function(status) {
		console.log(status);
	}
});*/
function initJQ() {
	var jqtypes = [];
	var maxnum = [];
	for(var i = data.length - 1; i > -1; i--) {
		var max = [];
		for(var j = data[i].length - 1; j > -1; j--) {

			max.push(data[i][j].NUM);
		}
		maxnum.push(max);
	}
	var maxmax = 10;
	for(var i = data[0].length - 1, data0 = data[0]; i > -1; i--) {
		jqtypes.push(data0[i].TYPE);
	}
	for(var i = jqtypes.length - 1; i > -1; i--) {
		tsoption.radar.indicator.push({
			name: jqtypes[i],
			max: maxmax
		});
	}
	for(var i = data.length - 1; i > -1; i--) {
		var numdata = [];
		for(var j = data[i].length - 1, data1 = data[i]; j > -1; j--) {
			numdata.push(data1[j].NUM);
		}
		tsoption.series[0].data.push({
			value: numdata,
			name: data[i][0].NAME
		});
	}
	tsCharts.setOption(tsoption);
}

initJQ();

var ycCharts1 = echarts.init(document.getElementById('yc1'));
ycoption1 = {
	series: [{
		type: 'liquidFill',
		data: [0.6],
		color: ['#1b94fa'],
		radius: '85%',
		label: {
			normal: {
				textStyle: {
					fontSize: 18, //字体大小
					color: '#fff'
				}
			}
		},
		itemStyle: { //容器内部颜色透明度等
			normal: {
				opacity: 0.5
			},
			emphasis: {
				opacity: 0.1
			}
		},
		backgroundStyle: {
			borderWidth: 2,
			borderColor: '#1b94fa',
			color: 'transparent',
		},
		outline: {
			borderDistance: 0,
			itemStyle: {
				borderWidth: 2,
				borderColor: '#1b94fa',
				shadowBlur: 20,
				//              shadowColor: 'rgba(255, 0, 0, 1)'
			}
		}
	}]
};

var ycCharts2 = echarts.init(document.getElementById('yc2'));
ycoption2 = {
	series: [{
		type: 'liquidFill',
		data: [0.7],
		color: ['#00fbf2'],
		radius: '85%',
		itemStyle: {
			normal: {
				shadowBlur: 0
			}
		},
		label: {
			normal: {
				textStyle: {
					fontSize: 18, //字体大小
					color: '#fff'
				}
			}
		},
		itemStyle: { //容器内部颜色透明度等
			normal: {
				opacity: 0.5
			},
			emphasis: {
				opacity: 0.1
			}
		},
		backgroundStyle: {
			borderWidth: 2,
			borderColor: '#00fbf2',
			color: 'transparent'
		},
		outline: {
			borderDistance: 0,
			itemStyle: {
				borderWidth: 2,
				borderColor: '#00fbf2',
				shadowBlur: 20,
				//              shadowColor: 'rgba(255, 0, 0, 1)'
			}
		}
	}]
};

var ycCharts3 = echarts.init(document.getElementById('yc3'));
ycoption3 = {
	series: [{
		type: 'liquidFill',
		data: [0.7],
		color: ['#1abffc'],
		radius: '85%',
		itemStyle: {
			normal: {
				shadowBlur: 0
			}
		},
		label: {
			normal: {
				textStyle: {
					fontSize: 18, //字体大小
					color: '#fff'
				}
			}
		},
		itemStyle: { //容器内部颜色透明度等
			normal: {
				opacity: 0.5
			},
			emphasis: {
				opacity: 0.1
			}
		},
		backgroundStyle: {
			borderWidth: 2,
			borderColor: '#1abffc',
			color: 'transparent',
		},
		outline: {
			borderDistance: 0,
			itemStyle: {
				borderWidth: 2,
				borderColor: '#1abffc',
				shadowBlur: 20,
				//              shadowColor: 'rgba(255, 0, 0, 1)'
			}
		}
	}]
};

var ycCharts4 = echarts.init(document.getElementById('yc4'));
ycoption4 = {
	series: [{
		type: 'liquidFill',
		data: [0.6],
		color: ['#bc1ede'],
		opacity: 0.3,
		radius: '85%',
		label: {
			normal: {
				textStyle: {
					fontSize: 18, //字体大小
					color: '#fff'
				}
			}
		},
		itemStyle: { //容器内部颜色透明度等
			normal: {
				opacity: 0.5
			},
			emphasis: {
				opacity: 0.1
			}
		},
		backgroundStyle: {
			borderWidth: 2,
			borderColor: '#bc1ede',
			color: 'transparent',

		},
		outline: {
			borderDistance: 0,
			itemStyle: {
				borderWidth: 2,
				borderColor: '#bc1ede',
				shadowBlur: 20,

			}
		}
	}]
};

//高发预测
var ycData = [
	//治安 
	[{
			"NUM": 0.70 //球的百分比
		},
		{
			"NUM": 0.68
		},
		{
			"NUM": 0.59
		},
		{
			"NUM": 0.69
		}
	],
	[
		//事件
		{
			"NUM": 0.72
		},
		{
			"NUM": 0.58
		},
		{
			"NUM": 0.67
		},
		{
			"NUM": 0.82
		}
	],
	[ //刑事
		{
			"NUM": 0.65
		},
		{
			"NUM": 0.57
		},
		{
			"NUM": 0.63
		},
		{
			"NUM": 0.72
		}
	],
	[ //求助
		{
			"NUM": 0.81
		},
		{
			"NUM": 0.56
		},
		{
			"NUM": 0.62
		},
		{
			"NUM": 0.71
		}
	],
	[ //举报
		{
			"NUM": 0.80
		},
		{
			"NUM": 0.55
		},
		{
			"NUM": 0.60
		},
		{
			"NUM": 0.68
		}
	]
];
$.ajax({
	type: "get",
	url: "http://59.39.4.11:12345/API/QWPlanServer/GetCaseFrequencybyType?type=0",
	async: true,
	success: function(data) {

		var jsondata = JSON.parse(data);
		for(var i = jsondata.length - 1; i > -1; i--) {
			if(jsondata[i]["Area"] === "武汉关" && jsondata[i]["CaseID"] === "20") {
				ycData[0][0]["NUM"] = jsondata[i]["Value"] / 100;
			}
			if(jsondata[i]["Area"] === "中心百货" && jsondata[i]["CaseID"] === "20") {
				ycData[0][1]["NUM"] = jsondata[i]["Value"] / 100;
			}
			if(jsondata[i]["Area"] === "王府井佳丽" && jsondata[i]["CaseID"] === "20") {
				ycData[0][2]["NUM"] = jsondata[i]["Value"] / 100;
			}
			if(jsondata[i]["Area"] === "M+" && jsondata[i]["CaseID"] === "20") {
				ycData[0][3]["NUM"] = jsondata[i]["Value"] / 100;
			}
			if(jsondata[i]["Area"] === "武汉关" && jsondata[i]["CaseID"] === "30") {
				ycData[1][0]["NUM"] = jsondata[i]["Value"] / 100;
			}
			if(jsondata[i]["Area"] === "中心百货" && jsondata[i]["CaseID"] === "30") {
				ycData[1][1]["NUM"] = jsondata[i]["Value"] / 100;
			}
			if(jsondata[i]["Area"] === "王府井佳丽" && jsondata[i]["CaseID"] === "30") {
				ycData[1][2]["NUM"] = jsondata[i]["Value"] / 100;
			}
			if(jsondata[i]["Area"] === "M+" && jsondata[i]["CaseID"] === "30") {
				ycData[1][3]["NUM"] = jsondata[i]["Value"] / 100;
			}
			if(jsondata[i]["Area"] === "武汉关" && jsondata[i]["CaseID"] === "10") {
				ycData[2][0]["NUM"] = jsondata[i]["Value"] / 100;
			}
			if(jsondata[i]["Area"] === "中心百货" && jsondata[i]["CaseID"] === "10") {
				ycData[2][1]["NUM"] = jsondata[i]["Value"] / 100;
			}
			if(jsondata[i]["Area"] === "王府井佳丽" && jsondata[i]["CaseID"] === "10") {
				ycData[2][2]["NUM"] = jsondata[i]["Value"] / 100;
			}
			if(jsondata[i]["Area"] === "M+" && jsondata[i]["CaseID"] === "10") {
				ycData[2][3]["NUM"] = jsondata[i]["Value"] / 100;
			}
			if(jsondata[i]["Area"] === "武汉关" && jsondata[i]["CaseID"] === "50") {
				ycData[3][0]["NUM"] = jsondata[i]["Value"] / 100;
			}
			if(jsondata[i]["Area"] === "中心百货" && jsondata[i]["CaseID"] === "50") {
				ycData[3][1]["NUM"] = jsondata[i]["Value"] / 100;
			}
			if(jsondata[i]["Area"] === "王府井佳丽" && jsondata[i]["CaseID"] === "50") {
				ycData[3][2]["NUM"] = jsondata[i]["Value"] / 100;
			}
			if(jsondata[i]["Area"] === "M+" && jsondata[i]["CaseID"] === "50") {
				ycData[3][3]["NUM"] = jsondata[i]["Value"] / 100;
			}
			if(jsondata[i]["Area"] === "武汉关" && jsondata[i]["CaseID"] === "90") {
				ycData[4][0]["NUM"] = jsondata[i]["Value"] / 100;
			}
			if(jsondata[i]["Area"] === "中心百货" && jsondata[i]["CaseID"] === "90") {
				ycData[4][1]["NUM"] = jsondata[i]["Value"] / 100;
			}
			if(jsondata[i]["Area"] === "王府井佳丽" && jsondata[i]["CaseID"] === "90") {
				ycData[4][2]["NUM"] = jsondata[i]["Value"] / 100;
			}
			if(jsondata[i]["Area"] === "M+" && jsondata[i]["CaseID"] === "90") {
				ycData[4][3]["NUM"] = jsondata[i]["Value"] / 100;
			}
		}
		initcharts(0);

		function initcharts(value) {

			//	 ycoption1.series[0].data=[0.5];
			//	 ycCharts1.setOption(ycoption1);

			ycCharts1.clear()
			ycoption1.series[0].data = [ycData[value][0].NUM];
			//console.log(ycData[value][0].NUM)
			ycCharts1.setOption(ycoption1);
			ycCharts2.clear()
			ycoption2.series[0].data = [ycData[value][1].NUM];
			ycCharts2.setOption(ycoption2);
			ycCharts3.clear()
			ycoption3.series[0].data = [ycData[value][2].NUM];
			ycCharts3.setOption(ycoption3);
			ycCharts4.clear()
			ycoption4.series[0].data = [ycData[value][3].NUM];
			ycCharts4.setOption(ycoption4);
		}

		$("#divselect ul li").click(function() {
			$("#divselect").find("cite").text("");
			var name = $(this).text();
			$("#divselect").find("cite").text(name);
			$("#divselect ul").slideUp("fast");
			var value = $(this).val();
			console.log($(this).val());
			initcharts(value);
		});
	}
});

//function initcharts(value) {
//
//	//	 ycoption1.series[0].data=[0.5];
//	//	 ycCharts1.setOption(ycoption1);
//
//	ycCharts1.clear()
//	ycoption1.series[0].data = [ycData[value][0].NUM];
//	//console.log(ycData[value][0].NUM)
//	ycCharts1.setOption(ycoption1);
//	ycCharts2.clear()
//	ycoption2.series[0].data = [ycData[value][1].NUM];
//	ycCharts2.setOption(ycoption2);
//	ycCharts3.clear()
//	ycoption3.series[0].data = [ycData[value][2].NUM];
//	ycCharts3.setOption(ycoption3);
//	ycCharts4.clear()
//	ycoption4.series[0].data = [ycData[value][3].NUM];
//	ycCharts4.setOption(ycoption4);
//}

$("#divselect cite").click(function() {
	var ul = $("#divselect ul");
	if(ul.css("display") == "none") {
		ul.slideDown("fast");
	} else {
		ul.slideUp("fast");
	}
});

//$(function() {
//
//	$("#divselect ul li").click(function() {
//		$("#divselect").find("cite").text("");
//		var name = $(this).text();
//		$("#divselect").find("cite").text(name);
//		$("#divselect ul").slideUp("fast");
//		var value = $(this).val();
//		console.log($(this).val());
//		initcharts(value);
//	});
//})