var imgurl = ""; //全局图片路径
var icontype = ""; //全局类型图标
var time = ""; //全局时间
var daddress = ""; //全局地址
var oneimg = ""; //人脸识别的图片

var zdrText = "";
var datatype = ""; //标记类型
var dataid = ""; //标记id
var datatype1 = ""; //标记类型
var dataid1 = ""; //标记id
$(function() {
	
//	var Info=new Object;
	
	var Dicon = ""; //已有数据的类型
	var rlStationId = "D4D2E536-A4BA-4583-A528-37758EEB2EEC";
	$.ajax({
		type: "get",
		url: `${YZ.ajaxURLms1}api/jp-BICA-ControlAlarm-ms/gatheralarm/todayHumanAlarms/page/${rlStationId}`,
		async: true,
		success: function(data) {
			var data=data.personEventStaModelList;
			for(var i = 0; i < data.length; i++) {
//				console.log(JSON.stringify(data[i]));
				if(data[i].alarmPointFrom === "4") {
					datatype = data[i].alarmPointFrom;
					dataid = data[i].id;
					Dicon = "&#xe697;";//人脸
					$.ajax({
						type: "get",
						url: `${YZ.ajaxURLms1}api/jp-BICA-ControlAlarm-ms/gatheralarm/currentAlarmHumanInfo/4/byId/${data[i].alarmId}`,
						async: false,
						success: function(data) {
							var time = data.alarmTime.substr(11, 5);
							if(data.hitFaceUrl){
								imgurl = YZ.ajaxURLms1 + "api/jp-TIFS-FileCenter-ms/file?businessId=" + data.hitFaceUrl;
							}else{
								imgurl = "images/default.png";
								}
							var zdrText = '<li data-type="' + datatype + '" data-id="' + dataid + '"><i class="iconfont right-i">' + Dicon + '</i><div class="img-border"><img src="' + imgurl + '" /></div><p><i class="iconfont">&#xe810;</i><span>' + time + '</span></p><p><i class="iconfont">&#xe604;</i><span title="'+data.alarmPosition+'">' + data.alarmPosition + '</span></p><a href="javascript:void(0);" class="info">查看详情</a></li>';
							$(".m_list").append(zdrText);
						},
						error: function(status) {
							console.log(status);
						}
					});
				} else if(data[i].alarmPointFrom === "1") {
					//					console.log(data[i]);
					datatype = data[i].alarmPointFrom;
					dataid = data[i].id;
					Dicon = "&#xe617;";//wifi预警
					var time = data[i].alarmTime.substr(11, 5);
					var zdrText = '<li data-type="' + datatype + '" data-id="' + dataid + '"><i class="iconfont right-i">' + Dicon + '</i><div class="img-border"><img src="images/default.png" /></div><p><i class="iconfont">&#xe810;</i><span>' + time + '</span></p><p><i class="iconfont">&#xe604;</i><span title="'+data[i].alarmPointName+'">' + data[i].alarmPointName + '</span></p><a href="#" class="info">查看详情</a></li>';
					$(".m_list").append(zdrText);
				} else if(data[i].alarmPointFrom === "2") {
					//					console.log(data[i]);
					datatype = data[i].alarmPointFrom;
					dataid = data[i].id;
					Dicon = "&#xe600;";//酒店住宿 替换成核查核录
					var time = data[i].alarmTime.substr(11, 5);
					var zdrText = '<li data-type="' + datatype + '" data-id="' + dataid + '"><i class="iconfont right-i">' + Dicon + '</i><div class="img-border"><img src="images/default.png" /></div><p><i class="iconfont">&#xe810;</i><span>' + time + '</span></p><p><i class="iconfont">&#xe604;</i><span title="'+data[i].alarmPointName+'">' + data[i].alarmPointName + '</span></p><a href="#" class="info">查看详情</a></li>';
					$(".m_list").append(zdrText);

				} else if(data[i].alarmPointFrom === "3") {
					//					console.log(data[i]);
					datatype = data[i].alarmPointFrom;
					dataid = data[i].id;
					Dicon = "&#xe699;";//网吧上网 替换成人证检验闸机
					var time = data[i].alarmTime.substr(11, 5);
					var zdrText = '<li data-type="' + datatype + '" data-id="' + dataid + '"><i class="iconfont right-i">' + Dicon + '</i><div class="img-border"><img src="images/default.png" /></div><p><i class="iconfont">&#xe810;</i><span>' + time + '</span></p><p><i class="iconfont">&#xe604;</i><span title="'+data[i].alarmPointName+'">' + data[i].alarmPointName + '</span></p><a href="#" class="info">查看详情</a></li>';
					$(".m_list").append(zdrText);

				} else if(data[i].alarmPointFrom === "5") {
					//					console.log(data[i]);
					datatype = data[i].alarmPointFrom;
					dataid = data[i].id;
					Dicon = "&#xe60a;";//LBS手机预警 替换成628
					var time = data[i].alarmTime.substr(11, 5);
					var yzaddress = data[i].alarmPointName||'空';
					var zdrText = '<li data-type="' + datatype + '" data-id="' + dataid + '"><i class="iconfont right-i">' + Dicon + '</i><div class="img-border"><img src="images/default.png" /></div><p><i class="iconfont">&#xe810;</i><span>' + time + '</span></p><p><i class="iconfont">&#xe604;</i><span title="'+yzaddress+'">' + yzaddress + '</span></p><a href="#" class="info">查看详情</a></li>';
					$(".m_list").append(zdrText);
				} else if(data[i].alarmPointFrom === "6") {
					datatype = data[i].alarmPointFrom;
					dataid = data[i].id;
					Dicon = "&#xe63b;";//车辆卡口
					$.ajax({
						type: "get",
						url: `${YZ.ajaxURLms1}api/jp-BICA-ControlAlarm-ms/gatheralarm/currentAlarmHumanInfo/6/byId/${data[i].alarmId}`,
						async: false,
						success: function(data) {
							var time = data.createTime.substr(11, 5);
							if(data.imageUrl){
								imgurl = YZ.ajaxURLms1 + "api/jp-TIFS-FileCenter-ms/file?businessId=" + data.imageUrl;
							}else{
								imgurl ="images/default.png";
							}
							
							var baddress = "";

							if(data.pointName.match("_")) {
								baddress = data.pointName.split("_")[1];
							} else {
								baddress = "";
							}
							var zdrText = '<li data-type="' + datatype + '" data-id="' + dataid + '"><i class="iconfont right-i">' + Dicon + '</i><div class="img-border"><img src="' + imgurl + '" /></div><p><i class="iconfont">&#xe810;</i><span>' + time + '</span></p><p><i class="iconfont">&#xe604;</i><span title="' + baddress + '">' + baddress + '</span></p><a href="javascript:void(0);" class="info">查看详情</a></li>';
							$(".m_list").append(zdrText);
						},
						error: function(status) {
							//							console.log(status);
						}
					});
				}
			}
		}
	});

	var sock = {};

	sock.stompClient = null;

	sock.connect = function(callback) {
		//		var socket = new SockJS(YZ.ajaxURLms1 + "zuul/api/jp-BICA-ControlAlarm-ms/ws");
		// 开发环境地址
		//		var socket = new SockJS("http://172.17.99.10:10009/ws");
		var socket = new SockJS("http://59.39.4.24:10009/ws");
		//		console.log(YZ.ajaxURLms1 + "api/jp-BICA-ControlAlarm-ms/ws");
		sock.stompClient = Stomp.over(socket);
		sock.stompClient.connect('', '', function(frame) {
			//console.log('Connected: ' + frame);
			sock.stompClient.subscribe('/topic/alarm', function(msg) {
				var msgObj = JSON.parse(msg.body);
				//								console.log("msgObj"+msgObj);

				if(msgObj.stationId == 'D4D2E536-A4BA-4583-A528-37758EEB2EEC') {
					// 地点
					var alarmPointName = msgObj.alarmPointName;
					daddress = alarmPointName || '空';;
					dataid1=msgObj.id;
					datatype1=msgObj.alarmPointFrom;
//					console.log("msgObj="+msgObj);
//					if(alarmPointName.match("_")) {
//						daddress = alarmPointName.split("_")[1];
//					} else {
//						daddress = "";
//					}

					// 时间
					var alarmTime = msgObj.alarmTime;

					time = alarmTime.substr(11, 5);
					//					console.log("msgObj.alarmPointFrom=" + msgObj.alarmPointFrom);
					if(msgObj.alarmPointFrom == "1") { //wifi预警
						icontype = "&#xe617;";
						imgurl = "images/default.png";
//						dataupload(); //调用前端的上传样式
						setTimeout(dataupload,1000);
					
						$.ajax({
							type: "get",
							url: YZ.ajaxURLms1 + "api/jp-BICA-ControlAlarm-ms/gatheralarm/numofidenkpeo/D4D2E536-A4BA-4583-A528-37758EEB2EEC",
							success: function(data) {
								//console.log(data);
								for(var i = 0; i < data.length; i++) {
									if(data[i].type == "1") {
										$("#wcwifisbs").html(data[i].count);
									} else if(data[i].type == "2") {
										$("#wcjdsbs").html(data[i].count);
									} else if(data[i].type == "3") {
										$("#wcwbsbs").html(data[i].count);
									} else if(data[i].type == "4") {
										$("#wcrlsbs").html(data[i].count);
									} else if(data[i].type == "5") {
										$("#wcsjdwsbs").html(data[i].count);
									} else {
										$("#wcclkksbs").html(data[i].count);
									}
								}
							},
							error: function(status) {
								console.log(status);
							}
						});

					} else if(msgObj.alarmPointFrom == "2") { //酒店住宿
						icontype = "&#xe600;";
						imgurl = "images/default.png";
//						dataupload(); //调用前端的上传样式
						setTimeout(dataupload,1000);
						$.ajax({
							type: "get",
							url: YZ.ajaxURLms1 + "api/jp-BICA-ControlAlarm-ms/gatheralarm/numofidenkpeo/D4D2E536-A4BA-4583-A528-37758EEB2EEC",
							success: function(data) {
								//console.log(data);
								for(var i = 0; i < data.length; i++) {
									if(data[i].type == "1") {
										$("#wcwifisbs").html(data[i].count);
									} else if(data[i].type == "2") {
										$("#wcjdsbs").html(data[i].count);
									} else if(data[i].type == "3") {
										$("#wcwbsbs").html(data[i].count);//网吧上网
									} else if(data[i].type == "4") {
										$("#wcrlsbs").html(data[i].count);//人脸识别
									} else if(data[i].type == "5") {
										$("#wcsjdwsbs").html(data[i].count);
									} else {
										$("#wcclkksbs").html(data[i].count);
									}
								}
							},
							error: function(status) {
								console.log(status);
							}
						});

					} else if(msgObj.alarmPointFrom == "3") { //网吧上网
						icontype = "&#xe699;";
						imgurl = "images/default.png";
//						dataupload(); //调用前端的上传样式
						setTimeout(dataupload,1000);
						$.ajax({
							type: "get",
							url: YZ.ajaxURLms1 + "api/jp-BICA-ControlAlarm-ms/gatheralarm/numofidenkpeo/D4D2E536-A4BA-4583-A528-37758EEB2EEC",
							success: function(data) {
								//console.log(data);
								for(var i = 0; i < data.length; i++) {
									if(data[i].type == "1") {
										$("#wcwifisbs").html(data[i].count);
									} else if(data[i].type == "2") {
										$("#wcjdsbs").html(data[i].count);
									} else if(data[i].type == "3") {
										$("#wcwbsbs").html(data[i].count);
									} else if(data[i].type == "4") {
										$("#wcrlsbs").html(data[i].count);
									} else if(data[i].type == "5") {
										$("#wcsjdwsbs").html(data[i].count);
									} else {
										$("#wcclkksbs").html(data[i].count);
									}
								}
							},
							error: function(status) {
								console.log(status);
							}
						});

					} else if(msgObj.alarmPointFrom == "4") { //人脸识别
						icontype = "&#xe697;";
						var url = YZ.ajaxURLms1 + "api/jp-BICA-ControlAlarm-ms/gatheralarm/currentAlarmHumanInfo/4/byId/" + msgObj.alarmId;
						$.get(url, function(result) {
							// 根据ID从文件服务器获取图片
							var imageUrl;
							if(result.hitFaceUrl){
								imageUrl = YZ.ajaxURLms1 + "api/jp-TIFS-FileCenter-ms/file?businessId=" + result.hitFaceUrl;
							}else{
								imageUrl = "images/default.png";
							}
							
							imgurl = imageUrl;
//							dataupload(); //调用前端的上传样式
							setTimeout(dataupload,1000);
						});

						$.ajax({
							type: "get",
							url: YZ.ajaxURLms1 + "api/jp-BICA-ControlAlarm-ms/gatheralarm/numofidenkpeo/D4D2E536-A4BA-4583-A528-37758EEB2EEC",
							success: function(data) {
								//console.log(data);
								for(var i = 0; i < data.length; i++) {
									if(data[i].type == "1") {
										$("#wcwifisbs").html(data[i].count);
									} else if(data[i].type == "2") {
										$("#wcjdsbs").html(data[i].count);
									} else if(data[i].type == "3") {
										$("#wcwbsbs").html(data[i].count);
									} else if(data[i].type == "4") {
										$("#wcrlsbs").html(data[i].count);
									} else if(data[i].type == "5") {
										$("#wcsjdwsbs").html(data[i].count);
									} else {
										$("#wcclkksbs").html(data[i].count);
									}
								}
							},
							error: function(status) {
								console.log(status);
							}
						});

					} else if(msgObj.alarmPointFrom == "5") { //LBS手机预警
						icontype = "&#xe60a;";
						imgurl = "images/default.png";
//						dataupload(); //调用前端的上传样式
						setTimeout(dataupload,1000);
						$.ajax({
							type: "get",
							url: YZ.ajaxURLms1 + "api/jp-BICA-ControlAlarm-ms/gatheralarm/numofidenkpeo/D4D2E536-A4BA-4583-A528-37758EEB2EEC",
							success: function(data) {
								//console.log(data);
								for(var i = 0; i < data.length; i++) {
									if(data[i].type == "1") {
										$("#wcwifisbs").html(data[i].count);
									} else if(data[i].type == "2") {
										$("#wcjdsbs").html(data[i].count);
									} else if(data[i].type == "3") {
										$("#wcwbsbs").html(data[i].count);
									} else if(data[i].type == "4") {
										$("#wcrlsbs").html(data[i].count);
									} else if(data[i].type == "5") {
										$("#wcsjdwsbs").html(data[i].count);
									} else {
										$("#wcclkksbs").html(data[i].count);
									}
								}
							},
							error: function(status) {
								console.log(status);
							}
						});

					} else if(msgObj.alarmPointFrom == "6") { //车辆卡口
						icontype = "&#xe63b;";
						if(alarmPointName.match("_")) {
							daddress = alarmPointName.split("_")[1];
						}
						var url = YZ.ajaxURLms1 + "api/jp-BICA-ControlAlarm-ms/gatheralarm/currentAlarmHumanInfo/6/byId/" + msgObj.alarmId;
						$.get(url, function(result) {
							// 根据ID从文件服务器获取图片
							var imageUrl;
							if(result.imageUrl){
								imageUrl= YZ.ajaxURLms1 + "api/jp-TIFS-FileCenter-ms/file?businessId=" + result.imageUrl;
							}else{
								imageUrl ="images/default.png";
							}
							
						
							imgurl = imageUrl;
//							dataupload(); //调用前端的上传样式
							setTimeout(dataupload,1000);
						});

						$.ajax({
							type: "get",
							url: YZ.ajaxURLms1 + "api/jp-BICA-ControlAlarm-ms/gatheralarm/numofidenkpeo/D4D2E536-A4BA-4583-A528-37758EEB2EEC",
							success: function(data) {
								//console.log(data);
								for(var i = 0; i < data.length; i++) {
									if(data[i].type == "1") {
										$("#wcwifisbs").html(data[i].count);
									} else if(data[i].type == "2") {
										$("#wcjdsbs").html(data[i].count);
									} else if(data[i].type == "3") {
										$("#wcwbsbs").html(data[i].count);
									} else if(data[i].type == "4") {
										$("#wcrlsbs").html(data[i].count);
									} else if(data[i].type == "5") {
										$("#wcsjdwsbs").html(data[i].count);
									} else {
										$("#wcclkksbs").html(data[i].count);
									}
								}
							},
							error: function(status) {
								console.log(status);
							}
						});
					}

					$.ajax({
						type: "get",
						url: `${YZ.ajaxURLms1}api/jp-BIO-Order-ms/instructionBusiness/todayAlarmSum`,
						async: true,
						contentType: "application/json;charset=UTF-8",
						//		data: JSON.stringify(JQobj),
						success: function(data) {
							//							console.log(data);
							if(data === null || data === "") {
								data = 0
							}
							//			var num = 0;
							//			for(var i = data.length - 1; i > -1; i--) {
							//				num += data[i].count;
							//			}
							$(".one-left span").html(data);
						},
						error: function(status) {
							//							console.log(status);
						}
					});

				}
			});
			//人脸实时抓拍事件订阅
			sock.stompClient.subscribe('/topic/humanFaceAlarm', function(msg) {
				//				console.log("msg="+msg);
				//				var msgObj = JSON.parse(msg.body);
				//				console.log("msgObj="+msgObj);
				//				var pictureUrl = msgObj.picture_uri;
				//				oneimg = pictureUrl;
				//dataupload(); //调用前端的上传样式
			});
		});
	}

	sock.disconnect = function() {
		if(sock.stompClient !== null) {
			sock.stompClient.disconnect();
		}
		//		console.log("Disconnected");
	}

	sock.connect();

	show();

	//			setInterval(show,27000);
	$(".prev").click(function() {})
	//			setInterval(dataupload,number1);

	$(".m_list").on("click", ".info", function() {
//		var type = $(this).parent().data("type");
//		var id = $(this).parent().data("id");
	var e = window.event;  
		var targ = e.target;
		var id = targ.parentNode.dataset.id;
		var type = targ.parentNode.dataset.type;
		debugger;
	console.log(type, id)
//		Info.createShow(type, id);

		callBackObj.showImportantDetail(type,id);
		
	})
})


function show() {

	setInterval(one, 1500);
	setInterval(two, 5000);
	setInterval(three, 3000);
	setInterval(four, 8000);
	setInterval(five, 7000);
	setInterval(six, 8500);
}
var width = document.body.clientWidth;
var image = 1; //随机图片
var mark = 0;
//左上
function one() {
	mark++;
	$(".brain").removeClass("fdsx");
	$(".left-top .iconfont").addClass("flash");
	icon = $(".left-top .iconfont").text();
	setTimeout(yc, 2500);

	function yc() {
		image++;
		if(image == 103) {
			image = 1;
		}
		$(".left-top").append('<img src="images/touxiang/' + image + '.jpg" class="rlsb img-style" id="mark' + mark + '" />');
		//	$(".left-top").append('<img src="'+oneimg+'" class="rlsb img-style" id="mark' + mark + '" />')
		$(".left-top .iconfont").removeClass("flash");
		if(width <= "1925") {
			$(".rlsb").delay(1000);
			$(".rlsb").animate({
				left: '170px'
			}, 1000);
			$(".rlsb").delay(500);
			$(".rlsb").animate({
				left: '380px',
				top: '230px',
				opacity: 0
			}, 1000);

		} else {
			$(".img-style").css("left", "30px");
			$(".img-style").css("top", "30px");
			$(".rlsb").delay(1000);
			$(".rlsb").animate({
				left: '240px'
			}, 1000);
			$(".rlsb").delay(500);
			$(".rlsb").animate({
				left: '505px',
				top: '270px',
				opacity: 0
			}, 1000);
		}
		setTimeout(next, 1500);

		function next() {
			//					$(".rlsb").remove();
			$(".brain").addClass("fdsx");
			$(".m-wai").addClass("data-wai");
			$(".nei").addClass("data-nei");
			setTimeout(ff, 2000);
		}
	}
}

//右上
function two() {
	mark++;
	$(".brain").removeClass("fdsx");
	$(".right-top .iconfont").addClass("flash");

	icon = $(".right-top .iconfont").text();
	setTimeout(yc2, 2500);

	function yc2() {
		$(".right-top").append('<div class="address rlsb" id="mark' + mark + '" >421006987542145214</div>');
		$(".right-top .iconfont").removeClass("flash");

		if(width <= "1925") {
			$(".rlsb").delay(1000);
			$(".rlsb").animate({
				left: '-170px'
			}, 1000);
			$(".rlsb").delay(500);
			$(".rlsb").animate({
				left: '-385px',
				top: '240px',
				opacity: 0
			}, 1000);
		} else {
			$(".rlsb").delay(1000);
			$(".rlsb").animate({
				left: '-200px',
			}, 1000);
			$(".rlsb").delay(500);
			$(".rlsb").animate({
				left: '-495px',
				top: '280px',
				opacity: 0
			}, 1000);

		}

		setTimeout(next, 1500);

		function next() {
			//					$(".rlsb").hide();
			$(".brain").addClass("fdsx");
			$(".m-wai").addClass("data-wai");
			$(".nei").addClass("data-nei");
			setTimeout(ff, 2000);
		}
	}

}
//左中
function three() {
	mark++;
	$(".brain").removeClass("fdsx");
	$(".left-center .iconfont").addClass("flash");
	icon = $(".left-center .iconfont").text();
	setTimeout(yc3, 2500);

	function yc3() {
		$(".left-center").append('<div class="address rlsb" id="mark' + mark + '" >MAC:add119djae3b</div>');
		$(".left-center .iconfont").removeClass("flash");
		if(width < "1925") {
			$(".rlsb").delay(1000);
			$(".rlsb").animate({
				left: '410px',
				top: '30px',
				opacity: 0
			}, 2000);
		} else {

			$(".rlsb").delay(1000);
			$(".rlsb").animate({
				left: '220px'
			}, 1000);
			$(".rlsb").animate({
				left: '580px',
				top: '40px',
				opacity: 0
			}, 1000);

		}
		setTimeout(next, 1500);

		function next() {
			//					$(".rlsb").hide();
			$(".brain").addClass("fdsx");
			$(".m-wai").addClass("data-wai");
			$(".nei").addClass("data-nei");
			setTimeout(ff, 2000);
		}
	}

}
//右中
function four() {
	mark++;
	$(".brain").removeClass("fdsx");
	$(".right-center .iconfont").addClass("flash");
	icon = $(".right-center .iconfont").text();
	setTimeout(yc4, 2500);

	function yc4() {
		$(".right-center").append('<div class="address rlsb" id="mark' + mark + '" >421006987542145214</div>');
		$(".right-center .iconfont").removeClass("flash");
		if(width < "1925") {
			$(".rlsb").delay(1000);
			$(".rlsb").animate({
				left: '-420px',
				top: '30px',
				opacity: 0
			}, 2000);
		} else {

			$(".rlsb").delay(1000);
			$(".rlsb").animate({
				left: '-190px'
			}, 1000);
			$(".rlsb").animate({
				left: '-550px',
				top: '50px',
				opacity: 0
			}, 1000);

		}
		setTimeout(next, 1500);

		function next() {
			//					$(".rlsb").hide();
			$(".brain").addClass("fdsx");
			$(".m-wai").addClass("data-wai");
			$(".nei").addClass("data-nei");
			setTimeout(ff, 2000);
		}
	}

}
//左下
function five() {
	mark++;
	$(".brain").removeClass("fdsx");
	$(".left-bottom .iconfont").addClass("flash");
	icon = $(".left-bottom .iconfont").text();
	setTimeout(yc5, 2500);

	function yc5() {
		$(".left-bottom").append('<div class="address rlsb" id="mark' + mark + '" >421006987542145214</div>');
		$(".left-bottom .iconfont").removeClass("flash");
		if(width <= "1925") {
			$(".rlsb").delay(1000);
			$(".rlsb").animate({
				left: '150px'
			}, 1000);
			$(".rlsb").delay(500);
			$(".rlsb").animate({
				left: '350px',
				top: '-190px',
				opacity: 0
			}, 1000);

		} else {
			$(".rlsb").delay(1000);
			$(".rlsb").animate({
				left: '230px'
			}, 1000);
			$(".rlsb").delay(500);
			$(".rlsb").animate({
				left: '505px',
				top: '-230px',
				opacity: 0
			}, 1000);

		}
		setTimeout(next, 1500);

		function next() {
			//					$(".rlsb").hide();
			$(".brain").addClass("fdsx");
			$(".m-wai").addClass("data-wai");
			$(".nei").addClass("data-nei");
			setTimeout(ff, 2000);
		}
	}

}
//右下
function six() {
	mark++;
	$(".brain").removeClass("fdsx");
	$(".right-bottom .iconfont").addClass("flash");
	icon = $(".right-bottom .iconfont").text();
	setTimeout(yc6, 2500);

	function yc6() {
		$(".right-bottom").append('<div class="address rlsb" id="mark' + mark + '">鄂A 542145</div>');
		$(".right-bottom .iconfont").removeClass("flash");
		if(width <= "1925") {

			$(".rlsb").delay(1000);
			$(".rlsb").animate({
				left: '-180px'
			}, 1000);
			$(".rlsb").delay(500);
			$(".rlsb").animate({
				left: '-360px',
				top: '-220px',
				opacity: 0
			}, 1000);
		} else {
			$(".rlsb").delay(1000);
			$(".rlsb").animate({
				left: '-230px'
			}, 1000);
			$(".rlsb").delay(500);
			$(".rlsb").animate({
				left: '-500px',
				top: '-230px',
				opacity: 0
			}, 1000);

		}
		setTimeout(next, 1500);

		function next() {
			//					$(".rlsb").hide();
			$(".brain").addClass("fdsx");
			$(".m-wai").addClass("data-wai");
			$(".nei").addClass("data-nei");
			setTimeout(ff, 2000);
		}
	}
}

//公共地方

function ff() {
	if(mark >= 20) {
		var n = mark - 10;
		for(var i = 1; i < n; i++) {
			$("#mark" + i).remove();
		}
	}
}

function dataupload() {
	
	$(".brain").removeClass("fdsx");
	$(".m-wai").removeClass("data-wai");
	$(".nei").removeClass("data-nei");

	$(".guanggan").append('<div class="data-mutually"><img src="' + imgurl + '" class="data"/></div>');
	imgadd();
	//		setTimeout(img,1000); 
}

function imgadd() {
	//			length1++;
	//			console.log("length="+length1);
	var length1 = $(".m_list ").find("li").length; //图片的长度

	if(length1 > 5) {
		$(".m_list li").animate({
			left: '126px'
		}, 500);
	}

	setTimeout(listadd, 1000);
}

function listadd() {
	var html = '<li data-type="' + datatype1 + '" data-id="' + dataid1 + '"><i class="iconfont right-i">' + icontype + '</i><div class="img-border"><img src="' + imgurl + '"/></div><p><i class="iconfont">&#xe810;</i><span>' + time + '</span></p><p><i class="iconfont">&#xe604;</i><span title="'+daddress+'">' + daddress + '</span></p><a href="#" class="info">查看详情</a></li>';

	$(".m_list").prepend(html);
	$(".data-mutually").remove();
	//		$(".m-left").find(".rlsb").remove();
	$(".m_list li").removeAttr("style");

}