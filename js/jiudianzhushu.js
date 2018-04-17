var dwzyCode = "hotel";
var jurisdictiondata;
$.ajax({
	type: "post",
	url: `${YZ.ajaxURLms1}api/jp-BIRM-Resource-ms/resource/placeinfo/tagPageInfo/code/${dwzyCode}?pageSize=999999`,
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
$("#jiudianzhushu").jqGrid({
	data: jurisdictiondata,
	datatype: "local",
	width: 960,
	height: 350,
//	shrinkToFit: true,
//	autoScroll: false,
	rowNum: 8,
	rowList: [10, 20, 30],
	colNames: ['名称', '地址', '企业编码'],
	colModel: [{
			name: 'name',
			index: 'name',
			width: 200,
			//			sorttype: "int",
			//			hidden: true
		},
		{
			name: 'address',
			index: 'address',
			width: 300
		},
		{
			name: 'id',
			index: 'id',
			width: 190,
		}
	],
	
	pager: "#jiudianzhushuPage",
//	viewrecords: true,
	caption: "",
	hidegrid: false,
	rownumbers: false,
	
});
