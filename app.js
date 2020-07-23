setInterval(updateTime, 500);

function updateTime() {
	const fullDate = new Date();
	let hour = fullDate.getHours();
	let minute = fullDate.getMinutes();
	let second = fullDate.getSeconds();
	let period;

	if (hour > 12) {
		hour = hour % 12;
		period = "PM";
	} else {
		period = "AM";
	}

	if (hour < 10) {
		hour = "0" + hour;
	}
	if (minute < 10) {
		minute = "0" + minute;
	}
	if (second < 10) {
		second = "0" + second;
	}

	document.getElementById("hour").innerHTML = hour + ":";
	document.getElementById("minute").innerHTML = minute + ":";
	document.getElementById("second").innerHTML = second;
	document.getElementById("period").innerHTML = period;
}
