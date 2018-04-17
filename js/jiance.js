var jcCharts = echarts.init(document.getElementById('jiance'));

jcoption = {
	legend: {
		data: ['高密市火车站', '高密市汽车站', '高密市民之家', '金孚隆广场'],
		orient: 'vertical',
		x: 'left',
		y: 'center',
		itemGap: 20,
		textStyle: {
			//		        	color:'#ffffff',
			color: '#fff'
		}
	},
	color:['#00fbf2','#1b94fa','#1abffc','#bc1ede'],
	tooltip: {
		trigger: 'axis',
		axisPointer: {
			lineStyle: {
				color: '#272c34'
			}
		}
	},
	grid: {
		left: '30%',
		bottom: '25%',
		top: '10%',
		right:'10%'

	},
	xAxis: [{
		type: 'category',
		boundaryGap: false, //设置x轴从0开始
		axisLine: {
			lineStyle: {
				color: '#272c34'
			}
		},
		axisTick: {
			show: false
		},
		axisLabel: {
			show: true, //x轴数据显示
			textStyle: {
				//						color: '#ffffff',
				color: '#fff'
			},
			rotate: 45
		},
		splitLine: {
			show: true,
			color: '#272c34',
			lineStyle: {
				color: '#272c34'
			}
		},
				data: data
	}],
	yAxis: [{
		type: 'value',
		name: '',
		axisTick: {
			show: false
		},
		axisLine: {
			lineStyle: {
				color: '#272c34'
			}
		},
		axisLabel: {
			margin: 10,
			textStyle: {
				fontSize: 14,
				//						color: '#ffffff'
				color: '#fff'
			},

		},
		splitLine: {
			color: '#272c34',
			lineStyle: {
				color: '#272c34'
			}
		}
	}],
	series: [{
		name: '高密市汽车站',
		type: 'line',
		//stack: '叠加',
		symbol: 'circle', //标记的图形
		symbolSize: 5,
		showSymbol: true, //若为true  则在hover的时候显示
		lineStyle: {
			normal: {
				width: 1
			}
		},
		areaStyle: {
			normal: {
				color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
					offset: 0,
					color: 'rgba(0, 251, 242, 0.3)'
				}, {
					offset: 0.8,
					color: 'rgba(0, 251, 242, 0)'
				}], false),
				shadowColor: 'rgba(0, 0, 0, 0.1)',
				shadowBlur: 10
			}
		},
		
		//		data: [9000, 12000, 3000, 5000, 6500, 1566, 2424, 2342, 3456, 4234]
	}, {
		name: '高密市民之家',
		type: 'line',
		//stack: '叠加',
		symbol: 'circle', //标记的图形
		symbolSize: 5,
		showSymbol: true, //若为true  则在hover的时候显示
		lineStyle: {
			normal: {
				width: 1,
				//	color: '#1b94fa',
			}
		},
		areaStyle: {
			normal: {
				color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
					offset: 0,
					color: 'rgba(27, 148, 250, 0.3)'
				}, {
					offset: 0.8,
					color: 'rgba(27, 148, 250, 0)'
				}], false),
				shadowColor: 'rgba(0, 0, 0, 0.1)',
				shadowBlur: 10
			}
			
		},
				//data: [1900, 1200, 3000, 3000, 5500, 7566, 3424, 2342, 3456, 2342]
	}, {
		name: '金孚隆广场',
		type: 'line',
		//stack: '叠加',
		symbol: 'circle', //标记的图形
		symbolSize: 5,
		showSymbol: true, //若为true  则在hover的时候显示
		lineStyle: {
			normal: {
				width: 1,
				//color: '#1abffc',
			}
		},
		areaStyle: {
			normal: {
				color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
					offset: 0,
					color: 'rgba(26, 171, 252, 0.3)'
				}, {
					offset: 0.8,
					color: 'rgba(26, 171, 252, 0)'
				}], false),
				shadowColor: 'rgba(0, 0, 0, 0.1)',
				shadowBlur: 10
			}
		},
			//	data: [1900, 1200, 3000, 3000, 5500, 7566, 3424, 2342, 3456, 2342]
	}, {
		name: '高密市火车站',
		type: 'line',
		//stack: '叠加',
		symbol: 'circle', //标记的图形
		symbolSize: 5,
		showSymbol: true, //若为true  则在hover的时候显示
		lineStyle: {
			normal: {
				width: 1,
			//	color: '#bc1ede',
			}
		},
		areaStyle: {
			normal: {
				color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
					offset: 0,
					color: 'rgba(188, 30, 222, 0.3)'
				}, {
					offset: 0.8,
					color: 'rgba(188, 30, 222, 0)'
				}], false),
				shadowColor: 'rgba(0, 0, 0, 0.1)',
				shadowBlur: 10
			}
		},
				//data: [1900, 1200, 3000, 3000, 5500, 7566, 3424, 2342, 3456, 2342]
	}]
};


var xtimedata = []
hoursnum = new Date().getHours();
for(var i = 0; i <= hoursnum; i++) {
	xtimedata.push(i + "时");
}
jcoption.xAxis[0].data = xtimedata;

var stationIds = ["D4D2E536-A4BA-4583-A528-37758EEB2EEC"];
var starttime = formatDate4(new Date(), true);
var endtime = formatDate4(new Date(), false);
var time = `${YZ.ajaxURLms1}api/jp-BIPS-PeopleStream-ms/api/bips/peopleStream/stationId/{stationId}/timeRange?startTime=${starttime}&endTime=${endtime}`;
console.log(time);
$.ajax({
	type: "post",
	url: `${YZ.ajaxURLms1}api/jp-BIPS-PeopleStream-ms/api/bips/peopleStream/stationId/{stationId}/timeRange?startTime=${starttime}&endTime=${endtime}`,
	async: true,
	contentType: "application/json;charset=UTF-8",
	data: JSON.stringify(stationIds),
	success: function(data) {
				console.log(data);
		var bfdswz = [];
		var bfzxbh = [];
		var bfwfj = [];
		var bfmj = [];
		for(var i = data.length - 1; i > -1; i--) {
			if(data[i].personStreamPointName === "江汉江汉关区域") {
				bfdswz.push(data[i]);
			}
			if(data[i].personStreamPointName === "江汉中心百货区域") {
				bfzxbh.push(data[i]);
			}
			if(data[i].personStreamPointName === "江汉王府井佳丽区域") {
				bfwfj.push(data[i]);
			}
			if(data[i].personStreamPointName === "江汉M+购物中心区域") {
				bfmj.push(data[i]);
			}
		}

		var afdswz = [];
		var afzxbh = [];
		var afwfj = [];
		var afmj = [];
		//		console.log(new Date().getHours());
		for(var k = 0; k <= (new Date().getHours()); k++) {
			var hour = k < 10 ? "0" + k : k;
			var str = hour + ":10:00.0000000+08:00";
			for(var j = bfdswz.length - 1; j > -1; j--) {
				if(bfdswz[j]["updateTime"].split("T")[1] === str) {
					afdswz.push(bfdswz[j].rtPsCount);
				}
			}
			for(var j = bfzxbh.length - 1; j > -1; j--) {
				if(bfzxbh[j]["updateTime"].split("T")[1] === str) {
					afzxbh.push(bfzxbh[j].rtPsCount);
				
				}
			}
			for(var j = bfmj.length - 1; j > -1; j--) {
				if(bfmj[j]["updateTime"].split("T")[1] === str) {
					afmj.push(bfmj[j].rtPsCount);
				}
			}
			for(var j = bfwfj.length - 1; j > -1; j--) {
				if(bfwfj[j]["updateTime"].split("T")[1] === str) {
					afwfj.push(bfwfj[j].rtPsCount);
				}
			}
			if(afzxbh.length === k) {
				if(afzxbh.length === 0) {
					afzxbh.push(0);
				} else {
					afzxbh.push(afzxbh[k-1]);
				}
			}
			if(afdswz.length === k) {
				if(afdswz.length === 0) {
					afdswz.push(0);
				} else {
					afdswz.push(afdswz[k-1]);
				}
			}
			if(afwfj.length === k) {
				if(afwfj.length === 0) {
					afwfj.push(0);
				} else {
					afwfj.push(afwfj[k-1]);
				}
			}
			if(afmj.length === k) {
				if(afmj.length === 0) {
					afmj.push(0);
				} else {
					afmj.push(afmj[k-1]);
				}
			}
		}
		jcoption.series[0].data = afdswz;
		jcoption.series[1].data = afzxbh;
		jcoption.series[2].data = afwfj;
		jcoption.series[3].data = afmj;
		jcCharts.setOption(jcoption);
//		
	},
	error: function(status) {
		console.log(status);
	}
});
