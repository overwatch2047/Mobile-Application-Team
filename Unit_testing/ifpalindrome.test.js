const isPalindrome = require("./ifpalindrome")

//test if function exists

test("isPalindrome function is defined", () => {
	expect(isPalindrome).toBeDefined()
})

//test if palindrome

test("racecar should be a palindrome", () => {
	expect(isPalindrome("racecar")).toBeTruthy
})
