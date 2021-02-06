export const getEaster = (year) => {
	const getEasterSun = (year) => {
		var a = year % 19;
		var b = Math.floor(year / 100);
		var c = year % 100;
		var d = Math.floor(b / 4);
		var e = b % 4;
		var f = Math.floor((b + 8) / 25);
		var g = Math.floor((b - f + 1) / 3);
		var h = (19 * a + b - d - g + 15) % 30;
		var i = Math.floor(c / 4);
		var k = c % 4;
		var l = (32 + 2 * e + 2 * i - h - k) % 7;
		var m = Math.floor((a + 11 * h + 22 * l) / 451);
		var n0 = h + l + 7 * m + 114;
		var n = Math.floor(n0 / 31) - 1;
		var p = (n0 % 31) + 1;
		var date = new Date(year, n, p);
		return date;
	};

	const easterSunday = getEasterSun(year);
	let easterFriday = new Date(+easterSunday);
	let easterSaturday = new Date(+easterSunday);
	let easterMonday = new Date(+easterSunday);

	return [
		new Date(easterFriday.setDate(easterFriday.getDate() - 2)),
		new Date(easterSaturday.setDate(easterSunday.getDate() - 1)),
		easterSunday,
		new Date(easterMonday.setDate(easterSunday.getDate() + 1)),
	];
};

export const secMonJun = (year) => {
	const firstDate = new Date(`${year}-06-01T00:00:00`);
	let monCount = 0;

	for (let i = 0; i < 29; i++) {
		const currDate = firstDate;
		const day = currDate.getDay();

		if (day === 1) {
			monCount++;
		}

		if (monCount === 2) {
			return currDate;
		} else {
			// increase day
			currDate.setDate(currDate.getDate() + 1);
		}
	}
};

export const firMonOct = (year) => {
	const firstDate = new Date(`${year}-10-01T00:00:00`);

	for (let i = 0; i < 29; i++) {
		const currDate = firstDate;
		const day = currDate.getDay();

		if (day === 1) {
			return currDate;
		}

		// increase day
		currDate.setDate(currDate.getDate() + 1);
	}
};
