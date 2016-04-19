export default (value, length, padChar = '0') => {
	value = String(value);
	let leftPad = '';

	for (let i = value.length; i < length; i++) {
		leftPad = leftPad + padChar;
	}

	return leftPad + value;
}