$.jgrid.defaults.styleUI = 'Bootstrap';
var dwzyCode = "人像识别摄像机";
var jurisdictiondata;
$.ajax({
	type: "post",
	url: `${YZ.ajaxURLms1}api/jp-BIRM-Resource-ms/resource/camera/tagPageInfo/code/${dwzyCode}?pageSize=999999`,
	async: false,
	data: JSON.stringify(RC.stationIds),
	contentType: "application/json;charset=UTF-8",
	dataType: "json",
	success: function(data) {
		jurisdictiondata = data.data;
		console.log("data="+JSON.stringify(jurisdictiondata));
		
	},
	error: function(status) {
		console.log(status);
	}
});

$("#renlian").jqGrid({
	data: jurisdictiondata,
	datatype: "local",
	width: 960,
	height: 350,
	shrinkToFit: false,
	autoScroll: true,
	rowNum: 8,
	rowList: [10, 20, 30],
	colNames: ['名称', '地址', '设备号', 'IP'],
	colModel: [{
			name: 'name',
			index: 'name',
			width: 240,
			//			sorttype: "int",
			//			hidden: true
		},
		{
			name: 'pointName',
			index: 'pointName',
			width: 340
		},
		{
			name: 'num',
			index: 'num',
			width: 180,
		},
		{
			name: 'ipAddress',
			index: 'ipAddress',
			width: 180,
		}
	],
	pager: "#renlianPage",
//	viewrecords: true,
	caption: "",
	hidegrid: false,
	rownumbers: false,
	
});


