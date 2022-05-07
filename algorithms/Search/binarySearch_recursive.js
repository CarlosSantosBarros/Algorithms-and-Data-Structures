module.exports = function binarySearch_recursive(array, target) {
	if (array.length === 0) return "None";
	else {
		let middle = Math.floor(array.length / 2);
		if (array[middle] === target) return true;
		else {
			if (array[middle] < target)
				return binarySearch_recursive(
					array.slice(middle + 1, array.length),
					target
				);
			else return binarySearch_recursive(array.slice(0, middle), target);
		}
	}
};
