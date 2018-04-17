function formatDate(date, flag) {
	var y = date.getFullYear();
	var m = date.getMonth() + 1;
	var HH24 = date.getHours()<10?'0'+date.getHours():date.getHours();
	var Mi = date.getMinutes()<10?'0'+date.getMinutes():date.getMinutes();
	var ss = date.getSeconds()<10?'0'+date.getSeconds():date.getSeconds();
	m = m < 10 ? '0' + m : m;
	var d = date.getDate();
	d = d < 10 ? ('0' + d) : d;
	if(flag) {
		return y + '-' + m + '-' + d + 'T00:00:00.0000000+08:00';
	} else {
		return y + '-' + m + '-' + d + 'T' + HH24 + ':' + Mi + ':' + ss + '.0000000+08:00';
	}
};

function formatDate1(date, flag) {
	var y = date.getFullYear();
	var m = date.getMonth() + 1;
	var HH24 = date.getHours()<10?'0'+date.getHours():date.getHours();
	var Mi = date.getMinutes()<10?'0'+date.getMinutes():date.getMinutes();
	var ss = date.getSeconds()<10?'0'+date.getSeconds():date.getSeconds();
	m = m < 10 ? '0' + m : m;
	var d = date.getDate();
	d = d < 10 ? ('0' + d) : d;
	if(flag) {
		return y + '-' + m + '-' + d + 'T00%3A00%3A00Z';
	} else {
		return y + '-' + m + '-' + d + 'T' + HH24 + '%3A' + Mi + '%3A' + ss + 'Z';
	}
};

function formatDate3(date, flag) {
	var y = date.getFullYear();
	var m = date.getMonth() + 1;
	var HH24 = date.getHours()<10?'0'+date.getHours():date.getHours();
	var Mi = date.getMinutes()<10?'0'+date.getMinutes():date.getMinutes();
	var ss = date.getSeconds()<10?'0'+date.getSeconds():date.getSeconds();
	m = m < 10 ? '0' + m : m;
	var d = date.getDate();
	d = d < 10 ? ('0' + d) : d;
	if(flag) {
		return y + '-' + m + '-' + d + 'T00:00:00.0000000+08:00';
	} else {
		return y + '-' + m + '-' + d + 'T' + HH24 + '%3A' + Mi + '%3A' + ss + '.0000000+08%3A00';
	}
};



function formatDate2(date, flag) {
	var y = date.getFullYear();
	var m = date.getMonth() + 1;
	var HH24 = date.getHours()<10?'0'+date.getHours():date.getHours();
	var Mi = date.getMinutes()<10?'0'+date.getMinutes():date.getMinutes();
	var ss = date.getSeconds()<10?'0'+date.getSeconds():date.getSeconds();
	m = m < 10 ? '0' + m : m;
	var d = date.getDate();
	d = d < 10 ? ('0' + d) : d;
	if(flag) {
		return y + '-' + m + '-' + (d-1) + 'T16:00:00Z';
	} else {
		return y + '-' + m + '-' + d + 'T' + '15' + ':' + '59' + ':' + '59' + 'Z';
	}
};

function formatDate4(date, flag) {
	var now = new Date();
	now.setHours(0);
	now.setMinutes(0);
	now.setSeconds(0);
	now.setMilliseconds(0);
	if(flag) {
		return new Date(now.getTime()).toISOString();
	} else {
		return new Date().toISOString();
	}
};