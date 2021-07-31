const isPalindrome = (str) => {
	const tempString = str.split("").reverse().join("")
	return str === tempString
}

module.exports = isPalindrome
