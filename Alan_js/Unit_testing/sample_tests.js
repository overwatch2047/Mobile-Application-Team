const functions = {
	add: (n1, n2) => n1 + n2,
	isNull: () => null,
	createUser: () => {
		const name = { fName: "Alan" }
		const age = 21
		return name["fName"]
	},
}

module.exports = functions
