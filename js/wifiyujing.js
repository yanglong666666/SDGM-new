var dwzyCode = "WIFI探针";
var jurisdictiondata;
$.ajax({
	type: "post",
	url: `${YZ.ajaxURLms1}api/jp-BIRM-Resource-ms/resource/wifi/tagPageInfo/code/${dwzyCode}?pageSize=999999`,
	async: false,
	data: JSON.stringify(RC.stationIds),
	contentType: "application/json;charset=UTF-8",
	dataType: "json",
	success: function(data) {
		jurisdictiondata = data.data;
	},
	error: function(status) {
		console.log(status);
	}
});
$("#wifiyujing").jqGrid({
	data: jurisdictiondata,
	datatype: "local",
	width: 960,
	height: 350,
//	shrinkToFit: true,
//	autoScroll: false,
	rowNum: 8,
	rowList: [10, 20, 30],
	colNames: ['名称', '地址', '设备号'],
	colModel: [{
			name: 'name',
			index: 'name',
			width: 200,
		},
		{
			name: 'address',
			index: 'address',
			width: 300
		},
		{
			name: 'num',
			index: 'num',
			width: 190,
		}
	],
	pager: "#wifiyujingPage",
//	viewrecords: true,
	caption: "",
	hidegrid: false,
	rownumbers: false,
	
});
