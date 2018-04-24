$(function () {
	var num = 0;
	var num1 = 0;
	var num2 = 0;
	// $(".road-ul li").click(function() {
	// var value = $(this).attr("value");
	// $.ajax({
	// type: "get",
	// url: "http://59.39.4.11:12345/API/RouteInfoServer/GetRouteStatusCollection",
	// async: false,
	// success: function(data) {
	// num = 0;
	// num1 = 0;
	// num2 = 0;
	// var roadfrom = ""; //路况起点名
	// var roadto = ";" //路况拥堵名
	// var roadtime = ""; //路况时间
	// var html = "";
	// var objdata = JSON.parse(data)
	// console.log(objdata);

	// for(var i = 0; i < objdata.length; i++) {
	// var child = objdata[i].RouteSectionList;
	// for(var j = 0; j < child.length; j++) {

	// var road = "";
	// if(child[j].RoadSection.match("到")) {
	// road = child[j].RoadSection.split("到");
	// roadfrom = road[0].split("从")[1];
	// roadto = road[1];
	// } else {
	// road = child[j].RoadSection;
	// }

	// roadtime = child[j].RoadTime;

	// if(child[j].RoadStatus == "拥堵") {
	// num++;
	// html += '<li class="yd"><div><span>' + num + '</span></div><div class="time">' + roadtime + '</div><div class="road-name"><span class="road-from">' + roadfrom + '</span>-<span class="road-to">' + roadto + '</span></div><div class="road-static">' + child[j].RoadStatus + '</div></li>';
	// } else if(child[j].RoadStatus == "缓行") {

	// num1++;
	// html += '<li class="hx"><div><span>' + num1 + '</span></div><div class="time">' + roadtime + '</div><div class="road-name"><span class="road-from">' + roadfrom + '</span>-<span class="road-to">' + roadto + '</span></div><div class="road-static">' + child[j].RoadStatus + '</div></li>';
	// } else if(child[j].RoadStatus == "畅通") {

	// num2++;
	// html += '<li class="ct"><div><span>' + num2 + '</span></div><div class="time">' + roadtime + '</div><div class="road-name"><span class="road-from">' + roadfrom + '</span>-<span class="road-to">' + roadto + '</span></div><div class="road-static">' + child[j].RoadStatus + '</div></li>';
	// }

	// }
	// /*console.log(html1);
	// console.log(html2);
	// console.log(html3);*/
	// }
	// if(value == '1') {
	// $(".info-div ul li").remove();
	// $(".info-div ul").append(html);
	// $(".info-div ul li").remove('.hx');
	// $(".info-div ul li").remove('.ct');
	// } else if(value == '2') {
	// $(".info-div ul li").remove();
	// $(".info-div ul").append(html);
	// $(".info-div ul li").remove('.yd');
	// $(".info-div ul li").remove('.ct');

	// } else if(value == '3') {
	// $(".info-div ul li").remove();
	// $(".info-div ul").append(html);
	// $(".info-div ul li").remove('.hx');
	// $(".info-div ul li").remove('.yd');

	// }
	// }
	// });

	// });

	//最新警情
	$.ajax({
		type: "get",
		url: `getJXJQLastedNew`,
		async: true,
		success: function (data) {

			console.log(data);
			var newJQhtml = "";
			for (var i = 0, len = data.length; i < len; i++) {
				if (data[i]["LEVELS"] === 1) {
					newJQhtml += `<li data-id="${data[i].SN}" class="dj-one">
										<div class="jq-left">
											<span>警</span>
										</div>
										<div class="jq-right">
											<p><span>${data[i]["TIME"]}</span><span>【${data[i]["TYPE"]}】</span></p>
											<p>${data[i]["CONTENT"]}</p>
											<div>地址：${data[i]["ADDRESS"]}/div>
										</div>
									</li>`;
				}
				if (data[i]["LEVELS"] === 2) {
					newJQhtml += `<li data-id="${data[i].SN}" class="dj-two">
										<div class="jq-left">
											<span>警</span>
										</div>
										<div class="jq-right">
											<p><span>${data[i]["TIME"]}</span><span>【${data[i]["TYPE"]}】</span></p>
											<p>${data[i]["CONTENT"]}</p>
											<div>地址：${data[i]["ADDRESS"]}</div>
										</div>
									</li>`;
				}
				if (data[i]["LEVELS"] === 3) {
					newJQhtml += `<li data-id="${data[i].SN}" class="dj-three">
										<div class="jq-left">
											<span>警</span>
										</div>
										<div class="jq-right">
											<p><span>${data[i]["TIME"]}</span><span>【${data[i]["TYPE"]}】</span></p>
											<p>${data[i]["CONTENT"]}</p>
											<div>地址：${data[i]["ADDRESS"]}</div>
										</div>
									</li>`;
				}
			}
			$(".new-ul").html(newJQhtml);

		},
		error: function (status) {
			console.log(status);
		}
	});


	//	数据接入今日警情
	//	var JQobj = {};
	//	JQobj.startTime = formatDate(new Date(), true);
	//	JQobj.endTime = formatDate(new Date(), false);
	//	JQobj.stationId = "D4D2E536-A4BA-4583-A528-37758EEB2EEC";
	//		console.log(JSON.stringify(JQobj));
	$(".jt-map").attr("src", 'http://59.39.4.11:12346/RouteFile/Route296206.png');
	$(".map-info").attr("src", "http://59.39.4.11:12346/RouteFile/Route450313.png");
	$.ajax({
		type: "get",
		url: `${YZ.ajaxURLms1}api/jp-BIO-Order-ms/instructionBusiness/todayAlarmSum`,
		async: true,
		contentType: "application/json;charset=UTF-8",
		//		data: JSON.stringify(JQobj),
		success: function (data) {
			//			console.log(data);
			if (data === null || data === "") {
				data = 0
			}
			//			var num = 0;
			//			for(var i = data.length - 1; i > -1; i--) {
			//				num += data[i].count;
			//			}
			$(".one-left span").html(data);
		},
		error: function (status) {
			//			console.log(status);
		}
	});

	setInterval(function () {
		$.ajax({
			type: "get",
			url: `${YZ.ajaxURLms1}api/jp-BIO-Order-ms/instructionBusiness/todayAlarmSum`,
			async: true,
			contentType: "application/json;charset=UTF-8",
			//		data: JSON.stringify(JQobj),
			success: function (data) {
				//			console.log(data);
				if (data === null || data === "") {
					data = 0
				}
				//			var num = 0;
				//			for(var i = data.length - 1; i > -1; i--) {
				//				num += data[i].count;
				//			}
				$(".one-left span").html(data);
			},
			error: function (status) {
				console.log(status);
			}
		});
	}, 1000 * 60 * 5);

	var scrollTimer2;
	var $that2 = $(".new-div");

	$that2.hover(function () {
		clearInterval(scrollTimer2);
	}, function () {
		scrollTimer2 = setInterval(function () {
			scrollNews($that2);
		}, 3000);
	}).trigger("mouseout");

	//重点人识别总数
	var zdrsbStationId = "D4D2E536-A4BA-4583-A528-37758EEB2EEC";
	$.ajax({
		type: "get",
		url: `${YZ.ajaxURLms1}api/jp-BICA-ControlAlarm-ms/gatheralarm/todayHumanAlarms/page/${zdrsbStationId}`,
		async: true,
		success: function (data) {
			//console.log(data);
			$(".top-left span").html(data.totalCount);
		},
		error: function (status) {
			console.log(status);
		}
	});
	setInterval(function () {
		var zdrsbStationId = "D4D2E536-A4BA-4583-A528-37758EEB2EEC";
		$.ajax({
			type: "get",
			url: `${YZ.ajaxURLms1}api/jp-BICA-ControlAlarm-ms/gatheralarm/todayHumanAlarms/page/${zdrsbStationId}`,
			async: true,
			success: function (data) {
				$(".top-left span").html(data.totalCount);
			},
			error: function (status) {
				console.log(status);
			}
		});
	}, 5000);

	//人流总数
	var stationIds = ["D4D2E536-A4BA-4583-A528-37758EEB2EEC"];
	$.ajax({
		type: "post",
		url: `${YZ.ajaxURLms1}api/jp-BIPS-PeopleStream-ms/api/bips/peopleStream/peopleStreamInfoListLatest`,
		async: true,
		contentType: "application/json;charset=UTF-8",
		data: JSON.stringify(stationIds),
		success: function (data) {
			SetPeopoleStream(data, true);
			//			console.log(data);
			// var peopleSum = 0;
			// var hcz_num = 0;
			// var qcz_num = 0;
			// var qygs_num = 0;
			// var ljy_num = 0;
			// var hy_num = 0;
			// var jz_num = 0;
			// for (var i = data.length - 1; i > -1; i--) {
			// 	if (data[i].personStreamPointName === "火车站" ||
			// 		data[i].personStreamPointName === "汽车站" ||
			// 		data[i].personStreamPointName === "青银高速" ||
			// 		data[i].personStreamPointName === "李家营" ||
			// 		data[i].personStreamPointName === "河涯" ||
			// 		data[i].personStreamPointName === "姜庄") {
			// 		peopleSum += data[i].rtPsCount;
			// 	}

			// 	if (data[i].personStreamPointName === "火车站") {
			// 		hcz_num = data[i].rtPsCount;
			// 	}
			// 	if (data[i].personStreamPointName === "汽车站") {
			// 		qcz_num = data[i].rtPsCount;
			// 	}
			// 	if (data[i].personStreamPointName === "青银高速") {
			// 		qygs_num = data[i].rtPsCount;
			// 	}
			// 	if (data[i].personStreamPointName === "李家营") {
			// 		ljy_num = data[i].rtPsCount;
			// 	}
			// 	if (data[i].personStreamPointName === "河涯") {
			// 		hy_num = data[i].rtPsCount;
			// 	}
			// 	if (data[i].personStreamPointName === "姜庄") {
			// 		jz_num = data[i].rtPsCount;
			// 	}
			// }
			// var progressBox1 = document.getElementById("progressBox1");
			// var progressBox2 = document.getElementById("progressBox2");
			// var progressBox3 = document.getElementById("progressBox3");
			// var progressBox4 = document.getElementById("progressBox4");
			// var progressBox5 = document.getElementById("progressBox5");
			// var progressBox6 = document.getElementById("progressBox6");

			// var tmp = new Array(hcz_num, qcz_num, qygs_num, ljy_num, hy_num, jz_num);
			// tmp.sort(function (a, b) {
			// 	return b - a;
			// });
			// var max = tmp[0];

			// value(hcz_num, progressBox1, 'hcz');
			// value(qcz_num, progressBox2, 'qcz');
			// value(qygs_num, progressBox3, 'qygs');
			// value(ljy_num, progressBox4, 'ljy');
			// value(hy_num, progressBox5, 'hy');
			// value(jz_num, progressBox6, 'jz');

			// function value(num, id, name) {
			// 	var val = (num / max) * 5;
			// 	if (val <= 1) {
			// 		val = 1
			// 	} else {
			// 		val = Math.round((num / max) * 10)
			// 	}
			// 	var div1 = document.createElement("div");
			// 	div1.setAttribute("class", "barBox");
			// 	id.appendChild(div1);
			// 	var span = document.createElement("span");
			// 	div1.appendChild(span);
			// 	span.setAttribute("class", "span");
			// 	span.innerHTML = num;
			// 	var ul = document.createElement("ul");
			// 	ul.setAttribute("class", "bar");
			// 	div1.appendChild(ul);
			// 	//			   if(i==i){
			// 	for (var j = 0; j < val; j++) {
			// 		var li = document.createElement("li");
			// 		li.setAttribute("class", name);
			// 		ul.appendChild(li);
			// 		li.style.bottom = j * 10 + 'px';
			// 	}
			// 	//			   }
			// 	var barH = span.offsetHeight;
			// 	span.style.paddingTop = (barH - j * 10) + 'px';
			// }

			// $(".num-div").html(peopleSum);
		},
		error: function (status) {
			console.log(status);
		}
	});

	function SetPeopoleStream(data, isFirstLoad) {
		var peopleSum = 0;
		var hcz_num = 0;
		var qcz_num = 0;
		var qygs_num = 0;
		var ljy_num = 0;
		var hy_num = 0;
		var jz_num = 0;
		for (var i = data.length - 1; i > -1; i--) {
			if (data[i].personStreamPointName === "火车站" ||
				data[i].personStreamPointName === "汽车站" ||
				data[i].personStreamPointName === "青银高速" ||
				data[i].personStreamPointName === "李家营" ||
				data[i].personStreamPointName === "河涯" ||
				data[i].personStreamPointName === "姜庄") {
				peopleSum += data[i].rtPsCount;
			}

			if (data[i].personStreamPointName === "火车站") {
				hcz_num = data[i].rtPsCount;
			}
			if (data[i].personStreamPointName === "汽车站") {
				qcz_num = data[i].rtPsCount;
			}
			if (data[i].personStreamPointName === "青银高速") {
				qygs_num = data[i].rtPsCount;
			}
			if (data[i].personStreamPointName === "李家营") {
				ljy_num = data[i].rtPsCount;
			}
			if (data[i].personStreamPointName === "河涯") {
				hy_num = data[i].rtPsCount;
			}
			if (data[i].personStreamPointName === "姜庄") {
				jz_num = data[i].rtPsCount;
			}
		}
		var progressBox1 = document.getElementById("progressBox1");
		var progressBox2 = document.getElementById("progressBox2");
		var progressBox3 = document.getElementById("progressBox3");
		var progressBox4 = document.getElementById("progressBox4");
		var progressBox5 = document.getElementById("progressBox5");
		var progressBox6 = document.getElementById("progressBox6");

		var tmp = new Array(hcz_num, qcz_num, qygs_num, ljy_num, hy_num, jz_num);
		tmp.sort(function (a, b) {
			return b - a;
		});
		var max = tmp[0];

		if (!isFirstLoad) {
			$("#progressBox1").find(".barBox").remove();
			$("#progressBox2").find(".barBox").remove();
			$("#progressBox3").find(".barBox").remove();
			$("#progressBox4").find(".barBox").remove();
			$("#progressBox5").find(".barBox").remove();
			$("#progressBox6").find(".barBox").remove();
		}

		value(hcz_num, progressBox1, 'hcz');
		value(qcz_num, progressBox2, 'qcz');
		value(qygs_num, progressBox3, 'qygs');
		value(ljy_num, progressBox4, 'ljy');
		value(hy_num, progressBox5, 'hy');
		value(jz_num, progressBox6, 'jz');

		function value(num, id, name) {
			var val = (num / max) * 5;
			if (val <= 1) {
				val = 1
			} else {
				val = Math.round((num / max) * 10)
			}
			var div1 = document.createElement("div");
			div1.setAttribute("class", "barBox");
			id.appendChild(div1);
			var span = document.createElement("span");
			div1.appendChild(span);
			span.setAttribute("class", "span");
			span.innerHTML = num;
			var ul = document.createElement("ul");
			ul.setAttribute("class", "bar");
			div1.appendChild(ul);
			//			   if(i==i){
			for (var j = 0; j < val; j++) {
				var li = document.createElement("li");
				li.setAttribute("class", name);
				ul.appendChild(li);
				li.style.bottom = j * 10 + 'px';
			}
			//			   }
			var barH = span.offsetHeight;
			span.style.paddingTop = (barH - j * 10) + 'px';
		}

		$(".num-div").html(peopleSum);
	}

	setInterval(function () {
		var stationIds = ["D4D2E536-A4BA-4583-A528-37758EEB2EEC"];
		$.ajax({
			type: "post",
			url: `${YZ.ajaxURLms1}api/jp-BIPS-PeopleStream-ms/api/bips/peopleStream/peopleStreamInfoListLatest`,
			async: true,
			contentType: "application/json;charset=UTF-8",
			data: JSON.stringify(stationIds),
			success: function (data) {
				SetPeopoleStream(data, false);
				// var peopleSum = 0;
				// var hcz_num = 0;
				// var qcz_num = 0;
				// var qygs_num = 0;
				// var ljy_num = 0;
				// var hy_num = 0;
				// var jz_num = 0;
				// for (var i = data.length - 1; i > -1; i--) {
				// 	if (data[i].personStreamPointName === "江汉江汉关区域" ||
				// 		data[i].personStreamPointName === "江汉中心百货区域" || data[i].personStreamPointName === "江汉王府井佳丽区域" || data[i].personStreamPointName === "江汉M+购物中心区域") {
				// 		peopleSum += data[i].rtPsCount;
				// 	}
				// 	if (data[i].personStreamPointName === "江汉江汉关区域") {
				// 		jhfjdswzqynum = data[i].rtPsCount;
				// 	}
				// 	if (data[i].personStreamPointName === "江汉中心百货区域") {
				// 		jhzxbhqynum = data[i].rtPsCount;
				// 	}
				// 	if (data[i].personStreamPointName === "江汉王府井佳丽区域") {
				// 		jhwfjjlqynum = data[i].rtPsCount;
				// 	}
				// 	if (data[i].personStreamPointName === "江汉M+购物中心区域") {
				// 		jhmjgwzxqynum = data[i].rtPsCount;
				// 	}
				// }
				// var progressBox1 = document.getElementById("progressBox1");
				// var progressBox2 = document.getElementById("progressBox2");
				// var progressBox3 = document.getElementById("progressBox3");
				// var progressBox4 = document.getElementById("progressBox4");

				// var tmp = new Array(jhfjdswzqynum, jhwfjjlqynum, jhmjgwzxqynum, jhzxbhqynum);
				// tmp.sort(function (a, b) {
				// 	return b - a;
				// });
				// var max = tmp[0];

				// $("#progressBox1").find(".barBox").remove();
				// $("#progressBox2").find(".barBox").remove();
				// $("#progressBox3").find(".barBox").remove();
				// $("#progressBox4").find(".barBox").remove();

				// value(jhfjdswzqynum, progressBox1, 'jhg');
				// value(jhwfjjlqynum, progressBox2, 'wfj');
				// value(jhmjgwzxqynum, progressBox3, 'gwzx');
				// value(jhzxbhqynum, progressBox4, 'zxbh');
				// value(jhzxbhqynum, progressBox4, 'zxbh');
				// value(jhzxbhqynum, progressBox4, 'zxbh');

				// function value(num, id, name) {
				// 	var val = (num / max) * 5;
				// 	if (val <= 1) {
				// 		val = 1
				// 	} else {
				// 		val = Math.round((num / max) * 10)
				// 	}
				// 	var div1 = document.createElement("div");
				// 	div1.setAttribute("class", "barBox");
				// 	id.appendChild(div1);
				// 	var span = document.createElement("span");
				// 	div1.appendChild(span);
				// 	span.setAttribute("class", "span");
				// 	span.innerHTML = num;
				// 	var ul = document.createElement("ul");
				// 	ul.setAttribute("class", "bar");
				// 	div1.appendChild(ul);
				// 	//			   if(i==i){
				// 	for (var j = 0; j < val; j++) {
				// 		var li = document.createElement("li");
				// 		li.setAttribute("class", name);
				// 		ul.appendChild(li);
				// 		li.style.bottom = j * 10 + 'px';
				// 	}
				// 	//			   }
				// 	var barH = span.offsetHeight;
				// 	span.style.paddingTop = (barH - j * 10) + 'px';
				// }

				// $(".num-div").html(peopleSum);
			},
			error: function (status) {
				console.log(status);
			}
		});
	}, 1000 * 60 * 5);

	//交通信息的地图刷新
	setInterval(function () {
		$(".jt-map").attr("src", 'http://59.39.4.11:12346/RouteFile/Route296206.png');
		$(".map-info").attr("src", "http://59.39.4.11:12346/RouteFile/Route450313.png");
		jt();
	}, 1000 * 60 * 5);
	var ff = 0;
	jt();
	//交通信息弹出层
	// $(".jt-map").click(function() {
	// ff++;
	// clearInterval();

	// $(".jtxx").show();
	// if(ff > 1) {
	// jt();
	// }

	// });
	$(".new-ul").on("click", "li", function () {
		$(".ssjt").html("警情详情");
		$(".jq-div div").html($(this).find("p").eq(0).find("span").eq(1).html());
		$(".jq-div p").html($(this).find("p").eq(1).html() + "<br>" + $(this).find(".jq-right").find("div").html());
		$(".jqxx").show();
	});
	$(".close-jt").click(function () {
		$(".jtxx").hide();
		$(".info-div li").remove();

	})

	$(".close-jq").click(function () {
		$(".jqxx").hide();

	})

	//勤务等级(老版数据库佳丽警务站id:582)
	var jlstationid = "D4D2E536-A4BA-4583-A528-37758EEB2EEC";
	$.ajax({
		type: "get",
		url: `${YZ.ajaxURLms1}api/jp-BSD-DutyInfo-ms/QW/detyLevels/${jlstationid}`,
		async: true,
		contentType: "application/json;charset=UTF-8",
		dataType: "text",
		success: function (data) {
			//				console.log(data);
			if (data === 1) {
				data = "一级";
			} else if (data === 2) {
				data = "二级"
			} else if (data === 3) {
				data = "三级"
			} else {
				data = "三级"
			}
			$(".dengji-div span").html(data);
		},
		error: function (status) {
			console.log(status);
		}
	});

	//天气
	var yzgetWeather = function () {
		var weathername = '';
		var weathertemp = '';
		var weatherimgurl = '';
		$
			.ajax({
				type: "get",
				//url : "http://59.39.4.24:10014/api/jp-BCW-Weather-ms/getWeather",
				url: "http://10.73.200.157:20019/getWeather",
				success: function (result) {
					//console.log(data);
					var data = JSON.parse(result);;
					//console.log(data.CityWeatherResponse);
					weathername = data["CityWeatherResponse"]["results"][0]["weather_data"][0]["weather"][0];
					weathertemp = data["CityWeatherResponse"]["results"][0]["weather_data"][0]["temperature"][0];
					console.log(weathername);
					console.log(weathertemp);
					if (weathername.indexOf("雨") > 0) {
						weatherimgurl = "img/xiayu.png";
					} else if (weathername.indexOf("雪") > 0) {
						weatherimgurl = "img/xiaxue.png";
					} else if (weathername == "晴转多云" || weathername == "多云转晴") {
						weatherimgurl = "img/duoyunzhuanqing.png";
					} else if (weathername == "多云" ||
						weathername.indexOf("阴") > 0) {
						weatherimgurl = "img/duoyun.png";
					} else if (weathername == "晴") {
						weatherimgurl = "img/qingtian.png";
					} else {
						weatherimgurl = "img/duoyun.png";
					}
					console.log(weatherimgurl);
					$("#weatherimg").attr('src', weatherimgurl);
					$("#weathertmp").html(weathertemp);
					$("#weathertype").html(weathername);
				}
			});
	}
	yzgetWeather();
	setInterval(yzgetWeather, 1000 * 60 * 60 * 6);
	//今日部门报备警力数(未接,没有实时在线警力数)
	var jlstationIds = ["582"];
	$.ajax({
		type: "post",
		url: `${YZ.ajaxURLms1}api/jp-BSD-DutyInfo-ms/QW/policeInfoDevice/getByStationIds/today/old/count`,
		async: true,
		data: JSON.stringify(jlstationIds),
		contentType: "application/json;charset=UTF-8",
		dataType: "text",
		success: function (data) {
			//			console.log(data);
			if (data === "") {
				data = 0;
			}
			$("#yzmjzs").html(data);
		},
		error: function (status) {
			console.log(status);
		}
	});

	//实际在线警力数
	//	$.ajax({
	//		type: "post",
	//		url: `${YZ.ajaxURLms1}api/jp-BSD-DutyInfo-ms/QW/carDevice/getByStationIds/today/old/count`,
	//		async: true,
	//		data: JSON.stringify(jlstationIds),
	//		contentType: "application/json;charset=UTF-8",
	//		dataType: "text",
	//		success: function(data) {
	//			if(data === "") {
	//				data = 0;
	//			}
	//			$("#yzjczs").html(data);
	////			console.log(data);
	//		},
	//		error: function(status) {
	//			console.log(status);
	//		}
	//	});

	//实际在线警车数
	$.ajax({
		type: "post",
		url: `${YZ.ajaxURLms1}api/jp-BSD-DutyInfo-ms/dutyInfos/policeInfoDevice/getByStationIds/today/count`,
		async: true,
		data: JSON.stringify(["D4D2E536-A4BA-4583-A528-37758EEB2EEC"]),
		contentType: "application/json;charset=UTF-8",
		dataType: "text",
		success: function (data) {
			//			console.log(data);
			if (data === "" || data === null) {
				data = 0;
			}
			$("#yzmj").html(data);
		},
		error: function (status) {
			console.log(status);
		}
	});

	//今日部门报备警车数(未接,没有实时在线警车数)
	//	$.ajax({
	//		type: "post",
	//		url: `${YZ.ajaxURLms1}api/jp-BSD-DutyInfo-ms/QW/carDevice/getByStationIds/today/old/count`,
	//		async: true,
	//		data: JSON.stringify(jlstationIds),
	//		contentType: "application/json;charset=UTF-8",
	//		dataType: "text",
	//		success: function(data) {
	//			if(data === "") {
	//				data = 0;
	//			}
	//			$("#yzjczs").html(data);
	////			console.log(data);
	//		},
	//		error: function(status) {
	//			console.log(status);
	//		}
	//	});

	//实际在线警车数

	$.ajax({
		type: "post",
		url: `${YZ.ajaxURLms1}api/jp-BSD-DutyInfo-ms/policeCars/today/byCarNum/count`,
		async: true,
		data: JSON.stringify(CXY.cph),
		contentType: "application/json;charset=UTF-8",
		dataType: "text",
		success: function (data) {
			if (data === "" || data === null) {
				data = 0;
			}
			$("#yzjczs").html(CXY.cphlen);
			$("#yzjc").html(data);
		},
		error: function (status) {
			console.log(status);
		}
	});

	var jlstationidnew = "D4D2E536-A4BA-4583-A528-37758EEB2EEC";
	//今日部门报备快骑数和实际在线快骑数(未接)
	//	$.ajax({
	//		type: "get",
	//		url: `${YZ.ajaxURLms1}api/jp-BSD-DutyInfo-ms/stationInfo/StationReportAndRealityNum/${jlstationidnew}`,
	//		async: true,
	//		//		data:JSON.stringify(jlstationIds),
	//		contentType: "application/json;charset=UTF-8",
	//		dataType: "json",
	//		success: function(data) {
	//			var reality = data.reality;
	//			var report = data.report;
	//			if(report === null) {
	//				report = 0;
	//			}
	//			if(reality === null) {
	//				reality = 0;
	//			}
	//			$("#yzkq").html(reality);
	//			$("#yzkqzs").html(report);
	//		},
	//		error: function(status) {
	//			console.log(status);
	//		}
	//	});
	$("#yzkq").html("5");
	$("#yzkqzs").html("5");

	//今日部门报备快反数和实际在线快反数(未接)
	//	$.ajax({
	//		type: "get",
	//		url: `${YZ.ajaxURLms1}api/jp-BSD-DutyInfo-ms/stationInfo/fetchTodayFastAgainstNum/${jlstationidnew}`,
	//		async: true,
	//		//		data:JSON.stringify(jlstationIds),
	//		contentType: "application/json;charset=UTF-8",
	//		dataType: "json",
	//		success: function(data) {
	//			var reality = data.reality;
	//			var report = data.report;
	//			if(report === null) {
	//				report = 0;
	//			}
	//			if(reality === null) {
	//				reality = 0;
	//			}
	//			$("#yzkfzs").html(report);
	//			$("#yzkf").html(reality);
	//		},
	//		error: function(status) {
	//			console.log(status);
	//		}
	//	});
	$("#yzkfzs").html("30");
	$("#yzkf").html("28");
	//今日部门报备联动数和实际在线联动数(未接)
	//	$.ajax({
	//		type: "get",
	//		url: `${YZ.ajaxURLms1}api/jp-BSD-DutyInfo-ms/stationInfo/fetchTodayLinkAgeNum/${jlstationidnew}`,
	//		async: true,
	//		//		data:JSON.stringify(jlstationIds),
	//		contentType: "application/json;charset=UTF-8",
	//		dataType: "json",
	//		success: function(data) {
	//			var reality = data.reality;
	//			var report = data.report;
	//			if(report === null) {
	//				report = 0;
	//			}
	//			if(reality === null) {
	//				reality = 0;
	//			}
	//			//绑值
	//			$("#yzldzs").html(report);
	//			$("#yzld").html(reality);
	//		},
	//		error: function(status) {
	//			console.log(status);
	//		}
	//	});

	$("#yzldzs").html("12");
	$("#yzld").html("0");

	//	//酒店点位资源数量
	//	var dwzyCode = "hotel";
	//	var dwzystationIds = ["D4D2E536-A4BA-4583-A528-37758EEB2EEC"];
	//	$.ajax({
	//		type: "post",
	//		url: `${YZ.ajaxURLms1}api/jp-BIRM-Resource-ms/resource/placeinfo/tag/code/${dwzyCode}/count`,
	//		async: true,
	//		data: JSON.stringify(dwzystationIds),
	//		contentType: "application/json;charset=UTF-8",
	//		dataType: "json",
	//		success: function(data) {
	//			if(data === null || data === "") {
	//				data = 0;
	//			}
	//			$("#wcjdsbs").html(data);
	//		},
	//		error: function(status) {
	//			console.log(status);
	//		}
	//	});
	//
	//	//网吧点位资源数量
	//	dwzyCode = "netbar";
	//	$.ajax({
	//		type: "post",
	//		url: `${YZ.ajaxURLms1}api/jp-BIRM-Resource-ms/resource/placeinfo/tag/code/${dwzyCode}/count`,
	//		async: true,
	//		data: JSON.stringify(dwzystationIds),
	//		contentType: "application/json;charset=UTF-8",
	//		dataType: "json",
	//		success: function(data) {
	//			if(data === null || data === "") {
	//				data = 0;
	//			}
	//			$("#wcwb").html(data);
	//		},
	//		error: function(status) {
	//			console.log(status);
	//		}
	//	});
	//
	//	//人像识别摄像机点位资源数量
	//	dwzyCode = "人像识别摄像机";
	//	$.ajax({
	//		type: "post",
	//		url: `${YZ.ajaxURLms1}api/jp-BIRM-Resource-ms/resource/placeinfo/tag/code/${dwzyCode}/count`,
	//		async: true,
	//		data: JSON.stringify(dwzystationIds),
	//		contentType: "application/json;charset=UTF-8",
	//		dataType: "json",
	//		success: function(data) {
	//			if(data === null || data === "") {
	//				data = 0;
	//			}
	//			$("#wcrl").html(data);
	//		},
	//		error: function(status) {
	//			console.log(status);
	//		}
	//	});
	//
	//	//道路卡口摄像机点位资源数量
	//	dwzyCode = "道路卡口摄像机";
	//	$.ajax({
	//		type: "post",
	//		url: `${YZ.ajaxURLms1}api/jp-BIRM-Resource-ms/resource/placeinfo/tag/code/${dwzyCode}/count`,
	//		async: true,
	//		data: JSON.stringify(dwzystationIds),
	//		contentType: "application/json;charset=UTF-8",
	//		dataType: "json",
	//		success: function(data) {
	//			if(data === null || data === "") {
	//				data = 0;
	//			}
	//			$("#wcclkk").html(data);
	//		},
	//		error: function(status) {
	//			console.log(status);
	//		}
	//	});
	//
	//	//WIFI探针点位资源数量
	//	dwzyCode = "WIFI探针";
	//	$.ajax({
	//		type: "post",
	//		url: `${YZ.ajaxURLms1}api/jp-BIRM-Resource-ms/resource/placeinfo/tag/code/${dwzyCode}/count`,
	//		async: true,
	//		data: JSON.stringify(dwzystationIds),
	//		contentType: "application/json;charset=UTF-8",
	//		dataType: "json",
	//		success: function(data) {
	//			if(data === null || data === "") {
	//				data = 0;
	//			}
	//			$("#wcwifi").html(data);
	//		},
	//		error: function(status) {
	//			console.log(status);
	//		}
	//	});

	//酒店点位资源数量
	var dwzyCode = "hotel";
	var dwzystationIds = ["D4D2E536-A4BA-4583-A528-37758EEB2EEC"];
	$.ajax({
		type: "post",
		url: `${YZ.ajaxURLms1}api/jp-BIRM-Resource-ms/resource/placeinfo/tag/code/${dwzyCode}/count`,
		async: true,
		data: JSON.stringify(dwzystationIds),
		contentType: "application/json;charset=UTF-8",
		dataType: "json",
		success: function (data) {
			//console.log(data);
			if (data === null || data === "") {
				data = 0;
			}
			$("#wcjd").html(data);
		},
		error: function (status) {
			console.log(status);
		}
	});

	//网吧点位资源数量
	dwzyCode = "netbar";
	$.ajax({
		type: "post",
		url: `${YZ.ajaxURLms1}api/jp-BIRM-Resource-ms/resource/placeinfo/tag/code/${dwzyCode}/count`,
		async: true,
		data: JSON.stringify(dwzystationIds),
		contentType: "application/json;charset=UTF-8",
		dataType: "json",
		success: function (data) {
			//console.log(data);
			if (data === null || data === "") {
				data = 0;
			}
			$("#wcwb").html(data);
		},
		error: function (status) {
			console.log(status);
		}
	});

	//人像识别摄像机点位资源数量
	dwzyCode = "人像识别摄像机";
	$.ajax({
		type: "post",
		url: `${YZ.ajaxURLms1}api/jp-BIRM-Resource-ms/resource/camera/tag/code/${dwzyCode}/count`,
		async: true,
		data: JSON.stringify(dwzystationIds),
		contentType: "application/json;charset=UTF-8",
		dataType: "json",
		success: function (data) {
			//console.log(data);
			if (data === null || data === "") {
				data = 0;
			}
			$("#wcrl").html(data);
		},
		error: function (status) {
			console.log(status);
		}
	});

	//道路卡口摄像机点位资源数量
	dwzyCode = "道路卡口摄像机";
	$.ajax({
		type: "post",
		url: `${YZ.ajaxURLms1}api/jp-BIRM-Resource-ms/resource/camera/tag/code/${dwzyCode}/count`,
		async: true,
		data: JSON.stringify(dwzystationIds),
		contentType: "application/json;charset=UTF-8",
		dataType: "json",
		success: function (data) {
			//console.log(data);
			if (data === null || data === "") {
				data = 0;
			}
			$("#wcclkk").html(data);
		},
		error: function (status) {
			console.log(status);
		}
	});

	//WIFI探针点位资源数量
	dwzyCode = "WIFI探针";
	$.ajax({
		type: "post",
		url: `${YZ.ajaxURLms1}api/jp-BIRM-Resource-ms/resource/wifi/tag/code/${dwzyCode}/count`,
		async: true,
		data: JSON.stringify(dwzystationIds),
		contentType: "application/json;charset=UTF-8",
		dataType: "json",
		success: function (data) {
			//console.log(data);
			if (data === null || data === "") {
				data = 0;
			}
			$("#wcwifi").html(data);
		},
		error: function (status) {
			console.log(status);
		}
	});

	//已识别数量(wifi 酒店 网吧 人脸 道路卡口 手机点位)
	$.ajax({
		type: "get",
		url: YZ.ajaxURLms1 + "api/jp-BICA-ControlAlarm-ms/gatheralarm/numofidenkpeo/D4D2E536-A4BA-4583-A528-37758EEB2EEC",
		success: function (data) {
			//console.log(data);
			for (var i = 0; i < data.length; i++) {
				if (data[i].type == "1") {
					$("#wcwifisbs").html(data[i].count);
					$("#wcwifisbs").attr("data-type", data[i].type);
				} else if (data[i].type == "2") {
					$("#wcjdsbs").html(data[i].count);
					$("#wcjdsbs").attr("data-type", data[i].type);
				} else if (data[i].type == "3") {
					$("#wcwbsbs").html(data[i].count);
					$("#wcwbsbs").attr("data-type", data[i].type);
				} else if (data[i].type == "4") {
					$("#wcrlsbs").html(data[i].count);
					$("#wcrlsbs").attr("data-type", data[i].type);
				} else if (data[i].type == "5") {
					$("#wcsjdwsbs").html(data[i].count);
					$("#wcsjdwsbs").attr("data-type", data[i].type);
				} else {
					$("#wcclkksbs").html(data[i].count);
					$("#wcclkksbs").attr("data-type", data[i].type);
				}
			}
		},
		error: function (status) {
			console.log(status);
		}
	});

	$(".total-p").click(function () {

		var e = window.event;
		var targ = e.target;
		var type = targ.dataset.type;
		callBackObj.showAppointImportantPerson(type);
	})
	$(".qw").click(function () {
		callBackObj.showMapHome();
	})


	try {
		var bmid = callBackObj.getStationId();
	} catch (err) {
		console.log(err);
	}
	//alert(bmid);
	//时间段内上级交办给部门的代办指令根据指令类型统计数量(接收)
	var ZL = {};
	ZL.stationId = bmid || "D4D2E536-A4BA-4583-A528-37758EEB2EEC";
	ZL.endTime = formatDate(new Date(), false);
	ZL.startTime = formatDate(new Date(), true);
	$.ajax({
		type: "post",
		url: `${YZ.ajaxURLms1}api/jp-BIO-Order-ms/instructions/instructionTypeTotal/proxy`,
		async: true,
		data: JSON.stringify(ZL),
		contentType: "application/json;charset=UTF-8",
		dataType: "json",
		success: function (data) {
			//			console.log(data);
			var DBZLjcjs = 0;
			var DBZLgzzl = 0;
			var DBZLxdzb = 0;
			var DBZLxxhc = 0;
			for (var i = data.length - 1; i > -1; i--) {
				if (data[i]["typeName"].indexOf("警情") > 0) {
					DBZLjcjs += data[i]["count"];
				}
				if (data[i]["typeName"] === "领导交办") {
					DBZLgzzl = data[i]["count"];
				}
				if (data[i]["typeName"] === "信息核查") {
					DBZLxxhc = data[i]["count"];
				}
				if (data[i]["typeName"] === "行动抓捕") {
					DBZLxdzb = data[i]["count"];
				}
			}
			$("#yzjszl :nth-child(1) span").html(DBZLjcjs);
			$("#yzjszl :nth-child(2) span").html(DBZLxxhc);
			$("#yzjszl :nth-child(3) span").html(DBZLxdzb);
			$("#yzjszl :nth-child(5) span").html(DBZLgzzl);
		},
		error: function (status) {
			console.log(status);
		}
	});

	//时间段内本部门分派给下级或一线的指令类型统计(下发)
	$.ajax({
		type: "post",
		url: `${YZ.ajaxURLms1}api/jp-BIO-Order-ms/instructions/instructionTypeTotal`,
		async: true,
		data: JSON.stringify(ZL),
		contentType: "application/json;charset=UTF-8",
		dataType: "json",
		success: function (data) {
			//			console.log(data);
			var DBZLjcjs = 0;
			var DBZLgzzl = 0;
			var DBZLxdzb = 0;
			var DBZLxxhc = 0;
			for (var i = data.length - 1; i > -1; i--) {
				if (data[i]["typeName"].indexOf("警情") > 0) {
					DBZLjcjs += data[i]["count"];
				}
				if (data[i]["typeName"] === "领导交办") {
					DBZLgzzl = data[i]["count"];
				}
				if (data[i]["typeName"] === "信息核查") {
					DBZLxxhc = data[i]["count"];
				}
				if (data[i]["typeName"] === "行动抓捕") {
					DBZLxdzb = data[i]["count"];
				}
			}
			$("#yzxfzl :nth-child(1) span").html(DBZLjcjs);
			$("#yzxfzl :nth-child(2) span").html(DBZLxxhc);
			$("#yzxfzl :nth-child(3) span").html(DBZLxdzb);
			$("#yzxfzl :nth-child(5) span").html(DBZLgzzl);
		},
		error: function (status) {
			console.log(status);
		}
	});

	//时间段内本部门接收到上级交办指令根据指令类型统计数量(待处置)
	$.ajax({
		type: "post",
		url: `${YZ.ajaxURLms1}api/jp-BIO-Order-ms/instructions/recvInseructionTotal`,
		async: true,
		data: JSON.stringify(ZL),
		contentType: "application/json;charset=UTF-8",
		dataType: "json",
		success: function (data) {
			//			console.log(data);
			var DBZLjcjs = 0;
			var DBZLgzzl = 0;
			var DBZLxdzb = 0;
			var DBZLxxhc = 0;
			for (var i = data.length - 1; i > -1; i--) {
				if (data[i]["typeName"].indexOf("警情") > 0) {
					DBZLjcjs += data[i]["count"];
				}
				if (data[i]["typeName"] === "领导交办") {
					DBZLgzzl = data[i]["count"];
				}
				if (data[i]["typeName"] === "信息核查") {
					DBZLxxhc = data[i]["count"];
				}
				if (data[i]["typeName"] === "行动抓捕") {
					DBZLxdzb = data[i]["count"];
				}
			}
			$("#yzdbzl :nth-child(1) span").html(DBZLjcjs);
			$("#yzdbzl :nth-child(2) span").html(DBZLxxhc);
			$("#yzdbzl :nth-child(3) span").html(DBZLxdzb);
			$("#yzdbzl :nth-child(5) span").html(DBZLgzzl);
		},
		error: function (status) {
			console.log(status);
		}
	});

	//总警力数
	setTimeout(function () {
		$(".qinwu-zjl div").html(parseInt($("#yzmjzs").html()) + parseInt($("#yzkqzs").html()) + parseInt($("#yzkfzs").html()) + parseInt($("#yzldzs").html()) + parseInt($("#yzjczs").html()));
	}, 5000);

	setInterval(getCurDate, 100);

	//我的指令切换
	$(".zhiling li").click(function () {
		var e = window.event;
		var targ = e.target;
		var type = targ.dataset.type;

		var index = $(this).index();
		$(".zhiling li").removeClass("cursor");
		$(this).addClass("cursor");
		$(".zhiling-div div").hide();
		$(".zhiling-div div").eq(index).show();
		callBackObj.showInstruction(type, ""); //type为类型 id为空
	});

	$("#jl-num").text(QWXX.zxrwjl);
	$("#wcl-num").text(QWXX.rwwcl);
	pr($(".qinwu-jl"), $("#jl-num").text());
	pr($(".qinwu-wcl"), $("#wcl-num").text());

	//热门场所重点部位点击
	$(".bottom-right .b-right-div").click(function () {
		var index = $(this).index();
		$(".bottom-right .b-right-div").removeClass("selected-div");
		$(".bottom-right .selectd-img").find(".border-img").remove();
		$(".bottom-right .selectd-border").attr("src", "images/b-border.png");
		$(this).addClass("selected-div");
		$(this).find(".selectd-border").attr("src", "images/b-selectd.png");
		$(this).find(".selectd-img").append('<img src="images/b-selectd-border.png" class="border-img" />');
		//		$(".bottom-left").find(".data-div").hide();
		if (index == 0) {
			$(".hot").slideDown(600);
			$(".important").slideUp(600);
		} else if (index == 1) {
			$(".important").slideDown(600);
			$(".hot").slideUp(600);
		}
		//		$(".bottom-left").find(".data-div").eq(index).slideUp(600);
		//		$(".bottom-left").find(".data-div").eq(index).slideDown(600);
		//		$(".bottom-left").find(".data-div").eq(index).show().siblings().hide();
		//		$(this).find("img").attr("src","images/b-selectd.png");
	})
	//热门长沙人流密度排行
	// $(".mark-img").click(function() {
	// var peopleSum = 0;

	// var jhzxbhqynum = 0;
	// var jhwfjjlqynum = 0;
	// var jhmjgwzxqynum = 0;
	// var jhmjjhgqunum = 0;
	// var stationIds = ["D4D2E536-A4BA-4583-A528-37758EEB2EEC"];
	// $.ajax({
	// type: "post",
	// url: `${YZ.ajaxURLms1}api/jp-BIPS-PeopleStream-ms/api/bips/peopleStream/peopleStreamInfoListLatest`,
	// async: false,
	// contentType: "application/json;charset=UTF-8",
	// data: JSON.stringify(stationIds),
	// success: function(data) {
	// console.log(data);
	// for(var i = data.length - 1; i > -1; i--) {
	// if(data[i].personStreamPointName === "江汉江汉关区域" ||
	// data[i].personStreamPointName === "江汉中心百货区域" || data[i].personStreamPointName === "江汉王府井佳丽区域" || data[i].personStreamPointName === "江汉M+购物中心区域") {
	// peopleSum += data[i].rtPsCount;
	// }
	// if(data[i].personStreamPointName === "江汉江汉关区域") {
	// jhmjjhgqunum = data[i].rtPsCount;
	// }
	// if(data[i].personStreamPointName === "江汉中心百货区域") {
	// jhzxbhqynum = data[i].rtPsCount;
	// }
	// if(data[i].personStreamPointName === "江汉王府井佳丽区域") {
	// jhwfjjlqynum = data[i].rtPsCount;
	// }
	// if(data[i].personStreamPointName === "江汉M+购物中心区域") {
	// jhmjgwzxqynum = data[i].rtPsCount;
	// }

	// }

	// },
	// error: function(status) {
	// console.log(status);
	// }
	// });

	// var id = $(this).data("id");
	// $(this).parent().find(".img-hover").show();
	// $(this).parent().find(".box").hide();
	// $(".tankuang").show();
	// getMousePos();
	// $(".img-hover").hide();
	// $(".box").show();

	// if(id == '1') {
	// $(".newsIntro").text('王府井百货位于中山大道核心商圈，是老汉口最重要的商业交通干道。汉口中山大道从西南部的硚口路到东北部的黄浦路，贯穿整个汉口中心区，总长8445米。中间与武胜路、利济路、多福路、友谊路、民意路、三民路、民生路、江汉路、南京路、黄石路、大智路、兰陵路、黄兴路、车站路、蔡锷路、胜利街、一元路、三阳路等共48条能通行机动车辆的街道相交，东、南与沿河大道和沿江大道、西、北与京汉大道、解放大道和建设大道平行。');
	// $(".people-num").text(jhwfjjlqynum);
	// $(".tankuang").css("left", "7%");
	// $(".tankuangdepImg").attr("src", "images/wfj1.png");
	// //			$(".tankuangimg").attr("src","images/wfj2.png");
	// //			$(".xiaqu").text("江汉公安分局佳丽警务站辖区");

	// $(this).parent().find(".img-hover").show();
	// $(this).parent().find(".box").hide();
	// $(".tankuang-title").text($(this).parent().find(".name-span").text());
	// } else if(id == '2') {
	// $(".newsIntro").text('「M+」购物中心在武汉最著名的百年商业老街"江汉路步行街"与京汉大道交汇处，占据了江汉路商圈寸土寸金的核心位置。「M+」不仅与汉口的历史地标建筑之一"江汉关"互为江汉路步行街的两端，更位处武汉轨道交通轴心——轻轨1号线与地铁2号线交汇换乘站"循礼门站"上盖，是目前武汉唯一一座双地铁上盖的购物中心。');
	// $(".people-num").text(jhmjgwzxqynum);
	// $(".tankuang").css("left", "21%");
	// $(".tankuangdepImg").attr("src", "images/mp1.png");
	// //			$(".tankuangimg").attr("src","images/mp2.png");
	// //			$(".xiaqu").text("江汉公安分局佳丽警务站辖区");

	// $(this).parent().find(".img-hover").show();
	// $(this).parent().find(".box").hide();
	// $(".tankuang-title").text($(this).parent().find(".name-span").text());
	// } else if(id == '3') {
	// $(".newsIntro").text('“中华老字号”武汉中心百货大楼作为武汉商业的发祥地，对武汉商业的促进与发展起到了关键的推动作用，是“全国商业文明街”——江汉路步行街上一颗璀璨的“明珠”。中心百货位于江汉路步行街是中国最长的步行街，有“天下第一步行街”的美誉，位于湖北省武汉市汉口中心地带，南起沿江大道，贯通中山大道、京汉大道，北至解放大道，全长1600米。宽度为10至25米，是武汉著名的百年商业老街，也是“武汉二十世纪建筑博物馆”。');
	// $(".people-num").text(jhzxbhqynum);
	// $(".tankuang").css("left", "36%");
	// $(".tankuangdepImg").attr("src", "images/zxbh1.png");
	// //			$(".tankuangimg").attr("src","images/zxbh2.png");
	// //			$(".xiaqu").text("江汉公安分局佳丽警务站辖区");

	// $(this).parent().find(".img-hover").show();
	// $(this).parent().find(".box").hide();
	// $(".tankuang-title").text($(this).parent().find(".name-span").text());
	// //$(".tankuangdepImg").src=
	// } else if(id == '4') {
	// $(".newsIntro").text('江汉关大楼，位于中国湖北省武汉市汉口江汉路和沿江大道交汇处，东南临长江，是武汉市标志性建筑之一，汉口租界的核心建筑。大楼占地1499平方米，建筑面积4009平方米，总高度46.3米，为武汉当时最高建筑，其中钟楼顶端海拔83.8米。汉口海关——江汉关于1861年11月成立。1922年11月4日，江汉关成立60周年时，该楼举行奠基典礼，于1924年1月21日正式落成。');
	// $(".people-num").text(jhmjjhgqunum);
	// $(".tankuang").css("left", "49%");
	// $(".tankuangdepImg").attr("src", "images/jhg1.png");
	// //			$(".tankuangimg").attr("src","images/zxbh2.png");
	// //			$(".xiaqu").text("江汉公安分局佳丽警务站辖区");

	// $(this).parent().find(".img-hover").show();
	// $(this).parent().find(".box").hide();
	// $(".tankuang-title").text($(this).parent().find(".name-span").text());
	// //$(".tankuangdepImg").src=
	// }

	// })
	$(".close").click(function () {
		$(".tankuang").hide();
		$(".img-hover").hide();
		$(".box").show();
	})

	setInterval(fengqin, 500); //风琴效果

});

function getMousePos(event) {

	var e = event || window.event;
	var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
	var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
	var x = e.pageX || e.clientX + scrollX;
	var y = e.pageY || e.clientY + scrollY;

}
//浏览器改变大小触发页面刷新
$(window).resize(function () {
	location.reload()
});
//获取当期时间
function getCurDate() {
	var d = new Date();
	var years = d.getFullYear();
	var month = add_zero(d.getMonth() + 1);
	var days = add_zero(d.getDate());
	var hours = add_zero(d.getHours());
	var minutes = add_zero(d.getMinutes());
	var seconds = add_zero(d.getSeconds());
	var ndate = years + "-" + month + "-" + days + "  " + hours + ":" + minutes;
	divT.innerHTML = ndate;
}

function add_zero(temp) {
	if (temp < 10) return "0" + temp;
	else return temp;
}

//柱状进度条

function pr(div, num) {
	var progressBar = div.find(".progressBar");
	var progressBarP = div.find(".progressBar li").find("p");
	var progressBarBox = div.find(".progressBar").find("li");
	var progressBarBoxH = progressBarBox.offsetHeight;
	var progressBarPLen = progressBarP.length;
	var progressBarBoxLen = progressBarBox.length;
	var val = num;
	var progressBarPActiveLen = Math.floor(progressBarPLen * val / 100);
	for (var i = 0; i < progressBarPLen; i++) {
		var color = i >= progressBarPLen - progressBarPActiveLen ? '#38B7FF' : '#184A65';
		progressBarP[i].style.height = 5 + 'px';
		progressBarP[i].style.backgroundColor = color;
	};
	var valu = ((val % 10) / 10) * 5;
	var num = progressBarPLen - progressBarPActiveLen - 1;
	if (num >= 0) {
		progressBarP[num].style.height = valu + 'px';
		progressBarP[num].style.backgroundColor = '#38B7FF';
	}

}

//风琴效果
function fengqin() {
	var num = 1;
	var arr = [10, 20, 30, 40, 50, 60, 70, 80, 90];

	for (var i = 0; i < $(".pBar1 li").length - 1; i++) {
		num = Math.floor(Math.random() * 9 + 1);
		$(".pBar1 li").eq(i).css("width", '' + arr[num] + "%");
	}
	for (var i = 0; i < $(".pBar2 li").length - 1; i++) {
		num = Math.floor(Math.random() * 9 + 1);
		$(".pBar2 li").eq(i).css("width", '' + arr[num] + "%");
	}
}

function scrollNews(obj) {
	var $self = obj.find("ul:first");
	var lineHeight = $self.find("li:first").height();
	$self.animate({
		"margin-top": -lineHeight + "px"
	}, 600, function () {
		$self.css({
			"margin-top": "0px"
		}).find("li:first").appendTo($self);
	})
}
var i = 0;
var yongdu = 0;
var huanxing = 0;
var changtong = 0;

function jt() {
	yongdu = 0;
	huanxing = 0;
	changtong = 0;
	i = 0;
	$.ajax({
		type: "get",
		url: "http://59.39.4.11:12345/API/RouteInfoServer/GetRouteStatusCollection",
		async: true,
		success: function (data) {

			var roadfrom = ""; //路况起点名
			var roadto = ";" //路况拥堵名
			var roadtime = ""; //路况时间
			var html = "";
			var objdata = JSON.parse(data)
			console.log(objdata);

			for (var n = 0; n < objdata.length; n++) {
				var child = objdata[n].RouteSectionList;
				for (var j = 0; j < child.length; j++) {

					var road = "";
					if (child[j].RoadSection.match("到")) {
						road = child[j].RoadSection.split("到");
						roadfrom = road[0].split("从")[1];
						roadto = road[1];
					} else {
						road = child[j].RoadSection;
					}

					roadtime = child[j].RoadTime;

					if (child[j].RoadStatus == "拥堵") {
						yongdu++;
						i++;
						if (roadfrom == null) {
							html += '<li class="yd"><div><span>' + i + '</span></div><div class="time">' + roadtime + '</div><div class="road-name"><span class="road-from">' + road + '</span></div><div class="road-static">' + child[j].RoadStatus + '</div></li>';
						} else {
							html += '<li class="yd"><div><span>' + i + '</span></div><div class="time">' + roadtime + '</div><div class="road-name"><span class="road-from">' + roadfrom + '</span>-<span class="road-to">' + roadto + '</span></div><div class="road-static">' + child[j].RoadStatus + '</div></li>';
						}

						//	html1+='<li class="yd"><div class="time">'+roadtime+'</div><div class="road-name"><span class="road-from">'+roadfrom+'</span>-<span class="road-to">'+roadto+'</span></div><div class="road-static">'+child[j].RoadStatus+'</div></li>';
					} else if (child[j].RoadStatus == "缓行") {
						huanxing++;
						i++;
						if (roadfrom == null) {
							html += '<li class="hx"><div><span>' + i + '</span></div><div class="time">' + roadtime + '</div><div class="road-name"><span class="road-from">' + road + '</span></span></div><div class="road-static">' + child[j].RoadStatus + '</div></li>';
						} else {
							html += '<li class="hx"><div><span>' + i + '</span></div><div class="time">' + roadtime + '</div><div class="road-name"><span class="road-from">' + roadfrom + '</span>-<span class="road-to">' + roadto + '</span></div><div class="road-static">' + child[j].RoadStatus + '</div></li>';
						}

					} else if (child[j].RoadStatus == "畅通") {
						changtong++;
						i++;
						html += '<li class="ct"><div><span>' + i + '</span></div><div class="time">' + roadtime + '</div><div class="road-name"><span class="road-from">' + roadfrom + '</span>-<span class="road-to">' + roadto + '</span></div><div class="road-static">' + child[j].RoadStatus + '</div></li>';
						//	html3+='<li class="ct"><div class="time">'+roadtime+'</div><div class="road-name"><span class="road-from">'+roadfrom+'</span>-<span class="road-to">'+roadto+'</span></div><div class="road-static">'+child[j].RoadStatus+'</div></li>';

					}

				}
				/*console.log(html1);
				console.log(html2);
				console.log(html3);*/

			}
			$(".info-div ul").append(html);
			$(".ydld").text(yongdu);
			$(".hxld").text(huanxing);

			$(".yd-span").text(yongdu);
			$(".hx-span").text(huanxing);
			$(".ct-span").text(changtong);
			console.log("huanxing=" + huanxing)
		}
	});
}
$("#wcrl").click(function () {
	$(".rlsb_alert").show();
})
$("#wcwifi").click(function () {
	$(".wifi_alert").show();
})
$("#wcjd").click(function () {
	$(".hotel_alert").show();
})
$("#wcwb").click(function () {
	$(".internet-bar_alert").show();
})
$("#wcclkk").click(function () {
	$(".car_alert").show();
})
$(".close-qb").click(function () {
	$(".dw-qu").hide();
})
$(".tk-div").on("click", ".tankuangdepImg", function () {
	var imgurl = $(this).attr("src");
	console.log(imgurl)
	$(".dw-qu").show();
	$(".dw-img").attr("src", imgurl);

})

$(".qw").click(function () {
	callBackObj.showMapHome();
})
$("#wcsjdw").click(function () {
	callBackObj.showMapHome();
})
$(".jq-name-div").find(".jq-name").click(function () {

	var i = $(this).index();
	$(".jq-name-div").find(".jq-name").removeClass("select");
	$(this).addClass("select");
	if (i == 1) {
		$(".jq-content").css("overflow", "hidden");
	} else {
		$(".jq-content").removeAttr("style");
	}

	$(".jq-content").find(".jq-content-div").hide();
	$(".jq-content").find(".jq-content-div").eq(i).show();

});


$(function(){
	$('.one-dialog-close').on('click',function(){
		$(this).parent().hide();
	})

	$('.ts-name').on('click',function(){
		var $self =$(this);
		var index = $self.parent().index();
		$self.addClass('select').parent().siblings().find('.ts-name').removeClass('select');

		var $numParent = $self.parents('.ts-name-div').next();
		if(index < 1){

			$numParent.find('span').eq(0).text(34922);
			$numParent.find('span').eq(1).text(488);
			$numParent.find('span').eq(2).text(6525);
			$numParent.find('span').eq(3).text(125);
		}else {
			$numParent.find('span').eq(0).text(157);
			$numParent.find('span').eq(1).text(5);
			$numParent.find('span').eq(2).text(34);
			$numParent.find('span').eq(3).text(2);
		}
	});


	$('.bottom-center').on('mouseover','.div-list',function(){
		var $self = $(this);
		var index = $self.index();
		var stationCode = $self.attr('station-code');
		var $tankuang = $('.tankuang');
		var num = $self.find('.bottom-density.blue .bottom-density-num').text();
		var xiaqu = $self.find('.name-span').text();
		$tankuang.show().css('left', index*160+105);
		$tankuang.find('.people-num').text(num);
		$tankuang.find('.xiaqu').text(xiaqu+'公安分局佳丽警务站辖区');
		$tankuang.find('.tankuang-title').text(xiaqu+'区域');

		var qty = $('.ts-qty-div-div span');
		$tankuang.find('.tk-number').find('li').eq(0).find('span').text(qty.eq(0).text());
		$tankuang.find('.tk-number').find('li').eq(1).find('span').text(qty.eq(2).text());
		$tankuang.find('.tk-number').find('li').eq(2).find('span').text(qty.eq(1).text());
		$tankuang.find('.tk-number').find('li').eq(3).find('span').text(qty.eq(3).text());
		$tankuang.find('.tk-number').find('li').eq(4).find('span').text(num);
		switch(stationCode)
		{
			case "0":

				break;
			case "1":
				$tankuang.find('.tk-div').find('img').attr('src','images/new/people-stream-qygs2.png');
				break;
			case "2":
				$tankuang.find('.tk-div').find('img').attr('src','images/new/people-stream-ljy2.png');
				break;
			case "3":
				$tankuang.find('.tk-div').find('img').attr('src','images/new/people-stream-hy2.png');
				break;
			case "4":
				$tankuang.find('.tk-div').find('img').attr('src','images/new/people-stream-jz2.png');
				break;
			case "5":
				$tankuang.find('.tk-div').find('img').attr('src','images/new/people-stream-hcz2.png');
				break;
			case "6":
				$tankuang.find('.tk-div').find('img').attr('src','images/new/people-stream-qcz2.png');
				break;
			default:
				break;
		}
	});
	$('.bottom-center').on('click','.div-list',function(){
		var $self = $(this);
		var stationCode = $self.attr('station-code');
		if(stationCode>4) return;
		localStorage.setItem('stationCode',stationCode);
		location.href = location.href;
	});
	$('.city-station').on('click',function(){
		localStorage.removeItem('stationCode');
		location.href = location.href;
	});

	function getUrlParam(name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
		var r = window.location.search.substr(1).match(reg);  //匹配目标参数
		if (r != null) return unescape(r[2]); return null; //返回参数值
	}

	(function(){
		var stationCode = localStorage.getItem('stationCode');
		if(!stationCode) return;
		var $title = $('.top .title span');
		var $data = $('.hot .div-list .bottom-density .bottom-density-num,.m_top-top-left-div span');
		var $zhanzhang = $('.zhiban label').eq(0);
		var $camera = $('.six-ul li');
		var $weather = $('.weather-address p');
		var $twoCardAddr= $('.two-card-content .addr,.two-card-content-info .addr');
		switch(stationCode)
		{
			case "0":
				$title.text('高密市公安阵地管控平台');
				$zhanzhang.text('刘润勤');
				$camera.each(function(index,item){
					$(item).find('img').attr('src','images/camera/gaomi/'+ (parseInt(index)+1) +'.jpg');
				});
				$camera.eq(0).find('p').text('河崖检查站');
				$camera.eq(1).find('p').text('姜庄检查站');
				$camera.eq(2).find('p').text('李家营检查站');
				$camera.eq(3).find('p').text('青银检查站');
				$camera.eq(4).find('p').text('火车站检查站');
				$camera.eq(5).find('p').text('汽车站检查站');
				$weather.text('山东 高密');
				$twoCardAddr.eq(0).text('高密市河崖');
				$twoCardAddr.eq(1).text('高密市青银');
				$twoCardAddr.eq(2).text('高密市姜庄');
				$twoCardAddr.eq(2).text('高密市李家营');
				break;
			case "1":
				$title.text('高密市青银高速巡控平台');
				$zhanzhang.text('林一平');
				$camera.each(function(index,item){
					$(item).find('img').attr('src','images/camera/qy/'+ (parseInt(index)+1) +'.jpg');
				});
				$camera.find('p').text('青银检查站');
				$weather.text('山东 青银');
				$twoCardAddr.text('高密市青银');
				$data.each(function(){
					$(this).text(parseInt($(this).text()/4 + 1));
				});
				break;
			case "2":
				$title.text('高密市李家营高速巡控平台');
				$zhanzhang.text('林国江');
				$camera.each(function(index,item){
					$(item).find('img').attr('src','images/camera/ljy/'+ (parseInt(index)+1) +'.jpg');
				});
				$camera.find('p').text('李家营检查站');
				$weather.text('山东 李家营');
				$twoCardAddr.text('高密市李家营');
				$data.each(function(){
					$(this).text(parseInt($(this).text()/4 + 2));
				});
				break;
			case "3":
				$title.text('高密市河崖高速巡控平台');
				$zhanzhang.text('林一平');
				$camera.each(function(index,item){
					$(item).find('img').attr('src','../images/camera/hy/'+ (parseInt(index)+1) +'.jpg');
				});
				$camera.find('p').text('河崖检查站');
				$weather.text('山东 河崖');
				$twoCardAddr.text('高密市河崖');
				$data.each(function(){
					$(this).text(parseInt($(this).text()/4 + 3));
				});
				break;
			case "4":
				$title.text('高密市姜庄高速巡控平台');
				$zhanzhang.text('林国江');
				$camera.each(function(index,item){
					$(item).find('img').attr('src','images/camera/jz/'+ (parseInt(index)+1) +'.jpg');
				});
				$camera.find('p').text('姜庄检查站');
				$weather.text('山东 姜庄');
				$twoCardAddr.text('高密市姜庄');
				$data.each(function(){
					$(this).text(parseInt($(this).text()/4 + 4));
				});
				break;
			default:
				break;
		}

		$('.two-card-content>ul').prepend($('.two-card-content>ul>li').eq(stationCode));
		$('.list-hiden>ul').prepend($('.list-hiden>ul>li').eq(stationCode));
		$('.renliankakouUL').prepend($('.renliankakouUL>li').eq(stationCode));
		$('.rlsb').attr('src','images/touxiang/1'+ stationCode +'.jpg');
		$('.m-left .munber,.m-left p').each(function(){ $(this).text(parseInt($(this).text()/4+parseInt(stationCode)*4)) });
		if(stationCode && stationCode>0) $('.city-station').show();
	}());

	/*$('.change-station').on('click',function(){
		var stationCode = localStorage.getItem('stationCode');
		var stationCodeNew = '';
		if(!stationCode || stationCode == "0"){
			if($(this).hasClass('change-station-left')){
				stationCodeNew= "4";
			}else{
				stationCodeNew= "1";
			}
		}else if(stationCode>0&&stationCode<4){
			if($(this).hasClass('change-station-left')){
				stationCodeNew = parseInt(stationCode) - 1;
			}else{
				stationCodeNew = parseInt(stationCode) + 1;
			}
		}else if(stationCode == 4){
			if($(this).hasClass('change-station-left')){
				stationCodeNew = "3";
			}else{
				stationCodeNew = "0";
			}
		}
         location.href = location.href;
	});
*/

	$('#bxslider2').bxSlider({
		slideMargin: 20
	});
	$('.m_list').bxSlider({
		maxSlides: 5
	});
	$('#bxslider4').bxSlider({
		mode: 'vertical'
	}).parents('.bx-wrapper').addClass('bxslider-vertical');

	$('.tab-head li').on('click','',function(){
		var $self = $(this);
		var index = $self.index();
		var $indexBodyItem = $self.parent().siblings('.tab-body').children('li').eq(index);
		$self.addClass('active').siblings().removeClass('active');
		$indexBodyItem.addClass('on').siblings().removeClass('on');
		if($indexBodyItem.find('.bx-wrapper').length >0) return;
		$self.parent().siblings('.tab-body').children('li').eq(index).find('.bxslider-ul').bxSlider({
			slideMargin: 20,
		});
	}).eq(0).click();
});