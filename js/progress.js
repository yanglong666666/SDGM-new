var data = [53, 85, 60, 45, 53];
var xMax = 100;
var axisColor = '#fff';

var jdtCharts1 = echarts.init(document.getElementById('porg1'));

jdtoption1 = {
	/* tooltip: {
	     show: true,
	     formatter: "{b} : {c}"

	 },*/

	xAxis: [{
		axisTick: {
			show: false,
			// color:'#fff',
		},
		axisLine: {
			show: false,
		},
		axisLabel: {
			show: false
			//color:'#fff',
		},
		splitLine: {
			show: false,
			// color:'#fff',
		}
	}],
	yAxis: [{
		type: 'category',
		data: ['9'],
		axisTick: {
			// color:'#fff',
			show: false,
		},
		axisLine: {
			//  color:'#fff',
			show: false,
		},
		axisLabel: {
			show: false
		}

	}],
	series: [{
		name: ' ',
		type: 'bar',
		barWidth: 3,
		silent: true,
		itemStyle: {
			normal: {
				color: '#005F7E',
				barBorderRadius: [0, 5, 5, 0],

			}

		},
		barGap: '-100%',
		barCategoryGap: '50%',
		data: data.map(function(d) {
			return xMax
		}),
	}, {
		name: ' ',
		type: 'bar',
		barWidth: 3,
		label: {
			normal: {
				show: true,
				position: 'top',
				formatter: '{c}/{b}',
			}
		},
		data: [{
			value: QWXX.mj / QWXX.mjzs * 100,
			itemStyle: {
				normal: {
					barBorderRadius: [0, 10, 10, 0],
					color: {
						type: 'bar',
						//  value:"#44D0E3",
						colorStops: [{
							offset: 0,
							color: '#44D0E3' // 0% 处的颜色
						}, {
							offset: 1,
							color: '#44D0E3' // 100% 处的颜色
						}],
						globalCoord: false, // 缺省为 false

					}
				}
			}
		}, ],
	}]
};

var jlstationIds = ["582"];
//$.ajax({
//	type: "post",
//	url: `${YZ.ajaxURLms1}api/jp-BSD-DutyInfo-ms/QW/carDevice/getByStationIds/today/old/count`,
//	async: true,
//	data: JSON.stringify(jlstationIds),
//	contentType: "application/json;charset=UTF-8",
//	dataType: "text",
//	success: function(result1) {
//		console.log(result1);
//		//实际在线警力数
//		$.ajax({
//			type: "post",
//			url: `${YZ.ajaxURLms1}api/jp-BSD-DutyInfo-ms/dutyInfos/policeInfoDevice/getByStationIds/today/count`,
//			async: true,
//			data: JSON.stringify(["D4D2E536-A4BA-4583-A528-37758EEB2EEC"]),
//			contentType: "application/json;charset=UTF-8",
//			dataType: "text",
//			success: function(result2) {
//				console.log(result2);
//				if(result1 === 0 || result1 === null || result1 === ""){
//					jdtoption1.series[1].data[0].value = 100;
//				}else{
//					jdtoption1.series[1].data[0].value = result2 / result1 * 100;
//				}
//				jdtCharts1.setOption(jdtoption1);
//			},
//			error: function(status) {
//				console.log(status);
//			}
//		});
//	},
//	error: function(status) {
//		console.log(status);
//	}
//});

var jlstationIds = ["582"];
$.ajax({
	type: "post",
	url: `${YZ.ajaxURLms1}api/jp-BSD-DutyInfo-ms/QW/policeInfoDevice/getByStationIds/today/old/count`,
	async: true,
	data: JSON.stringify(jlstationIds),
	contentType: "application/json;charset=UTF-8",
	dataType: "text",
	success: function(data1) {
		$.ajax({
			type: "post",
			url: `${YZ.ajaxURLms1}api/jp-BSD-DutyInfo-ms/dutyInfos/policeInfoDevice/getByStationIds/today/count`,
			async: true,
			data: JSON.stringify(["D4D2E536-A4BA-4583-A528-37758EEB2EEC"]),
			contentType: "application/json;charset=UTF-8",
			dataType: "text",
			success: function(data) {
				jdtoption1.series[1].data[0].value = data / data1 * 100;
				jdtCharts1.setOption(jdtoption1);
			},
			error: function(status) {
				console.log(status);
			}
		});
	},
	error: function(status) {
		console.log(status);
	}
});

//setTimeout(function() {
//	jdtoption1.series[1].data[0].value = parseInt($("#yzmj").html()) / parseInt($("#yzmjzs").html()) * 100;
//	jdtCharts1.setOption(jdtoption1);
//}, 3000);

var jdtCharts2 = echarts.init(document.getElementById('porg2'));

jdtoption2 = {
	/* tooltip: {
	     show: true,
	     formatter: "{b} : {c}"

	 },*/

	xAxis: [{
		axisTick: {
			show: false,
			// color:'#fff',
		},
		axisLine: {
			show: false,
		},
		axisLabel: {
			show: false
			//color:'#fff',
		},
		splitLine: {
			show: false,
			// color:'#fff',
		}
	}],
	yAxis: [{
		type: 'category',
		data: ['9'],
		axisTick: {
			// color:'#fff',
			show: false,
		},
		axisLine: {
			//  color:'#fff',
			show: false,
		},
		axisLabel: {
			show: false
		}

	}],
	series: [{
		name: ' ',
		type: 'bar',
		barWidth: 3,
		silent: true,
		itemStyle: {
			normal: {
				color: '#005F7E',
				barBorderRadius: [0, 5, 5, 0],

			}

		},
		barGap: '-100%',
		barCategoryGap: '50%',
		data: data.map(function(d) {
			return xMax
		}),
	}, {
		name: ' ',
		type: 'bar',
		barWidth: 3,
		label: {
			normal: {
				show: true,
				position: 'top',
				formatter: '{c}/{b}',
			}
		},
		data: [{
			//			value: QWXX.jc / QWXX.jczs * 100,
			itemStyle: {
				normal: {
					barBorderRadius: [0, 10, 10, 0],
					color: {
						type: 'bar',
						//  value:"#44D0E3",
						colorStops: [{
							offset: 0,
							color: '#44D0E3' // 0% 处的颜色
						}, {
							offset: 1,
							color: '#44D0E3' // 100% 处的颜色
						}],
						globalCoord: false, // 缺省为 false

					}
				}
			}
		}, ],
	}]
};

$.ajax({
	type: "post",
	url: `${YZ.ajaxURLms1}api/jp-BSD-DutyInfo-ms/QW/carDevice/getByStationIds/today/old/count`,
	async: true,
	data: JSON.stringify(jlstationIds),
	contentType: "application/json;charset=UTF-8",
	dataType: "text",
	success: function(data) {
		if(data === null || data === "" || data === 0) {
			jdtoption2.series[1].data[0].value = 0;
		} else {
			jdtoption2.series[1].data[0].value = data / CXY.cphlen * 100;
		}
		jdtCharts2.setOption(jdtoption2);
	},
	error: function(status) {
		console.log(status);
	}
});

var jdtCharts3 = echarts.init(document.getElementById('porg3'));

jdtoption3 = {
	/* tooltip: {
	     show: true,
	     formatter: "{b} : {c}"

	 },*/

	xAxis: [{
		axisTick: {
			show: false,
			// color:'#fff',
		},
		axisLine: {
			show: false,
		},
		axisLabel: {
			show: false
			//color:'#fff',
		},
		splitLine: {
			show: false,
			// color:'#fff',
		}
	}],
	yAxis: [{
		type: 'category',
		data: ['9'],
		axisTick: {
			// color:'#fff',
			show: false,
		},
		axisLine: {
			//  color:'#fff',
			show: false,
		},
		axisLabel: {
			show: false
		}

	}],
	series: [{
		name: ' ',
		type: 'bar',
		barWidth: 3,
		silent: true,
		itemStyle: {
			normal: {
				color: '#005F7E',
				barBorderRadius: [0, 5, 5, 0],

			}

		},
		barGap: '-100%',
		barCategoryGap: '50%',
		data: data.map(function(d) {
			return xMax
		}),
	}, {
		name: ' ',
		type: 'bar',
		barWidth: 3,
		label: {
			normal: {
				show: true,
				position: 'top',
				formatter: '{c}/{b}',
			}
		},
		data: [{
			//          value: QWXX.kq/QWXX.kqzs*100,
			itemStyle: {
				normal: {
					barBorderRadius: [0, 10, 10, 0],
					color: {
						type: 'bar',
						//  value:"#44D0E3",
						colorStops: [{
							offset: 0,
							color: '#44D0E3' // 0% 处的颜色
						}, {
							offset: 1,
							color: '#44D0E3' // 100% 处的颜色
						}],
						globalCoord: false, // 缺省为 false

					}
				}
			}
		}, ],
	}]
};

var jlstationidnew = "D4D2E536-A4BA-4583-A528-37758EEB2EEC";
$.ajax({
	type: "get",
	url: `${YZ.ajaxURLms1}api/jp-BSD-DutyInfo-ms/stationInfo/StationReportAndRealityNum/${jlstationidnew}`,
	async: true,
	//	data: JSON.stringify(jlstationIds),
	contentType: "application/json;charset=UTF-8",
	dataType: "json",
	success: function(data) {
		var reality = data.reality;
		var report = data.report;
		if(report === null) {
			report = 0;
		}
		if(reality === null) {
			reality = 0;
		}
		//快骑
		jdtoption3.series[1].data[0].value = reality / report * 100;
		jdtCharts3.setOption(jdtoption3);
	},
	error: function(status) {
		console.log(status);
	}
});

var jdtCharts4 = echarts.init(document.getElementById('porg4'));
var data = [53, 85, 60, 45, 53];
var xMax = 100;
var axisColor = '#fff';
jdtoption4 = {
	/* tooltip: {
	     show: true,
	     formatter: "{b} : {c}"

	 },*/

	xAxis: [{
		axisTick: {
			show: false,
			// color:'#fff',
		},
		axisLine: {
			show: false,
		},
		axisLabel: {
			show: false
			//color:'#fff',
		},
		splitLine: {
			show: false,
			// color:'#fff',
		}
	}],
	yAxis: [{
		type: 'category',
		data: ['9'],
		axisTick: {
			// color:'#fff',
			show: false,
		},
		axisLine: {
			//  color:'#fff',
			show: false,
		},
		axisLabel: {
			show: false
		}

	}],
	series: [{
		name: ' ',
		type: 'bar',
		barWidth: 3,
		silent: true,
		itemStyle: {
			normal: {
				color: '#005F7E',
				barBorderRadius: [0, 5, 5, 0],

			}

		},
		barGap: '-100%',
		barCategoryGap: '50%',
		data: data.map(function(d) {
			return xMax
		}),
	}, {
		name: ' ',
		type: 'bar',
		barWidth: 3,
		label: {
			normal: {
				show: true,
				position: 'top',
				formatter: '{c}/{b}',
			}
		},
		data: [{
			value: QWXX.kf / QWXX.kfzs * 100,
			itemStyle: {
				normal: {
					barBorderRadius: [0, 10, 10, 0],
					color: {
						type: 'bar',
						//  value:"#44D0E3",
						colorStops: [{
							offset: 0,
							color: '#44D0E3' // 0% 处的颜色
						}, {
							offset: 1,
							color: '#44D0E3' // 100% 处的颜色
						}],
						globalCoord: false, // 缺省为 false

					}
				}
			}
		}, ],
	}]
};

$.ajax({
	type: "get",
	url: `${YZ.ajaxURLms1}api/jp-BSD-DutyInfo-ms/stationInfo/fetchTodayFastAgainstNum/${jlstationidnew}`,
	async: true,
	//	data: JSON.stringify(jlstationIds),
	contentType: "application/json;charset=UTF-8",
	dataType: "json",
	success: function(data) {
		var reality = data.reality;
		var report = data.report;
		if(report === null) {
			report = 0;
		}
		if(reality === null) {
			reality = 0;
		}
		//快骑
		jdtoption4.series[1].data[0].value = 28 / 30 * 100;
		//快反
		jdtCharts4.setOption(jdtoption4);
	},
	error: function(status) {
		console.log(status);
	}
});

var jdtCharts5 = echarts.init(document.getElementById('porg5'));
jdtoption5 = {
	/* tooltip: {
	     show: true,
	     formatter: "{b} : {c}"

	 },*/

	xAxis: [{
		axisTick: {
			show: false,
			// color:'#fff',
		},
		axisLine: {
			show: false,
		},
		axisLabel: {
			show: false
			//color:'#fff',
		},
		splitLine: {
			show: false,
			// color:'#fff',
		}
	}],
	yAxis: [{
		type: 'category',
		data: ['9'],
		axisTick: {
			// color:'#fff',
			show: false,
		},
		axisLine: {
			//  color:'#fff',
			show: false,
		},
		axisLabel: {
			show: false
		}

	}],
	series: [{
		name: ' ',
		type: 'bar',
		barWidth: 3,
		silent: true,
		itemStyle: {
			normal: {
				color: '#005F7E',
				barBorderRadius: [0, 5, 5, 0],

			}

		},
		barGap: '-100%',
		barCategoryGap: '50%',
		data: data.map(function(d) {
			return xMax
		}),
	}, {
		name: ' ',
		type: 'bar',
		barWidth: 3,
		label: {
			normal: {
				show: true,
				position: 'top',
				formatter: '{c}/{b}',
			}
		},
		data: [{
			value: QWXX.ld / QWXX.ldzs * 100,
			itemStyle: {
				normal: {
					barBorderRadius: [0, 10, 10, 0],
					color: {
						type: 'bar',
						//  value:"#44D0E3",
						colorStops: [{
							offset: 0,
							color: '#44D0E3' // 0% 处的颜色
						}, {
							offset: 1,
							color: '#44D0E3' // 100% 处的颜色
						}],
						globalCoord: false, // 缺省为 false

					}
				}
			}
		}, ],
	}]
};

$.ajax({
	type: "get",
	url: `${YZ.ajaxURLms1}api/jp-BSD-DutyInfo-ms/stationInfo/fetchTodayLinkAgeNum/${jlstationidnew}`,
	async: true,
	//		data:JSON.stringify(jlstationIds),
	contentType: "application/json;charset=UTF-8",
	dataType: "json",
	success: function(data) {
		var reality = data.reality;
		var report = data.report;
		if(report === null) {
			report = 0;
		}
		if(reality === null) {
			reality = 0;
		}
		//绑值
		jdtoption5.series[1].data[0].value = 0;
		//联动
		jdtCharts5.setOption(jdtoption5);
	},
	error: function(status) {
		console.log(status);
	}
});