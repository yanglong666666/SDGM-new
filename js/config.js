//请求地址
var YZ = {};
//YZ.ajaxURL = `http://172.17.20.222:8080/JHFK/`;
//公安网正式环境
//YZ.ajaxURLms1 = `http://172.17.99.10:10014/`;
YZ.ajaxURLms1 = `http://10.52.206.216:10000/`;
//测试环境
//YZ.ajaxURLms = `http://172.17.99.10:10014/`;
//公安网测试环境
YZ.ajaxURLms = `http://10.52.206.216:10000/`;

var DBZL = {}; //待办指令
//DBZL.jcj = 10; //接处警
//DBZL.xxhc = 11; //信息核查
//DBZL.xdzb = 2; //行动抓捕
DBZL.yqdk = 0; //舆情导控
//DBZL.gzzl = 1; //工作指令

var XFZL = {}; //下发指令
//XFZL.jcj = 1; //接处警
//XFZL.xxhc = 1; //信息核查
//XFZL.xdzb = 1; //行动抓捕
XFZL.yqdk = 0; //舆情导控
//XFZL.gzzl = 1; //工作指令

var JSZL = {}; //接收指令
//JSZL.jcj = 1; //接处警
//JSZL.xxhc = 1; //信息核查
//JSZL.xdzb = 1; //行动抓捕
JSZL.yqdk = 0; //舆情导控
//JSZL.gzzl = 1; //工作指令

var QWXX = {}; //勤务信息
//QWXX.qwdj = "三级";
QWXX.zxrwjl = 30; //执行任务警力(不用填百分百,直接填数字)
//QWXX.zjl = 100; //总警力
QWXX.rwwcl = 60; //任务完成率(不用填百分百,直接填数字)
//QWXX.mjzs = 20; //民警总数
QWXX.mj = 1; //民警在线数
//QWXX.jczs = 4; //警车总数
QWXX.jc = 3; //警车在线数
//QWXX.kqzs = 7; //快骑总数
//QWXX.kq = 5; //快骑在线数
//QWXX.kfzs = 11; //快反总数
//QWXX.kf = 8; //快反在线数
//QWXX.ldzs = 9; //联动总数
//QWXX.ld = 6; //联动在线数
var RC = {};//部门入参
RC.stationIds = ["D4D2E536-A4BA-4583-A528-37758EEB2EEC"];//微服务江汉id
var ZDR = {};
//ZDR.face = 0;//人脸识别设备数
//ZDR.facesbs = 0;//已识别人数
//ZDR.wifi = 0;//wifi设备数
//ZDR.wifisbs = 0;//已识别wifi数
//ZDR.clkk = 0;//车辆卡口数
//ZDR.clkksbs = 0;//已识别车辆数
//ZDR.jd = 0;//酒店
//ZDR.jdsbs = 0;//已识别酒店数
//ZDR.sjdw = 0;//手机定位
ZDR.sjdwsbs = 0; //已识别手机定位数
//ZDR.wb = 0;//网吧
//ZDR.wbsbs = 0;//已识别网吧数

//var JQ = {};
//JQ.jqs = 12;

//CXY = {}
//CXY.cph = ["鄂A5242警", "鄂A1258警", "鄂A5249警", "鄂A5265警"];


CXY = {}
CXY.cph = ["鄂A5244", "鄂A1258", "鄂A5249", "鄂A5265"];
CXY.cphlen = CXY.cph.length;

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


//警情态势
var data = [
	[{
		"NUM": 7,  //数量
		"TYPE": "举报",
		"NAME":"江汉关区域"
	}, {
		"NUM": 7,
		"TYPE": "求助"
	}, {
		"NUM": 8,
		"TYPE": "事件"
	}, {
		"NUM": 8,
		"TYPE": "刑事"
	}, {
		"NUM": 6,
		"TYPE": "治安"
	}, ],
	[{
		"NUM": 5,
		"TYPE": "举报",
		"NAME": "江汉中心百货区域"
	}, {
		"NUM": 3,
		"TYPE": "求助"
	}, {
		"NUM": 8,
		"TYPE": "事件"
	}, {
		"NUM": 2,
		"TYPE": "刑事"
	}, {
		"NUM": 8,
		"TYPE": "治安"
	}, ],
	[{
		"NUM": 7,
		"TYPE": "举报",
		"NAME":"江汉王府井佳丽区域"
	}, {
		"NUM": 8,
		"TYPE": "求助"
	}, {
		"NUM": 7,
		"TYPE": "事件"
	}, {
		"NUM": 2,
		"TYPE": "刑事"
	}, {
		"NUM": 4,
		"TYPE": "治安"
	},
	
	],
	[{
		"NUM": 4,
		"TYPE": "举报",
		"NAME":"江汉M+购物中心区域"
	}, {
		"NUM": 5,
		"TYPE": "求助"
	}, {
		"NUM": 3,
		"TYPE": "事件"
	}, {
		"NUM": 2,
		"TYPE": "刑事"
	}, {
		"NUM": 2,
		"TYPE": "治安"
	},
	
	]
];