const functions = require("./sample_tests")

//toBe example
test("Adds 2 + 2 giving 4", () => {
	expect(functions.add(2, 2)).toBe(4)
})

//not.toBe
test("Adds 2 + 2 not equals 5", () => {
	expect(functions.add(2, 2)).not.toBe(5)
})

// toBeNull matches null value
test("Should be null", () => {
	expect(functions.isNull()).toBeNull()
})

//To test objects, toBe will not work. Object, array etc require toEqual
test("Name should be Alan", () => {
	expect(functions.createUser()).toEqual("Alan")
})

//Greater than or Less than

test("Name should have more than 2 characters", () => {
	expect(functions.createUser().length).toBeGreaterThan(2)
})
