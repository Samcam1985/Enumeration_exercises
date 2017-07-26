var arrayTasks = {

	concat: function (arr1, arr2) {
		var concatArray = [];

		for (var item of arr1) {
			concatArray.push(item);
		}
		for (var item of arr2) {
			concatArray.push(item);
		}
		return concatArray;

	},

	// insertAt: function (arr, itemToAdd, index) {
		
	// },

	// square: function (arr) {
		
	// },

	// sum: function (arr) {
		
	// },

	// findDuplicates: function (arr) {
		
	// },

	// removeAndClone: function (arr, valueToRemove) {
		
	// },

	// findIndexesOf: function (arr, itemToFind) {
		
	// },

	// sumOfAllEvenNumbersSquared: function (arr) {
		
	// }

}

module.exports = arrayTasks
