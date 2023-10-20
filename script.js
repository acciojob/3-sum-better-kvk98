function threeSum(arr, target) {
// write your code here
	let n = arr.length;
	let initialDiff = Infinity, ans = -1;
	for (let i = 0; i < n-2; i++) {
		for (let j = i+1; j < n-1; j++) {
			for (let k = j+1; k < n; k++) {
				let sum = arr[i] + arr[j] + arr[k];
				let diff = Math.abs(sum - target)
				if (initialDiff > diff) {
					initialDiff = diff;
					ans = sum;
				}
				
				
				// if (arr[i] + arr[j] + arr[k] === target) {
				// 	return arr[i] + arr[j] + arr[k];
				// }
			}
		}
	}
	console.log(ans);
  
}

module.exports = threeSum;
