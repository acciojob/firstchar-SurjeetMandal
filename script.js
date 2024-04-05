function firstChar(text) {
	let res = text.trim();
	let finRes = res.charAt(0);
	return finRes;
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));

