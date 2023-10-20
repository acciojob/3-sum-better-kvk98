function threeSum(arr, target) {
// write your code here
	let n = arr.length;
	for (let i = 0; i < n-2; i++) {
		for (let j = i+1; j < n-1; j++) {
			for (let k = 0; k < n; k++) {
				if (arr[i] + arr[j] + arr[k] === target) {
					return arr[i] + arr[j] + arr[k];
				}
			}
		}
	}
  
}

module.exports = threeSum;
